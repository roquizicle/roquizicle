/* ═══════════════════════════════════════════
APP.JS — Main controller
Manages state, navigation, wires modules
═══════════════════════════════════════════ */

const App = {
// State
view: ‘loading’,
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
loadProgress: ‘’,
storeFilter: ‘all’,
redeemMsg: null,
// Mode: ‘fun’ or ‘school’
mode: ‘fun’,
// SOL state
solSubject: null,
solStrand: null,

// ── Init ──
async init() {
UI.init();
UI.renderSplash();

```
// Load saved data
this.profile = Storage.getProfile();
this.gs = Storage.getGameState();

// Init theme
ThemeEngine.init();

// Init audio (will wait for user interaction)
Audio._muted = Storage.getMuted();

// Load mode preference
this.mode = Storage.get('mode') || 'fun';

// Decide first screen
setTimeout(() => {
  if (this.profile.name) {
    this.view = 'home';
  } else {
    this.view = 'onboard';
  }
  this.render();
}, 1500);
```

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

```
switch (this.view) {
  case 'loading':
    UI.renderSplash();
    break;

  case 'onboard':
    this._renderOnboarding();
    break;

  case 'home':
    if (this.mode === 'school') {
      this._renderSOLHome();
      break;
    }
    UI.renderHome({
      profile: this.profile,
      gs: this.gs,
      level, nextLvl, pct, unlockedTier, acc,
      roundSize: this.roundSize,
      loading: this.loading,
      error: this.error,
      loadProgress: this.loadProgress,
      muted: Audio.isMuted(),
      mode: this.mode,
      onCatClick: (key) => this.startQuiz(key),
      onSizeClick: (n) => { this.roundSize = n; this.render(); },
      onNav: (v) => this.navigate(v),
      onSettings: () => this.navigate('settings'),
      onTheme: () => this.showThemePicker(),
      onMute: () => { Audio.init(); Audio.toggleMute(); this.render(); },
      onModeToggle: () => this.toggleMode(),
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
      onBuyAvatar: (av) => this.buyAvatar(av),
      onEquipAvatar: (avId) => this.equipAvatar(avId),
      onWishlist: (r, action) => this.toggleWishlist(r, action),
      onNav: (v) => this.navigate(v),
      onBack: () => this.navigate('home'),
    });
    break;

  case 'settings':
    this._renderSettings();
    break;

  case 'sol':
    this._renderSOLHome();
    break;

  case 'sol-strand':
    this._renderSOLStrand();
    break;
}
```

},

// ── Mode Toggle ──
toggleMode() {
this.mode = this.mode === ‘fun’ ? ‘school’ : ‘fun’;
Storage.set(‘mode’, this.mode);
this.view = ‘home’;
this.render();
},

// ── Start SOL Quiz ──
async startSOLQuiz(subject, strand) {
await Audio.init();
Audio.tap();

```
this.loading = true;
this.error = null;
this.solSubject = subject;
this.solStrand = strand;
this.cat = `${subject}: ${strand || 'All Standards'}`;
this.qi = 0;
this.score = 0;
this.flipped = null;
this.rStreak = 0;
this.newBadges = [];
this.qStart = Date.now();
this.render();

try {
  let qs;
  if (strand) {
    qs = await SOLEngine.generateStrandQuiz(subject, this.profile.grade, strand, this.roundSize, (prog) => {
      this.loadProgress = prog;
      this.render();
    });
  } else {
    qs = await SOLEngine.generateQuiz(subject, this.profile.grade, this.roundSize, (prog) => {
      this.loadProgress = prog;
      this.render();
    });
  }

  this.loading = false;
  this.loadProgress = '';

  if (qs.length > 0) {
    this.questions = qs;
    this.view = 'quiz';
    Audio.startBgMusic();
  } else {
    this.error = "Couldn't generate SOL questions. Please try again!";
    this.view = this.solStrand ? 'sol-strand' : 'sol';
  }
} catch (err) {
  console.error('[Roquiz] SOL quiz load error:', err);
  this.loading = false;
  this.loadProgress = '';
  this.error = "Something went wrong loading questions. Please try again!";
  this.view = this.solStrand ? 'sol-strand' : 'sol';
}
this.render();
```

},

// ── Start Quiz ──
async startQuiz(category) {
const catDef = CATEGORIES.find(c => c.key === category);
if (!catDef || !GameLogic.isCatUnlocked(catDef, this.gs)) return;

```
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

try {
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
} catch (err) {
  console.error('[Roquiz] Quiz load error:', err);
  this.loading = false;
  this.loadProgress = '';
  this.error = "Something went wrong loading questions. Please try again!";
}
this.render();
```

},

// ── Handle Answer ──
handleFlip(idx) {
if (this.flipped !== null) return;
this.flipped = idx;

```
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
```

},

// ── Next Question ──
nextQuestion() {
Audio.tap();
if (this.qi + 1 >= this.questions.length) {
// Check for perfect score badge
if (this.score === this.questions.length && !this.gs.badges.includes(‘perfect’)) {
this.gs.badges.push(‘perfect’);
this.newBadges.push(‘perfect’);
Storage.saveGameState(this.gs);
}
this.view = ‘results’;
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
this.redeemMsg = ‘🎉 ’ + reward.name + ’ redeemed!’;
} else {
this.redeemMsg = ‘Not enough XP!’;
}
this.render();
setTimeout(() => { this.redeemMsg = null; this.render(); }, 3000);
},

// ── Buy Avatar ──
buyAvatar(av) {
const result = GameLogic.buyAvatar(this.gs, av);
if (result.success) {
this.gs = result.gameState;
// Auto-equip after buying
this.gs = GameLogic.equipAvatar(this.gs, av.id);
Storage.saveGameState(this.gs);
Audio.badge();
this.redeemMsg = ‘😎 ’ + av.name + ’ avatar unlocked & equipped!’;
} else {
this.redeemMsg = ‘Not enough XP!’;
}
this.render();
setTimeout(() => { this.redeemMsg = null; this.render(); }, 3000);
},

// ── Equip Avatar ──
equipAvatar(avId) {
this.gs = GameLogic.equipAvatar(this.gs, avId);
Storage.saveGameState(this.gs);
Audio.tap();
this.redeemMsg = ‘✓ Avatar changed!’;
this.render();
setTimeout(() => { this.redeemMsg = null; this.render(); }, 2000);
},

// ── Wishlist ──
toggleWishlist(reward, action) {
if (action === ‘add’) {
this.gs = GameLogic.addToWishlist(this.gs, reward);
this.redeemMsg = ‘💝 ’ + reward.name + ’ added to wishlist!’;
} else {
this.gs = GameLogic.removeFromWishlist(this.gs, reward.id);
this.redeemMsg = reward.name + ’ removed from wishlist.’;
}
Storage.saveGameState(this.gs);
this.render();
setTimeout(() => { this.redeemMsg = null; this.render(); }, 2500);
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
_obName: ‘’,
_obGrade: ‘’,
_obCountry: ‘’,
_obState: ‘’,
_countrySearch: ‘’,
_stateSearch: ‘’,
_states: [],
_statesLoading: false,

_renderOnboarding() {
UI.clear();
const app = document.getElementById(‘app’);
const page = UI.el(‘div’, { class: ‘onboard-page’ });
page.appendChild(UI.el(‘div’, { style: { fontSize: ‘48px’, marginBottom: ‘8px’ }, text: ‘🧩’ }));
page.appendChild(UI.el(‘div’, { style: { fontFamily: ‘var(–font-heading)’, fontSize: ‘28px’, fontWeight: 700, color: ‘var(–text-heading)’ }, text: ‘Welcome to Roquiz!’ }));
page.appendChild(UI.el(‘div’, { style: { fontSize: ‘15px’, color: ‘var(–text-secondary)’, marginTop: ‘4px’, marginBottom: ‘24px’ }, text: “Let’s set up your profile” }));

```
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
```

},

async _fetchStates(country) {
this._statesLoading = true;
this._states = [];
this.render();
try {
const r = await fetch(“https://api.anthropic.com/v1/messages”, {
method: “POST”,
headers: { “Content-Type”: “application/json” },
body: JSON.stringify({
model: “claude-sonnet-4-20250514”,
max_tokens: 1000,
messages: [{ role: “user”, content: `List all states/provinces/regions of ${country}. Return ONLY a JSON array of strings sorted alphabetically. No markdown. If none, return [].` }]
})
});
if (!r.ok) throw new Error(“fail”);
const d = await r.json();
const t = d.content?.[0]?.text || “[]”;
this._states = JSON.parse(t.replace(/`json|`/g, “”).trim());
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
this.view = ‘home’;
this.render();
},

// ── SOL Home (School Mode) ──
_renderSOLHome() {
UI.clear();
const app = document.getElementById(‘app’);
const page = UI.el(‘div’);

```
// Header with mode toggle
const header = UI.el('div', { class: 'header' });
const logoRow = UI.el('div', { class: 'logo-row' });
logoRow.appendChild(UI.el('span', { class: 'logo-icon', text: '📚' }));
const logoText = UI.el('div');
logoText.appendChild(UI.el('div', { class: 'logo-name', text: 'roquiz' }));
logoText.appendChild(UI.el('div', { class: 'logo-tag', text: 'school mode · virginia sol' }));
logoRow.appendChild(logoText);

const actions = UI.el('div', { class: 'header-actions' });
// Mode toggle button
const modeBtn = UI.el('button', { class: 'theme-toggle', onClick: () => this.toggleMode(), text: '🎮' });
modeBtn.title = 'Switch to Fun Mode';
actions.appendChild(modeBtn);
actions.appendChild(UI.el('button', { class: 'theme-toggle', onClick: () => this.showThemePicker(), text: '🎨' }));
actions.appendChild(UI.el('button', { class: 'mute-btn', onClick: () => { Audio.init(); Audio.toggleMute(); this.render(); }, text: Audio.isMuted() ? '🔇' : '🔊' }));
logoRow.appendChild(actions);
header.appendChild(logoRow);

// Profile chip
const chip = UI.el('div', { class: 'profile-chip', onClick: () => this.navigate('settings') });
chip.appendChild(UI.el('span', { class: 'avatar-icon', text: GameLogic.getAvatarIcon(this.gs) }));
chip.appendChild(UI.el('span', { class: 'profile-name', text: this.profile.name }));
chip.appendChild(UI.el('span', { class: 'profile-meta', text: `${this.profile.grade} · LCPS / Virginia SOL` }));
header.appendChild(chip);

// XP card
const level = GameLogic.getLevel(this.gs.xp);
const nextLvl = GameLogic.getNextLevel(this.gs.xp);
const pct = GameLogic.getLevelProgress(this.gs.xp);
const xpCard = UI.el('div', { class: 'xp-card' });
const xpRow = UI.el('div', { class: 'xp-row' });
xpRow.appendChild(UI.el('span', { class: 'xp-level', text: level.name }));
xpRow.appendChild(UI.el('span', { class: 'xp-amount', text: Math.floor(this.gs.xp) + ' XP' }));
xpCard.appendChild(xpRow);
const track = UI.el('div', { class: 'xp-track' });
track.appendChild(UI.el('div', { class: 'xp-fill', style: { width: pct + '%' } }));
xpCard.appendChild(track);
if (nextLvl) xpCard.appendChild(UI.el('div', { class: 'xp-hint', text: Math.ceil(nextLvl.xp - this.gs.xp) + ' XP to ' + nextLvl.name }));
header.appendChild(xpCard);
page.appendChild(header);

// Error/Loading
if (this.error) page.appendChild(UI.el('div', { class: 'error-banner', text: this.error }));
if (this.loading) page.appendChild(UI.el('div', { class: 'loading-banner', text: (this.loadProgress || 'Generating SOL questions...') + ' ✨' }));

// Mode indicator
const modeBar = UI.el('div', { style: { margin: '8px 16px', padding: '10px 14px', background: 'var(--accent)15', border: '2px solid var(--accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' } });
modeBar.appendChild(UI.el('span', { style: { fontWeight: 700, fontSize: '14px', color: 'var(--accent)' }, text: '📚 School Mode — Virginia SOL Aligned' }));
modeBar.appendChild(UI.el('button', { style: { background: 'var(--btn-primary)', border: 'none', borderRadius: '8px', padding: '4px 10px', color: '#fff', fontWeight: 700, fontSize: '12px', cursor: 'pointer', fontFamily: 'var(--font-body)' }, text: '🎮 Fun Mode', onClick: () => this.toggleMode() }));
page.appendChild(modeBar);

// Round size picker
const sizeSection = UI.el('div', { class: 'section' });
sizeSection.appendChild(UI.el('div', { class: 'section-title', text: 'Questions per quiz' }));
const sizePicker = UI.el('div', { class: 'size-picker' });
[5, 10, 15, 25].forEach(n => {
  sizePicker.appendChild(UI.el('button', {
    class: 'size-btn' + (this.roundSize === n ? ' active' : ''),
    text: String(n),
    onClick: () => { this.roundSize = n; this.render(); },
  }));
});
sizeSection.appendChild(sizePicker);
page.appendChild(sizeSection);

// Subject cards
const subjects = SOLEngine.getSubjects();
const subjectIcons = { Math: '🧮', Science: '🔬', English: '📖', History: '🏛️' };
const subjectColors = { Math: '#8E24AA', Science: '#2196F3', English: '#4CAF50', History: '#FF9800' };
const subjectDescs = {
  Math: '2023 Standards of Learning — Number Sense, Computation, Measurement, Data, Algebra',
  Science: '2018 Standards of Learning — Investigation, Matter, Life, Earth, Space',
  English: '2024 Standards of Learning — Reading, Writing, Vocabulary, Comprehension',
  History: '2023 Standards of Learning — Civics, Geography, Economics, US & Virginia History',
};

const subSection = UI.el('div', { class: 'section' });
subSection.appendChild(UI.el('div', { class: 'section-title', text: `Choose a Subject (${this.profile.grade})` }));

subjects.forEach(sub => {
  const standards = SOLEngine.getStandards(sub, this.profile.grade);
  const strands = SOLEngine.getStrands(sub, this.profile.grade);

  const card = UI.el('div', {
    style: {
      background: 'var(--bg-card)', border: `3px solid ${subjectColors[sub]}44`,
      borderRadius: '16px', padding: '16px', marginBottom: '12px', cursor: 'pointer',
      transition: 'transform 0.15s',
    },
    onClick: () => {
      this.solSubject = sub;
      this.view = 'sol-strand';
      this.render();
    },
  });

  const topRow = UI.el('div', { style: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' } });
  topRow.appendChild(UI.el('span', { style: { fontSize: '36px' }, text: subjectIcons[sub] }));
  const info = UI.el('div');
  info.appendChild(UI.el('div', { style: { fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: subjectColors[sub] }, text: sub }));
  info.appendChild(UI.el('div', { style: { fontSize: '12px', color: 'var(--text-secondary)' }, text: `${standards.length} standards · ${strands.length} strands` }));
  topRow.appendChild(info);
  topRow.appendChild(UI.el('span', { style: { marginLeft: 'auto', fontSize: '20px', color: 'var(--text-secondary)' }, text: '›' }));
  card.appendChild(topRow);

  card.appendChild(UI.el('div', { style: { fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }, text: subjectDescs[sub] }));
  subSection.appendChild(card);
});

page.appendChild(subSection);
page.appendChild(UI.renderNav('home', (v) => this.navigate(v)));
app.appendChild(page);
```

},

// ── SOL Strand Selection ──
_renderSOLStrand() {
UI.clear();
const app = document.getElementById(‘app’);
const page = UI.el(‘div’);
const sub = this.solSubject;
const subjectColors = { Math: ‘#8E24AA’, Science: ‘#2196F3’, English: ‘#4CAF50’, History: ‘#FF9800’ };
const subjectIcons = { Math: ‘🧮’, Science: ‘🔬’, English: ‘📖’, History: ‘🏛️’ };

```
const bar = UI.el('div', { class: 'page-bar' });
bar.appendChild(UI.el('button', { class: 'back-btn', text: '‹', onClick: () => { this.view = 'home'; this.render(); } }));
bar.appendChild(UI.el('div', { class: 'page-title', text: subjectIcons[sub] + ' ' + sub }));
page.appendChild(bar);

// Error/Loading
if (this.error) page.appendChild(UI.el('div', { class: 'error-banner', text: this.error }));
if (this.loading) page.appendChild(UI.el('div', { class: 'loading-banner', text: (this.loadProgress || 'Generating questions...') + ' ✨' }));

// Grade label
page.appendChild(UI.el('div', { style: { padding: '12px 16px 4px', fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 600 }, text: `${this.profile.grade} · Virginia SOL ${sub === 'Math' ? '2023' : sub === 'English' ? '2024' : sub === 'History' ? '2023' : '2018'}` }));

// All Standards button
const allBtn = UI.el('button', {
  style: {
    margin: '8px 16px', width: 'calc(100% - 32px)', padding: '14px 16px',
    background: subjectColors[sub] + '22', border: `3px solid ${subjectColors[sub]}`,
    borderRadius: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
    fontFamily: 'var(--font-body)', color: 'var(--text)', fontSize: '15px', fontWeight: 700,
  },
  onClick: () => { if (!this.loading) this.startSOLQuiz(sub, null); },
});
allBtn.appendChild(UI.el('span', { style: { fontSize: '24px' }, text: '📝' }));
allBtn.appendChild(UI.el('div', { style: { textAlign: 'left' } }, [
  UI.el('div', { text: `All ${sub} Standards`, style: { color: subjectColors[sub] } }),
  UI.el('div', { style: { fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 500 }, text: `${this.roundSize} mixed questions across all strands` }),
]));
page.appendChild(allBtn);

// Individual strands
const strands = SOLEngine.getStrands(sub, this.profile.grade);
const strandSection = UI.el('div', { class: 'section' });
strandSection.appendChild(UI.el('div', { class: 'section-title', text: 'Or pick a strand:' }));

strands.forEach(strand => {
  const standards = SOLEngine.getStandards(sub, this.profile.grade).filter(s => s.strand === strand);

  const card = UI.el('button', {
    style: {
      width: '100%', background: 'var(--bg-card)', border: '2px solid var(--border-light)',
      borderRadius: '14px', padding: '14px 16px', marginBottom: '10px', cursor: 'pointer',
      display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left',
      fontFamily: 'var(--font-body)', color: 'var(--text)', transition: 'transform 0.15s',
    },
    onClick: () => { if (!this.loading) this.startSOLQuiz(sub, strand); },
  });

  const topRow = UI.el('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } });
  topRow.appendChild(UI.el('span', { style: { fontWeight: 700, fontSize: '15px', color: subjectColors[sub] }, text: strand }));
  topRow.appendChild(UI.el('span', { style: { fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600 }, text: `${standards.length} standards` }));
  card.appendChild(topRow);

  // List standards
  standards.forEach(std => {
    const row = UI.el('div', { style: { fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', gap: '8px', lineHeight: '1.3' } });
    row.appendChild(UI.el('span', { style: { fontWeight: 700, color: subjectColors[sub] + 'BB', minWidth: '55px' }, text: std.code }));
    row.appendChild(UI.el('span', { text: std.title }));
    card.appendChild(row);
  });

  strandSection.appendChild(card);
});

page.appendChild(strandSection);
page.appendChild(UI.renderNav('home', (v) => this.navigate(v)));
app.appendChild(page);
```

},
_renderSettings() {
UI.clear();
const app = document.getElementById(‘app’);
const page = UI.el(‘div’);

```
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

// Mode
card.appendChild(UI.el('div', { class: 'ob-label mt-16', text: '🎮 App Mode' }));
card.appendChild(UI.el('div', { style: { fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }, text: this.mode === 'fun' ? 'Currently: Fun Quiz Mode (trivia & entertainment)' : 'Currently: School Mode (Virginia SOL aligned)' }));
card.appendChild(UI.el('button', { class: 'btn-secondary w-full', text: this.mode === 'fun' ? '📚 Switch to School Mode' : '🎮 Switch to Fun Mode', onClick: () => { this.toggleMode(); } }));

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

// ── Wishlist (for parents) ──
const wishlist = this.gs.wishlist || [];
if (wishlist.length > 0) {
  card.appendChild(UI.el('div', { class: 'ob-label mt-16', text: '💝 Wishlist (for parents)' }));
  card.appendChild(UI.el('div', { style: { fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }, text: `${this.profile.name} has ${wishlist.length} item${wishlist.length > 1 ? 's' : ''} on their wishlist:` }));
  const wlList = UI.el('div', { class: 'wishlist-list' });
  wishlist.forEach(w => {
    const row = UI.el('div', { class: 'wishlist-row' });
    row.appendChild(UI.el('span', { class: 'wishlist-row-icon', text: w.icon }));
    row.appendChild(UI.el('span', { class: 'wishlist-row-name', text: w.name }));
    row.appendChild(UI.el('button', { class: 'wishlist-remove-btn', text: '✕', onClick: () => {
      this.gs = GameLogic.removeFromWishlist(this.gs, w.id);
      Storage.saveGameState(this.gs);
      this.render();
    }}));
    wlList.appendChild(row);
  });
  card.appendChild(wlList);
}

// ── Swag Unlocks (for parents) ──
const unlockedSwag = GameLogic.getUnlockedSwag(this.gs);
if (unlockedSwag.length > 0) {
  card.appendChild(UI.el('div', { class: 'ob-label mt-16', text: '👕 Earned Roquiz Swag' }));
  card.appendChild(UI.el('div', { style: { fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }, text: `${this.profile.name} has earned these swag rewards! Contact us to claim:` }));
  const swagList = UI.el('div', { class: 'wishlist-list' });
  unlockedSwag.forEach(s => {
    const row = UI.el('div', { class: 'wishlist-row' });
    row.appendChild(UI.el('span', { class: 'wishlist-row-icon', text: s.icon }));
    row.appendChild(UI.el('span', { class: 'wishlist-row-name', text: s.name }));
    row.appendChild(UI.el('span', { style: { color: 'var(--correct)', fontWeight: 700, fontSize: '11px' }, text: '✓ Earned' }));
    swagList.appendChild(row);
  });
  card.appendChild(swagList);
}

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
```

},
};

// ── Boot ──
document.addEventListener(‘DOMContentLoaded’, () => App.init());
