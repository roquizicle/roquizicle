/* ═══════════════════════════════════════════
   APP.JS — Main controller
   Manages state, navigation, wires modules
   ═══════════════════════════════════════════ */

const App = {
  // State
  view: 'loading',
  profile: null,
  gs: null,
  questions: [],
  qi: 0,
  flipped: null,
  score: 0,
  rStreak: 0,
  cat: null,
  roundSize: 10,
  loading: false,
  error: null,
  newBadges: [],
  qStart: 0,
  loadProgress: '',
  storeFilter: 'all',
  redeemMsg: null,

  // ── Init ──
  async init() {
    UI.init();
    UI.renderSplash();

    // Load saved data
    this.profile = Storage.getProfile();
    this.gs = Storage.getGameState();

    // Init theme
    ThemeEngine.init();

    // Init audio (will wait for user interaction)
    Audio._muted = Storage.getMuted();

    // Decide first screen
    setTimeout(() => {
      if (this.profile.name) {
        this.view = 'home';
      } else {
        this.view = 'onboard';
      }
      this.render();
    }, 1500);
  },

  // ── Navigation ──
  navigate(view) {
    this.view = view;
    this.error = null;
    Audio.stopBgMusic();
    this.render();
  },

  // ── Render current view ──
  render() {
    const level = GameLogic.getLevel(this.gs.xp);
    const nextLvl = GameLogic.getNextLevel(this.gs.xp);
    const pct = GameLogic.getLevelProgress(this.gs.xp);
    const unlockedTier = GameLogic.getUnlockedTier(this.gs);
    const acc = GameLogic.getAccuracy(this.gs);

    switch (this.view) {
      case 'loading':
        UI.renderSplash();
        break;

      case 'onboard':
        this._renderOnboarding();
        break;

      case 'home':
        UI.renderHome({
          profile: this.profile,
          gs: this.gs,
          level, nextLvl, pct, unlockedTier, acc,
          roundSize: this.roundSize,
          loading: this.loading,
          error: this.error,
          loadProgress: this.loadProgress,
          muted: Audio.isMuted(),
          onCatClick: (key) => this.startQuiz(key),
          onSizeClick: (n) => { this.roundSize = n; this.render(); },
          onNav: (v) => this.navigate(v),
          onSettings: () => this.navigate('settings'),
          onTheme: () => this.showThemePicker(),
          onMute: () => { Audio.init(); Audio.toggleMute(); this.render(); },
        });
        break;

      case 'quiz':
        if (!this.questions[this.qi]) return;
        UI.renderQuiz({
          cat: this.cat,
          qi: this.qi,
          total: this.questions.length,
          question: this.questions[this.qi],
          score: this.score,
          rStreak: this.rStreak,
          flipped: this.flipped,
          muted: Audio.isMuted(),
          onFlip: (i) => this.handleFlip(i),
          onNext: () => this.nextQuestion(),
          onClose: () => this.navigate('home'),
          onMute: () => { Audio.toggleMute(); this.render(); },
        });
        break;

      case 'results':
        UI.renderResults({
          score: this.score,
          total: this.questions.length,
          newBadges: this.newBadges,
          onHome: () => this.navigate('home'),
          onRetry: () => this.startQuiz(this.cat),
        });
        break;

      case 'stats':
        UI.renderStats({
          gs: this.gs, level, unlockedTier, acc,
          onNav: (v) => this.navigate(v),
          onBack: () => this.navigate('home'),
        });
        break;

      case 'badges':
        UI.renderBadges({
          gs: this.gs,
          onNav: (v) => this.navigate(v),
          onBack: () => this.navigate('home'),
        });
        break;

      case 'store':
        UI.renderStore({
          gs: this.gs,
          filter: this.storeFilter,
          redeemMsg: this.redeemMsg,
          onFilter: (f) => { this.storeFilter = f; this.render(); },
          onRedeem: (r) => this.redeemReward(r),
          onNav: (v) => this.navigate(v),
          onBack: () => this.navigate('home'),
        });
        break;

      case 'settings':
        this._renderSettings();
        break;
    }
  },

  // ── Start Quiz ──
  async startQuiz(category) {
    const catDef = CATEGORIES.find(c => c.key === category);
    if (!catDef || !GameLogic.isCatUnlocked(catDef, this.gs)) return;

    await Audio.init();
    Audio.tap();

    this.loading = true;
    this.error = null;
    this.cat = category;
    this.qi = 0;
    this.score = 0;
    this.flipped = null;
    this.rStreak = 0;
    this.newBadges = [];
    this.qStart = Date.now();
    this.render();

    const qs = await QuestionEngine.fetch(catDef, this.roundSize, this.profile, (prog) => {
      this.loadProgress = prog;
      this.render();
    });

    this.loading = false;
    this.loadProgress = '';

    if (qs.length > 0) {
      this.questions = qs;
      this.view = 'quiz';
      Audio.startBgMusic();
    } else {
      this.error = "Couldn't load questions. Please try again!";
    }
    this.render();
  },

  // ── Handle Answer ──
  handleFlip(idx) {
    if (this.flipped !== null) return;
    this.flipped = idx;

    const q = this.questions[this.qi];
    const isCorrect = q.options[idx] === q.correct;
    const elapsed = (Date.now() - this.qStart) / 1000;

    if (isCorrect) Audio.correct();
    else Audio.wrong();

    const result = GameLogic.processAnswer(this.gs, isCorrect, elapsed, this.rStreak, this.cat);
    this.gs = result.gameState;
    Storage.saveGameState(this.gs);

    if (isCorrect) {
      this.score++;
      this.rStreak++;
    } else {
      this.rStreak = 0;
    }

    if (result.newBadges.length > 0) {
      this.newBadges.push(...result.newBadges);
      setTimeout(() => Audio.badge(), 400);
    }
    if (result.leveledUp) {
      setTimeout(() => Audio.levelUp(), 600);
    }

    this.render();
  },

  // ── Next Question ──
  nextQuestion() {
    Audio.tap();
    if (this.qi + 1 >= this.questions.length) {
      // Check for perfect score badge
      if (this.score === this.questions.length && !this.gs.badges.includes('perfect')) {
        this.gs.badges.push('perfect');
        this.newBadges.push('perfect');
        Storage.saveGameState(this.gs);
      }
      this.view = 'results';
      Audio.stopBgMusic();
      setTimeout(() => Audio.fanfare(), 300);
    } else {
      this.flipped = null;
      this.qi++;
      this.qStart = Date.now();
    }
    this.render();
  },

  // ── Redeem Reward ──
  redeemReward(reward) {
    const result = GameLogic.redeemReward(this.gs, reward);
    if (result.success) {
      this.gs = result.gameState;
      Storage.saveGameState(this.gs);
      Audio.badge();
      this.redeemMsg = '🎉 ' + reward.name + ' redeemed!';
    } else {
      this.redeemMsg = 'Not enough XP!';
    }
    this.render();
    setTimeout(() => { this.redeemMsg = null; this.render(); }, 3000);
  },

  // ── Theme Picker ──
  showThemePicker() {
    const picker = ThemeEngine.renderPicker(ThemeEngine.getCurrent(), (themeId) => {
      ThemeEngine.apply(themeId);
      this.render();
    });
    document.body.appendChild(picker);
  },

  // ── Onboarding ──
  _obStep: 0,
  _obName: '',
  _obGrade: '',
  _obCountry: '',
  _obState: '',
  _countrySearch: '',
  _stateSearch: '',
  _states: [],
  _statesLoading: false,

  _renderOnboarding() {
    UI.clear();
    const app = document.getElementById('app');
    const page = UI.el('div', { class: 'onboard-page' });
    page.appendChild(UI.el('div', { style: { fontSize: '48px', marginBottom: '8px' }, text: '🧩' }));
    page.appendChild(UI.el('div', { style: { fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, color: 'var(--text-heading)' }, text: 'Welcome to Roquiz!' }));
    page.appendChild(UI.el('div', { style: { fontSize: '15px', color: 'var(--text-secondary)', marginTop: '4px', marginBottom: '24px' }, text: "Let's set up your profile" }));

    const card = UI.el('div', { class: 'onboard-card' });

    if (this._obStep === 0) {
      card.appendChild(UI.el('div', { class: 'ob-label', text: "What's your name?" }));
      const input = UI.el('input', { class: 'ob-input', type: 'text', placeholder: 'Enter your name', value: this._obName });
      input.addEventListener('input', (e) => { this._obName = e.target.value; });
      card.appendChild(input);
      card.appendChild(UI.el('button', { class: 'btn-primary w-full', text: 'Next →', style: { opacity: this._obName.trim() ? 1 : 0.4 }, onClick: () => { if (this._obName.trim()) { this._obStep = 1; this.render(); } } }));
    }

    else if (this._obStep === 1) {
      card.appendChild(UI.el('div', { class: 'ob-label', text: 'What grade are you in?' }));
      const gradeList = UI.el('div', { class: 'flex-col gap-8' });
      GRADES.forEach(g => {
        gradeList.appendChild(UI.el('button', {
          class: 'ob-grade-btn' + (this._obGrade === g ? ' active' : ''),
          text: g,
          onClick: () => { this._obGrade = g; this.render(); },
        }));
      });
      card.appendChild(gradeList);
      const btns = UI.el('div', { class: 'ob-btns' });
      btns.appendChild(UI.el('button', { class: 'btn-secondary', text: '← Back', style: { flex: 1 }, onClick: () => { this._obStep = 0; this.render(); } }));
      btns.appendChild(UI.el('button', { class: 'btn-primary', text: 'Next →', style: { flex: 1, opacity: this._obGrade ? 1 : 0.4 }, onClick: () => { if (this._obGrade) { this._obStep = 2; this.render(); } } }));
      card.appendChild(btns);
    }

    else if (this._obStep === 2) {
      card.appendChild(UI.el('div', { class: 'ob-label', text: 'What country are you from?' }));
      const input = UI.el('input', { class: 'ob-input', type: 'text', placeholder: 'Search countries...', value: this._countrySearch });
      input.addEventListener('input', (e) => { this._countrySearch = e.target.value; this.render(); });
      card.appendChild(input);
      const list = UI.el('div', { class: 'ob-list' });
      COUNTRIES.filter(c => c.toLowerCase().includes(this._countrySearch.toLowerCase())).forEach(c => {
        list.appendChild(UI.el('button', {
          class: 'ob-list-item' + (this._obCountry === c ? ' active' : ''),
          text: c,
          onClick: () => { this._obCountry = c; this._fetchStates(c); this.render(); },
        }));
      });
      card.appendChild(list);
      const btns = UI.el('div', { class: 'ob-btns' });
      btns.appendChild(UI.el('button', { class: 'btn-secondary', text: '← Back', style: { flex: 1 }, onClick: () => { this._obStep = 1; this.render(); } }));
      const nextText = this._statesLoading ? 'Loading...' : this._states.length > 0 ? 'Next →' : 'Finish ✓';
      btns.appendChild(UI.el('button', { class: 'btn-primary', text: nextText, style: { flex: 1, opacity: this._obCountry ? 1 : 0.4 }, onClick: () => {
        if (!this._obCountry) return;
        if (this._states.length > 0) { this._obStep = 3; this.render(); }
        else this._finishOnboarding('');
      }}));
      card.appendChild(btns);
    }

    else if (this._obStep === 3) {
      card.appendChild(UI.el('div', { class: 'ob-label', text: 'State / Province?' }));
      const input = UI.el('input', { class: 'ob-input', type: 'text', placeholder: 'Search...', value: this._stateSearch });
      input.addEventListener('input', (e) => { this._stateSearch = e.target.value; this.render(); });
      card.appendChild(input);
      const list = UI.el('div', { class: 'ob-list' });
      this._states.filter(s => s.toLowerCase().includes(this._stateSearch.toLowerCase())).forEach(s => {
        list.appendChild(UI.el('button', {
          class: 'ob-list-item' + (this._obState === s ? ' active' : ''),
          text: s,
          onClick: () => { this._obState = s; this.render(); },
        }));
      });
      list.appendChild(UI.el('button', { class: 'ob-list-item' + (this._obState === 'skip' ? ' active' : ''), text: 'Skip / Not listed', onClick: () => { this._obState = 'skip'; this.render(); } }));
      card.appendChild(list);
      const btns = UI.el('div', { class: 'ob-btns' });
      btns.appendChild(UI.el('button', { class: 'btn-secondary', text: '← Back', style: { flex: 1 }, onClick: () => { this._obStep = 2; this.render(); } }));
      btns.appendChild(UI.el('button', { class: 'btn-primary', text: 'Finish ✓', style: { flex: 1, opacity: this._obState ? 1 : 0.4 }, onClick: () => {
        if (this._obState) this._finishOnboarding(this._obState === 'skip' ? '' : this._obState);
      }}));
      card.appendChild(btns);
    }

    page.appendChild(card);
    app.appendChild(page);
  },

  async _fetchStates(country) {
    this._statesLoading = true;
    this._states = [];
    this.render();
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: `List all states/provinces/regions of ${country}. Return ONLY a JSON array of strings sorted alphabetically. No markdown. If none, return [].` }]
        })
      });
      if (!r.ok) throw new Error("fail");
      const d = await r.json();
      const t = d.content?.[0]?.text || "[]";
      this._states = JSON.parse(t.replace(/```json|```/g, "").trim());
    } catch { this._states = []; }
    this._statesLoading = false;
    this.render();
  },

  _finishOnboarding(state) {
    this.profile = {
      name: this._obName,
      grade: this._obGrade,
      country: this._obCountry,
      state: state,
    };
    Storage.saveProfile(this.profile);
    this.view = 'home';
    this.render();
  },

  // ── Settings ──
  _renderSettings() {
    UI.clear();
    const app = document.getElementById('app');
    const page = UI.el('div');

    const bar = UI.el('div', { class: 'page-bar' });
    bar.appendChild(UI.el('button', { class: 'back-btn', text: '‹', onClick: () => this.navigate('home') }));
    bar.appendChild(UI.el('div', { class: 'page-title', text: 'Settings' }));
    page.appendChild(bar);

    const card = UI.el('div', { class: 'settings-card' });

    // Name
    card.appendChild(UI.el('div', { class: 'ob-label', text: 'Name' }));
    const nameInput = UI.el('input', { class: 'ob-input', type: 'text', value: this.profile.name });
    nameInput.addEventListener('input', (e) => { this.profile.name = e.target.value; });
    card.appendChild(nameInput);

    // Grade
    card.appendChild(UI.el('div', { class: 'ob-label mt-12', text: 'Grade' }));
    const gradeRow = UI.el('div', { class: 'flex gap-6 flex-wrap' });
    GRADES.forEach(g => {
      gradeRow.appendChild(UI.el('button', {
        class: 'ob-grade-btn' + (this.profile.grade === g ? ' active' : ''),
        text: g,
        style: { padding: '6px 12px', fontSize: '13px' },
        onClick: () => { this.profile.grade = g; this.render(); },
      }));
    });
    card.appendChild(gradeRow);

    // Country
    card.appendChild(UI.el('div', { class: 'ob-label mt-12', html: 'Country: <strong>' + this.profile.country + '</strong>' }));
    if (this.profile.state) card.appendChild(UI.el('div', { style: { fontSize: '14px', color: 'var(--text-secondary)' }, html: 'State: <strong>' + this.profile.state + '</strong>' }));
    card.appendChild(UI.el('button', { class: 'btn-secondary mt-8', text: 'Change Country →', style: { width: 'auto', padding: '6px 14px', fontSize: '13px' }, onClick: () => { this._obStep = 2; this._obName = this.profile.name; this._obGrade = this.profile.grade; this._obCountry = this.profile.country; this._obState = this.profile.state; this.view = 'onboard'; this.render(); } }));

    // Theme
    card.appendChild(UI.el('div', { class: 'ob-label mt-16', text: '🎨 Theme' }));
    const themeDef = ThemeEngine.getThemeDef();
    card.appendChild(UI.el('button', { class: 'btn-secondary w-full', text: themeDef.icon + ' ' + themeDef.name + ' — Change', onClick: () => this.showThemePicker() }));

    // Export data
    card.appendChild(UI.el('div', { class: 'ob-label mt-16', text: '📦 Your Data' }));
    card.appendChild(UI.el('div', { style: { fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }, text: 'All data is stored locally on your device. Size: ' + Storage.getDataSize() }));
    card.appendChild(UI.el('button', { class: 'btn-secondary w-full mb-8', text: 'Export My Data', onClick: () => {
      const data = Storage.exportAll();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'roquiz-data.json'; a.click();
      URL.revokeObjectURL(url);
    }}));

    // Save
    card.appendChild(UI.el('button', { class: 'btn-primary w-full mt-16', text: 'Save Changes', onClick: () => { Storage.saveProfile(this.profile); this.navigate('home'); } }));

    page.appendChild(card);

    // Reset
    page.appendChild(UI.el('button', { class: 'reset-btn', text: 'Reset All Data', onClick: () => {
      if (confirm('This will erase all your progress. Are you sure?')) {
        Storage.clearAll();
        this.gs = Storage.getGameState();
        this.profile = Storage.getProfile();
        this._obStep = 0;
        this._obName = '';
        this._obGrade = '';
        this._obCountry = '';
        this._obState = '';
        this.view = 'onboard';
        this.render();
      }
    }}));

    app.appendChild(page);
  },
};

// ── Boot ──
document.addEventListener('DOMContentLoaded', () => App.init());
