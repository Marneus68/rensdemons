const INTERFACE = {
  CROSS_CURSOR_DISPLAY_TIME: 200,

  text:{
    _martyrdom_notif: function() {
      if (MARTYRDOM.display.notif()) {
        return "<span style='color:red;font-weight:bold;font-size:40px;'>*</span>";
      } else{
        return "";
      }
    },

    martyrdom: function() {
      return "Martyrdom" + INTERFACE.text._martyrdom_notif();
    },
  },

  game_title_string: function(){
    var number = STRING_UTILS.romanize(Math.max(1, 1+STATS.get(STAT.Endings)));
    return `Ren's Demons ${number}`;
  },

  game_title: function(){
    if(SCREEN.is_mobile()){
      var d = {
        top: -5,
        left:-5,
        height: 130,
        width: Math.floor(SCREEN.width())+10,
      };
    } else {
      var d = {
        top: 75,
        left: Math.floor(SCREEN.width() * 0.5)-250,
        height: 80,
        width: 500,
      };
    }

    var te = new TextElement(d.left,d.top+d.height, d.width, d.height);
    te.write(`<h2 style="text-align:center; margin:10px;text-shadow:#ffffff 0px 0px 8px; font-weight: bold;">${INTERFACE.game_title_string()}</h2>`);

    if(SCREEN.is_mobile()){
      te.container.style.opacity = 0.7;
    }
    return te;
  },

  display: {
    _battle_type_title: function(name){
      var score = BATTLETREE.score.score_category(name);
      var total = BATTLETREE.score.total_category(name);
      if(total < 0){
        total = "";
      } else {
        total = " out of " + total;
      }
      var dname = name.replace(BATTLEOBJECTSMANAGER.prefix, "");
      return `${dname} (${score}${total})`;
    },

    _is_hostile: function(battlename){
      if(battlename.startsWith(BATTLEOBJECTSMANAGER.prefix)){
        return false;
      } else if(battlename.startsWith("encounters")){
        return false;
      }
      return true;
    },

    experience_submenu: function(category) {
      var battles_raw = BATTLETREE.get.battles_of_type(category);
      var battles = [];
      for(var i of battles_raw) {
        battles.push({
          name: i,
          score: BATTLETREE.score.completion(i),
        });
      }
      battles.sort((a, b) => b.score - a.score);

      var battles_options = [];
      for(var i in battles) {
        (function(index){
          var split = battles[index].name.split("/");
          var name = split[split.length - 1];
          var img = BESTIARY.default_picture_address(battles[index].name);
          var prefix = ``;
          if (img){
            prefix = `<img style="width:50px;height:50px;margin:5px;margin-bottom:-5px;opacity:0.7" src="${img}" />`;
          }
          var suffix = BESTIARY.is_empathized(battles[index].name) ? " - empathized": "";
          battles_options.push({
            "text": prefix + name + " (" + battles[index].score + "%" + suffix + ")",
            "effect": function(){ BATTLETREE.display.display_battletree(battles[index].name); },
          });
        }(i));
      };
      for(var i = BATTLETREE.score.score_category(category); i < BATTLETREE.score.total_category(category); i++){
        battles_options.push({"text": "???", "effect": function(){}, "keep_open": true});
      }

      battles_options.push(TEXTMENU_EMPTYROW);
      battles_options.push({"text": "Back to experiences", "effect": "##BACK"});
      battles_options.push({"text": "Back to game", "effect": "##CLOSEWITHFOLLOW"});

      new CenteredTextMenu(`<b>${INTERFACE.display._battle_type_title(category)}</b>`, battles_options);
    },

    experience_menu: function() {
      var battletypes = BATTLETREE.get.all_battles_types();
      var battles_options = [];
      // Hostiles
      for(var i in battletypes) {
        if(!INTERFACE.display._is_hostile(battletypes[i])){
          continue;
        }
        (function(index){
          battles_options.push({
            "text": INTERFACE.display._battle_type_title(battletypes[index]),
            "effect": function(){ INTERFACE.display.experience_submenu(battletypes[index]); },
          });
        }(i));
      };
      // Non hostiles
      battles_options.push(TEXTMENU_EMPTYROW);
      for(var i in battletypes) {
        if(INTERFACE.display._is_hostile(battletypes[i])){
          continue;
        }
        (function(index){
          battles_options.push({
            "text": INTERFACE.display._battle_type_title(battletypes[index]),
            "effect": function(){ INTERFACE.display.experience_submenu(battletypes[index]); },
          });
        }(i));
      };


      battles_options.push(TEXTMENU_EMPTYROW);
      battles_options.push({"text": "Back to game", "effect": "##CLOSEWITHFOLLOW"});

      new CenteredTextMenu(`<b>${DICTIONARY.get(PARTYMEMBERS.Ren)}</b> - level ` + BATTLETREE.score.level() + ` (` + INVENTORY.count(ITEM.XpToken) + ` xp gathered)`,
        battles_options);
    },

    escape_menu: function() {
      AUDIO.effect.page();


      var martyrdom = {"text": "???", "effect": function(){}, "keep_open": true};
      if(STATS.get(STAT.Death) > 0){
        martyrdom = {"text": INTERFACE.text.martyrdom(), "effect": function(){ MARTYRDOM.display.menu(); }};
      }
      var iconography = {"text": "???", "effect": function(){}, "keep_open": true};

      if (THAUMATURGY.is_visible()){
        iconography = {"text": "Eikonographia", "effect": function(){ THAUMATURGY.menu(); }};
      }

      var options = [
        {"text": "Experience", "effect": function(){ INTERFACE.display.experience_menu(); }},
        {"text": "Abilities", "effect": function(){ ABILITIES.display(); }},
        {"text": "Inventory", "effect": function(){ INVENTORY.display(); }},
        {"text": "Party", "effect": function(){ PARTY.display.menu(); }},
        TEXTMENU_EMPTYROW,
        martyrdom,
        iconography,
        TEXTMENU_EMPTYROW,
        {"text": "Options", "effect": function(){ INTERFACE.display.options_menu(); }},
        {"text": "Help", "effect": function(){ INTERFACE.display.help_menu(); }},
        {"text": "Back to title", "effect": function(){ CURRENTLEVEL.setup("titlescreen"); }},
        TEXTMENU_EMPTYROW,
        {"text": "Back to game", "effect": "##CLOSEWITHFOLLOW"},
      ];
      new CenteredTextMenu("", options);
    },



    options_menu: function() {

      var options = [
        {"text": "Change color scheme", "effect": function(){ PALETTE.factory.make_new(); }, "keep_open": true},
        TEXTMENU_EMPTYROW,
        {"text": "Back", "effect": "##BACK"}
      ];

      if (THAUMATURGY.is_visible() && SCREEN.is_mobile()){
        options.push(TEXTMENU_EMPTYROW);
        options.push({"text": "<i style='opacity:0.2;'>console.js</i>", "effect": function(){ BATTLE.api.make("_060/_screen"); }});
      }

      new CenteredTextMenu(`
                   <h3>Audio</h3>
                   <b>Music</b>: <input type="range" min="1" max="100" value="` + (SETTINGS.get('volume_music') * 100) + `" class="slider" id="myRange1" onInput="AUDIO.set_volume('volume_music', this.value/100);"><br />
                   <b>Effects</b>: <input type="range" min="1" max="100" value="` + (SETTINGS.get('volume_sfx') * 100) + `" class="slider" id="myRange2" onInput="AUDIO.set_volume('volume_sfx', this.value/100);">
                   <h3>Battles</h3>
                   <b>Challenge</b>: <input type="range" min="1" max="100" value="` + (SETTINGS.get('challenge_level') * 100) + `" class="slider" id="myRange3" onInput="SETTINGS.set('challenge_level', this.value/100);"><br />
                   <b>Commands</b>:<select onChange="SETTINGS.set('battleorder', this.value);">>
                     <option value="explore" ${SETTINGS.get('battleorder') == "explore" ? "SELECTED" : ""}>Unexplored first</option>
                     <option value="exploit" ${SETTINGS.get('battleorder') == "exploit" ? "SELECTED" : ""} >Winning first</option>
                   </select>
                   `, options);
    },

    credits_menu: function() {
        new CenteredTextMenu(CREDITS.credits, [
               {"text": "Back", "effect": "##BACK"}
            ]);
    },

    cw_menu: function() {
        new CenteredTextMenu(CREDITS.warnings, [
               {"text": "Back", "effect": "##BACK"}
            ]);
    },

    help_menu: function() {
        new CenteredTextMenu(`
           <a href="https://gamefaqs.gamespot.com/company/198099-yo252yo" target="_blank">gamefaq</a>
           `, [
               {"text": "Back", "effect": "##BACK"}
            ]);
    },

    print_achieve:{
      party: function(){
        var r = "<div style='float:left;clear:both;position:relative;display:block;margin-bottom:20px;'>";
        for(var i in PARTYMEMBERS){
          if (i == PARTYMEMBERS.Ren){
            if(STATS.flag("MirrorConversation")){
              r += "<div id='achievement_menu_slot_" + i + "' onClick='AUDIO.music.characters.Ren();' style='border: thick double #aaaaaa;float:left;position:relative;display:block;width:125px;height:125px;'></div>";
            } else{
              r += "<div style='float:left;position:relative;display:block;width:125px;height:125px;border: thick double #aaaaaa;opacity:0.3;'></div>";
            }
          } else if(STATS.unlocked(i)){
            r += "<div id='achievement_menu_slot_" + i + "' onClick='AUDIO.music.characters." + i +"();' style='border: thick double #aaaaaa;float:left;position:relative;display:block;width:125px;height:125px;'></div>";
          } else if(PARTYMEMBERS.isPartyMember(i)){
            r += "<div style='float:left;position:relative;display:block;width:125px;height:125px;border: thick double #aaaaaa;opacity:0.3;'></div>";
          }
        }
        r+="</div>";
        return r;
      },

      artifacts: function(){
        var r = "<div style='float:left;clear:both;position:relative;display:block;margin-bottom:20px;'>";
        for(var i of ITEMS_ARCHETYPES[ITEMS_ARCHETYPES_NAMES.Artifact]){
          if(STATS.unlocked(i)){
            r += "<div id='achievement_menu_slot_" + i + "' onClick='AUDIO.music.interface.artifact();' style='border: thick double #aaaaaa;float:left;position:relative;display:block;width:50px;height:50px;'></div>";
          } else if(ITEM.isItem(i)){
            r += "<div style='float:left;position:relative;display:block;width:50px;height:50px;border: thick double #aaaaaa;opacity:0.3;'></div>";
          }
        }
        r+="</div>";
        return r;
      },

      endings: function(){
        var r = `<h4 style="clear:both;display:block;">False endings</h4>`;
        for(var i in ENDINGS){
          if(ENDINGS[i] == ENDINGS.Game){
            r += `<h4 style="clear:both;display:block;">True endings</h4>`;
          }

          if(STATS.ending(ENDINGS[i])){
            r += `<span id='${ENDINGS[i]}'>&lt;${ENDINGS[i]}&gt;</span> `;
          } else {
            r += `<span style='opacity:0.2' id='${ENDINGS[i]}'>&lt;${ENDINGS[i]}&gt;</span> `;
          }
        }
        return r;
      },
    },

    achievements: function() {
          new CenteredTextMenu(`
        <h4 style="clear:both;display:block;">Threads of fate exploration</h4>
        ${STATS.get(STAT.MaxExplorationScore)} (level ${BATTLETREE.score.level(STATS.get(STAT.MaxExplorationScore))}/100)
        <h4 style="clear:both;display:block;">Party members</h4>
        ${INTERFACE.display.print_achieve.party()}
        <h4 style="clear:both;display:block;">Legendary weapons</h4>
        ${INTERFACE.display.print_achieve.artifacts()}
        ${INTERFACE.display.print_achieve.endings()}
           `, [
               {"text": "Back", "effect": "##BACK"}
            ]);

        for(var i in PARTYMEMBERS){
          if(document.getElementById('achievement_menu_slot_' + i)){
            var d = document.getElementById('achievement_menu_slot_' + i);
            new LayeredImage("assets/portraits_large/" + i + "_$.png", 125, 125, d);
          }
        }
        for(var i of ITEMS_ARCHETYPES[ITEMS_ARCHETYPES_NAMES.Artifact]){
          if(document.getElementById('achievement_menu_slot_' + i)){
            var d = document.getElementById('achievement_menu_slot_' + i);
            new LayeredImage("assets/portraits_large/" + i + "_$.png", 50, 50, d);
          }
        }
    },
  },

  _click_marker_end: function () {
    var element = document.getElementById("IME_click_confirmation_cross");
    element.style.visibility = "hidden";
  },

  // should this be in IO ?
  click_marker: function(x,y, is_hold) {
    var element = document.getElementById("IME_click_confirmation_cross");
    element.style.left = x-12;
    element.style.top = y-12;
    element.style.visibility = "visible";
    AUDIO.effect.clickmove(is_hold);

    if(INTERFACE._previous_timeout){
      clearTimeout(INTERFACE._previous_timeout);
    }
    INTERFACE._previous_timeout = setTimeout(INTERFACE._click_marker_end, INTERFACE.CROSS_CURSOR_DISPLAY_TIME);
  },


  draw: {
    escape_button: function() {
      var escape_button = document.getElementById('IFE_escape_menu_button');
      escape_button.style.background = PALETTE.text_background().code();
      escape_button.style.borderColor = PALETTE.text_border().code();
      escape_button.style.color = PALETTE.text_color().code();

      var m = "&nbsp;" + INTERFACE.text._martyrdom_notif();
      if (m == "&nbsp;"){
        m = "...";
      }
      escape_button.innerHTML = m;
    },

    click_marker: function() {
      var canvas =  document.getElementById("IME_click_confirmation_cross");
      HTML.canvas.draw(canvas, "assets/interface/cross.png", "player");
    },
  },

  color_interface: function() {
    document.body.style.backgroundColor = PALETTE.body_color().code();
    INTERFACE.draw.escape_button();
    INTERFACE.draw.click_marker();
    CURRENTLEVEL.system.redraw();
    FOG.recolor(PALETTE.fog_color());
    if(BATTLE.current_battle){
      PALETTE.color_for_battle();
    }
  },

  make_compass: function() {
    var compass = new StaticSprite("assets/interface/windrose.png", 'player');
    compass.container.id="fog_adjacent";
    compass.container.style.zIndex = 11000;
  },

  is_trial: function(){
    return window.location.href.includes("trial");
  },

  start_game: function(){
    if (INTERFACE.is_trial()){
      CURRENTLEVEL.setup("demo/town");
    } else {
      CURRENTLEVEL.setup("000_introduction$");
    }
  },

  autosave_notif: function(){
    new AlertTextBox("AUTOSAVING...");
  },
}

var man = function() {
  CONSOLE.log.input("> Opening manual page");
  var w;
  if(window.navigator.onLine) {
    w = window.open("https://github.com/yo252yo/rensdemons/blob/master/man.md");
  } else {
    w = window.open("man.md");
  }
  if(!w || w.closed || typeof w.closed=='undefined')
  {
    CONSOLE.error("Error opening manual page, check for blocked popups or navigate to https://github.com/yo252yo/rensdemons/blob/master/man.md");
  }
}

var help = man;
var h = man;
var hint = man;
var manual = man;

var win = function(){
  if(INTERFACE.is_trial()){
    CURRENTLEVEL.setup("demo/end");
  } else{
    CURRENTLEVEL.setup("end@E");
  }
}

var suicide = function(){
    SAVE.autosave();
    CURRENTLEVEL.setup("gameover$@suicide");
}
