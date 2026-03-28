/* ═══════════════════════════════════════════
   STORAGE.JS — Local-only secure data layer
   All data stays on the user's device (localStorage)
   Encrypted profile option available
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
      badges: [], catsPlayed: [], redeemed: [], stickers: []
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
      exportDate: new Date().toISOString(),
      appVersion: '1.0.0'
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
