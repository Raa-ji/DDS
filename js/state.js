// Sound City - The Date
// State Management Module

export const gameState = {
  // Vibe Trackers
  vibes: {
    stability: 0,
    excitement: 0
  },

  // Observation flags
  flags: {},

  // Current scene ID
  currentScene: null,

  // Load saved game from localStorage
  load() {
    const saved = localStorage.getItem('soundCitySave');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.vibes = parsed.vibes || { stability: 0, excitement: 0 };
        this.flags = parsed.flags || {};
        this.currentScene = parsed.currentScene || null;
      } catch (e) {
        console.error('Failed to load save data:', e);
      }
    }
  },

  // Save current state to localStorage
  save() {
    const data = {
      vibes: this.vibes,
      flags: this.flags,
      currentScene: this.currentScene
    };
    localStorage.setItem('soundCitySave', JSON.stringify(data));
  },

  // Update vibe tracker
  updateVibe(tracker, value) {
    if (this.vibes[tracker] !== undefined) {
      this.vibes[tracker] += value;
      // Clamp values between -10 and 10
      this.vibes[tracker] = Math.max(-10, Math.min(10, this.vibes[tracker]));
      this.save();
    }
  },

  // Set a flag
  setFlag(flagName, value = true) {
    this.flags[flagName] = value;
    this.save();
  },

  // Check if a flag exists and is true
  hasFlag(flagName) {
    return !!this.flags[flagName];
  },

  // Reset game state
  reset() {
    this.vibes = { stability: 0, excitement: 0 };
    this.flags = {};
    this.currentScene = null;
    localStorage.removeItem('soundCitySave');
  }
};

// Initialize state on load
gameState.load();
