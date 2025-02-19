
// We encode the seed in the level name to rebuild on save, keep state, etc...
const GENERATEDLEVELS = {

  blank: {
    setup: function() {
      var name = CURRENTLEVEL.GERERATED_LEVEL_PREFIX + "blank_" + CURRENTLEVEL.level_name;
      CURRENTLEVEL.setup(name);
    },

    load: function(name) {
      var decode = name.split("_");
      var type = name.substring(decode[0].length + 1);

      var f = new S_Floor(1000,1000,250,250);
      var e = new S_ExitFloor(1100,1025,50,50, type);

      CONSOLE.log.debug("waiting for something to happen?");
      AUDIO.music.levels.house();
      e.initialize_with_character();
    },
  },

  house: {
    setup: function(type, seed) {
      var name = CURRENTLEVEL.GERERATED_LEVEL_PREFIX + "house_" + type + "_" +seed;
      CURRENTLEVEL.setup(name);
    },

    load: function(name) {
      var decode = name.split("_");
      var type = decode[1];
      var seed = decode[2];
      var h = new HouseGenerator(type, seed, CURRENTLEVEL.previous_lvl);
      var c = h.build();
      AUDIO.music.levels.house();
      c.initialize_with_character();
    },
  },

  store: {
    setup: function(type, threshold, seed) {
      var name = CURRENTLEVEL.GERERATED_LEVEL_PREFIX + "store_" + type + "_" + threshold + "_" + seed;
      CURRENTLEVEL.setup(name);
    },

    load: function(name) {
      var decode = name.split("_");
      var type = decode[1];
      var threshold = decode[2];
      var seed = decode[3];
      var h = new StoreGenerator(type, threshold, seed, CURRENTLEVEL.previous_lvl);
      var c = h.build();
      CURRENTLEVEL.initialize_with_character(c[0], c[1]);
    },
  },

  altar: {
    load: function(name) {
      var decode = name.split("_");
      var type = decode[1];
      var seed = decode[2];
      new S_TownFloor(1050, 1550, 500, 500, "050_hell_map", "assets/patterns/lava.png");
      AUDIO.music.levels.hell();
      new S_Altar(1275, 1325, type);


      var gen = new Generator(DICTIONARY.get("world_seed") + seed);
      var decor = new Filler(gen.get(), 40, 40);

      decor.add_default_constructor("S_HellPlantLeaning");
      decor.add_default_constructor("S_HellPlantSretching");
      decor.add_default_constructor("S_HellPlantSlimy");
      decor.add_default_constructor("S_HellPlantLoops");
      decor.add_default_constructor("S_Spike");

      decor.set_tries(8, 20);
      decor.set_zone(1050, 1550, 500, 500);
      decor.fill_decor_by_retry();

      CURRENTLEVEL.initialize_with_character(1250, 1525);
    },
  },
};
