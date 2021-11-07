// ===================
//hack 0. INITIALIZATION
// ===================
AUDIO.music.levels.squids();
var gen = new Generator(DICTIONARY.get("world_seed")*11);

// ===================
//hack 1. FLOORS
// ===================

new S_SandFloor(1075,1375,625,50);
new S_SandFloor(1650,1700,350,375);
new S_SandFloor(2050,1850,275,525);
new S_SandFloor(1950,1375,150,50);
new S_SandFloor(2275,1375,225,50);
new S_SandFloor(2450,1450,50,125);
new S_SandFloor(2350,1450,150,50);
new S_SandFloor(2350,1525,50,125);
new S_SandFloor(2350,1525,225,50);
new S_SandFloor(2525,1525,50,200);
new S_SandFloor(2525,1375,125,50);
new S_SandFloor(2600,1675,50,350);
new S_SandFloor(2525,1675,125,50);
new S_SandFloor(2525,1675,50,125);
new S_SandFloor(2450,1600,125,50);
new S_SandFloor(2450,1750,50,200);
new S_SandFloor(2450,1750,200,50);
new S_SandFloor(2600,1825,50,125);
new S_SandFloor(2450,1825,200,50);
new S_SandFloor(2450,1900,50,125);
new S_SandFloor(2450,1900,275,50);
new S_SandFloor(2675,1900,100,575);
new S_SandFloor(2725,1425,125,100);

// ===================
//hack 2. EXIT
// ===================

new S_ExitFloor(2800,1425,75,100, '024_squids');

// ===================
//hack 3. PERMANENT HARDCODED ELEMENTS (furniture)
// ===================

// Maybe we should make a bigger deal out of this ???
new SE_groundItem(1950, 1675, ITEM.AncientArmamentArmature);

// ===================
//hack 4. PERMANENT FILLER ELEMENTS (decoration)
// ===================

var f = new Filler(gen.get());
var decorFiller = new MultiFiller(f, 50, 50);
decorFiller.set_zone(1625,1925,1175,650);
decorFiller.add_default_constructor("S_Seashell");
decorFiller.add_default_constructor("S_Seashellpointy");
decorFiller.add_default_constructor("S_Planks");
decorFiller.set_tries(15, 50);
decorFiller.fill_floor_by_retry();

// ===================
//hack 6. DESTRUCTIBLE FILLER ELEMENTS (encounters)
// ===================

var events = new EventFiller(decorFiller, 10);
events.battleRubble(ITEM.Shield, 0.05);
events.battleRubble(ITEM.Elixir_vine, 0.05);
events.battleRubble(ITEM.Sword_wooden, 0.1);
events.battleRubble(ITEM.Bone);
events.groundItem(ITEM.Scale);
events.groundItem(ITEM.Seashell);
events.groundItem(ITEM.AncientRubbles);
events.groundItem(ITEM.Net, 0.1);

events.text('You find a pile of goo that surely used to be other living creatures. You shudder at the thought that it may be the fate that awaits you.');
events.text('The stench and humidity is unbearable. The floor under your feet is gooey and unsteady. You progress with difficulty.');
events.text('You notice a dull pain in your feet. When you take a look, you notice that there is thin layer of thick liquid everywhere around you. It is weakening the leather of your shoes and slowly burning your skin underneath. It\'s taking a very long time, but things will surely get worse if you don\'t find a way out fast.');
events.text('Trinkets and bits of human-made objects lie around you on the exposed flesh. It gives you hope that you can find something interesting around here.');

events.byConstructor("B_Skeleton", 1);
events.byConstructor("B_Seashell", 1);

events.set_tries(20, 40);
events.fill_floor_by_retry();


// ===================
//hack 7. START/INIT
// ===================

CURRENTLEVEL.start_function = function() {
  TextBannerSequence.make([
    `You find yourself inside the whale. Fortunately, you're small enough to have avoided being ground by the huge teeth, but the surrounding stench leaves no doubt about your future demise to powerful digestive fluids. However, you notice that a lot of other things have been swallowed by the monster, and you can see here and there things that were clearly made by humans. Maybe there's a silver lining in all of this...`,
    `$$BestFriend$: "Damn it, this is a true children's book cliche!"`,
    `$$BestFriend$ is next to you on the floor, which is actually the moist and gooey animal tongue.`,
    `$$Ren$: "Are you okay?"`,
    `$$BestFriend$: "Yeah, I think so. We need to get out of here, fast."`,
    `$$Ren$: "Agreed, but let's keep an eye out for the artifact, there's pretty ancient stuff inside here."`,
    `$$BestFriend$: "If you say so... I just want to get out before being eaten. And I think there's only one way..."`,
  ], IO.control.character);
};

CURRENTLEVEL.initialize_with_character(1100, 1350);
