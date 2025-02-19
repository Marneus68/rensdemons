
const LEVELSTATES = {
  _states: new FluidMap(),
  _local_states: new FluidMap(),

  factory: {
    export: function(){
      // Make sure we have the latest state.
      LEVELSTATES.register_current();
      return LEVELSTATES._states.export();
    },

    make_new: function() {
      LEVELSTATES._states = new FluidMap();
    },

    import: function(save) {
      var c = LEVELSTATES._states;
      LEVELSTATES._states = new FluidMap(save);
      LEVELSTATES._states.merge(c);
    },
  },

  get_position: function(level) {
    var saved = LEVELSTATES.get_save(level);
    if (saved) {
      return saved.saved_character_position;
    } else {
      return false;
    }
  },

  register_current: function() {
    LEVELSTATES.register_from_save(CURRENTLEVEL.factory.export());
  },

  register_from_save: function(save) {
    CONSOLE.log.levelstate("Saved levelstate for " + save.level_name + "(" + save.saved_character_position + ")");
    if (save.level_name && !save.level_name.startsWith(CURRENTLEVEL.GERERATED_LEVEL_PREFIX) && !save.level_name.endsWith(CURRENTLEVEL.UNSAVED_LEVEL_SUFFIX)) {
      // Do not save generated level states
      LEVELSTATES._states.set([save.level_name], save);
    } else if (save.level_name){
      LEVELSTATES._local_states.set([save.level_name], save);
    }
  },

  get_save: function(level) {
    var state = LEVELSTATES._states.get([level]);
    if (!state){
      state = LEVELSTATES._local_states.get([level]);
    }
    return state;
  },
};
