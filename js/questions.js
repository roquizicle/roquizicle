/* ═══════════════════════════════════════════
QUESTIONS.JS — Grade-appropriate question engine
Priority: GRADED_QUESTIONS (local) → FALLBACK → recycle
APIs DISABLED — they are not grade-appropriate for kids.
═══════════════════════════════════════════ */

const QuestionEngine = {
// ── Source 1 (PRIMARY): Built-in graded question banks ──
fetchGraded(catKey, grade) {
if (typeof GRADED_QUESTIONS === ‘undefined’) return [];
const catBank = GRADED_QUESTIONS[catKey];
if (!catBank) return [];
const g = String(grade);
const gradeKey = g + (g === ‘1’ ? ‘st’ : g === ‘2’ ? ‘nd’ : g === ‘3’ ? ‘rd’ : ‘th’) + ’ Grade’;
const questions = catBank[gradeKey];
if (!questions || !questions.length) return [];
return this._shuffle([…questions]);
},

// ── Combined fetcher: graded banks → fallback → recycle ──
async fetch(catDef, total, profile, onProgress) {
let all = [];
const needed = () => total - all.length;


// STEP 1: Pull from built-in graded question banks (PRIMARY)
if (onProgress) onProgress('Loading questions...');
const graded = this.fetchGraded(catDef.key, profile.grade);
if (graded.length > 0) {
  all.push(...graded.slice(0, total));
}

// STEP 2: Pad with FALLBACK bank if still short
if (needed() > 0) {
  const fb = (typeof FALLBACK_QUESTIONS !== 'undefined')
    ? (FALLBACK_QUESTIONS[catDef.key] || FALLBACK_QUESTIONS["General Knowledge"])
    : [];
  if (fb.length > 0) {
    const existing = new Set(all.map(q => q.q.toLowerCase().trim()));
    const fresh = this._shuffle([...fb]).filter(q => !existing.has(q.q.toLowerCase().trim()));
    all.push(...fresh.slice(0, needed()));
  }
}

// STEP 3: Recycle graded questions if still short (repeats are better than wrong grade level)
if (needed() > 0 && graded.length > 0) {
  let recycled = 0;
  while (needed() > 0 && recycled < 5) {
    all.push(...this._shuffle([...graded]).slice(0, needed()));
    recycled++;
  }
}

// NOTE: Third-party APIs (OpenTDB, Trivia API) are intentionally DISABLED.
// They return adult-level questions regardless of grade setting,
// which is inappropriate for a kids' app targeting grades 1-5.

// Deduplicate
const seen = new Set();
all = all.filter(q => {
  const k = q.q.toLowerCase().trim();
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

if (onProgress) onProgress('');
return this._shuffle(all).slice(0, total);


},

// Helpers
_shuffle(arr) {
const a = […arr];
for (let i = a.length - 1; i > 0; i–) {
const j = Math.floor(Math.random() * (i + 1));
[a[i], a[j]] = [a[j], a[i]];
}
return a;
}
};
