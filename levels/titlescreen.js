AUDIO.music.interface.titlescreen();

var ss0 = new StaticSprite("assets/screens/title_layer0.png", 'player');
var s0 = new LevelObject(ss0, 0, SCREEN.height());

var ss1 = new StaticSprite("assets/screens/title_layer1.png", 'background');
var s1 = new LevelObject(ss1, 0, SCREEN.height());

var ss2 = new StaticSprite("assets/screens/title_layer2.png", 'obj_light');
var s2 = new LevelObject(ss2, 0, SCREEN.height());


function adapt_sprite(s, depth) {
  if(!s.visual_element.drawn){
    setTimeout(function(){ adapt_sprite(s, depth); }, 100);
    return;
  }

  if(SCREEN.is_mobile()){
    s.visual_element.container.style.top = "-300px";
    s.visual_element.container.style.left =  "-200px";
    s.visual_element.html_canvas.style.left =  "-200px";
  } else {
    s.visual_element.container.style.right =  "0px";
    s.visual_element.html_canvas.style.right =  "0px";
    s.visual_element.container.style.top = "0px";
  }
  s.visual_element.container.style.height = "100%";
  s.visual_element.html_canvas.style.height = "100%";
  s.visual_element.html_canvas.style.position = "fixed";
  s.visual_element.adjust_depth(depth);

  s.visual_element.draw = function (){
    s.visual_element.tint();
  }
}

var adapt_all_sprite = function(){
  adapt_sprite(s0, 0);
  adapt_sprite(s1, 1);
  adapt_sprite(s2, 2);
}
adapt_all_sprite();


var options = [];
var title = "";
if (INTERFACE.is_trial()) {
  document.title = "Ren's DEMO";
  title = "<span style='font-size:14px;'>Demo version of the RPG Ren's Demons by yo252yo, giving a taste of the atmosphere/mechanics/design with a 30min-1h totally standalone different story (i.e. no spoil).</span>";
} else {
  document.title = INTERFACE.game_title_string();
  INTERFACE.game_title();
}
if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){
  title += "<span style='font-size:14px;font-weight:bold;color:red;'>WARNING: It looks like you are using a web browser like Safari which does not respect all HTML standards and prevents developpers from debugging their code. The game may not run smoothly unless you change browser.</span>";
}

options.push({"text": "New game", "effect": function(){ INTERFACE.start_game() }});
options.push({"text": "Load past save", "effect": function(){ SAVE.print.load_menu(); } });
options.push(TEXTMENU_EMPTYROW);
options.push({"text": "Options", "effect": function(){ SETTINGS.options_menu(); }});

if (!INTERFACE.is_trial()) {
  options.push({"text": "Completion", "effect": function(){ INTERFACE.display.achievements(); }});
}

options.push(TEXTMENU_EMPTYROW);
if(navigator.userAgent.includes("Electron")){
  options.push({"text": "Change language", "effect": function(){ INTERFACE.display.translations(); }});
}
options.push({"text": "Content warnings", "effect": function(){ INTERFACE.display.cw_menu(); }});
options.push({"text": "Credits", "effect": function(){ INTERFACE.display.credits_menu(); }});

if (INTERFACE.is_trial()) {
  options.push({"text": "Full version", "keep_open": true,"effect": function(){ window.open("https://www.yo252yo.com/rd/qr_code.html"); }});
}



if(SCREEN.is_mobile()){
  var d = {
    top:  Math.floor(SCREEN.height())-400,
    left: Math.floor(SCREEN.width() * 0.5)-150,
    height: 0,
    width:300,
    padding: 5,
  };
} else{
  var d = {
    top: 200,
    left: Math.floor(SCREEN.width() - 700),
    height: 0,
    width: 400,
    padding: 50,
  };
}

if(title) {
  title += "<br /><br />";
}
title += `<span onClick="installWebApp();" id='installSpan' style="display:none;"></span>`;
var te = new TextMenu(title, options, d.left,d.top+d.height, d.width, d.height, d.padding, true);


if(SCREEN.is_mobile()){
  te.container.style.opacity = 0.8;
}
FOG.stop();


var picx = 2000;
var picy = 2000;

var r = new Rectangle (0,SCREEN.height(), picx, picy, undefined, "assets/screens/title_bg.png", true);
r.container.style.position = "fixed";

var noise = function(){
  var x = Math.floor(Math.random() * (picx - SCREEN.width())/10)*10;
  var y = Math.floor(Math.random() * (picy - SCREEN.height())/10)*10;
  r.place_at(-x, SCREEN.height() + y);
  setTimeout(noise, 50);
}
setTimeout(noise, 50);
