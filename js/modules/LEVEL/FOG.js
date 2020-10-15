
const FOG = {
  VIEWPORT_H: 400,
  VIEWPORT_W: 400,
  MASK_WIDTH: 2*SCREEN.width(),
  MASK_HEIGHT: 2*SCREEN.height(),

  draw: function() {
    var base_obj = {
        w:FOG.MASK_WIDTH,
        h:FOG.MASK_HEIGHT,
        z:10000,
        background: "player",
        position: "absolute",
        opacity: 0.98,
      };
    var border_top = HTML.js.clone(base_obj);
    var border_bot = HTML.js.clone(base_obj);
    var border_left = HTML.js.clone(base_obj);
    var border_right = HTML.js.clone(base_obj);

    Object.assign(border_top, {id: "fog_top"});
    Object.assign(border_bot, {id: "fog_bot"});
    Object.assign(border_left, {id: "fog_left"});
    Object.assign(border_right, {id: "fog_right"});

    CURRENTLEVEL.system.html().appendChild(HTML.div.make(border_top));
    CURRENTLEVEL.system.html().appendChild(HTML.div.make(border_bot));
    CURRENTLEVEL.system.html().appendChild(HTML.div.make(border_left));
    CURRENTLEVEL.system.html().appendChild(HTML.div.make(border_right));

    FOG.move(0,0);
  },

  _stop: function(name){
    var d = document.getElementById(name);
    if(d){
      d.remove()
    }
  },

  stop: function(){
      FOG._stop("fog_top");
      FOG._stop("fog_bot");
      FOG._stop("fog_left");
      FOG._stop("fog_right");
  },

  move: function(x, y){
    document.getElementById("fog_top").style.top = y - FOG.VIEWPORT_H/2 - FOG.MASK_HEIGHT;
    document.getElementById("fog_top").style.left = x - FOG.MASK_WIDTH/2;

    document.getElementById("fog_bot").style.top = y + FOG.VIEWPORT_H/2;
    document.getElementById("fog_bot").style.left = x - FOG.MASK_WIDTH/2;

    document.getElementById("fog_left").style.top = y - FOG.MASK_HEIGHT/2;
    document.getElementById("fog_left").style.left = x - FOG.VIEWPORT_W/2 - FOG.MASK_WIDTH;

    document.getElementById("fog_right").style.top = y - FOG.MASK_HEIGHT/2;
    document.getElementById("fog_right").style.left = x + FOG.VIEWPORT_W/2;
  },

}
