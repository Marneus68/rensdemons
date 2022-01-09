// No entry = no ability
// An entry = it leads somewhere
// Entry with DOOM

const BATTLETREE = {
  _targets: new FluidMap(),

  LOSS: 1,
  WIN: 2,
  HIDDEN: 3,
  NOT_TRIED: 4,
  NOTHING: 5,
  ESCAPE: 6,

  factory: {
    export: function() {
      return {
       "tree": BATTLETREE._targets.export(),
     };
    },

    import: function(save){
      BATTLETREE._targets = new FluidMap(save.tree);
    },

    make_new: function(continu){
      if(!continu) {
        BATTLETREE._targets = new FluidMap();
      }
    },
  },

  api: {
    is_unlocked: function(battle, name) {
      var node = BATTLETREE._targets.get([battle, name]);
      return (node != null && !BATTLETREE.get._check_node(node, BATTLETREE.HIDDEN));
    },

    unlock: function(battle, name) {
      if(BATTLETREE.api.is_unlocked(battle, name)){
        return; // already unlocked
      }

      BATTLETREE._targets.set([battle, name], [BATTLETREE.NOT_TRIED]);
      CONSOLE.log.battletree("unlocked: [" + name + "] on " + battle);
      AUDIO.effect.unlock();
    },

    unlock_ability: function(name){
      for (var b in BATTLETREE._targets.get([])) {
        var current = BATTLETREE._targets.get([b, name]);
        if (current) {
          var current = BATTLETREE._targets.set([b, name], [BATTLETREE.NOT_TRIED]);
        }
      }
    },

    lock: function(battle, name) {
      // This could be simply setting HIDDEN, maybe
      BATTLETREE._targets.delete([battle, name]);
      CONSOLE.log.battletree("locked: [" + name + "] on " + battle);
    },

    declare: function(battle, name) {
      if (BATTLETREE._targets.get([battle, name]) != null) {
        return; // already unlocked
      }
        // check inventory and all ???
      BATTLETREE._targets.set([battle, name], [BATTLETREE.HIDDEN]);
      CONSOLE.log.battletree("unknown action discovered ([" + name + "])");
    },

    declare_all: function(battle, names){
      for(var n in names){
        BATTLETREE.api.declare(battle, names[n]);
      }
    },

    develop: function(battle, name, destination) {
      if (!destination) {
        destination = BATTLETREE.NOTHING;
      }

      BATTLETREE.api.unlock(battle, name); // just in case

      var node = BATTLETREE._targets.get([battle, name]);
      if (node.includes(destination)) {    return;   }

      if (BATTLETREE.get._check_node(node, BATTLETREE.NOT_TRIED) || BATTLETREE.get._check_node(node, BATTLETREE.HIDDEN)) {
        BATTLETREE._targets.set([battle, name], []);
      }

      CONSOLE.log.battletree("developed: [" + name + "] -> [" + destination + "] on " + battle);
      BATTLETREE._targets.add([battle, name], destination);
    },
  },

  get: {
    outcome: function(battle, name){
      var node = BATTLETREE._targets.get([battle, name]);
      if(!node || node.length == 0){
        return BATTLETREE.HIDDEN;
      }
      var outcomes = [];
      var has_children = false;
      for (var i in node) {
        var o;
        if([BATTLETREE.LOSS, BATTLETREE.WIN, BATTLETREE.HIDDEN, BATTLETREE.NOT_TRIED, BATTLETREE.NOTHING, BATTLETREE.ESCAPE].includes(node[i])){
          o = node[i];
        } else {
          o = BATTLETREE.get.outcome(battle, node[i]);
          has_children = true;
        }
        if(!outcomes.includes(o)){
          outcomes.push(o);
        }
      }
      if(outcomes.length == 1) {
        if(outcomes[0] == BATTLETREE.NOT_TRIED && has_children){
          return "Unexplored children";
        }
        return outcomes[0];
      }

      return "Leading to several possibilities";
    },

    _check_node: function(node, value){
      return node.length == 1 && node[0] == value;
    },

    all_battles: function(){
      return BATTLETREE.get.battles_of_type("");
    },

    battles_of_type: function(prefix){
      var battles = Object.keys(BATTLETREE._targets.get([]));
      var displayable_battles = [];
      for(var b in battles){
        var hidden = !DEBUG.DISPLAY_ALL_TREES && battles[b].startsWith("_");
        if (!hidden && battles[b].startsWith(prefix)){
          displayable_battles.push(battles[b]);
        }
      }
      return displayable_battles;
    },

    all_battles_types: function(){
      var battles = Object.keys(BATTLETREE._targets.get([]));
      var displayable_battles = [];
      for(var b in battles){
        var hidden = !DEBUG.DISPLAY_ALL_TREES && battles[b].startsWith("_");
        var name = battles[b].split("/")[0];
        if (!hidden && !displayable_battles.includes(name)){
          displayable_battles.push(name);
        }
      }
      return displayable_battles;
    },

    _starters: function(battle) {
      var ancestors = new FluidMap();

      for (var i in BATTLETREE._targets.get([battle])){
        var list = BATTLETREE._targets.get([battle, i]);
        for (var t in list){
          ancestors.add([list[t]], i);
        }
      }
      var starters = [];
      for (var i in BATTLETREE._targets.get([battle])){
        if(ancestors.get([i])) { continue;  }
        if(! BATTLETREE.api.is_unlocked(battle, i) ) { continue;  }

        starters.push([i, ""]);
      }
      return starters;
    },

  },

  score: {
    _score_destination: function(destination) {
      if(destination.length == 0){
        return 0;
      }
      if(destination.length >= 2){
        return 3;
      }

      switch (destination[0]) {
        case BATTLETREE.HIDDEN:
          return 0;
        case BATTLETREE.NOT_TRIED:
          return 1;
        case BATTLETREE.WIN:
        case BATTLETREE.LOSS:
        case BATTLETREE.NOTHING:
        case BATTLETREE.ESCAPE:
          return 3;
        default:
          return 3; // Explored and leads somewhere
      }
    },

    score_battle: function(battle) {
      if (battle.startsWith("_")) {
        return {xp: 0, unseen:0, explored:0};
      }

      var score = 0, unseen = 0, explored = 0;
      for (var i in BATTLETREE._targets.get([battle])) {
        var s = BATTLETREE.score._score_destination(BATTLETREE._targets.get([battle,i]));
        score += s;
        if (s == 1){
          unseen++;
        } else if (s == 3) {
          explored++;
        }
      }
      var r = {xp: score, unseen:unseen, explored:explored};
      return r;
    },

    is_explored: function(battle, command) {
      var outcome = BATTLETREE._targets.get([battle, command]);

      if(!outcome || outcome == BATTLETREE.NOT_TRIED || outcome == BATTLETREE.HIDDEN) {
        return false;
      } else {
        return true;
      }
    },

    completion: function(battle) {
      var actions = BATTLETREE._targets.length([battle]);
      var result = BATTLETREE.score.score_battle(battle).xp / (3*actions);
      return Math.floor(result * 1000) / 10;
    },

    total_xp: function() {
      var score = 0;
      for (var i in BATTLETREE._targets.get([])) {
        score += BATTLETREE.score.score_battle(i).xp;
      }
      STATS.record.maxScore(score);
      return score;
    },

    total_total_xp: function() {
      var score = 0;
      for (var i in BATTLETREE._targets.get([])) {
        var actions = BATTLETREE._targets.length([i]);
        score += 3*actions;
      }
      return score;
    },

    // Clearly this needs balance :) but it will do for now.
    level: function(xp) {
      if(!xp){
        xp = BATTLETREE.score.total_xp();
      }
      if (xp < 100){
        return 1 + Math.floor(xp / 20);
      }
      // total is 12648 xp, lets try to fit it to lvl 100
      return 6 + Math.floor((Math.log(xp) - 4.6) / (9.44 - 4.6) * (100-6));
    },

    score_category: function(prefix){
      var battles = Object.keys(BATTLETREE._targets.get([]));
      var n = 0;
      for(var b in battles){
        var hidden = !DEBUG.DISPLAY_ALL_TREES && battles[b].startsWith("_");
        if (!hidden && battles[b].startsWith(prefix)){
          n ++;
        }
      }
      return n;
    },

    total_category: function(prefix){
      return BESTIARY.size(prefix);
    },
  },

  display: {
    stylize: function(name, battle){
      var display_name = name.trim();
      if (battle == "_treasure") {
        return display_name;
      }
      if(display_name == ABILITY.Escape){ // always displays escape
        return display_name;
      }
      // Used for generated names like party members
      if (DICTIONARY.has(display_name)) {
        display_name = DICTIONARY.get(display_name);
      }

      switch (BATTLETREE.get.outcome(battle, name)) {
        case BATTLETREE.WIN:
          return "<b>" + display_name + "</b>";
        case BATTLETREE.LOSS:
        case BATTLETREE.NOTHING:
        case BATTLETREE.ESCAPE:
          return "<s>" + display_name + "</s>";
        case BATTLETREE.HIDDEN:
        case BATTLETREE.NOT_TRIED:
          return display_name;
        default: // Leads somewhere else.
          return "<i>" + display_name + "</i>";
      }
    },

    _display_targets_element: function(html, to_print, battle) {
      var pair = to_print.pop();
      var ability = pair[0];
      var prefix = pair[1];
      if (prefix){
        html[0] += prefix + "|- ";
      }
      html[0] += "> " + BATTLETREE.display.stylize(ability, battle);

      var target = BATTLETREE._targets.get([battle, ability]);
      if(!target){ target = BATTLETREE.HIDDEN; }

      switch (target[0]){
        case BATTLETREE.NOT_TRIED:
        case BATTLETREE.HIDDEN:
          html[0] += " -> ?????<br/> ";
          break;
        case BATTLETREE.WIN:
          html[0] += " -> <b>WIN</b><br/> ";
          break;
        case BATTLETREE.LOSS:
          html[0] += " -> <s>LOSS</s><br/> ";
          break;
        case BATTLETREE.NOTHING:
          html[0] += " ---<br/> ";
          break;
        case BATTLETREE.ESCAPE:
          html[0] += " -[]<br/> ";
          break;
        default:
          html[0] += "<br/> "
          for(var i in target){
            to_print.push([target[i], prefix + "&nbsp;&nbsp;"]);
          }
          break;
      }
    },

    display_tree: function(battle) {
      var html = [""]; // to pass by reference.
      var to_print = BATTLETREE.get._starters(battle);

      while(to_print.length > 0) {
        BATTLETREE.display._display_targets_element(html, to_print, battle);
      }

      var intro = BESTIARY.introed(battle);
      if(intro){
        intro = `<i>${intro}</i><hr/>`;
      }

      new MenuScreen(`
        <b>${battle}</b> - ${BATTLETREE.score.completion(battle)}%<hr/>
        ${intro}

        ${html[0]}`);
    },
  },

};
