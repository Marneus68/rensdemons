
const STAT = {
  Death: "death",
  Endings: "endings",
  Ledger: "LEDGER",
  MaxExplorationScore: "MaxExplorationScore",
}

const ENDINGS = {
  War: "END OF WAR", // kill demon_lord
  God: "END OF GOD", // kill goddess
  World: "END OF WORLD", // kill goddess and ask for a new world
  Line: "END OF LINE", // code
  Game: "END OF GAME", // leave the game
  Universe: "END OF UNIVERSE", // Fork on git
  // road, world, ear, year, universe, trail, story, day, journey
}

const STATS = {
  _stats: new FluidMap(),

  factory: {
    export: function() {
      return STATS._stats.export();
    },

    import: function(save) {
      STATS._stats.merge(new FluidMap(save));
    },

    make_new: function() {
      // Nothing is needed.
      STATS.record.ending(ENDINGS.Game); // always true when the game is off
    },
  },

  record: {
    death: function(v) {
      AUDIO.effect.unlock();
      STATS._stats.increment([STAT.Death], v);
      DISK.write("STATS");
    },

    ledger: function(l) {
      STATS._stats.set([STAT.Ledger], l);
      DISK.write("STATS");
    },

    flag: function(text, value){
      AUDIO.effect.unlock();
      STATS._stats.increment(["FLAG_" + text], value);
      DISK.write("STATS");
    },

    unlock: function(text, value){
      STATS._stats.increment(["UNLOCK_" + text], value);
      DISK.write("STATS");
    },

    ending: function(text, value){
      AUDIO.effect.unlock();
      STATS._stats.increment(["END_" + text], value);
      STATS._stats.increment([STAT.Endings]);
      DISK.write("STATS");
    },

    set_flag: function(text, value){
      AUDIO.effect.unlock();
      STATS._stats.set(["FLAG_" + text], value);
      DISK.write("STATS");
    },

    maxScore: function(value){
      var g = STATS._stats.get([STAT.MaxExplorationScore]);

      if (!g || g < value){
        STATS._stats.set([STAT.MaxExplorationScore], value);
        DISK.write("STATS");
      }
    },


  },

  get: function(key){
    return STATS._stats.get([key]);
  },

  flag: function(text){
    return STATS._stats.get(["FLAG_" + text]);
  },

  unlocked: function(text){
    return STATS._stats.get(["UNLOCK_" + text]);
  },

  ending: function(text){
    if (text == ENDINGS.Game){
      return false; // can never be true if the game is launched
    }
    return STATS._stats.get(["END_" + text]);
  },
}
