/* ═══════════════════════════════════════════
   AUDIO.JS — Chiptune sound engine
   All sounds synthesized via Web Audio API
   Zero copyright issues, zero dependencies
   ═══════════════════════════════════════════ */

const Audio = {
  _ctx: null,
  _started: false,
  _muted: false,
  _bgOsc: null,
  _bgGain: null,
  _bgInterval: null,

  async init() {
    if (this._started) return;
    try {
      this._ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (this._ctx.state === 'suspended') await this._ctx.resume();
      this._started = true;
      this._muted = Storage.getMuted();
    } catch {}
  },

  _play(freq, type, duration, delay = 0, vol = 0.15) {
    if (this._muted || !this._started || !this._ctx) return;
    try {
      const osc = this._ctx.createOscillator();
      const gain = this._ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, this._ctx.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, this._ctx.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(this._ctx.destination);
      osc.start(this._ctx.currentTime + delay);
      osc.stop(this._ctx.currentTime + delay + duration);
    } catch {}
  },

  tap() {
    this._play(784, 'square', 0.06, 0, 0.08);
  },

  correct() {
    if (this._muted || !this._started) return;
    this._play(523, 'square', 0.12, 0, 0.12);
    this._play(659, 'square', 0.12, 0.08, 0.12);
    this._play(784, 'square', 0.12, 0.16, 0.12);
    this._play(1047, 'square', 0.2, 0.24, 0.15);
  },

  wrong() {
    if (this._muted || !this._started) return;
    this._play(330, 'sawtooth', 0.2, 0, 0.1);
    this._play(311, 'sawtooth', 0.25, 0.15, 0.1);
  },

  fanfare() {
    if (this._muted || !this._started) return;
    const notes = [523, 659, 784, 1047, 784, 1047];
    notes.forEach((f, i) => this._play(f, 'square', 0.18, i * 0.1, 0.12));
    // Chord at end
    setTimeout(() => {
      this._play(523, 'square', 0.4, 0, 0.08);
      this._play(659, 'square', 0.4, 0, 0.08);
      this._play(784, 'square', 0.4, 0, 0.08);
      this._play(1047, 'triangle', 0.5, 0, 0.1);
    }, 650);
  },

  badge() {
    if (this._muted || !this._started) return;
    this._play(784, 'triangle', 0.15, 0, 0.12);
    this._play(988, 'triangle', 0.15, 0.1, 0.12);
    this._play(1175, 'triangle', 0.15, 0.2, 0.12);
    this._play(1568, 'triangle', 0.25, 0.3, 0.15);
  },

  levelUp() {
    if (this._muted || !this._started) return;
    const seq = [523, 587, 659, 784, 1047];
    seq.forEach((f, i) => this._play(f, 'square', 0.15, i * 0.08, 0.1));
    setTimeout(() => {
      this._play(523, 'square', 0.3, 0, 0.06);
      this._play(659, 'square', 0.3, 0, 0.06);
      this._play(784, 'square', 0.3, 0, 0.06);
    }, 500);
    setTimeout(() => {
      this._play(587, 'square', 0.3, 0, 0.06);
      this._play(698, 'square', 0.3, 0, 0.06);
      this._play(880, 'square', 0.3, 0, 0.06);
    }, 700);
    setTimeout(() => {
      this._play(659, 'square', 0.4, 0, 0.08);
      this._play(784, 'square', 0.4, 0, 0.08);
      this._play(1047, 'triangle', 0.5, 0, 0.1);
    }, 900);
  },

  startBgMusic() {
    if (this._muted || !this._started || !this._ctx || this._bgInterval) return;
    const notes = [262, 330, 392, 440, 392, 330, 262, 294, 349, 440, 392, 349, 294, 330, 392, 523];
    let i = 0;
    this._bgInterval = setInterval(() => {
      this._play(notes[i % notes.length], 'triangle', 0.3, 0, 0.04);
      i++;
    }, 545); // ~110 BPM
  },

  stopBgMusic() {
    if (this._bgInterval) {
      clearInterval(this._bgInterval);
      this._bgInterval = null;
    }
  },

  toggleMute() {
    this._muted = !this._muted;
    Storage.saveMuted(this._muted);
    if (this._muted) this.stopBgMusic();
    return this._muted;
  },

  isMuted() {
    return this._muted;
  }
};
