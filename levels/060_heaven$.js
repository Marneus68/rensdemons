// ===================
//hack 0. INITIALIZATION
// ===================
var gen = new Generator(Math.random());//DICTIONARY.get("world_seed")*41);
AUDIO.music.levels.heaven();
var s = CURRENTLEVEL.level_name.split(CURRENTLEVEL.SAME_IMPORT_DIFFERENT_LEVEL_SEPARATOR);


var update_state = function(from){
  var state = INVENTORY.count("_heaven_sequence");
  if ((state == 0 || state == 1) && from == "t"){ // _ or T
    INVENTORY.increase("_heaven_sequence");
  } else if (state == 2 && from == "d"){ // TT
    INVENTORY.increase("_heaven_sequence");
  } else if (state == 2 && from == "t"){  // no move out of state 2
  } else if (state == 3 && from == "d"){ // TTD
    INVENTORY.increase("_heaven_sequence");
  } else if (state == 4 && from == "l"){ // TTDD
    INVENTORY.increase("_heaven_sequence");
  } else if (state == 5 && from == "r"){ // TTDDL
    INVENTORY.increase("_heaven_sequence");
  } else if (state == 6 && from == "l"){ // TTDDLR
    INVENTORY.increase("_heaven_sequence");
  } else if (state == 7 && from == "r"){ // TTDDLRL
    INVENTORY.increase("_heaven_sequence");
  } else if (state == 8) { // stay there
  } else {
    INVENTORY.set("_heaven_sequence", 0);
  }
}


// ===================
//hack 1. FLOORS
// ===================
var t = new S_TownFloor(1125,1550,500,500, "050_hell_map", "assets/patterns/clouds.png");

if(INVENTORY.count("_heaven_sequence") < 8){
  t.left_border.interaction = function(){
    update_state("l");
    CURRENTLEVEL.setup("060_heaven$");
  };
  t.right_border.interaction = function(){
    update_state("r");
    CURRENTLEVEL.setup("060_heaven$");
  };
  t.top_border.interaction = function(){
    update_state("t");
    CURRENTLEVEL.setup("060_heaven$");
   };
  t.bot_border.interaction = function(){
    update_state("d");
    CURRENTLEVEL.setup("060_heaven$");
   };
}

// ===================
//hack 2. EXIT
// ===================


// ===================
//hack 3. PERMANENT HARDCODED ELEMENTS (furniture)
// ===================
if (INVENTORY.count("_heaven_sequence") >= 8){
  var s1 = new B_Statue(1350,1275);
  var endFight = function() {
    if(INVENTORY.count("_killed_god")){
      var callback = function(){
        CURRENTLEVEL.setup("end@B");
      }
      TextBannerSequence.make([
        `As you deliver the final blow, the holy body of the Goddess starts to fragment into a myriad of tiny sparkly particles. As the shining grains begin to dissipate, you see for the first time the sacred body actually move.`,
        `It's a very subtle motion. The Goddess' lips come very slightly apart, and you hear Her whisper:`,
        `Goddess: "Fool... You don't know anything..."`,
        `The cloud of luminous dust, sole remainder of the entity that ruled the universe, dissipates slowly into the air...`,
      ], callback);
    } else if(INVENTORY.count("_ended_suffering")){
      var callback = function(){
        CURRENTLEVEL.setup("end@C");
      }
      TextBannerSequence.make([
        `Goddess: "Eliminating monsters, who raided the world and destroyed cities..."`,
        `The only difference you can notice is a vague humming sound.`,
        `$$Ren$: "Thanks..."`,
        `But you're interrupted by the Goddess who continues her litany.`,
        `Goddess: "Eliminating animals, who can be dangerous, and suffer themselves..."`,
        `$$Ren$: "Hey, thank you but I think that's ok..."`,
        `Goddess: "Eliminating weather, who can destroy crops..."`,
        `$$Ren$: "Wait, don't do that, we need it!"`,
        `Goddess: "Eliminating human adults, who suffer constantly from many worries..."`,
        `$$Ren$: "Stop it! That's enough! You're going too far!"`,
        `Goddess: "Eliminating human children, who will grow up to suffer..."`,
        `$$Ren$: "No!"`,
        `$$Ren$'s scream faded as the Promised Child disappeared in a flash of light.`,
        `Goddess: "Eliminating all life forms, who could evolve to further suffer..."`,
        `Goddess: "Eliminating the Goddess, and the world, so that it does not spawn any more suffering..."`,
        `The Goddess' light grows brighter and swallows everything. Pretty soon, there is nothing but an ocean of pure white.`,
      ], callback);
    } else if(INVENTORY.count("_restarted_world")){
      var callback = function(){
        CURRENTLEVEL.setup("end@D");
      }
      TextBannerSequence.make([
        `The Goddess' light grows brighter and swallows everything. Pretty soon, you perceive nothing but an ocean of pure white.`,
      ], callback);
    }
  }

  s1.interaction = function(){
    BATTLE.api.make("heaven/_goddess", endFight);
  };

  var s = new S_StainedGlass(1175,1475, 'circle');
  s.visual_element.adjust_depth(0);
  s.interaction = undefined;

  new S_SavePoint(1150, 1525);
  new S_SavePoint(1550, 1525);
  new S_SavePoint(1550, 1125);
  new S_SavePoint(1150, 1125);
}

// ===================
//hack 4. PERMANENT FILLER ELEMENTS (decoration)
// ===================

var placeholder = new S_Painting(1370, 1330);

var filler = new Filler(gen.get());
var decorFiller = new MultiFiller(filler, 100, 100);
decorFiller.set_zone(1125,1550,500,500);

switch(gen.int(3)){
  case 0:
    decorFiller.add_default_constructor("S_Bookshelf", 1, 50, 100);
    decorFiller.add_default_constructor("S_BookshelfBig", 3, 150, 150);
    decorFiller.set_tries(30, 50);
    break;
  case 1:
    decorFiller.add_default_constructor("S_Cloud", 1, 70, 50);
    decorFiller.set_tries(15, 25);
    break;
  case 2:
    decorFiller.add_default_constructor("S_Tomb", 50, 75);
    decorFiller.set_tries(30, 50);
    break;
}

// no decor for first entrance or last floor
if (INVENTORY.count("_heaven_visits") && INVENTORY.count("_heaven_sequence") < 8){
  decorFiller.fill_decor_by_retry();
}


// ===================
//hack 5. DESTRUCTIBLE HARDCODED ELEMENTS (bosses, etc...)
// ===================
// ===================
//hack 6. DESTRUCTIBLE FILLER ELEMENTS (encounters)
// ===================

if (INVENTORY.count("_heaven_visits") && INVENTORY.count("_heaven_sequence") < 8){
  var events = new EventFiller(decorFiller, 25);
  events.set_zone(1125,1550,500,500);

  events.battle('heaven/angel');
  events.battle('heaven/cherub');
  events.battle('heaven/maneki');
  events.battle('heaven/ponpon');
  events.battle('heaven/raijuu');
  events.battle('heaven/seraph');
  events.battle('heaven/valkyrie');

  events.groundItem(ITEM.Feather);
  events.groundItem(ITEM.AncientRubbles);

  events.text(`You cannot shake the distinct feeling of having been here before.`, 0.7);
  events.text(`Your head spins with the voluptuous motions of the vapor all around you. There's a sort of sweetness in the air. It seems that the fog is even in your head. You cannot think straight, your memories start being hard to grasp. How did you get here?`, 0.7);
  events.text(`You notice silhouettes floating above you. The clouds makes it impossible to see clearly, but it appears to be flying creatures with wide wingspan. Probably angels.`, 0.7);
  events.text(`You cannot shake the feeling that someone is watching you. As if there were some sort of invisible eyes pointed permanently on you...`, 0.7);
  events.text(`A fruity smell of incense is slowly surrounding you. You blink and feel like everything around you changed. Have you been teleported? Has the environment morphed? How will you ever get out of this everchanging maze of illusions?`, 0.7);
  events.text(`You get a vague impression of importance in this place. The air feels somehow thinner. This might be a delusion, but you can't help but think that you're close to the fabric of this universe. You get a weird ominous presentiment that a wrong move here could affect many lives in unexpected ways...`, 0.7);

  events.set_tries(4, 18);
  events.fill_floor_by_retry();
}

placeholder.destroy();

// ===================
//hack 7. START/INIT
// ===================

if (!INVENTORY.count("_heaven_visits")){
  CURRENTLEVEL.start_function = function() {
    var callback = function(){
      IO.control.character();
    }
    TextBannerSequence.make([
      `You find yourself in the middle of a sea of cottony clouds. The slow swirling motion of the vapor is numbing your senses. No doubt that some sort of divine magic is also at play in this disorientation. You're not exactly sure how you arrived there or where you should go... The mist extends in every direction, but every time you look away it seems that the world changes around you. It's going to be hard to orient yourself, let alone pierce the mystery of this place...`,
    ], callback);
  };
}
else if (INVENTORY.count("_heaven_sequence") == 8 && !INVENTORY.count("_goddess_intro")) {
  INVENTORY.increase("_goddess_intro");
  CURRENTLEVEL.start_function = function() {
    var callback = function(){
      IO.control.character();
    }
    TextBannerSequence.make([
      `You're not completely sure how you navigated this limitless ocean of clouds, but you made it. In front of you, on top of a large stained glass circle, stands the Goddess Herself. Or at least, you think that's her. She looks exactly like the many statues you've seen.`,
      `You're almost surprised to not find Her bigger. Compared to $$demon_lord$, She is closer to you in size. Yet, She radiates an unimaginable amount of power. Her silver skin glows almost blindingly, the velvety fabric She's draped in seems to fold infinitely, inviting your gaze to always dive deeper in fractal nebulae. It's impossible to look at Her for more than a second, lest you might never look away...`,
      `She's surrounded by altars, as if to suggest mindfullness before you dare approaach Her.`,
    ], callback);
  };
}

// chance of TP out: not first visit, we are at the start of the sequence, i.e. not progressing
if(INVENTORY.count("_heaven_visits") > 0 && INVENTORY.count("_heaven_sequence") == 0 && Math.random() < 0.2) {
  INVENTORY.decrease("_heaven_sequence");
  CURRENTLEVEL.setup("050_hell_map");
} else {
  // We use a trick to always spawn in the same place!
  CURRENTLEVEL._recover_position = [1375,1325];
  CURRENTLEVEL.initialize_with_character(1375,1325);
}
INVENTORY.increase("_heaven_visits");

if( INVENTORY.count("_heaven_sequence") < 0 ){
   INVENTORY.increase("_heaven_sequence");
}
