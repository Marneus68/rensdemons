
const THAUMATURGY = {
  teleport: false,
  smite: false,

  is_visible: function(){
    return STATS.ending(ENDINGS.God);
  },

  toggle_teleport: function() {
    THAUMATURGY.teleport = ! THAUMATURGY.teleport;
  },

  toggle_smiting: function() {
    THAUMATURGY.smite = ! THAUMATURGY.smite;
  },

  remove_fog: function() {
    FOG.stop();
  },

  remove_camera_lock: function() {
    document.body.style.overflow = "scroll";
  },

  run_faster: function() {
    MovingObject._RUNNING_BONUS = 10;
  },

  get_all_abilities: function() {
    for(var i of Object.keys(ABILITY)){
      if (typeof ABILITY[i] == "function"){
        continue;
      }
      ABILITIES.unlock(ABILITY[i]);
    }
  },

  get_all_party_members: function() {
    for(var i of Object.keys(PARTYMEMBERS)){
      if (typeof PARTYMEMBERS[i] == "function"){
        continue;
      }
      if (i != PARTYMEMBERS.Ren){
        PARTY.add(i);
      }
    }
  },

  get_all_items: function() {
    for(var i of Object.keys(ITEM)){
      if (typeof ITEM[i] == "function"){
        continue;
      }
      INVENTORY.increase(ITEM[i]);
    }
  },

  boost_martyrdom: function(){
    for(var m of Object.keys(MARTYRDOMS)){
      MARTYRDOM._progress.increment([MARTYRDOMS[m]]);
    }
  },

  change_colors: function() {
    PALETTE.factory.make_new();
  },

  glitch: function() {
    GLITCH.screen.glitch();
  },

  force_observer_effect: function(){
    GLITCH.berkeley.make_god_observer();
  },

  menu: function() {
    new CenteredTextMenu("Miracles",
                  [
                    {"text": "Run faster", "effect": THAUMATURGY.run_faster},
                    {"text": (THAUMATURGY.teleport? "Dea" : "A") + "ctivate teleport", "effect": THAUMATURGY.toggle_teleport},
                    {"text": (THAUMATURGY.smite? "Dea" : "A") + "ctivate smiting", "effect": THAUMATURGY.toggle_smiting},
                    TEXTMENU_EMPTYROW,
                    {"text": "Fast travel", "effect": THAUMATURGY.menu_fast_travel},
                    {"text": "Go to White Space", "effect": GENERATEDLEVELS.blank.setup},
                    TEXTMENU_EMPTYROW,
                    {"text": "Change colors", "effect": THAUMATURGY.change_colors},
                    {"text": "Glitch", "effect": THAUMATURGY.glitch},
                    {"text": "Remove fog", "effect": THAUMATURGY.remove_fog},
                    {"text": "Remove camera lock", "effect": THAUMATURGY.remove_camera_lock},
                    {"text": "Force observer effect", "effect": THAUMATURGY.force_observer_effect},
                    TEXTMENU_EMPTYROW,
                    {"text": "Get all items", "effect": THAUMATURGY.get_all_items},
                    {"text": "Get all abilities", "effect": THAUMATURGY.get_all_abilities},
                    {"text": "Get all party members", "effect": THAUMATURGY.get_all_party_members},
                    {"text": "Boost martyrdom", "effect": THAUMATURGY.boost_martyrdom},

                    TEXTMENU_EMPTYROW,
                    {"text": "Back to game", "effect": "##CLOSE"}
                 ]);
  },

  menu_fast_travel: function(){
    var ft =
    [
      {"text": "Nowhere", "effect": "##CLOSE"},
      TEXTMENU_EMPTYROW,
    ];

    var effectFunction = function(destination){
      var setup =  function(){ CURRENTLEVEL.setup(destination)};

      if(!["010_world_map", "050_hell_map"].includes(destination)){
        return function(){
          TextBannerSequence.make([
            RANDOM.pick([
              `The decor fades around you as you teleport to your destination.`,
              `The world starts spinning around you and you need to close your eyes to not get sick.`,
              `You concentrate and manipulate the fabric of the universe to change your location.`,
            ]),
            RANDOM.pick([
              `Everyone screams in panic when you appear in the middle of the town, but before long life has taken back its course.`,
              `Citizens watch you in terror as you pop into existence unnaturally in the middle of the city.`,
              `Everyone around is traumatized by your sudden appearance out of thin air. Children are crying, villagers are screaming, priests are calling for heresy sanctions. It takes a while before the town is back to its normal state.`,
            ]),
          ], setup);
        }
      }

      return setup;
    };

    var add_destination = function(name, destination){
      ft.push(
        {"text": name, "effect": function(){ var f = effectFunction(destination); f();}}
      );
    };

    add_destination(DICTIONARY.get("town_1"), "005_town1");
    add_destination(DICTIONARY.get("town_2"), "020_town2");
    add_destination(DICTIONARY.get("town_3"), "040_town3");
    add_destination(DICTIONARY.get("town_4"), "021_town4");
    add_destination(DICTIONARY.get("town_5"), "022_town5");
    add_destination("World map", "010_world_map");
    add_destination("Hell", "050_hell_map");

    new CenteredTextMenu("Fast travel to...", ft);
  },

  react_to_click: function(x,y) {
    if (THAUMATURGY.teleport && IO.interface._can_open_escape_menu()){
      CHARACTER.character.destroy();
      CHARACTER.initialize(x, y);
    }

    if(THAUMATURGY.smite && IO.interface._can_open_escape_menu()){
      var obj = CURRENTLEVEL.io.select_interactible_at(x,y);
      if(obj) {
        obj.destroy();
        GLITCH.screen.glitch();
      }
    }
  },
}
