
AUDIO.music.levels.harpies();
var gen = new Generator(DICTIONARY.get("world_seed")*13);

var win = function(){
  CURRENTLEVEL.setup("demo/end");
}


new S_SandFloor(400,1450,200,175);
new S_SandFloor(550,1375,175,50);
new S_SandFloor(675,1725,50,400);
new S_SandFloor(625,1775,150,125);
new S_SandFloor(725,1725,350,50);
new S_SandFloor(1000,1775,75,150);
new S_SandFloor(1025,1675,25,350);
new S_SandFloor(850,1350,200,25);
new S_SandFloor(825,1400,100,150);


var f = new S_ExitFloor(375,1425,50,125, 'demo/world_map');

var door = new S_ExitFloor(850,1250,50,25, 'demo/cavern');

new S_SavePoint(500, 1375);

var filler = new Filler(gen.get());
filler.set_zone(425,1875,750,700);
filler.set_tries(3, 10);
filler.set_object(175, 50, function(x,y,seed){ return new S_RocksHuge(x, y); });
filler.fill_decor_by_retry();
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks1(x, y); });
filler.fill_decor_by_retry();
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks2(x, y); });
filler.fill_decor_by_retry();
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks3(x, y); });
filler.fill_decor_by_retry();
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks4(x, y); });
filler.fill_decor_by_retry();



new SBattle(1015, 1450, 'mountains/dragon');



var events = new EventFiller(filler, 5);

events.battle('world/mummy', 1);
events.battle('mountains/harpy', 1);
events.battle('world/wraith', 1);
events.battle('mountains/emu', 1);
events.groundItem(ITEM.Feather);
events.groundItem(ITEM.Stone, 0.5);
events.battleRubble(ITEM.Arrow, 0.2);
events.battleRubble(ITEM.Bone, 0.2);
events.text('The path is thin, the climb is steep. You feel sweat running down your forehead and your back as you struggle to continue your path.');
events.text('The peaks in front of you seem to be piercing through the skies. You can distinguish, close to the highest point, a shining spot in the facade of the rock. Seems like a door. It\'s probably your goal!');
events.byConstructor("B_Skeleton", 1);

events.set_zone(425,1875,750,700);
events.set_tries(50, 50);
events.fill_floor_by_retry();











CURRENTLEVEL.initialize_with_character(425, 1350);
