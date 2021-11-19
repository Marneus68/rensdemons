
var end = 0;
var s = CURRENTLEVEL.level_name.split(CURRENTLEVEL.SAME_IMPORT_DIFFERENT_LEVEL_SEPARATOR);
if(s.length > 1){
  end = s[1];
}



AUDIO.music.interface.introduction();

var size = 600;

var map_container = HTML.div.make({
  left: "50%",
  top: 100,
  width: size,
  height: size,
  position: "fixed",
});

map_container.style.marginLeft = "-" + (size/2) + "px";
CURRENTLEVEL.system.html().appendChild(map_container);

function map_canvas(zindex){
  var html_canvas =  HTML.canvas.make(size, size, zindex);
  map_container.appendChild(html_canvas);
  return html_canvas;
}

var base_canvas = map_canvas(10);
var seed_canvas = map_canvas(15);

var base_resource = RESOURCES.get_img("assets/screens/map_base.png");
var seed_resource = RESOURCES.get_img("assets/screens/map_seed.png");

var drawMap = function() {
  var offset1 = RANDOM.int(5000 - size);
  var offset2 = RANDOM.int(5000 - size);

  // Draws the seed
  seed_canvas.getContext('2d').drawImage(seed_resource, offset1, offset2, size, size, 0, 0, size, size);

  // Colors the seed
  HTML.canvas.tint(seed_canvas, "obj_light");

  // Cut to the base
  seed_canvas.getContext('2d').globalCompositeOperation = 'destination-in';
  seed_canvas.getContext('2d').drawImage(base_resource, 0, 0, size, size);
};

var makeMap = function() {
  // Draws the base
  base_canvas.getContext('2d').drawImage(base_resource, 0, 0, size, size);

  // Colors the base
  HTML.canvas.tint(base_canvas, "obj_dark");

  RESOURCES.onload(seed_resource, drawMap);
};

RESOURCES.onload(base_resource, makeMap);


var resetGame = function(){
  DICTIONARY.factory.make_new();
  PALETTE.factory.make_new();
}

var nextNextNextPage = function(){
  resetGame();
  makeMap();
  TextBannerSequence.make([
    "The human realm traversed eons. It moved, divided, reunited, until it came to be known as $$world_name$.",
  ], function(){ CURRENTLEVEL.setup("000_introduction$"); });
  /*
  "During thousands of years, the kingdom of $$world_name$ had enjoyed peace and prosperity.",
  "Of course monarchs fell and rose, and the occasional war broke out, but not much truly threatened the life of its inhabitants.",
  "With the mastery of magic, under the guidance of the Goddess, they developed into a society of abundance and happiness.",
*/
}

var nextNextPage = function(){
  resetGame();
  makeMap();
  TextBannerSequence.make([
    "So too did the planet around it. The world was soon beyond recognition. The relentless march of time went on.",
  ], nextNextNextPage);
}

var nextPage = function(){
  TextBannerSequence.make([
    "The kingdom expanded and spread human dominion over the whole world. As generations passed, it changed.",
  ], nextNextPage);
}






var sequence = [];

if(end == "A"){
  STATS.record.ending(ENDINGS.War);
  sequence = [
    `Congratulations! You have reached the ${ENDINGS.War}.`,
    "With $$demon_lord$ dead, the demon army retreated, and the world of $$world_name$ was at peace at long last. $$Ren$ was heralded as a hero, and named ruler as soon as age allowed it. The capital was rebuilt, grander than ever, and named $$BestFriend$ in honor of your fallen comrade.",
    "Faith remained strong in the kingdom. Demons never came back. This ushered a long era of prosperity where humans were able to develop to new heights.",
  ];
}
if(end == "B"){
  STATS.record.ending(ENDINGS.World);
  sequence = [
    `Congratulations! You have reached the ${ENDINGS.World}.`,
    `Freed from the dominion of the Goddess, the $$demon_lord$ and his armies withdrew from $$world_name$. The divine commands were the only reason for their thirst for blood. Demons and humans quickly bartered peace, with $$Ren$ at the core of the negociations.`,
    `Without the demons on their lands, humans once again knew peace. For orchestrating the end of the war, $$Ren$ was heralded as a hero, and named ruler as soon as age allowed it. But the deicide weighed heavily on the Promised Child's conscience.`,
    `To prevent chaos in the kingdom and for self-protection, $$Ren$ never disclosed to anyone what had happened in the other world. The hero had nobody to share the perpetual interrogations sparked by seeing the mysterious truth of so-called "heaven".`,
    `Under $$Ren$'s leadership, and without the fear of demons, religious influence slowly faded. But nothing lasts forever, and $$Ren$'s life eventually came to an end after kickstarting a new era of prosperity. The story of the death of the Goddess died as well.`,
    `It was a golden age for the human civilization, and they were able to develop to new heights. With social change, mentalities changed too, and a new cult appeared.`,
    `Humans started worshiping a new Goddess, thanking Her for their bountiful expansion. The old Goddess fell into oblivion. She brought only war and suffering, when the new Goddess brought technology and wealth.`,
    `She went by many names, but she was a symbol of hope and success for the human race. Galvanized by their new icon, they prospered like never before.`,
  ];
}




var displayText = function() {
  TextBannerSequence.make(sequence, nextPage);
}

ABILITIES.unlock("_just_finished_game");

setTimeout(displayText, 1000);

FOG.stop();
