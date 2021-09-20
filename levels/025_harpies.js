// ===================
//hack 0. INITIALIZATION
// ===================
AUDIO.music.levels.harpies();
var gen = new Generator(DICTIONARY.get("world_seed")*13);


// ===================
//hack 1. FLOORS
// ===================

// main
new S_MudFloor(1950,2450,100,175);
new S_MudFloor(1950,2325,450,125);
new S_MudFloor(2325,2400,200,275);
new S_MudFloor(2375,2175,100,450);
new S_MudFloor(2325,1775,200,275);
new S_MudFloor(2200,1700,175,125);
new S_MudFloor(2200,2025,100,375);
new S_MudFloor(1550,2025,700,100);
new S_MudFloor(1425,2100,175,250);
new S_MudFloor(1475,1875,50,500);
new S_MudFloor(1400,1450,200,175);
new S_MudFloor(1550,1375,175,50);
new S_MudFloor(1675,1725,50,400);
new S_MudFloor(1625,1775,150,125);
new S_MudFloor(1725,1725,350,50);
new S_MudFloor(2000,1775,75,150);
new S_MudFloor(2025,1675,25,350);
new S_MudFloor(1850,1350,200,25);
new S_MudFloor(1825,1400,100,150);

// shortcut
new S_MudFloor(1975,2250,25,125);
new S_MudFloor(1825,2150,175,25);
new S_MudFloor(1825,2275,25,150);
new S_MudFloor(1725,2275,125,25);
new S_MudFloor(1725,2275,25,150);
new S_MudFloor(1600,2150,150,25);
new S_MudFloor(1600,2275,25,150);
new S_MudFloor(1500,2275,125,25);
new S_MudFloor(1500,2275,25,225);

// extra 1
new S_MudFloor(2400,1525,25,125);
new S_MudFloor(2400,1425,75,25);
new S_MudFloor(2450,1425,25,100);
new S_MudFloor(2325,1350,150,25);
new S_MudFloor(2325,1350,25,100);
new S_MudFloor(2325,1275,150,25);
new S_MudFloor(2450,1300,75,75);

// extra 2
new S_MudFloor(1300,1975,150,25);
new S_MudFloor(1300,1975,25,150);
new S_MudFloor(1300,1850,100,25);
new S_MudFloor(1375,1850,25,125);
new S_MudFloor(1300,1750,100,25);
new S_MudFloor(1300,1750,25,125);
new S_MudFloor(1300,1650,100,25);
new S_MudFloor(1375,1675,75,75);

// extra 3
new S_MudFloor(1325,2275,200,25);
new S_MudFloor(1325,2275,25,100);
new S_MudFloor(1325,2200,75,25);
new S_MudFloor(1375,2200,25,75);
new S_MudFloor(1325,2150,75,25);
new S_MudFloor(1325,2150,25,100);
new S_MudFloor(1300,2100,75,75);


// ===================
//hack 2. EXIT
// ===================

var door = new S_ExitFloor(1850,1250,50,25);
door.interaction = function() {
  if(INVENTORY.count(ITEM.ShelterKey) > 0){
    TextBannerSequence.make([
      `There is a heavy metal door in the facade of the rock. You open it with the key you found on the unfortunate skeleton, happy to see it fit.`,
    ], function() {CURRENTLEVEL.setup("025_harpies2"); });
  } else {
    TextBannerSequence.make([
      `You're almost at the summit of the mountain. There is a heavy metal door in the facade of the rock.`,
      `$$Ren$: "Now what?"`,
      `$$BestFriend$: "Look at the size of this thing... Whatever's inside must be very well protected. I bet that's where we'll find our relic!"`,
      `$$Ren$: "Ok but how do we get in?"`,
      `$$BestFriend$: "Hmmm look, there's a keyhole. It has a very weird shape, though. No way we can lockpick our way out of this."`,
      `$$Ren$: "Maybe we can look around."`,
      `$$BestFriend$: "I doubt they'd just leave the key at the front..."`,
      `$$Ren$: "I don't know, there must be another way in, a clue, anything! The Goddess is telling me so!"`,
    ]);
  }
}

var f = new S_ExitFloor(1900,2500,200,75, '010_world_map');

// ===================
//hack 3. PERMANENT HARDCODED ELEMENTS (furniture)
// ===================

new S_SavePoint(1975, 2350);
new S_SavePoint(1850, 1375);

// ===================
//hack 4. PERMANENT FILLER ELEMENTS (decoration)
// ===================

var filler = new Filler(gen.get());
filler.set_zone(1250,2475,1350,1300);
filler.set_tries(20, 20);
filler.set_object(175, 50, function(x,y,seed){ return new S_RocksHuge(x, y); });
filler.fill_by_retry(true);
filler.set_tries(10, 10);
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks1(x, y); });
filler.fill_by_retry(true);
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks2(x, y); });
filler.fill_by_retry(true);
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks3(x, y); });
filler.fill_by_retry(true);
filler.set_object(50, 20, function(x,y,seed){ return new S_Rocks4(x, y); });
filler.fill_by_retry(true);

filler.set_tries(1, 1);
var chose_decor = function() {
  var f =RANDOM.pick([
    function() {filler.set_object(40, 40, function(x,y,seed){ return new S_Rocks1(x, y); })},
    function() {filler.set_object(40, 40, function(x,y,seed){ return new S_Rocks2(x, y); })},
    function() {filler.set_object(40, 40, function(x,y,seed){ return new S_Rocks3(x, y); })},
    function() {filler.set_object(40, 40, function(x,y,seed){ return new S_Rocks4(x, y); })},
    function() {filler.set_object(40, 40, function(x,y,seed){ return new S_Pebbles(x, y); })},
  ], gen);
  f();
};

for (var i=0; i<2; i++){
  chose_decor();
  filler.set_zone(1975,2400,275,175);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(2250,2400,250,275);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(2350,2125,125,350);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(2325,1775,200,250);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(2175,2025,150,475);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(1575,2025,600,100);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(1450,2075,125,200);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(1400,1425,175,150);
  filler.fill_by_retry();
  chose_decor();
  filler.set_zone(1650,1750,100,75);
  filler.fill_by_retry();
}

// ===================
//hack 5. DESTRUCTIBLE HARDCODED ELEMENTS (bosses, etc...)
// ===================

new SBattle(2015, 1450, 'mountains/dragon');
new SBattle(1325, 2075, '_02/_wrong_skeleton');
new SBattle(1400, 1650, '_02/_right_skeleton');
new SBattle(2475, 1275, '_02/_wrong_skeleton');

// ===================
//hack 6. DESTRUCTIBLE FILLER ELEMENTS (encounters)
// ===================

var events = new EventFiller(filler, 5);

events.battle('mountains/harpy', 3);
events.battle('mountains/chimera', 2);
events.battle('mountains/manticore', 2);
events.battle('mountains/emu', 1);
events.groundItem(ITEM.Feather);
events.groundItem(ITEM.Stone, 0.5);
events.battleRubble(ITEM.Arrow, 0.2);
events.battleRubble(ITEM.Bone, 0.2);
events.battleRubble(ITEM.AncientRubbles, 0.2);
events.text('The path is thin, the climb is steep. You feel sweat running down your forehead and your back as you struggle to continue your path.');
events.text('$$BestFriend$ slips on a bunch of small rocks, but you notice it in time to extend a helping hand. You both manage to stay on your feet and watch the little rocks bounce back and forth until they reach the ground far behind you.');
events.text('The peaks in front of you seem to be piercing through the skies. You can distinguish, close to the highest point, a shining spot in the facade of the rock. Seems like a door. It\'s probably your goal!');
events.text('You find a few bones that belong to an adventurer less lucky than you. Were they part of your distant ancestors who built a shelter here? Or a more recent wanderer trying to seize the treasures of the past?');
events.byConstructor("B_Pebbles", 2);
events.byConstructor("B_Skeleton", 1);


events.set_zone(1250,2400,1350,1300);
events.set_tries(50, 100);
events.fill_by_retry();

events.set_tries(3, 10);
events.set_zone(2300,1475,175,250);
events.fill_by_retry();

events.set_zone(1250,1975,150,375);
events.fill_by_retry();

events.set_tries(10, 20);
events.set_zone(1300,2275,575,175);
events.fill_by_retry();


// ===================
//hack 7. START/INIT
// ===================

CURRENTLEVEL.start_function = function() {
  TextBannerSequence.make([
    `You stand in front of a tall mountain. There is a sort of path climbing up towards the summit. Up there, mythical creatures fly around the peak, cutting through the clouds and letting out screeching cries that chill you to the bone.`,
    `$$BestFriend$: "Is there really an ancient refuge here?"`,
    `$$Ren$: "I suppose we'll have to find out."`,
  ], IO.control.character);
};

CURRENTLEVEL.initialize_with_character(2000, 2425);

// ===================
//hack 8. AUTOSAVE
// ===================
SAVE.autosave();
