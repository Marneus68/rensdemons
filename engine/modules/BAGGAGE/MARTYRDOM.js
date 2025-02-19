
const MARTYRDOMS = {
  Reflex: "dodge speed",
  Elusiveness: "dodge precision",
  Foresight: "enemy predictability",

  Negociation: "barter skill",
  Learning: "learning rate",

  Movement: "walking speed",
  Vision: "sight range",
}


const MARTYRDOM = {
  _progress: new FluidMap(),
  _spare_points: 0,
  _spare_seen_points: 0,

  factory: {
    export: function() {
      return {
        progress: MARTYRDOM._progress.export(),
        points: MARTYRDOM._spare_points,
      };
    },

    import: function(save) {
      MARTYRDOM._progress = new FluidMap(save.progress);
      MARTYRDOM._spare_points = save.points;
    },

    make_new: function(continu) {
      if(!continu) {
        MARTYRDOM._progress = new FluidMap();
        MARTYRDOM._spare_points = 0;
      }
    },
  },

  death: function(inc) {
    if(!inc) {
      inc = 1 + STATS.get(STAT.Endings);
    }
    MARTYRDOM._spare_points += inc;
  },

  purchase: function(category_index) {
    var p = MARTYRDOM._get.price(category_index);
    if (p <= MARTYRDOM._spare_points){
      MARTYRDOM._progress.increment([MARTYRDOMS[category_index]]);
      MARTYRDOM._spare_points -= p;
      MARTYRDOM.display._fill_menu();
      new AlertTextBox("Acquired " + MARTYRDOMS[category_index]);
      // in case we buy fog
      FOG.moveToChar();
    } else {
      new AlertTextBox(`Not enough martyrdom`);
    }
  },

  effect: function(category) { // scale of 0 to 1
    var ladder = [0, 0.02, 0.05, 0.1, 0.3, 0.5, 0.7, 0.8, 0.85, 0.9];
    var n = MARTYRDOM._get.lvl(category);
    if(n <= 9){
      return ladder[n];
    } else {
      return 1-0.1/(n-8);
    }
  },

  _get: {
    lvl: function(category) {
      var lvl = MARTYRDOM._progress.get([category]);
      if (!lvl){ lvl = 0; }
      return lvl;
    },

    price: function(category_index) {
      var ladder = [2, 4, 6, 12, 20, 50, 75, 100];
      var n = MARTYRDOM._get.lvl(MARTYRDOMS[category_index]);
      if(n <= 7){
        return ladder[n];
      } else {
        return 100*(n-6);
      }
    },
  },

  display: {
    notif: function(){
        return (MARTYRDOM._spare_points > MARTYRDOM._spare_seen_points);
    },

    _category: function(category_index){
      var category = MARTYRDOMS[category_index];
      return `${category} [${STRING_UTILS.romanize(MARTYRDOM._get.lvl(category)+1)}] (cost ${MARTYRDOM._get.price(category_index)})`;
    },

    _fill_menu: function(){
      if(!MARTYRDOM.menu){return;}
      var title = "<b>Martyrdom</b><hr/>";
      if (MARTYRDOM._spare_points > 0){
        title += "Unspent: " + MARTYRDOM._spare_points + "<br />";
      } else {
        title += "No spare martyrdom<br />";
      }
      title += "Pray for better...";
      var options = [];
      for(var i in MARTYRDOMS){
        (function (index){
          options.push({
            "text": MARTYRDOM.display._category(index),
            "effect": function(){ MARTYRDOM.purchase(index); },
            "keep_open": true
          });
        })(i);
      }
      options.push({"text": "", "effect": function(){}, "keep_open": true});
      options.push({"text": "Suicide", "effect": suicide});
      options.push({"text": "Don't pray now", "effect": "##CLOSEWITHFOLLOW"});
      MARTYRDOM.menu.change(title, options);
      MARTYRDOM.menu.print_menu();
      MARTYRDOM._spare_seen_points = MARTYRDOM._spare_points;
      INTERFACE.draw.escape_button();
    },

    menu: function() {
      MARTYRDOM.menu = new CenteredTextMenu();
      MARTYRDOM.display._fill_menu();
    },
  },
}
