/* ═══════════════════════════════════════════
   GAME.JS — Core game data & logic
   Categories, tiers, badges, rewards, levels
   ═══════════════════════════════════════════ */

const CATEGORIES = [
  // Tier 0 - Starter (unlocked)
  { key:"Animals", icon:"🐾", bg:"#FFE0B2", bdr:"#FF9800", tier:0, opentdb:27, trivia:"science", prompt:"animals, wildlife, pets" },
  { key:"General Knowledge", icon:"💡", bg:"#FFF9C4", bdr:"#FDD835", tier:0, opentdb:9, trivia:"general_knowledge", prompt:"general knowledge, everyday facts" },
  { key:"Science & Space", icon:"🚀", bg:"#BBDEFB", bdr:"#42A5F5", tier:0, opentdb:17, trivia:"science", prompt:"science, space, planets" },
  { key:"Geography", icon:"🌍", bg:"#B2DFDB", bdr:"#26A69A", tier:0, opentdb:22, trivia:"geography", prompt:"geography, countries, capitals" },
  { key:"Math Puzzles", icon:"🧮", bg:"#E1BEE7", bdr:"#8E24AA", tier:0, opentdb:19, trivia:null, prompt:"fun math puzzles, arithmetic, shapes" },
  { key:"History", icon:"🏰", bg:"#D7CCC8", bdr:"#8D6E63", tier:0, opentdb:23, trivia:"history", prompt:"world history, famous events" },
  { key:"Music", icon:"🎵", bg:"#F3E5F5", bdr:"#AB47BC", tier:0, opentdb:12, trivia:"music", prompt:"music, instruments, songs" },
  { key:"Sports", icon:"⚽", bg:"#FFCCBC", bdr:"#FF7043", tier:0, opentdb:21, trivia:"sport_and_leisure", prompt:"sports, Olympics, athletes" },
  { key:"Food & Cooking", icon:"🍕", bg:"#FFE0B2", bdr:"#FFA726", tier:0, opentdb:null, trivia:"food_and_drink", prompt:"food, cooking, cuisines" },
  // Tier 1
  { key:"Flowers & Plants", icon:"🌻", bg:"#C8E6C9", bdr:"#66BB6A", tier:1, opentdb:null, trivia:"science", prompt:"flowers, plants, trees" },
  { key:"Oceans & Sea Life", icon:"🐙", bg:"#B3E5FC", bdr:"#29B6F6", tier:1, opentdb:null, trivia:"science", prompt:"oceans, sea creatures, marine life" },
  { key:"Dinosaurs", icon:"🦕", bg:"#DCEDC8", bdr:"#9CCC65", tier:1, opentdb:null, trivia:"science", prompt:"dinosaurs, fossils, prehistoric life" },
  // Tier 2
  { key:"Inventions", icon:"⚙️", bg:"#CFD8DC", bdr:"#78909C", tier:2, opentdb:null, trivia:"science", prompt:"inventions, inventors, discoveries" },
  { key:"Human Body", icon:"🫀", bg:"#FFCDD2", bdr:"#EF5350", tier:2, opentdb:null, trivia:"science", prompt:"human body, organs, health" },
  { key:"Books & Stories", icon:"📚", bg:"#D1C4E9", bdr:"#7E57C2", tier:2, opentdb:10, trivia:"arts_and_literature", prompt:"books, fairy tales, literature" },
  // Tier 3
  { key:"Flags & Countries", icon:"🏳️", bg:"#F0F4C3", bdr:"#D4E157", tier:3, opentdb:null, trivia:"geography", prompt:"flags, countries, cultures" },
  { key:"Pokémon", icon:"⚡", bg:"#FFF9C4", bdr:"#FFEB3B", tier:3, opentdb:null, trivia:null, prompt:"Pokémon games, anime, characters, types, evolutions" },
  { key:"Logos", icon:"🏷️", bg:"#B3E5FC", bdr:"#03A9F4", tier:3, opentdb:null, trivia:null, prompt:"famous brand logos, company symbols" },
];

const TIER_THRESHOLDS = [
  { tier: 0, qs: 0, acc: 0 },
  { tier: 1, qs: 500, acc: 80 },
  { tier: 2, qs: 1000, acc: 80 },
  { tier: 3, qs: 1500, acc: 80 },
];

const LEVELS = [
  { name: "Curious Kid", xp: 0 },
  { name: "Explorer", xp: 100 },
  { name: "Smarty Pants", xp: 300 },
  { name: "Brain Builder", xp: 600 },
  { name: "Quiz Whiz", xp: 1000 },
  { name: "Knowledge King", xp: 1500 },
  { name: "Super Scholar", xp: 2200 },
  { name: "Roquiz Champion", xp: 3000 },
];

const BADGES = [
  { id: "first", name: "First Steps", icon: "⭐", desc: "Complete your first quiz" },
  { id: "perfect", name: "Perfect!", icon: "💎", desc: "Get every question right in a round" },
  { id: "streak5", name: "On Fire!", icon: "🔥", desc: "Get 5 correct answers in a row" },
  { id: "explorer", name: "Explorer", icon: "🧭", desc: "Try 10 different categories" },
  { id: "century", name: "100 Club", icon: "🛡️", desc: "Answer 100 total questions" },
  { id: "speedy", name: "Speedy!", icon: "⚡", desc: "Answer a question in under 3 seconds" },
  { id: "xp500", name: "Rising Star", icon: "🏆", desc: "Reach 500 XP" },
  { id: "xp1000", name: "Legend", icon: "👑", desc: "Reach 1000 XP" },
  { id: "streak10", name: "Unstoppable", icon: "💥", desc: "Get 10 correct answers in a row" },
  { id: "q500", name: "Quiz Machine", icon: "🤖", desc: "Answer 500 total questions" },
  { id: "q1000", name: "Quiz Master", icon: "🧙", desc: "Answer 1000 total questions" },
  { id: "perfect3", name: "Hat Trick", icon: "🎩", desc: "Get 3 perfect rounds" },
  { id: "allcats", name: "World Traveler", icon: "🌎", desc: "Play all 18 categories" },
];

// ── Avatars (equippable profile icons) ──
const AVATARS = [
  // Free starters
  { id: "av_default", icon: "👤", name: "Default", cost: 0 },
  { id: "av_star", icon: "⭐", name: "Star Kid", cost: 0 },
  { id: "av_smile", icon: "😊", name: "Smiley", cost: 0 },
  // XP unlocks
  { id: "av_nerd", icon: "🤓", name: "Brainiac", cost: 50 },
  { id: "av_cool", icon: "😎", name: "Cool Kid", cost: 75 },
  { id: "av_alien", icon: "👽", name: "Space Brain", cost: 100 },
  { id: "av_robot", icon: "🤖", name: "Robo Quiz", cost: 125 },
  { id: "av_wizard", icon: "🧙", name: "Quiz Wizard", cost: 150 },
  { id: "av_ninja", icon: "🥷", name: "Stealth Learner", cost: 200 },
  { id: "av_astro", icon: "🧑‍🚀", name: "Astro Kid", cost: 250 },
  { id: "av_dino", icon: "🦖", name: "Dino Brain", cost: 300 },
  { id: "av_dragon", icon: "🐉", name: "Dragon Scholar", cost: 400 },
  { id: "av_unicorn", icon: "🦄", name: "Unicorn", cost: 500 },
  { id: "av_phoenix", icon: "🔥", name: "Phoenix", cost: 750 },
  { id: "av_crown", icon: "👑", name: "Royal Mind", cost: 1000 },
  // Milestone-only (can't buy, earned by badges)
  { id: "av_legend", icon: "🏆", name: "Legend", cost: -1, badge: "xp1000" },
  { id: "av_explorer", icon: "🌍", name: "World Explorer", cost: -1, badge: "allcats" },
  { id: "av_perfect", icon: "💎", name: "Diamond Mind", cost: -1, badge: "perfect3" },
  { id: "av_machine", icon: "⚙️", name: "Quiz Machine", cost: -1, badge: "q1000" },
];

// ── Roquiz Swag (milestone unlocks only — can't buy) ──
const SWAG = [
  { id: "sw_button", icon: "🔘", name: "Roquiz Button", desc: "A collectible Roquiz pin button!", milestone: "first", milestoneDesc: "Complete your first quiz" },
  { id: "sw_stickers", icon: "🏷️", name: "Roquiz Sticker Pack", desc: "A pack of real Roquiz stickers for your notebook!", milestone: "century", milestoneDesc: "Answer 100 questions" },
  { id: "sw_socks", icon: "🧦", name: "Roquiz Socks", desc: "Fun quiz-themed socks to wear with pride!", milestone: "q500", milestoneDesc: "Answer 500 questions" },
  { id: "sw_beanie", icon: "🧢", name: "Roquiz Beanie", desc: "A cozy beanie for the brainiest quizzers!", milestone: "q1000", milestoneDesc: "Answer 1000 questions" },
  { id: "sw_hoodie", icon: "🧥", name: "Roquiz Hoodie", desc: "The ultimate Roquiz merch — you earned it!", milestone: "allcats", milestoneDesc: "Play all 18 categories" },
];

const REWARDS = [
  // ── Digital Stickers (25 total) ──
  { id: "s1", name: "Gold Star", icon: "🌟", cost: 30, type: "digital", desc: "A shiny gold star!" },
  { id: "s2", name: "Rainbow", icon: "🌈", cost: 40, type: "digital", desc: "Chase the rainbow!" },
  { id: "s3", name: "Trophy", icon: "🏆", cost: 50, type: "digital", desc: "You're a champion!" },
  { id: "s4", name: "Rocket", icon: "🚀", cost: 60, type: "digital", desc: "Blast off!" },
  { id: "s5", name: "Crown", icon: "👑", cost: 75, type: "digital", desc: "Rule the kingdom!" },
  { id: "s6", name: "Lightning", icon: "⚡", cost: 40, type: "digital", desc: "Super fast brain!" },
  { id: "s7", name: "Heart", icon: "❤️", cost: 30, type: "digital", desc: "Made with love!" },
  { id: "s8", name: "Fire", icon: "🔥", cost: 50, type: "digital", desc: "You're on fire!" },
  { id: "s9", name: "Diamond", icon: "💎", cost: 100, type: "digital", desc: "Rare & precious!" },
  { id: "s10", name: "Planet", icon: "🪐", cost: 60, type: "digital", desc: "Out of this world!" },
  { id: "s11", name: "Sparkles", icon: "✨", cost: 35, type: "digital", desc: "Sparkle and shine!" },
  { id: "s12", name: "Dinosaur", icon: "🦕", cost: 50, type: "digital", desc: "Prehistoric power!" },
  { id: "s13", name: "Unicorn", icon: "🦄", cost: 75, type: "digital", desc: "Magical & rare!" },
  { id: "s14", name: "Dragon", icon: "🐉", cost: 100, type: "digital", desc: "Breathe fire!" },
  { id: "s15", name: "Alien", icon: "👽", cost: 60, type: "digital", desc: "From another galaxy!" },
  { id: "s16", name: "Octopus", icon: "🐙", cost: 50, type: "digital", desc: "Eight arms of knowledge!" },
  { id: "s17", name: "Butterfly", icon: "🦋", cost: 40, type: "digital", desc: "Beautiful transformation!" },
  { id: "s18", name: "Penguin", icon: "🐧", cost: 45, type: "digital", desc: "Cool and clever!" },
  { id: "s19", name: "Panda", icon: "🐼", cost: 55, type: "digital", desc: "Cuddly genius!" },
  { id: "s20", name: "Owl", icon: "🦉", cost: 65, type: "digital", desc: "Wise and wonderful!" },
  { id: "s21", name: "Shooting Star", icon: "🌠", cost: 80, type: "digital", desc: "Make a wish!" },
  { id: "s22", name: "Crystal Ball", icon: "🔮", cost: 90, type: "digital", desc: "See the future!" },
  { id: "s23", name: "Volcano", icon: "🌋", cost: 100, type: "digital", desc: "Explosive knowledge!" },
  { id: "s24", name: "Aurora", icon: "🌌", cost: 125, type: "digital", desc: "Northern lights!" },
  { id: "s25", name: "Galaxy", icon: "🌀", cost: 150, type: "digital", desc: "Infinite wisdom!" },
  // ── Sound Packs ──
  { id: "sp1", name: "Arcade Sounds", icon: "🕹️", cost: 200, type: "soundpack", desc: "Retro arcade bleeps and bloops!" },
  { id: "sp2", name: "Nature Sounds", icon: "🌿", cost: 200, type: "soundpack", desc: "Birds, streams & forest vibes!" },
  { id: "sp3", name: "Space Sounds", icon: "🛸", cost: 250, type: "soundpack", desc: "Sci-fi lasers and warp drives!" },
  // ── Gift cards ──
  { id: "g5", name: "$5 Gift Card", icon: "🎁", cost: 500, type: "giftcard", desc: "Redeem for a $5 gift card" },
  { id: "g10", name: "$10 Gift Card", icon: "💳", cost: 1000, type: "giftcard", desc: "Redeem for a $10 gift card" },
  { id: "g25", name: "$25 Gift Card", icon: "💰", cost: 2500, type: "giftcard", desc: "Redeem for a $25 gift card" },
  // ── Physical items ──
  { id: "t1", name: "Mini Figure", icon: "🧸", cost: 750, type: "physical", desc: "A cool collectible mini figure" },
  { id: "t2", name: "Puzzle Set", icon: "🧩", cost: 1200, type: "physical", desc: "Brain-teasing puzzle set" },
  { id: "t3", name: "Science Kit", icon: "🔬", cost: 2000, type: "physical", desc: "DIY science experiment kit" },
  // ── Donations ──
  { id: "d1", name: "Plant a Tree", icon: "🌳", cost: 100, type: "donate", desc: "Donate to plant a real tree!" },
  { id: "d2", name: "Feed a Child", icon: "🍎", cost: 250, type: "donate", desc: "Provide a meal for a child in need" },
  { id: "d3", name: "School Supplies", icon: "📝", cost: 500, type: "donate", desc: "Donate school supplies to kids" },
];

const GRADES = ["1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade"];
const ROUND_SIZES = [5, 10, 25, 50, 100, 250, 500, 1000];
const COUNTRIES = ["Afghanistan","Albania","Algeria","Argentina","Australia","Austria","Bangladesh","Belgium","Brazil","Canada","Chile","China","Colombia","Czech Republic","Denmark","Egypt","Ethiopia","Finland","France","Germany","Ghana","Greece","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Kenya","Malaysia","Mexico","Morocco","Netherlands","New Zealand","Nigeria","Norway","Pakistan","Peru","Philippines","Poland","Portugal","Russia","Saudi Arabia","Singapore","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Tanzania","Thailand","Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Venezuela","Vietnam","Zimbabwe"];

// ── Game Logic Helpers ──
const GameLogic = {
  getLevel(xp) {
    return LEVELS.slice().reverse().find(l => xp >= l.xp) || LEVELS[0];
  },

  getNextLevel(xp) {
    const current = this.getLevel(xp);
    const idx = LEVELS.indexOf(current);
    return idx < LEVELS.length - 1 ? LEVELS[idx + 1] : null;
  },

  getLevelProgress(xp) {
    const current = this.getLevel(xp);
    const next = this.getNextLevel(xp);
    if (!next) return 100;
    return Math.min(((xp - current.xp) / (next.xp - current.xp)) * 100, 100);
  },

  getUnlockedTier(gs) {
    const acc = gs.answered > 0 ? Math.round((gs.correct / gs.answered) * 100) : 0;
    const tier = TIER_THRESHOLDS.slice().reverse().find(t => gs.answered >= t.qs && acc >= t.acc);
    return tier ? tier.tier : 0;
  },

  isCatUnlocked(cat, gs) {
    return cat.tier <= this.getUnlockedTier(gs);
  },

  getAccuracy(gs) {
    return gs.answered > 0 ? Math.round((gs.correct / gs.answered) * 100) : 0;
  },

  // Process an answer and return updated gameState + earned badges
  processAnswer(gs, isCorrect, elapsed, rStreak, category) {
    const ns = { ...gs };
    ns.answered += 1;
    const newBadges = [];
    const prevLevel = this.getLevel(gs.xp);

    if (isCorrect) {
      ns.correct += 1;
      ns.streak += 1;
      if (ns.streak > ns.bestStreak) ns.bestStreak = ns.streak;
      ns.xp += elapsed < 5 ? 15 : 10;
      if (rStreak >= 2) ns.xp += 3;
    } else {
      ns.streak = 0;
      ns.xp += 2;
    }

    if (category && !ns.catsPlayed.includes(category)) {
      ns.catsPlayed = [...ns.catsPlayed, category];
    }

    // Badge checks
    if (!ns.badges.includes("first")) { ns.badges.push("first"); newBadges.push("first"); }
    if (!ns.badges.includes("streak5") && ns.streak >= 5) { ns.badges.push("streak5"); newBadges.push("streak5"); }
    if (!ns.badges.includes("streak10") && ns.streak >= 10) { ns.badges.push("streak10"); newBadges.push("streak10"); }
    if (!ns.badges.includes("century") && ns.answered >= 100) { ns.badges.push("century"); newBadges.push("century"); }
    if (!ns.badges.includes("q500") && ns.answered >= 500) { ns.badges.push("q500"); newBadges.push("q500"); }
    if (!ns.badges.includes("q1000") && ns.answered >= 1000) { ns.badges.push("q1000"); newBadges.push("q1000"); }
    if (!ns.badges.includes("speedy") && isCorrect && elapsed < 3) { ns.badges.push("speedy"); newBadges.push("speedy"); }
    if (!ns.badges.includes("explorer") && ns.catsPlayed.length >= 10) { ns.badges.push("explorer"); newBadges.push("explorer"); }
    if (!ns.badges.includes("allcats") && ns.catsPlayed.length >= 18) { ns.badges.push("allcats"); newBadges.push("allcats"); }
    if (!ns.badges.includes("xp500") && ns.xp >= 500) { ns.badges.push("xp500"); newBadges.push("xp500"); }
    if (!ns.badges.includes("xp1000") && ns.xp >= 1000) { ns.badges.push("xp1000"); newBadges.push("xp1000"); }

    const newLevel = this.getLevel(ns.xp);
    const leveledUp = newLevel.xp > prevLevel.xp;

    // Check for new swag unlocks
    const newSwag = [];
    SWAG.forEach(s => {
      if (ns.badges.includes(s.milestone) && !(gs.badges || []).includes(s.milestone)) {
        newSwag.push(s);
      }
    });

    return { gameState: ns, newBadges, leveledUp, newSwag };
  },

  // ── Perfect round tracking ──
  recordPerfectRound(gs) {
    const ns = { ...gs };
    ns.perfectRounds = (ns.perfectRounds || 0) + 1;
    const newBadges = [];
    if (!ns.badges.includes("perfect")) { ns.badges.push("perfect"); newBadges.push("perfect"); }
    if (!ns.badges.includes("perfect3") && ns.perfectRounds >= 3) { ns.badges.push("perfect3"); newBadges.push("perfect3"); }
    return { gameState: ns, newBadges };
  },

  redeemReward(gs, reward) {
    if (gs.xp < reward.cost) return { success: false, gameState: gs };
    const ns = {
      ...gs,
      xp: gs.xp - reward.cost,
      redeemed: [...gs.redeemed, { ...reward, date: new Date().toISOString() }]
    };
    if (reward.type === "digital") {
      ns.stickers = [...(ns.stickers || []), reward.id];
    }
    if (reward.type === "soundpack") {
      ns.soundpacks = [...(ns.soundpacks || []), reward.id];
    }
    return { success: true, gameState: ns };
  },

  // ── Avatar helpers ──
  getAvatar(gs) {
    return (gs.avatar || 'av_default');
  },

  getAvatarIcon(gs) {
    const avId = this.getAvatar(gs);
    const av = AVATARS.find(a => a.id === avId);
    return av ? av.icon : '👤';
  },

  isAvatarUnlocked(av, gs) {
    if (av.cost === 0) return true;
    if (av.cost === -1) return (gs.badges || []).includes(av.badge);
    return (gs.avatarsOwned || []).includes(av.id);
  },

  buyAvatar(gs, av) {
    if (av.cost <= 0) return { success: false, gameState: gs };
    if (gs.xp < av.cost) return { success: false, gameState: gs };
    const ns = {
      ...gs,
      xp: gs.xp - av.cost,
      avatarsOwned: [...(gs.avatarsOwned || []), av.id]
    };
    return { success: true, gameState: ns };
  },

  equipAvatar(gs, avId) {
    return { ...gs, avatar: avId };
  },

  // ── Wishlist helpers ──
  addToWishlist(gs, reward) {
    const wl = gs.wishlist || [];
    if (wl.find(w => w.id === reward.id)) return gs;
    return { ...gs, wishlist: [...wl, { id: reward.id, name: reward.name, icon: reward.icon, cost: reward.cost, type: reward.type, date: new Date().toISOString() }] };
  },

  removeFromWishlist(gs, rewardId) {
    return { ...gs, wishlist: (gs.wishlist || []).filter(w => w.id !== rewardId) };
  },

  // ── Swag unlock check ──
  getUnlockedSwag(gs) {
    return SWAG.filter(s => (gs.badges || []).includes(s.milestone));
  },

  getLockedSwag(gs) {
    return SWAG.filter(s => !(gs.badges || []).includes(s.milestone));
  }
};
