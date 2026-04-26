/* ═══════════════════════════════════════════
   STORAGE.JS — Local-only secure data layer
   All data stays on the user's device (localStorage)
   Includes SeenTracker for question deduplication
   ═══════════════════════════════════════════ */

const Storage = {
  _prefix: 'roquiz_',

  // ── Core CRUD ──
  get(key) {
    try {
      const raw = localStorage.getItem(this._prefix + key);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },

  set(key, value) {
    try {
      localStorage.setItem(this._prefix + key, JSON.stringify(value));
      return true;
    } catch { return false; }
  },

  remove(key) {
    try { localStorage.removeItem(this._prefix + key); } catch {}
  },

  // ── Profile ──
  getProfile() {
    return this.get('profile') || { name: '', grade: '', country: '', state: '' };
  },

  saveProfile(profile) {
    return this.set('profile', profile);
  },

  // ── Game State ──
  getGameState() {
    return this.get('gamestate') || {
      xp: 0, correct: 0, answered: 0, streak: 0, bestStreak: 0,
      badges: [], catsPlayed: [], redeemed: [], stickers: [],
      avatar: 'av_default', avatarsOwned: [], wishlist: [],
      soundpacks: [], perfectRounds: 0
    };
  },

  saveGameState(gs) {
    return this.set('gamestate', gs);
  },

  // ── Theme ──
  getTheme() {
    return this.get('theme') || 'jungle';
  },

  saveTheme(theme) {
    return this.set('theme', theme);
  },

  // ── Audio ──
  getMuted() {
    return this.get('muted') || false;
  },

  saveMuted(muted) {
    return this.set('muted', muted);
  },

  // ── Export user data (for privacy/portability) ──
  exportAll() {
    const data = {
      profile: this.getProfile(),
      gameState: this.getGameState(),
      theme: this.getTheme(),
      seenQuestions: this.get('seen') || {},
      exportDate: new Date().toISOString(),
      appVersion: '2.0.0'
    };
    return JSON.stringify(data, null, 2);
  },

  // ── Import user data ──
  importAll(jsonStr) {
    try {
      const data = JSON.parse(jsonStr);
      if (data.profile) this.saveProfile(data.profile);
      if (data.gameState) this.saveGameState(data.gameState);
      if (data.theme) this.saveTheme(data.theme);
      if (data.seenQuestions) this.set('seen', data.seenQuestions);
      return true;
    } catch { return false; }
  },

  // ── Clear everything ──
  clearAll() {
    const keys = Object.keys(localStorage).filter(k => k.startsWith(this._prefix));
    keys.forEach(k => localStorage.removeItem(k));
  },

  // ── Data size estimate ──
  getDataSize() {
    let total = 0;
    Object.keys(localStorage).filter(k => k.startsWith(this._prefix)).forEach(k => {
      total += localStorage.getItem(k).length;
    });
    return (total / 1024).toFixed(1) + ' KB';
  }
};

/* ═══════════════════════════════════════════
   SEEN TRACKER — Cross-session question dedup
   Tracks question hashes per category/standard
   so no kid ever sees a repeat until the full
   bank is exhausted, then auto-resets.
   ═══════════════════════════════════════════ */

const SeenTracker = {
  // Quick hash: first 40 chars of lowercase question text
  _hash(questionText) {
    return questionText.toLowerCase().trim().substring(0, 40);
  },

  // Get seen set for a bucket (category or SOL standard)
  _getSet(bucket) {
    const all = Storage.get('seen') || {};
    return new Set(all[bucket] || []);
  },

  // Save seen set for a bucket
  _saveSet(bucket, seenSet) {
    const all = Storage.get('seen') || {};
    all[bucket] = [...seenSet];
    Storage.set('seen', all);
  },

  // Filter out already-seen questions. Returns unseen first, then seen as fallback.
  // Also marks returned questions as seen.
  filterAndMark(questions, bucket, needed) {
    const seen = this._getSet(bucket);
    const unseen = [];
    const alreadySeen = [];

    questions.forEach(q => {
      const h = this._hash(q.q);
      if (seen.has(h)) {
        alreadySeen.push(q);
      } else {
        unseen.push(q);
      }
    });

    let result;
    if (unseen.length >= needed) {
      // Plenty of fresh questions
      result = unseen.slice(0, needed);
    } else {
      // Use all unseen + pad with already-seen (bank exhausted)
      if (unseen.length === 0 && alreadySeen.length > 0) {
        // Full reset — kid has seen every question in this bucket
        seen.clear();
        result = alreadySeen.slice(0, needed);
      } else {
        result = [...unseen, ...alreadySeen.slice(0, needed - unseen.length)];
      }
    }

    // Mark all returned questions as seen
    result.forEach(q => seen.add(this._hash(q.q)));
    this._saveSet(bucket, seen);

    return result;
  },

  // Get stats for a bucket
  getStats(bucket) {
    const seen = this._getSet(bucket);
    return { seen: seen.size, bucket };
  },

  // Reset a specific bucket
  resetBucket(bucket) {
    const all = Storage.get('seen') || {};
    delete all[bucket];
    Storage.set('seen', all);
  },

  // Reset all seen data
  resetAll() {
    Storage.remove('seen');
  },

  // Get total seen across all buckets
  getTotalSeen() {
    const all = Storage.get('seen') || {};
    let total = 0;
    Object.values(all).forEach(arr => total += arr.length);
    return total;
  }
};
