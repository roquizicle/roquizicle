/* ═══════════════════════════════════════════
   UI.JS — View renderer (vanilla JS)
   Renders all screens into #app
   ═══════════════════════════════════════════ */

const UI = {
  _app: null,

  init() {
    this._app = document.getElementById('app');
  },

  clear() {
    this._app.innerHTML = '';
  },

  // ── Helper: create element with props ──
  el(tag, attrs = {}, children = []) {
    const e = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') e.className = v;
      else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
      else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'html') e.innerHTML = v;
      else if (k === 'text') e.textContent = v;
      else if (k === 'disabled') e.disabled = v;
      else e.setAttribute(k, v);
    });
    children.forEach(c => {
      if (typeof c === 'string') e.appendChild(document.createTextNode(c));
      else if (c) e.appendChild(c);
    });
    return e;
  },

  // ── Splash Screen ──
  renderSplash() {
    this.clear();
    this._app.appendChild(this.el('div', { class: 'splash' }, [
      this.el('div', { class: 'splash-icon', text: '🧩' }),
      this.el('div', { class: 'splash-name', text: 'roquiz' }),
      this.el('div', { class: 'splash-tag', text: 'learn something fun!' }),
    ]));
  },

  // ── Bottom Nav ──
  renderNav(active, onNav) {
    const items = [['home','🏠','Home'],['store','🎁','Prizes'],['stats','📊','Stats'],['badges','🏆','Badges']];
    const nav = this.el('div', { class: 'bottom-nav' });
    items.forEach(([id, icon, label]) => {
      nav.appendChild(this.el('button', {
        class: 'nav-btn' + (active === id ? ' active' : ''),
        onClick: () => onNav(id),
      }, [
        this.el('span', { class: 'nav-icon', text: icon }),
        this.el('span', { class: 'nav-label', text: label }),
      ]));
    });
    return nav;
  },

  // ── Home Screen ──
  renderHome({ profile, gs, level, nextLvl, pct, unlockedTier, acc, roundSize, loading, error, loadProgress, muted, mode, onCatClick, onSizeClick, onNav, onSettings, onTheme, onMute, onModeToggle }) {
    this.clear();
    const page = this.el('div');

    // Header
    const header = this.el('div', { class: 'header' });
    const logoRow = this.el('div', { class: 'logo-row' });
    logoRow.appendChild(this.el('span', { class: 'logo-icon', text: '🧩' }));
    const logoText = this.el('div');
    logoText.appendChild(this.el('div', { class: 'logo-name', text: 'roquiz' }));
    logoText.appendChild(this.el('div', { class: 'logo-tag', text: 'learn something fun!' }));
    logoRow.appendChild(logoText);

    const actions = this.el('div', { class: 'header-actions' });
    const modeBtn = this.el('button', { class: 'theme-toggle', onClick: onModeToggle, text: '📚' });
    modeBtn.title = 'Switch to School Mode';
    actions.appendChild(modeBtn);
    actions.appendChild(this.el('button', { class: 'theme-toggle', onClick: onTheme, text: '🎨' }));
    actions.appendChild(this.el('button', { class: 'mute-btn', onClick: onMute, text: muted ? '🔇' : '🔊' }));
    logoRow.appendChild(actions);
    header.appendChild(logoRow);

    // Profile chip
    const chip = this.el('div', { class: 'profile-chip', onClick: onSettings });
    chip.appendChild(this.el('span', { class: 'avatar-icon', text: GameLogic.getAvatarIcon(gs) }));
    chip.appendChild(this.el('span', { class: 'profile-name', text: profile.name }));
    chip.appendChild(this.el('span', { class: 'profile-meta', text: `${profile.grade} · ${profile.country}` }));
    header.appendChild(chip);

    // XP Card
    const xpCard = this.el('div', { class: 'xp-card' });
    const xpRow = this.el('div', { class: 'xp-row' });
    xpRow.appendChild(this.el('span', { class: 'xp-level', text: level.name }));
    xpRow.appendChild(this.el('span', { class: 'xp-amount', text: Math.floor(gs.xp) + ' XP' }));
    xpCard.appendChild(xpRow);
    const track = this.el('div', { class: 'xp-track' });
    track.appendChild(this.el('div', { class: 'xp-fill', style: { width: pct + '%' } }));
    xpCard.appendChild(track);
    if (nextLvl) xpCard.appendChild(this.el('div', { class: 'xp-hint', text: Math.ceil(nextLvl.xp - gs.xp) + ' XP to ' + nextLvl.name }));
    header.appendChild(xpCard);

    // Tier info
    const tierEmojis = ['🌱', '🌿', '🌳', '🏆'];
    const tierLabels = ['Starter', 'Explorer', 'Scholar', 'Champion'];
    const tierEmoji = tierEmojis[unlockedTier] || '🌱';
    const tierLabel = tierLabels[unlockedTier] || 'Starter';
    header.appendChild(this.el('div', { class: 'tier-info', text: `${tierEmoji} ${tierLabel} · ${gs.answered} answered · ${acc}% accuracy` }));
    page.appendChild(header);

    // Error/Loading
    if (error) page.appendChild(this.el('div', { class: 'error-banner', text: error }));
    if (loading) page.appendChild(this.el('div', { class: 'loading-banner', text: (loadProgress || `Generating ${roundSize} questions...`) + ' ✨' + (roundSize > 30 ? ' (may take a moment)' : '') }));

    // Round size picker
    const sizeSection = this.el('div', { class: 'section' });
    sizeSection.appendChild(this.el('div', { class: 'section-title', text: 'How many questions?' }));
    const sizePicker = this.el('div', { class: 'size-picker' });
    ROUND_SIZES.forEach(n => {
      sizePicker.appendChild(this.el('button', {
        class: 'size-btn' + (roundSize === n ? ' active' : ''),
        text: String(n),
        onClick: () => onSizeClick(n),
      }));
    });
    sizeSection.appendChild(sizePicker);
    page.appendChild(sizeSection);

    // Categories
    const catSection = this.el('div', { class: 'section' });
    catSection.appendChild(this.el('div', { class: 'section-title', text: 'Pick a topic!' }));
    const grid = this.el('div', { class: 'cat-grid' });

    // Group categories by tier for dividers
    let lastTier = -1;
    const sortedCats = [...CATEGORIES].sort((a, b) => a.tier - b.tier);

    sortedCats.forEach(c => {
      const unlocked = GameLogic.isCatUnlocked(c, gs);
      const played = gs.catsPlayed.includes(c.key);
      const nextTier = TIER_THRESHOLDS.find(t => t.tier === c.tier);

      // Insert tier unlock banner before first locked tier group
      if (c.tier !== lastTier && !unlocked && c.tier > lastTier) {
        const qsNeeded = Math.max(0, nextTier.qs - gs.answered);
        const currentAcc = acc;
        const accOk = currentAcc >= nextTier.acc;
        const tierNames = { 1: 'Explorer', 2: 'Scholar', 3: 'Champion' };
        const tierName = tierNames[c.tier] || 'Tier ' + c.tier;

        const banner = this.el('div', { class: 'tier-unlock-banner' });
        const bannerIcon = this.el('span', { class: 'tier-banner-icon', text: qsNeeded === 0 && accOk ? '🔓' : '🔒' });
        banner.appendChild(bannerIcon);

        const bannerText = this.el('div', { class: 'tier-banner-text' });
        if (qsNeeded > 0 && !accOk) {
          bannerText.appendChild(this.el('div', { class: 'tier-banner-title', text: `${tierName} Pack — ${qsNeeded} more Qs + reach ${nextTier.acc}%` }));
        } else if (qsNeeded > 0) {
          bannerText.appendChild(this.el('div', { class: 'tier-banner-title', text: `${tierName} Pack — ${qsNeeded} more questions to go!` }));
        } else if (!accOk) {
          bannerText.appendChild(this.el('div', { class: 'tier-banner-title', text: `${tierName} Pack — Boost accuracy to ${nextTier.acc}%!` }));
        }

        // Progress bar toward unlock
        const progress = Math.min(100, Math.round((gs.answered / nextTier.qs) * 100));
        const track = this.el('div', { class: 'tier-progress-track' });
        track.appendChild(this.el('div', { class: 'tier-progress-fill', style: { width: progress + '%' } }));
        bannerText.appendChild(track);

        // Motivating message
        const msgs = [
          'You\'re doing great — keep it up! 🌟',
          'Every question gets you closer! 💪',
          'New categories are waiting for you! 🎉',
          'Almost there — don\'t stop now! 🚀',
          'Brain power is building! 🧠✨',
        ];
        const msg = msgs[Math.floor(gs.answered / 10) % msgs.length];
        bannerText.appendChild(this.el('div', { class: 'tier-banner-motivation', text: msg }));

        banner.appendChild(bannerText);
        grid.appendChild(banner);
        lastTier = c.tier;
      }
      if (c.tier !== lastTier && unlocked) lastTier = c.tier;

      const card = this.el('button', {
        class: 'cat-card' + (!unlocked ? ' locked' : ''),
        style: { background: unlocked ? c.bg + '88' : undefined, borderColor: unlocked ? c.bdr : undefined },
        onClick: () => { if (unlocked && !loading) onCatClick(c.key); },
      });

      card.appendChild(this.el('span', { class: 'cat-icon' + (!unlocked ? ' locked-icon' : ''), text: c.icon }));
      card.appendChild(this.el('span', { class: 'cat-label', text: c.key }));
      if (played && unlocked) {
        const done = this.el('span', { class: 'cat-done', text: '✓', style: { background: c.bdr } });
        card.appendChild(done);
      }
      if (!unlocked) {
        card.appendChild(this.el('span', { class: 'cat-lock', text: '🔒' }));
        // Show progress fraction instead of just threshold
        const pctDone = Math.min(100, Math.round((gs.answered / nextTier.qs) * 100));
        card.appendChild(this.el('span', { class: 'cat-unlock-hint', text: `${gs.answered}/${nextTier.qs} Qs · ${pctDone}%` }));
      }
      grid.appendChild(card);
    });
    catSection.appendChild(grid);
    page.appendChild(catSection);

    page.appendChild(this.renderNav('home', onNav));
    this._app.appendChild(page);
  },

  // ── Quiz Screen ──
  renderQuiz({ cat, qi, total, question, score, rStreak, flipped, muted, onFlip, onNext, onClose, onMute }) {
    this.clear();
    const page = this.el('div');
    const catObj = CATEGORIES.find(c => c.key === cat) || { icon: '🎯', bdr: '#FF9800' };
    const progress = ((qi + 1) / total) * 100;
    const COLORS = ['a', 'b', 'c', 'd'];

    // Header
    const header = this.el('div', { class: 'quiz-header' });
    const topRow = this.el('div', { class: 'quiz-top-row' });
    topRow.appendChild(this.el('button', { class: 'quiz-close', text: '✕', onClick: onClose }));
    topRow.appendChild(this.el('span', { class: 'quiz-cat-label', text: catObj.icon + ' ' + cat }));
    const rightSide = this.el('div', { class: 'flex items-center gap-8' });
    rightSide.appendChild(this.el('button', { class: 'mute-btn', onClick: onMute, text: muted ? '🔇' : '🔊' }));
    rightSide.appendChild(this.el('span', { class: 'quiz-count', text: `${qi + 1}/${total}` }));
    topRow.appendChild(rightSide);
    header.appendChild(topRow);

    const track = this.el('div', { class: 'progress-track' });
    track.appendChild(this.el('div', { class: 'progress-bar', style: { width: progress + '%', background: catObj.bdr } }));
    header.appendChild(track);

    const chips = this.el('div', { class: 'quiz-chips' });
    chips.appendChild(this.el('span', { class: 'chip', text: '⭐ ' + score }));
    if (rStreak >= 2) chips.appendChild(this.el('span', { class: 'chip streak', text: '🔥 x' + rStreak }));
    header.appendChild(chips);
    page.appendChild(header);

    // Question
    const qBox = this.el('div', { class: 'question-box' });
    qBox.appendChild(this.el('div', { class: 'question-text', text: question.q }));
    page.appendChild(qBox);

    // Answer cards
    const grid = this.el('div', { class: 'answer-grid' });
    question.options.forEach((opt, i) => {
      const isFlipped = flipped === i;
      const isCorrect = opt === question.correct;
      const done = flipped !== null;
      let cardClass = 'answer-card';
      if (done && isCorrect) cardClass += ' correct-card';
      else if (done && isFlipped && !isCorrect) cardClass += ' wrong-card';
      if (done && !isCorrect && !isFlipped) cardClass += ' dimmed';
      if (isFlipped) cardClass += ' flipped';

      const letter = this.el('span', { class: 'answer-letter', text: String.fromCharCode(65 + i), style: { background: `var(--card-border-${COLORS[i]})` } });
      const text = this.el('span', { class: 'answer-text', text: opt });

      const card = this.el('button', {
        class: cardClass,
        style: { borderColor: done ? undefined : `var(--card-border-${COLORS[i]})`, background: done ? undefined : `var(--card-${COLORS[i]})` },
        disabled: done,
        onClick: () => onFlip(i),
      }, [letter, text]);

      if (done && isCorrect) card.appendChild(this.el('span', { class: 'answer-mark correct', text: '✓' }));
      if (done && isFlipped && !isCorrect) card.appendChild(this.el('span', { class: 'answer-mark wrong', text: '✗' }));
      grid.appendChild(card);
    });
    page.appendChild(grid);

    // Fact box (after flip)
    if (flipped !== null) {
      const isRight = question.options[flipped] === question.correct;
      const fact = this.el('div', { class: 'fact-box' });
      fact.appendChild(this.el('div', { class: 'fact-label ' + (isRight ? 'correct' : 'wrong'), text: isRight ? '🎉 Correct!' : 'Oops! Not quite' }));
      if (!isRight) {
        const ans = this.el('div', { class: 'fact-answer' });
        ans.innerHTML = 'The answer is <strong>' + question.correct + '</strong>';
        fact.appendChild(ans);
      }
      fact.appendChild(this.el('button', {
        class: 'btn-primary',
        text: qi + 1 >= total ? 'See Results →' : 'Next →',
        onClick: onNext,
      }));
      page.appendChild(fact);
    }

    this._app.appendChild(page);
  },

  // ── Results Screen ──
  renderResults({ score, total, newBadges, onHome, onRetry }) {
    this.clear();
    const pc = Math.round((score / total) * 100);
    const stars = pc === 100 ? 3 : pc >= 70 ? 2 : pc >= 40 ? 1 : 0;
    const msg = pc === 100 ? 'Perfect Score!' : pc >= 70 ? 'Great Job!' : pc >= 40 ? 'Nice Try!' : 'Keep Practicing!';
    const emoji = pc === 100 ? '🏆' : pc >= 70 ? '🌟' : pc >= 40 ? '👏' : '💪';
    const xpEarned = Math.floor(score * 10 + (total - score) * 2);
    const earnedBadgeObjs = BADGES.filter(b => newBadges.includes(b.id));

    const wrap = this.el('div', { class: 'results-wrap' });
    wrap.appendChild(this.el('div', { class: 'results-emoji', text: emoji }));

    const starsDiv = this.el('div', { class: 'results-stars' });
    for (let i = 0; i < 3; i++) starsDiv.appendChild(this.el('span', { class: i < stars ? '' : 'dim', text: '★' }));
    wrap.appendChild(starsDiv);

    wrap.appendChild(this.el('div', { class: 'results-msg', text: msg }));
    wrap.appendChild(this.el('div', { class: 'results-score', text: `${score}/${total}` }));
    wrap.appendChild(this.el('div', { class: 'results-pct', text: pc + '% correct' }));
    wrap.appendChild(this.el('div', { class: 'results-xp', text: '+' + xpEarned + ' XP earned!' }));

    if (earnedBadgeObjs.length > 0) {
      const box = this.el('div', { class: 'new-badges' });
      box.appendChild(this.el('div', { class: 'new-badges-title', text: '🏅 Badges Unlocked!' }));
      earnedBadgeObjs.forEach(b => {
        const row = this.el('div', { class: 'new-badge-row' });
        row.appendChild(this.el('span', { class: 'badge-icon', text: b.icon }));
        const info = this.el('div');
        info.appendChild(this.el('div', { class: 'badge-name', text: b.name }));
        info.appendChild(this.el('div', { class: 'badge-desc', text: b.desc }));
        row.appendChild(info);
        box.appendChild(row);
      });
      wrap.appendChild(box);
    }

    const btns = this.el('div', { class: 'results-btns' });
    btns.appendChild(this.el('button', { class: 'btn-secondary', text: 'Home', onClick: onHome }));
    btns.appendChild(this.el('button', { class: 'btn-primary', text: 'Play Again', onClick: onRetry }));
    wrap.appendChild(btns);

    this._app.appendChild(wrap);
  },

  // ── Stats Screen ──
  renderStats({ gs, level, unlockedTier, acc, onNav, onBack }) {
    this.clear();
    const page = this.el('div');
    const bar = this.el('div', { class: 'page-bar' });
    bar.appendChild(this.el('button', { class: 'back-btn', text: '‹', onClick: onBack }));
    bar.appendChild(this.el('div', { class: 'page-title', text: 'Your Stats' }));
    page.appendChild(bar);

    const data = [
      ['Total XP', Math.floor(gs.xp), '#FF9800'],
      ['Correct', gs.correct, '#4CAF50'],
      ['Answered', gs.answered, '#2196F3'],
      ['Accuracy', acc + '%', '#E91E63'],
      ['Best Streak', gs.bestStreak, '#FDD835'],
      ['Categories', gs.catsPlayed.length + '/' + CATEGORIES.length, '#FF5722'],
      ['Level', level.name, '#9C27B0'],
      ['Tier', unlockedTier + 1, '#00BCD4'],
    ];

    const grid = this.el('div', { class: 'stats-grid' });
    data.forEach(([label, value, color]) => {
      const card = this.el('div', { class: 'stat-card' });
      card.appendChild(this.el('div', { class: 'stat-value', style: { color }, text: String(value) }));
      card.appendChild(this.el('div', { class: 'stat-label', text: label }));
      grid.appendChild(card);
    });
    page.appendChild(grid);
    page.appendChild(this.renderNav('stats', onNav));
    this._app.appendChild(page);
  },

  // ── Badges Screen ──
  renderBadges({ gs, onNav, onBack }) {
    this.clear();
    const page = this.el('div');
    const bar = this.el('div', { class: 'page-bar' });
    bar.appendChild(this.el('button', { class: 'back-btn', text: '‹', onClick: onBack }));
    bar.appendChild(this.el('div', { class: 'page-title', text: 'Badges' }));
    page.appendChild(bar);

    const grid = this.el('div', { class: 'badge-grid' });
    BADGES.forEach(b => {
      const has = gs.badges.includes(b.id);
      const card = this.el('div', { class: 'badge-card' + (!has ? ' locked' : '') });
      card.appendChild(this.el('div', { class: 'badge-icon-lg', text: b.icon }));
      card.appendChild(this.el('div', { class: 'badge-name', text: b.name }));
      card.appendChild(this.el('div', { class: 'badge-desc', text: b.desc }));
      if (has) card.appendChild(this.el('div', { class: 'badge-status', text: 'Unlocked!' }));
      grid.appendChild(card);
    });
    page.appendChild(grid);
    page.appendChild(this.renderNav('badges', onNav));
    this._app.appendChild(page);
  },

  // ── Store Screen ──
  renderStore({ gs, filter, muted, redeemMsg, onFilter, onRedeem, onBuyAvatar, onEquipAvatar, onWishlist, onNav, onBack }) {
    this.clear();
    const page = this.el('div');

    // Top bar
    const bar = this.el('div', { class: 'page-bar' });
    bar.appendChild(this.el('button', { class: 'back-btn', text: '‹', onClick: onBack }));
    bar.appendChild(this.el('div', { class: 'page-title', text: 'Reward Box' }));
    bar.appendChild(this.el('div', { style: { marginLeft: 'auto', fontWeight: 700, color: 'var(--accent)', fontSize: '15px' }, text: Math.floor(gs.xp) + ' XP' }));
    page.appendChild(bar);

    // ── Treasure Box Hero ──
    const hero = this.el('div', { class: 'reward-hero' });
    const heroIcon = this.el('div', { class: 'reward-hero-icon', text: '🎁' });
    hero.appendChild(heroIcon);
    const heroText = this.el('div', { class: 'reward-hero-text' });
    const totalCollected = (gs.stickers || []).length + (gs.soundpacks || []).length + (gs.avatarsOwned || []).length;
    const swagUnlocked = GameLogic.getUnlockedSwag(gs).length;
    if (totalCollected === 0 && swagUnlocked === 0) {
      heroText.appendChild(this.el('div', { class: 'reward-hero-title', text: 'Your Reward Box is empty!' }));
      heroText.appendChild(this.el('div', { class: 'reward-hero-sub', text: 'Earn XP by answering questions, then spend it on prizes & avatars!' }));
    } else {
      heroText.appendChild(this.el('div', { class: 'reward-hero-title', text: `${totalCollected + swagUnlocked} treasure${totalCollected + swagUnlocked > 1 ? 's' : ''} collected!` }));
      heroText.appendChild(this.el('div', { class: 'reward-hero-sub', text: 'Keep quizzing for more XP, swag, and unlocks.' }));
    }
    hero.appendChild(heroText);
    page.appendChild(hero);

    // ── Roquiz Swag Section ──
    const swagSection = this.el('div', { class: 'swag-section' });
    swagSection.appendChild(this.el('div', { class: 'swag-section-title', text: '👕 Roquiz Swag — Milestone Rewards' }));
    swagSection.appendChild(this.el('div', { class: 'swag-section-sub', text: 'These special prizes unlock when you reach milestones!' }));
    const swagRow = this.el('div', { class: 'swag-row' });
    SWAG.forEach(s => {
      const unlocked = (gs.badges || []).includes(s.milestone);
      const card = this.el('div', { class: 'swag-card' + (unlocked ? ' swag-unlocked' : '') });
      card.appendChild(this.el('div', { class: 'swag-icon', text: unlocked ? s.icon : '🔒' }));
      card.appendChild(this.el('div', { class: 'swag-name', text: s.name }));
      if (unlocked) {
        card.appendChild(this.el('div', { class: 'swag-status', text: '✓ Unlocked!' }));
      } else {
        card.appendChild(this.el('div', { class: 'swag-milestone', text: s.milestoneDesc }));
        // Show progress for question milestones
        const qMatch = s.milestoneDesc.match(/Answer (\d+)/);
        if (qMatch) {
          const target = parseInt(qMatch[1]);
          const pct = Math.min(100, Math.round((gs.answered / target) * 100));
          const track = this.el('div', { class: 'swag-progress-track' });
          track.appendChild(this.el('div', { class: 'swag-progress-fill', style: { width: pct + '%' } }));
          card.appendChild(track);
          card.appendChild(this.el('div', { class: 'swag-progress-text', text: `${gs.answered}/${target}` }));
        }
      }
      swagRow.appendChild(card);
    });
    swagSection.appendChild(swagRow);
    page.appendChild(swagSection);

    // ── Avatar Section ──
    const avSection = this.el('div', { class: 'avatar-section' });
    avSection.appendChild(this.el('div', { class: 'swag-section-title', text: '😎 Avatars — Show Your Style' }));
    const currentAvId = GameLogic.getAvatar(gs);
    const avGrid = this.el('div', { class: 'avatar-grid' });
    AVATARS.forEach(av => {
      const unlocked = GameLogic.isAvatarUnlocked(av, gs);
      const equipped = currentAvId === av.id;
      const card = this.el('div', { class: 'avatar-card' + (equipped ? ' avatar-equipped' : '') + (!unlocked ? ' avatar-locked' : '') });
      card.appendChild(this.el('div', { class: 'avatar-card-icon', text: unlocked ? av.icon : '🔒' }));
      card.appendChild(this.el('div', { class: 'avatar-card-name', text: av.name }));
      if (equipped) {
        card.appendChild(this.el('div', { class: 'avatar-card-status', text: '✓ Equipped' }));
      } else if (unlocked) {
        card.appendChild(this.el('button', { class: 'avatar-equip-btn', text: 'Use', onClick: () => onEquipAvatar(av.id) }));
      } else if (av.cost === -1) {
        const badge = BADGES.find(b => b.id === av.badge);
        card.appendChild(this.el('div', { class: 'avatar-card-hint', text: badge ? badge.desc : 'Earn badge' }));
      } else {
        card.appendChild(this.el('button', {
          class: 'avatar-buy-btn',
          disabled: gs.xp < av.cost,
          text: av.cost + ' XP',
          onClick: () => onBuyAvatar(av)
        }));
      }
      avGrid.appendChild(card);
    });
    avSection.appendChild(avGrid);
    page.appendChild(avSection);

    // ── Sticker Collection ──
    const ownedStickers = (gs.stickers || []).length;
    const totalStickers = REWARDS.filter(r => r.type === 'digital').length;
    if (ownedStickers > 0) {
      const stickerSection = this.el('div', { class: 'sticker-collection' });
      stickerSection.appendChild(this.el('div', { class: 'sticker-collection-title', text: `🏅 My Stickers (${ownedStickers}/${totalStickers})` }));
      const stickerRow = this.el('div', { class: 'sticker-row' });
      REWARDS.filter(r => r.type === 'digital').forEach(r => {
        const owned = (gs.stickers || []).includes(r.id);
        const s = this.el('div', { class: 'sticker-slot' + (owned ? ' sticker-owned' : ''), text: owned ? r.icon : '?' });
        if (owned) s.title = r.name;
        stickerRow.appendChild(s);
      });
      stickerSection.appendChild(stickerRow);
      page.appendChild(stickerSection);
    }

    // ── XP Balance Card ──
    const xpCard = this.el('div', { class: 'reward-xp-card' });
    const xpLeft = this.el('div', { class: 'reward-xp-left' });
    xpLeft.appendChild(this.el('div', { class: 'reward-xp-amount', text: Math.floor(gs.xp) }));
    xpLeft.appendChild(this.el('div', { class: 'reward-xp-label', text: 'XP to spend' }));
    xpCard.appendChild(xpLeft);
    const allOwned = [...(gs.stickers || []), ...(gs.soundpacks || []), ...(gs.avatarsOwned || [])];
    const affordable = REWARDS.filter(r => r.cost <= gs.xp && !allOwned.includes(r.id));
    const nextUp = REWARDS.filter(r => r.cost > gs.xp && !allOwned.includes(r.id)).sort((a, b) => a.cost - b.cost)[0];
    const xpRight = this.el('div', { class: 'reward-xp-right' });
    if (affordable.length > 0) {
      xpRight.appendChild(this.el('div', { class: 'reward-xp-hint', text: `🎯 You can afford ${affordable.length} item${affordable.length > 1 ? 's' : ''}!` }));
    } else if (nextUp) {
      xpRight.appendChild(this.el('div', { class: 'reward-xp-hint', text: `${Math.ceil(nextUp.cost - gs.xp)} more XP until ${nextUp.icon} ${nextUp.name}` }));
    }
    xpCard.appendChild(xpRight);
    page.appendChild(xpCard);

    // ── Category Filters ──
    const types = [['all','🏪 All'],['digital','⭐ Stickers'],['soundpack','🔊 Sounds'],['giftcard','🎁 Gift Cards'],['physical','🧸 Toys'],['donate','💚 Donate']];
    const filters = this.el('div', { class: 'store-filters' });
    types.forEach(([k, l]) => {
      filters.appendChild(this.el('button', { class: 'filter-btn' + (filter === k ? ' active' : ''), text: l, onClick: () => onFilter(k) }));
    });
    page.appendChild(filters);

    // ── Redeem message ──
    if (redeemMsg) page.appendChild(this.el('div', { class: 'redeem-msg', text: redeemMsg }));

    // ── Reward Cards Grid ──
    const filtered = filter === 'all' ? REWARDS : REWARDS.filter(r => r.type === filter);
    const grid = this.el('div', { class: 'store-grid' });
    filtered.forEach(r => {
      const owned = allOwned.includes(r.id);
      const canAfford = gs.xp >= r.cost;
      const onWL = (gs.wishlist || []).find(w => w.id === r.id);
      const isPhysical = ['giftcard', 'physical', 'donate'].includes(r.type);
      const card = this.el('div', { class: 'reward-card' + (owned ? ' reward-owned' : '') + (canAfford && !owned ? ' reward-affordable' : '') });

      if (canAfford && !owned) card.appendChild(this.el('div', { class: 'reward-glow' }));
      card.appendChild(this.el('div', { class: 'reward-icon', text: r.icon }));
      card.appendChild(this.el('div', { class: 'reward-name', text: r.name }));
      card.appendChild(this.el('div', { class: 'reward-desc', text: r.desc }));

      const costBar = this.el('div', { class: 'reward-cost-bar' });
      if (owned) {
        costBar.appendChild(this.el('div', { class: 'reward-owned-badge', text: '✓ Collected!' }));
      } else {
        const costTrack = this.el('div', { class: 'reward-cost-track' });
        const costPct = Math.min(100, Math.round((gs.xp / r.cost) * 100));
        costTrack.appendChild(this.el('div', { class: 'reward-cost-fill', style: { width: costPct + '%' } }));
        costBar.appendChild(costTrack);

        if (isPhysical) {
          // Wishlist button for physical items
          const wlRow = this.el('div', { class: 'reward-btn-row' });
          if (onWL) {
            wlRow.appendChild(this.el('div', { class: 'wishlist-added', text: '💝 On Wishlist' }));
          } else {
            wlRow.appendChild(this.el('button', { class: 'wishlist-btn', text: '💝 Add to Wishlist', onClick: () => onWishlist(r, 'add') }));
          }
          if (canAfford) {
            wlRow.appendChild(this.el('button', { class: 'redeem-btn redeem-ready', text: 'Redeem ' + r.cost, onClick: () => onRedeem(r) }));
          } else {
            wlRow.appendChild(this.el('div', { class: 'reward-cost-label', text: r.cost + ' XP' }));
          }
          costBar.appendChild(wlRow);
        } else {
          costBar.appendChild(this.el('button', {
            class: 'redeem-btn' + (canAfford ? ' redeem-ready' : ''),
            disabled: !canAfford,
            text: canAfford ? 'Get it! (' + r.cost + ' XP)' : r.cost + ' XP',
            onClick: () => onRedeem(r)
          }));
        }
      }
      card.appendChild(costBar);
      grid.appendChild(card);
    });
    page.appendChild(grid);

    // ── How XP Works ──
    const howSection = this.el('div', { class: 'reward-how' });
    howSection.appendChild(this.el('div', { class: 'reward-how-title', text: 'How do I earn XP?' }));
    const tips = [
      '✅ Correct answer = 10 XP (15 XP if under 5 sec!)',
      '🔥 Streak bonus = +3 XP per answer',
      '❌ Wrong answer = 2 XP (you still learn!)',
      '👕 Swag unlocks at milestones — no XP needed!',
    ];
    tips.forEach(t => howSection.appendChild(this.el('div', { class: 'reward-how-tip', text: t })));
    page.appendChild(howSection);

    page.appendChild(this.renderNav('store', onNav));
    this._app.appendChild(page);
  },
};
