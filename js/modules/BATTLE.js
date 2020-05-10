
const BATTLE = {
  player_actions: [],
  monster_actions: [],
  current_battle: "",
  previous_position: undefined,
  callback: undefined,

  clear: function() {
    BATTLE.player_actions = [];
    BATTLE.monster_actions = [];
    BATTLE.callback = undefined;
    BATTLE.previous_position = undefined;
    BATTLE.current_battle = "";
  },

  player_turn: function() {
    var options = [];
    for (var i in BATTLE.player_actions){
      (function(index){
        var f = function() {
          var text = BATTLE.player_actions[index]();
          // If I don't go through timeout, I think the event canceling blocks IO for the banner.
          if (text) {
            setTimeout(function(){
              TextBannerSequence.make(text, BATTLE.play_monster);
            }, 200);
          } else {
            setTimeout( BATTLE.play_monster, 200);
          }
          return true;
        };

        options.push({"text": index, "effect": f});
      })(i);

    }
    new BattleMenu("", options);
  },

  monster_turn: function(text) {
    TextBannerSequence.make([text], BATTLE.player_turn);
  },

  play_monster: function () {
    RANDOM.pick(BATTLE.monster_actions)();
  },

  prepare_doom: function (doom){
    BATTLE.monster_actions = [
      function() {
        TextBannerSequence.make([doom], BATTLE.loss);
      }
    ];
  },

  prepare_win: function (text){
    BATTLE.monster_actions = [
      function() {
        TextBannerSequence.make([text], BATTLE.win);
      }
    ];
  },

  start: function(text) {
    BATTLE.monster_turn(text);
  },

  end: function(text) {
    PALETTE.color_interface();
  },

  _loss: function() {
    BATTLE.end();
    setTimeout ( function() { LEVEL.setup("gameover");}, 1000);
  },

  loss: function() {
    setTimeout (BATTLE._loss, 1000);
  },

  _win: function(text) {
    BATTLE.end();
    LEVEL.factory.import(BATTLE.previous_position);

    if (BATTLE.callback){
      setTimeout(BATTLE.callback, 200);
    }
  },

  win: function(text) {
    setTimeout (BATTLE._win, 1000);
  },

  setup_animation: function (previous_position) {
      var pos = previous_position.saved_character;
      var html_rectangle = document.createElement('div');
      html_rectangle.style.background =  PALETTE.color('obj_dark').code();
      html_rectangle.style.top = pos[1] + "px";
      html_rectangle.style.left = pos[0] + "px";
      html_rectangle.class = "expanding_div";
      html_rectangle.classList.add("expanding_div");
      LEVEL.html().appendChild(html_rectangle);
      console.log(html_rectangle);
  },

  _setup: function(name, callback, previous_position) {
    LEVEL.clear();
    BATTLE.clear();
    PALETTE.color_for_battle();
    BATTLE.previous_position = previous_position;
    BATTLE.current_battle = name;

    if(callback) {
      BATTLE.callback = callback;
    }

    new Import("battles/" + name);
    CONSOLE.sys_log("- Loaded battle " + name);
  },

  setup: function(name, callback, previous_position) {
    IO.control.cede();

    if (!previous_position) {
      previous_position = LEVEL.factory.export();
    }

    BATTLE.setup_animation(previous_position);
    setTimeout ( function() { BATTLE._setup(name, callback, previous_position); }, 1000);
  },

  reload: function(){
    BATTLE.setup(BATTLE.current_battle, BATTLE.callback, BATTLE.previous_position);
  },

  can_reload: function(){
    return (BATTLE.current_battle != "");
  },
};
