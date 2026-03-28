/* ═══════════════════════════════════════════
   QUESTIONS.JS — Hybrid question engine
   Sources: OpenTDB → Trivia API → Claude AI → Fallback
   ═══════════════════════════════════════════ */

const QuestionEngine = {
  // ── Source 1: OpenTDB (no key, max 50/call) ──
  async fetchOpenTDB(catId, amount) {
    const n = Math.min(amount, 50);
    try {
      const r = await fetch(`https://opentdb.com/api.php?amount=${n}&category=${catId}&type=multiple&difficulty=easy`);
      const d = await r.json();
      if (d.response_code !== 0) return [];
      return d.results.map(q => ({
        q: this._decode(q.question),
        correct: this._decode(q.correct_answer),
        options: this._shuffle([q.correct_answer, ...q.incorrect_answers].map(s => this._decode(s)))
      }));
    } catch { return []; }
  },

  // ── Source 2: The Trivia API (no key for basic) ──
  async fetchTriviaAPI(category, amount) {
    const n = Math.min(amount, 50);
    try {
      const r = await fetch(`https://the-trivia-api.com/v2/questions?limit=${n}&categories=${category}&difficulties=easy,medium`);
      if (!r.ok) return [];
      const d = await r.json();
      return d.map(q => ({
        q: q.question?.text || q.question,
        correct: q.correctAnswer,
        options: this._shuffle([q.correctAnswer, ...q.incorrectAnswers])
      }));
    } catch { return []; }
  },

  // ── Source 3: Claude AI ──
  async fetchAI(prompt, amount, grade, country) {
    const n = Math.min(amount, 30);
    const g = parseInt(grade) || 3;
    const diff = g <= 2 ? "very easy for ages 6-7" : g <= 3 ? "easy-medium for ages 8-9" : g <= 4 ? "medium for ages 9-10" : "medium-challenging for ages 10-11";
    const cc = country ? ` Include some questions relevant to ${country}.` : "";
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 4096,
          messages: [{ role: "user", content: `Generate exactly ${n} multiple choice trivia questions about ${prompt}. Difficulty: ${diff}.${cc} Fun, educational, age-appropriate, diverse. 4 options each, 1 correct. Full sentences for questions.
Return ONLY valid JSON array: [{"q":"question","correct":"answer","options":["a","b","c","d"]}] No markdown.` }]
        })
      });
      if (!r.ok) return [];
      const d = await r.json();
      const t = d.content?.[0]?.text || "";
      const p = JSON.parse(t.replace(/```json|```/g, "").trim());
      return Array.isArray(p) && p[0]?.q ? p : [];
    } catch { return []; }
  },

  // ── Combined fetcher with batching + progress ──
  async fetch(catDef, total, profile, onProgress) {
    let all = [];
    const needed = () => total - all.length;

    while (needed() > 0) {
      if (onProgress) onProgress(`Loading... ${all.length}/${total}`);
      let batch = [];

      // Try OpenTDB
      if (catDef.opentdb && batch.length < needed()) {
        const got = await this.fetchOpenTDB(catDef.opentdb, Math.min(needed(), 50));
        batch.push(...got);
        if (got.length > 0) await this._wait(600);
      }

      // Try Trivia API
      if (catDef.trivia && batch.length < needed()) {
        const got = await this.fetchTriviaAPI(catDef.trivia, Math.min(needed() - batch.length, 50));
        batch.push(...got);
      }

      // Try Claude AI
      if (batch.length < needed()) {
        const got = await this.fetchAI(
          catDef.prompt,
          Math.min(needed() - batch.length, 30),
          profile.grade,
          profile.country
        );
        batch.push(...got);
      }

      if (batch.length === 0) break;
      all.push(...batch);

      // Deduplicate
      const seen = new Set();
      all = all.filter(q => {
        const k = q.q.toLowerCase().trim();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });

      if (batch.length < 10) break;
      await this._wait(800);
    }

    // Pad with fallback if short
    if (all.length < total) {
      const fb = FALLBACK_QUESTIONS[catDef.key] || FALLBACK_QUESTIONS["General Knowledge"];
      let pool = [];
      while (pool.length < needed()) pool.push(...this._shuffle(fb));
      // Deduplicate fallback against what we have
      const existing = new Set(all.map(q => q.q.toLowerCase().trim()));
      const fresh = pool.filter(q => !existing.has(q.q.toLowerCase().trim()));
      all.push(...fresh.slice(0, needed()));
      // If still short, just add (may repeat)
      if (all.length < total) {
        all.push(...this._shuffle(pool).slice(0, total - all.length));
      }
    }

    if (onProgress) onProgress('');
    return all.slice(0, total);
  },

  // Helpers
  _decode(str) {
    const el = document.createElement('textarea');
    el.innerHTML = str;
    return el.value;
  },

  _shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  _wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }
};
