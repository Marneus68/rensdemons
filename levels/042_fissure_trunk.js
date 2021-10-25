
// ===================
//hack 0. INITIALIZATION
// ===================
AUDIO.music.levels.fissure();
var gen = new Generator(DICTIONARY.get("world_seed")*21);

// ===================
//hack 1. FLOORS
// ===================
new S_Floor(1100,2425,550,850);

new S_Floor(1100,2525,200,200);
new S_Floor(1450,2525,200,200);

new S_Floor(1000,1775,150,200);
new S_Floor(1600,1775,150,200);

new S_Floor(1300,1600,150,100);

// ===================
//hack 2. EXIT
// ===================

new S_ExitFloor(1380,2290,20,60, "042_fissure");
new S_ExitFloor(1360,2370,20,100, "042_fissure");
new S_ExitFloor(1380,2425,20,80, "042_fissure");

var riddle = function(text, answer, destination){
  var ask = function(){
    var reply = prompt("What will you say?");
    if (!reply) { reply = ""; }
    reply = reply.toLowerCase();
    if(reply == answer){
      CURRENTLEVEL.setup(destination);
    } else {
      TextBannerSequence.make(["Nothing happens."]);
    }
  }
  return function() {
    TextBannerSequence.make([
      `A heavy metal door stands before you. Runes and pictograms indicate that it expects you to speak out loud a password. Surprisingly, a part of the text is in a language you can decipher:`,
      text
    ], ask);
  };
}

var left_leg = new S_ExitFloor(1100,2550,200,50);
left_leg.interaction = riddle("What is most important, the only center of everything, the foundation for all experience?", "me", "042_4_fissure_left_leg");
var right_leg = new S_ExitFloor(1450,2550,200,50);
right_leg.interaction = riddle("What is holy among all things, to be cherished and revered?", "myself", "042_3_fissure_right_leg");


var left_arm = new S_ExitFloor(975,1775,50,200);
left_arm.interaction = riddle("What is Man entitled dominion over?", "everything", "042_2_fissure_left_arm");
var right_arm = new S_ExitFloor(1725,1775,50,200);
right_arm.interaction = riddle("What is grander than Man?", "nothing", "042_1_fissure_right_arm");

var head = new S_ExitFloor(1300,1525,150,50);
head.interaction = riddle("What is the Goddess?","dead","042_5_fissure_head");

// ===================
//hack 3. PERMANENT HARDCODED ELEMENTS (furniture)
// ===================

var prophecy = function() {
  TextBannerSequence.make(["You find a column on which some text is inscribed in a variety of different languages. You soon find a fragment you can read.",
                           "We build this shrine to the glory of Man<br />To preserve his Spirit through eternity<br />For NOTHING is grander than Man"]);
}
var t1 = new S_event(1475, 1750);
var t2 = new S_event(1225, 1750);
t1.interaction = prophecy;
t2.interaction = prophecy;

new S_SavePoint(1350, 2075);

// ===================
//hack 4. PERMANENT FILLER ELEMENTS (decoration)
// ===================


var filler = new Filler(gen.get());
filler.set_zone(825,2675,1125,1275);

var bigDecorFiller = new MultiFiller(filler, 200, 50);

bigDecorFiller.add_constructor( function(x,y,seed){ return new S_Web(x, y); }, 2);
bigDecorFiller.add_constructor( function(x,y,seed){ return new S_RocksHuge(x, y); }, 2);
bigDecorFiller.add_constructor( function(x,y,seed){ return new S_WebLarge(x, y); }, 0.1);

bigDecorFiller.set_tries(5, 10);
bigDecorFiller.fill_decor_by_retry();

var decorFiller = new MultiFiller(filler, 60, 50);
decorFiller.add_constructor( function(x,y,seed){ return new S_CristalSmall(x, y); });
decorFiller.add_constructor( function(x,y,seed){ return new S_RockColumn(x, y); });
decorFiller.add_constructor( function(x,y,seed){ return new S_Web(x, y); });

decorFiller.add_constructor( function(x,y,seed){ return new S_CristalBig(x, y); }, 0.1);
decorFiller.add_constructor( function(x,y,seed){ return new S_Rocks1(x, y); }, 0.1);
decorFiller.add_constructor( function(x,y,seed){ return new S_Rocks2(x, y); }, 0.1);
decorFiller.add_constructor( function(x,y,seed){ return new S_Rocks4(x, y); }, 0.1);
decorFiller.add_constructor( function(x,y,seed){ return new S_Rocks3(x, y); }, 0.1);
decorFiller.set_tries(5, 30);
decorFiller.fill_decor_by_retry();

decorFiller.add_constructor( function(x,y,seed){ return new S_CristalTiny(x, y); }, 0.1);
decorFiller.add_constructor( function(x,y,seed){ return new S_Bocals(x, y); }, 2);
decorFiller.add_constructor( function(x,y,seed){ return new S_Rubble(x, y); }, 2);
decorFiller.add_constructor( function(x,y,seed){ return new S_RubbleLarge(x, y); }, 2);

decorFiller.set_tries(70, 100);
decorFiller.fill_floor_by_retry();






// ===================
//hack 6. DESTRUCTIBLE FILLER ELEMENTS (encounters)
// ===================


var events = new EventFiller(decorFiller);
events.set_zone(1050,2475,650,925);

events.battle('caves/bloodsucker', 0.1);
events.battle('caves/bat');
events.battle('caves/mole', 0.8);
events.battle('caves/scorpion');
events.battle('caves/crawler');
/*
events.battleRubble(ITEM.AncientRubbles, 0.5);
events.battleRubble(ITEM.Scale, 0.3);
events.groundItem(ITEM.Seashell);
events.groundItem(ITEM.Stone, 0.1);

events.text(`The water is very cold. It was hard to bear at first, but you're finally getting used to it. You hope $$BestFriend$ handles it well, but you don't want to say anything to keep the topic off everyone's mind.`);
events.text(`There is a lot of fishing swimming all around you. Most of them are even above you, like weird birds, since you're at the very bottom of the lake. But you cannot look at any too closely, since they seem to run away from you every time you approach.`);
events.text(`You find a huge rock that stands out suspiciously. It triggers your curiosity, so you try to push it to see if it covers anything, but despite all your efforts it won't budge. It's most likely a false trail...`);
events.text(`You can be underwater thanks to the potion, but it doesn't prevent your clothes from being damp. You make progress really slowly. The water resistance is significantly stronger than air, which slows every of your motion. But it's ok, you'll just take your time.`);

events.byConstructor("B_Seashell", 2);
events.byConstructor("B_Skeleton", 1);
*/
events.set_tries(30, 50);
events.fill_floor_by_retry();


// ===================
//hack 7. START/INIT
// ===================
CURRENTLEVEL.initialize_with_character(1360,2370);

// boss = rhino
