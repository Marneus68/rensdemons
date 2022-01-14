
class S_Tree extends LevelObject {
  constructor(x, y, seed){
    var visual = new StaticSprite("assets/objects/forest/tree.png", 'obj_light');
    super(visual, x, y, 77,73);
    this.adjust_hitbox(25,0,20,15);

    this.default_text = this.text_interaction([
      "It's a tree.",
      "Lustrous leaves, bulky branches... yes, definitely a tree.",
      "The foliage of the tree casts a pleasant shadow.",
      "It's a completely normal tree, hiding nothing whatsoever.",
    ], seed);
  }

  interaction(){
    if (this.hidden_in){
      this.hidden_in.place_at(this.visual_element.x, this.visual_element.y - 20);
      this.hidden_in.try_walk_by(-40, 30);
      this.hidden_in.interaction();
      this.hidden_in = null;
    } else {
      this.default_text();
    }
  }

  hide_in(object){
    this.hidden_in = object;
  }
}

class S_TreeSad extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 70,87, "forest/treesad");
    this.adjust_hitbox(20,0,30,25);

    this.default_text = this.text_interaction([
      "The trees in this forest are different from the one you're used to. There seems to be many different types.",
      "The thin branches of this tree move around you like a curtain as you make your way through them.",
      "This tree spreads out a relaxing scent. Maybe too relaxing. Better not linger.",
      "The leaves of this tree are slightly sticky. Some insects are trapped on them.",
    ], seed);
  }
}

class S_TreePalm extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 44,73, "forest/treepalm");
    this.adjust_hitbox(10,0,25,25);

    this.default_text = this.text_interaction([
      "The trees in this forest are different from the one you're used to. There seems to be many different types.",
      "The trunk of this tree is very rough and spiky.",
      "A few critters have made this tree their home.",
      "The leaves of this tree are thick and surprisingly large.",
    ], seed);
  }
}

class S_Vine extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 44,96, "forest/vine");
    this.adjust_hitbox(5,0,30,20);

    this.default_text = this.text_interaction([
      "A robust vine extends upwards.",
      "Vines such as this one are everywhere around you, making the progression through these woods tedious.",
      "This plant creeps upwards towards the canopy that completely covers the sky.",
    ], seed);
  }
}

class S_Plant extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 48,48, "forest/plant1");
    this.adjust_hitbox(0,0,40,20);

    this.default_text = this.text_interaction([
      "A green leafy plant you can easily pass through.",
      "The long stems of this plant tickle you.",
      "This fluffy vegetal emits a suspiciously sweet smell.",
    ], seed);
    this.walkable = true;
  }
}


class S_AlgaeWall extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 143,101, "water/algaewall");
    this.adjust_hitbox(20,0,110,25);

    this.default_text = this.text_interaction([
      "These green aquatic plants intertwine in an impassible wall.",
      "You're faced with underwater vines tangled in an inextricable mess.",
      "There's no passing by this wall of tangling vines.",
    ], seed);
  }
}

class S_Anemone extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 30,44, "water/anemone");
    this.adjust_hitbox(0,0,20,20);

    this.default_text = this.text_interaction([
      "The little tentacles around the mouth of the anemone seem to be fondling the water in search of food.",
      "You watch the mouth of the purple anemone open and close with the currents.",
      "It's a colorful anemone. Little fishes are swarming around it, finding a refuge in its watery mane.",
    ], seed);
  }
}

class S_Coral extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 49,49, "water/coral");
    this.adjust_hitbox(0,0,50,25);

    this.default_text = this.text_interaction([
      "This coral stands proudly as a refuge to thousands of tiny fishes swarming around it.",
      "You can't help but be impressed by the colorful reflections emanating from the porous coral structure.",
      "You are taken aback by the beauty of the mysterious natural arabesques drawn by the coral.",
    ], seed);
  }
}

class S_Seashell extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 27,22, "exterior/seashell");
    this.adjust_hitbox(10,0,20,10);

    this.default_text = this.text_interaction([
      "This seashell still has an inhabitant.",
      "The floor is littered with shells like this. Most of them are still alive and well.",
      "You watch as the water carries the small shell and its inhabitant back and forth.",
    ], seed);
  }
}

class S_Seashellpointy extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 24,25, "water/seashellpointy");
    this.adjust_hitbox(10,0,20,10);

    this.default_text = this.text_interaction([
      "This shell is without a doubt a refuge for a hermit crab.",
      "You must be careful not to step on these, as they are quite pointy.",
      "You try to grab the seashell, but a claw comes out and dissuades you.",
    ], seed);
  }
}

class S_Waterplants extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 47,50, "water/waterplants");
    this.adjust_hitbox(0,0,40,20);

    this.default_text = this.text_interaction([
      "The underwater plants waver with water currents. Their dance is hypnotic.",
      "The algae wave slowly under the water currents. They bathe the scene by a faint fluorescent glow.",
      "The colorful algae seem to beckon you, but you know that if you get too close you might get tangled.",
    ], seed);
  }
}

class S_WaterPlantWall extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 49,47, "water/plantwall");
    this.adjust_hitbox(0,0,50,10);

    this.default_text = this.text_interaction([
      "Large leafy algae float slowly in the water.",
      "You cannot pass through this wall of leafy algae.",
      "Algae extend like a sheet of green vegetal dancing in the current.",
    ], seed);
  }
}

class S_BubblePlant extends SimpleObject {
  constructor(x, y, seed){
    var gen = new Generator(seed);
    switch(gen.int(3)){
      case 0:
        super(x, y, 41, 57, "water/bubbleplant1");
        this.adjust_hitbox(0,0,40,35);

        break;
    case 1:
      super(x, y, 39, 73, "water/bubbleplant2");
      this.adjust_hitbox(0,0,35,25);

      break;
    case 2:
      super(x, y, 48, 89, "water/bubbleplant3");
      this.adjust_hitbox(5,0,45,40);

      break;
    }
    this.default_text = this.text_interaction([
      "The bulbous part of this plant follows the current, barely anchored by its stalk.",
      "You watch mesmerized as the long stem dances along water currents.",
      "The bulb seems drawn towards the surface. You wonder what it contains.",
      "These plants seems that they're sprouting out of the ground towards the surface high above.",
      "The stem is very thin but somehow extraordinarly sturdy.",
      "You almost get entangled in a web of thin stems. Better not get too close.",
      "The stem is light green, bordering on transparent, whereas the bulb is a bright shade of yellow.",
    ], seed);
  }
}

class S_TentaPlant extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 48,121, "water/tentaplant");
    this.adjust_hitbox(0,0,48,30);

    this.default_text = this.text_interaction([
      "The big squirmy plant extends far above your head, towards the surface.",
      "You inadvertently get hit by one of the branches of this weird slimy plant. Fortunately, it doesn't seem poisonous.",
      "Contrary to other vegetals, this one seems to have a sturdy armature that allows it to stand upright and not get dragged by currents.",
    ], seed);
  }
}

class S_TentaPlantMini extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 38,41, "water/tentaplantmini");
    this.adjust_hitbox(0,0,38,40);

    this.default_text = this.text_interaction([
      "You tread lightly over the many bulbous little sprouts, your weight lessened by the water.",
      "The bulging sprouts emit a squishy sound when you touch them.",
      "The ground is covered in brightly colored small burgeons.",
    ], seed);
    this.walkable = true;
  }
}

class S_PlantSmall extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 29,24, "exterior/plant");

    this.adjust_hitbox(0,0,30,10);
    this.default_text = this.text_interaction([
      "You can easily step over this little bush.",
      "It's a simple little green bush.",
      "Just a little bush, like there are so many in these woods.",
    ], seed);
    this.walkable = true;
  }
}

class S_Shroomgiant extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 104,113, "forest/shroomgiant");

    this.adjust_hitbox(40,0,20,20);
    this.default_text = this.text_interaction([
      "This giant mushroom casts a wide shadow over the surroundings.",
      "You watch with apprehension this giant mushroom. If the cap were to fall, it might crush you.",
      "The bright red mushroom cap contrasts with the surrounding greenery. It also looks like you should probably not eat or lick it.",
    ], seed);
  }
}

class S_Shroomsmall extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 29,24, "forest/shroomsmall");

    this.adjust_hitbox(0,0,30,10);
    this.default_text = this.text_interaction([
      "These mushrooms are of a very manageable size, but you lack the knowledge to figure out whether they're nourishing or deadly. Better stay away.",
      "There are countless mushrooms like these everywhere you look, under trees and bushes.",
      "The little mushrooms seem pretty innocuous. Hard to believe they're related to much bigger threats.",
    ], seed);
    this.walkable = true;
  }
}

class S_Shroomtall extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 57,92, "forest/shroomtall");

    this.adjust_hitbox(20,0,20,20);
    this.default_text = this.text_interaction([
      "The trunk of this mushroom extends vertically even higher than the surrounding trees.",
      "This mushroom is much taller than the others.",
      "This mushroom towers over you by several times your size.",
    ], seed);
  }
}

class S_Planks extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 31,32, "water/planks");
    this.adjust_hitbox(10,0,20,10);

    this.default_text = this.text_interaction([
      "These planks are all that remains of a long lost ship. There's definitely traces of the past here.",
      "You wonder where these planks come from, and what else from human civilization made its way there.",
      "The planks are barely recognizable, as the water smoothed the wood to an almost rock-like softness.",
    ], seed);
  }
}

class S_Pebbles extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 40,47, "exterior/pebbles");
    this.adjust_hitbox(10,0,20,15);

    this.visual_element.adjust_depth(this.visual_element.y-this.visual_element.height);
    this.default_text = this.text_interaction([
      "Of course, little rocks are everywhere. You need to be very careful not to trip on them.",
      "Those little rocks are too small to do anything, except making you trip, maybe.",
      "You barely avoid falling as you lose your footing from these little pebbles.",
    ], seed);
    this.walkable = true;
  }
}

var rocks = [
  "These are rocks, obviously.",
  "Yes, you are surrounded by rocks.",
  "You have to make your way slowly between massive rocks and peaks.",
  "Some of those peaks have edges sharp enough to cut you pretty deep. You try your best to keep your footing without touching them.",
  "You can see the mark of the elements on these rocks. They were there long before you, and will remain there long after...",
  "Rocks!",
  "Rocks, more rocks... Everywhere you look, all you can see...",
];

class S_RocksHuge extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 157,171, "mountain/rockshuge");
    this.adjust_hitbox(10,0,130,50);

    this.default_text = this.text_interaction(rocks, seed);
  }
}

class S_Rocks1 extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 79,54, "mountain/rocks1");
    this.adjust_hitbox(20,0,50,20);

    this.default_text = this.text_interaction(rocks, seed);
  }
}

class S_Rocks2 extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 57,69, "mountain/rocks2");
    this.adjust_hitbox(10,0,40,20);

    this.default_text = this.text_interaction(rocks, seed);
  }
}

class S_Rocks3 extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 50,50, "mountain/rocks3");
    this.adjust_hitbox(0,0,40,20);

    this.default_text = this.text_interaction(rocks, seed);
  }
}

class S_Rocks4 extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 30,59, "mountain/rocks4");
    this.adjust_hitbox(0,0,30,20);

    this.default_text = this.text_interaction(rocks, seed);
  }
}

class S_Web extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 102,154, "ruins/web");
    this.adjust_hitbox(0,0,100,40);

    this.default_text = this.text_interaction([
      "Giant spider webs fall down the ceiling. This place hasn't been visited in a long time...",
      "There's a lot of spider webs and dust, demonstrating how little this place has been used. Some of them coalesce in giant webs coming down the ceiling.",
      "This was either made by one very big spider, or many little ones over a very long period of time...",
    ], seed);
  }
}

class S_WebLarge extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 204,101, "ruins/weblarge");
    this.adjust_hitbox(0,0,190,30);

    this.default_text = this.text_interaction([
      "The back of the room is littered with metallic debris covered by a huge layer of spider web.",
      "The wall is covered by cobwebs, you can barely distinguish it behind.",
      "A metallic wall is hidden behind several layers of spider webs. Nobody has been here in centuries.",
    ], seed);
  }
}

class S_Bocals extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 43,40, "ruins/bocals");
    this.adjust_hitbox(0,0,30,20);

    this.default_text = this.text_interaction([
      "The previous inhabitants of this place supposedly used this to store food, but it was so long ago... The content is now some sort of black goo that you'd rather stay clear of.",
      "This probably used to hold some sort of sustenance, but now it just looks like rot and mold. It's covered in dust and spider webs.",
      "The content of this container have been sealed for centuries. You cannot imagine the smell that might arise if you were to open them.",
    ], seed);
  }
}

class S_Rubble extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 29, 29, "ruins/rubble");
    this.adjust_hitbox(0,0,30,10);

    this.default_text = this.text_interaction([
      "A pile of rubble, scraps of stone and wood...",
    ], seed);
  }
}

class S_RubbleLarge extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 63,63, "ruins/rubblelarge");

    this.adjust_hitbox(0,0,60,30);
    this.default_text = this.text_interaction([
      "This messy pile of bricks is all that remains of a former construction...",
    ], seed);
  }
}

class EB_Pebbles extends EventBattleObject {
  constructor(x, y, color, size){
    super(x, y, "exterior/pebbles", color, size);

    this.set_description(BESTIARY.intro("exterior/pebbles"));
    this.add_interaction("Play", "You flick around a few spherical rocks with $$BestFriend$. The one who pushes the other's pebbles outside of the game area wins. Of course, you win!");
    this.add_interaction("Play", "You flick around a few spherical rocks with $$BestFriend$. The one who pushes the other's pebbles outside of the game area wins. Of course, you lose!");
    this.add_interaction("Eat", "What? Why would you do that? The Goddess formally forbids you from doing something so stupid! There are limits to exploration.");
    this.add_interaction("Throw", "You take a stone and throw it as far as you can. It's always good to remind yourself of your own strength. It's not much, by the way.");
    this.add_interaction("Examine", "You look at the rock very closely. You explain to a puzzle $$BestFriend$ that it is a method to find clues that the Goddess imprinted on you. Though, apparently, it's not working great right now...");
    this.add_interaction("Build", "You try to arrange the rocks to hold each other and form a house. It takes you a long time, as it keeps breaking. In the end, maybe it wasn't worth it.");
    this.add_interaction("Kick", "You kick a rock with your foot and watch it roll a few meters further. This felt like the obvious thing to do, but it accomplished nothing.");
    this.add_interaction("Trip", "You step on the rocks and lose your balance. You fall on your behind, but fortunately there does not seem to be any permanent damage.");
  }
}

class EB_Plants extends EventBattleObject {
  constructor(x, y, color, size){
    super(x, y, "exterior/plant", color, size);

    this.set_description(BESTIARY.intro("exterior/plant"));
    this.add_interaction("Pluck", "You harvest a leaf from the small plant. It's very green, but serves no purpose whatsoever. Did you imagine it would trigger something? Why did you do that?");
    this.add_interaction("Trample", "You jump on the plant and trample it to death, under the inquisitive gaze of $$BestFriend$. You explain that you really couldn't help yourself.");
    this.add_interaction("Taste", "Trusting your instinct, you shove a bit of the leaves in your mouth, before immediately spitting it out. It may not have been poisonous, but it tasted extremely bitter.");
    this.add_interaction("Whistle", "You take a bit of leaf between your fingers and try to live an iconic moment whistling with $$BestFriend$. Fortunately, the Goddess knows better than to let you succeed. You feel a short lived embarrassment at your failure, but the success would probably have given you a much more awkward memory.");
    this.add_interaction("Rub", "You rub the plant on your arm, moved by the vague impression that some leaves are supposed to be medicinal. Nothing much happens.");
    this.add_interaction("Uproot", "You seize the base of the plant and pull with all your strength. It's not easy, but you manage to get it out of the ground. Now what? You ask the Goddess inside you. But there's no answer.");
    this.add_interaction("Water", "You share some of your resources with the plant. It doesn't thank you, but you can feel its gratitude. Or maybe you're imagining it.");
  }
}

class EB_Seashell extends EventBattleObject {
  constructor(x, y, color, size){
    super(x, y, "exterior/seashell", color, size);

    this.set_description(BESTIARY.intro("exterior/seashell"));
    this.add_interaction("Listen", "You bring the seashell to your ear. It is said that you can hear the sea, but since you're already underwater, it changes nothing for you.");
    this.add_interaction("Grind", "You crush the shell with your boot. Soon, it's nothing but a thin powder, barely distinguishable from the sand around. $$BestFriend$ seems disappointed.");
    this.add_interaction("Ornate", "You take the shell and quickly fashion a little necklace from it, that you give to $$BestFriend$. The presents is much appreciated, and the new ornament makes the smile of your best friend smile even brighter.");
    this.add_interaction("Balance", "You try to balance the seashell on your finger. The pressure of the water around you makes it pretty easy. You're not sure why you did it, but it does feel a little nice.");
    this.add_interaction("Admire", "You take a moment to look at the shell. It's pale, but it has reflects from a myriad of hues that change as you move it around. It's quite mesmerizing.");
    this.add_interaction("Gather", "This might be worth something. You pick it up, before noticing it's actually broken in several pieces. No use for it now...");
  }
}

// NO BEST FRIEND!
class EB_Skeleton extends EventBattleObject {
  constructor(x, y, color, size){
    super(x, y, "exterior/skeleton", color, size);

    this.set_description(BESTIARY.intro("exterior/skeleton"));
    this.add_interaction("Plunder", "You look around for any valuables that might be up for the taking after the demise of their previous owner. Sadly, there doesn't seem to be anything eager to be adopted by your benevolent care.");
    this.add_interaction("Empathize", "You try to imagine the life of whoever these bones used to be. They had a family, friends, desires, hopes... But now this pile of bones is all there is to show for it. It's tragic, but it's the fate that awaits you too, some day.");
    this.add_interaction("Investigate", "You look closely at the bones to try and figure out what you can about the person or the circumstances of their death. Sadly, you're just a child, and not a wise scholar well versed in medicinal studies, so you don't learn anything from this, but it was certainly worth a shot!");
    this.add_interaction("Scramble", "Moved by the Goddess, you mess up the pile of bones. Why would anyone do such a thing? Maybe someone in the far future will find these bones, and imagine they belonged to someone very weirdly shaped?");
    this.add_interaction("Scrutinize", "Looking at the bones, you can clearly see bitemarks. Some scavenger animal came this way and devoured what was left of this pour soul.");
    this.add_interaction("Harmonize", "You forget all respect for the dead and start smashing the bones against each other, producing some different sounds. Pretty soon, you've mastered their tone and you've managed to compose a pleasant rhythmic melody.");
    this.add_interaction("Study", "You look at the different bones and how they fit together, shuddering at the thought that something very similar is present inside of you.");
  }
}

class S_Throne extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 200,184, "pandemonium/throne", "obj_light");

    this.adjust_hitbox(10,10,180,100);
    this.default_text = this.text_interaction([
      "This is the biggest piece of furniture you've ever seen. It seems carved directly in what appears to be bone, and richly aggremented of golden gildings and velvet cushions bigger than you. A fitting throne for the emperor of demons.",
    ], seed);
  }
}



class S_RockColumn extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 47,131, "cave/column");
    this.adjust_hitbox(0,0,40,30);

    this.default_text = this.text_interaction([
      "A massive column of rock holds the ceilling of the cave above your head.",
      "A large natural pillar reaches all the way to the cavern's top.",
      "The cavern is pretty large and needs to be supported by several such rock stone.",
    ], seed);
  }
}

class S_CristalBig extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 54,96, "cave/cristalbig");
    this.adjust_hitbox(10,0,30,30);

    this.default_text = this.text_interaction([
      "A large transparent rock lies in front of you. Through it, you can see the world in a azure teint.",
      "You find a massive ruby-like stone which reflects the pale surrounding glow with a bright red glare.",
      "This spiky stone shines brightly in a yellow hue and casts a powerful light on its surroundings.",
    ], seed);
  }
}

class S_CristalSmall extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 57,48, "cave/cristalsmall");
    this.adjust_hitbox(10,0,35,20);

    this.default_text = this.text_interaction([
      "This prismatic cristal deflects the light into a rainbow of a thousand shimmering hues.",
      "You find a rock that time has polished into a very smooth emerald surface.",
      "The translucent surface of this stone is marbled with darker lines which no doubt carry the trace of its history...",
    ], seed);
  }
}

class S_CristalTiny extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 47, 45, "cave/cristaltiny");
    this.adjust_hitbox(10,0,30,30);

    this.default_text = this.text_interaction([
      "Tiny specks of luminous gravel surround you.",
      "The floor is littered with shimmering cristals that cast a vague glow on your feet.",
      "Little colored pebbles cast a diffuse multicolored light.",
    ], seed);
    this.walkable = true;
  }
}

class S_RockLump extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 74,114, "cave/rocklump");
    this.adjust_hitbox(0,0,74,50);

    this.default_text = this.text_interaction([
      "This pile of rock comes from a cave-in... Best be careful.",
      "Part of the gallery collapsed in this stack of debris. You hope nobody got trapped under.",
      "A tiny tunnel dug by some animal opens above the heap of debris that resulted from its construction.",
    ], seed);

  }
}

class S_CristalFragment extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 27,29, "cave/cristalfragment");
    this.adjust_hitbox(0,0,27,20);

    this.default_text = this.text_interaction([
      "This pure fragment of crystal seems so sharp that you could cut yourself touching it the wrong way.",
      "The thin fragments of this crystal refracts the light of your torch in a wonderful rainbow.",
      "The thin branches of this crystal resonate with a clear ringing when you carress the surface with your finger.",
    ], seed);
  }
}

class S_Caveplant extends SimpleObject {
  constructor(x, y, seed){
    var gen = new Generator(seed);
    switch(gen.int(2)){
      case 0:
        super(x, y, 89,53, "cave/caveplant");
        this.adjust_hitbox(0,0,89,20);

        break;
      case 1:
        super(x, y, 56,38, "cave/caveplant2");
        this.adjust_hitbox(0,0,56,18);

        break;
    }
    this.default_text = this.text_interaction([
      "This plant seems to favor the darkness of caves. It's almost translucent.",
      "The flowers of this vegetal look like bells. You push on one, and it produces a high pitch ringing.",
      "The flowers drip a mysterious yellow liquid every few seconds. Judging by the holes in the ground below them, it must be acidic.",
      "The main stem carrying pale flowers bends under their collective weight.",
      "You shake the stem of the plant, and step back in disgust as a yellowish goo splurges out of the flowers onto the ground.",
      "It seems that this plant doesnt need sunlight, and thrives in the humid darkness of the cave.",
    ], seed);
  }
}

class S_Cavesprouts extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 40,44, "cave/cavesprouts");
    this.adjust_hitbox(0,0,40,35);

    this.default_text = this.text_interaction([
      "Little plants sprout up from the ground. No doubt before long they'll be as tall as the other ones here.",
      "Those little bulbs emit a strange fresh smell.",
      "You stumble upon a sprout on the ground that you didn't notice and fall head first on the floor. Your feet are covered with translucent slime.",
    ], seed);
  }
}








class S_Hole extends SimpleObject {
  constructor(x, y, seed){
    var gen = new Generator(seed);
    switch(gen.int(2)){
      case 0:
        super(x, y, 48, 90, "cave/hole");
        this.adjust_hitbox(0,0,48,90);

        break;

      case 1:
        super(x, y, 43, 95, "cave/hole2");
        this.adjust_hitbox(0,0,43,95);

        break;
    }
    this.default_text = this.text_interaction([
      "The ground in front of you seems fractured and about to give way...",
      "There's a crack in the floor in front of you. Too little to get in, but big enough to be dangerous.",
      "You drop a pebble in this crack to see how deep it goes. The answer is pretty deep.",
      "You feel like it's better to not get too close to this fractured stone, lest you may fall in.",
    ], seed);
  }
}



class S_HellPlantLeaning extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 43,35, "hell/plant");
    this.adjust_hitbox(10,0,30,10);

    this.default_text = this.text_interaction([
      "This plant shines from an unnatural light.",
      "The plant is home of a swarm of disgusting bugs that fly around it noisily.",
      "The otherworldy vegetal undulates as if moved by a will of its own.",
    ], seed);
  }
}

class S_HellPlantSretching extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 32,46, "hell/plant2");
    this.adjust_hitbox(5,0,30,20);

    this.default_text = this.text_interaction([
      "This vegetal extends slimy tentacles that look pretty poisonous.",
      "You observe an unfortunate fly get captured by the appendages of the unnatural plant.",
      "This plant looks like nothing you've ever seen, and doubtless comes from another world.",
    ], seed);
  }
}

class S_HellPlantSlimy extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 27,47, "hell/plant3");
    this.adjust_hitbox(5,0,20,15);

    this.default_text = this.text_interaction([
      "This vegetal is constantly dripping brownish slime, like a repulsive fountain.",
      "All you can think of to describe this plant is that it looks a lot like someone dipped a little shrub in some sort of dark goo.",
      "You observe with a disgusted fascination the gunk that drops form the leaves of whatever this is. It makes an irregular squishy sound.",
    ], seed);
  }
}

class S_HellPlantLoops extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 16, 28, "hell/plant4");
    this.adjust_hitbox(0,0,20,15);

    this.default_text = this.text_interaction([
      "This strange flower is made of many fibers that roll up and extend according to a pattern you cannot understand.",
      "As you approach the vegetal, you notice that it also extends in your direction. Better steer clear...",
      "This alien plant seems to slowly change color between purple and green.",
    ], seed);
  }
}

class S_Spike extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 41, 96, "hell/spike");
    this.adjust_hitbox(0,0,30,30);
    this.default_text = this.text_interaction([
      "A brown spike perforates the rocky ground. You wonder if there's a monster under the ground...",
      "This sharp appendage rises unnaturally from the ground. It seems that it stopped moving a while ago and solidified among the rocks, but you prefer to not take any chance and not approach it.",
      "A spike taller than you emits an ungodly perverse aura.",
    ], seed);
  }
}



class S_HellEgg extends SimpleObject {
  constructor(x, y, seed){
    var gen = new Generator(seed);
    switch(gen.int(4)){
      case 0:
        super(x, y, 70, 48, "pandemonium/hellwebby1");
        this.adjust_hitbox(0,0,70,20);
        break;
      case 1:
        super(x, y, 39, 59, "pandemonium/hellwebby2");
        this.adjust_hitbox(0,0,40,30);
        break;
      case 2:
        super(x, y, 48, 100, "pandemonium/hellwebby3");
        this.adjust_hitbox(0,0,48,50);
        break;
      case 3:
        super(x, y, 45, 91, "pandemonium/hellwebby4");
        this.adjust_hitbox(0,0,45,30);
        break;
    }
    this.default_text = this.text_interaction([
      "This pile of gooey webs ebbs with an unhealthy glow.",
      "You find what you assume to be eggs, held together by a viscous net of gelatin.",
      "You imagine that demon larvae are gestating in these ungodly eggs. You seem some motion inside their slightly translucent membrane. Part of you wants to kill these monsters before they spawn, but you're not sure how to go about it. What if the fluid inside the egg was highly toxic? Better be careful...",
      "You accidentally brush the surface of the slimy heap. Your hand stays stuck and your skin starts to burn. You immediately withdraw.",
      "Gelatinous balls glow faintly with a yellowish hue. It also spreads a stink close to rotten meat.",
      "The slimy eggs are maintained above the ground by a complex entanglement of gelatinous threads. They seem to be slowly growing and retracting, as if pulsating...",
      "You venture the guess that this is where demons are created, and this is how they reproduce. Hopefully, destroying their kind will prevent them from spawning more of these monstrous eggs.",
      "A faint heat emanates from the goo, and you find it utterly repulsive.",
    ], seed);
  }
}

class S_Armor extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 32, 50, "pandemonium/armor");
    this.adjust_hitbox(0,0,32,25);

    this.default_text = this.text_interaction([
      "An armor on display.",
      "This armor seems to be shaped for a human. Could it be a war trophy?",
      "The rust on this armor lets you know that it has been there a long time.",
    ], seed);
  }
}

class S_Candle extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 23, 37, "pandemonium/candle");
    this.adjust_hitbox(0,0,23,15);

    this.default_text = this.text_interaction([
      "The shadow around you are only barely pierced by the hesitant light of this chandelier.",
      "The pale flames struggle to fight against the surrounding darkness.",
      "This is the only thing that allows you to see around you...",
    ], seed);
  }
}

class S_Organ extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 106, 96, "pandemonium/organ");
    this.adjust_hitbox(0,0,105,50);

    this.default_text = this.text_interaction([
      "Although you admire the craftsmanship, and acknowledge that it does look fitting in this gloomy castle, you can't help but wonder what use is this musical instrument here...",
      "You forget yourself and spend a few moment trying out notes on the keyboard of the organ. You half expect some sort of secret passage to appear, but nothing of the sort happens.",
      "It would appear that the demon lord is quite the music lover...",
    ], seed);
  }
}

class S_Painting extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 42, 68, "pandemonium/painting");
    this.adjust_hitbox(0,0,42, 68);

    this.default_text = this.text_interaction([
      "The portrait of a presumably famous demon. He looks so... human.",
      "The demon on this painting smiles at you mysteriously. Their eyes seem to follow you wherever you go.",
      "This is a painting of a charming demon lady. She's wearing opulent jewelry. She almost seems friendly.",
    ], seed);
  }
}

class S_HellWindow extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 46, 120, "pandemonium/window");
    this.adjust_hitbox(0,0,46, 120);

    this.default_text = this.text_interaction([
      "This stained glass window seems uncomfortably familiar.",
      "You peek through the window and can barely make out through the foggy glass the vast arid expanses of the otherworld.",
      "The stained glass would surely bring a bit more light to the room if it weren't so dark outside...",
    ], seed);
  }
}

class S_Flag extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 47, 99, "pandemonium/flag");
    this.adjust_hitbox(0,0,47, 99);

    this.default_text = this.text_interaction([
      "A flag whose coat of arm you do not recognize.",
      "You find it curious that the demon lord would decorte his castle with flags just like any human king would.",
      "The fabric is old, but you can still make out a coat of arm. The whole design seems extremely foreign to you.",
    ], seed);
  }
}

class S_Mirror extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 47, 94, "pandemonium/mirror");
    this.adjust_hitbox(0,0,47, 94);

    this.default_text = this.text_interaction([
      "In the darkness, you think you see something behind you. It's probably your imagination playing tricks on you.",
      "Despite having come so far, you conclude that you haven't changed that much.",
      "The mirror offers you a slightly dimmed picture of the room you're in.",
    ], seed);
  }
}


class S_BookshelfBig extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 145, 142, "heaven/bookshelf_big");
    this.adjust_hitbox(-5,0,150, 70);

    this.default_text = function(){
      BATTLE.api.make("_060/_book");
    }
  }
}

class S_Bookshelf extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 50, 98, "heaven/bookshelf");
    this.adjust_hitbox(-5,0,57, 50);

    this.default_text = function(){
      BATTLE.api.make("_060/_book");
    }
  }
}

class S_Cloud extends SimpleObject {
  constructor(x, y, seed){
    var gen = new Generator(seed);
    switch(gen.int(3)){
      case 0:
        super(x, y, 70, 45, "heaven/cloud1");
        this.adjust_hitbox(0,0,70,20);

        break;
    case 1:
      super(x, y, 48, 35, "heaven/cloud2");
      this.adjust_hitbox(0,0,45,20);

      break;
    case 2:
      super(x, y, 42, 35, "heaven/cloud3");
      this.adjust_hitbox(0,0,40,20);

      break;
    }
    this.walkable = true;

    this.default_text = this.text_interaction([
      "Clouds of various pale colors are floating all around you.",
      "You drift through the vaporous landscape.",
      "Smoke raises all around you in nebulous clouds.",
      "By looking closely, you can notice that the mist seems to glow very faintly.",
      "Tiny cottony clouds like the ones you're walking on float lightly all around.",
    ], seed);
  }
}

class S_Tomb extends SimpleObject {
  constructor(x, y, seed){
    var gen = new Generator(seed);
    switch(gen.int(3)){
      case 0:
        super(x, y, 26, 50, "heaven/tomb1");
        this.adjust_hitbox(0,0,26,20);

        break;
    case 1:
      super(x, y, 45, 72, "heaven/tomb2");
      this.adjust_hitbox(0,0,40,30);

      break;
    case 2:
      super(x, y, 26, 31, "heaven/tomb3");
      this.adjust_hitbox(0,0,25,15);

      break;
    }

    this.engrave(gen);
  }


  engrave(gen) {
    var type = gen.get();
    var selfproba = 0.25 * Math.min(STATS.get(STAT.Death) / 100, 1);
    if(type < 0.05) {
      var villager = LEDGER.get_throwaway_villager(gen.get());
      var birth = (new Date(villager.birth)).toLocaleString();
      var death = (new Date(villager.death)).toLocaleString();
      var cod = gen.pick(["Stillborn", "Dead on creation", "Crushed to make a tombstone", "Killed to make decorations", "Turned into stone", "Slaughtered for aesthetic enjoyment", "Murdered to make a point"]);
      this.default_text = this.text_interaction([`${villager.name} of ${villager.city}<br />${cod}<br /> ${birth} - ${death}`]);
    } else if(type < 0.1 && !S_Tomb.done_bf) {
      var birth = (new Date(DISK._CONTENT["#DISK_STATE_IDENTIFIER"])).toLocaleString();
      var death = (new Date(STATS.flag("KilledBestFriend"))).toLocaleString();
      this.default_text = this.text_interaction([`$$BestFriend$ of ${DICTIONARY.get("town_1")}<br />Killed by a demon<br /> ${birth} - ${death}`]);
      S_Tomb.done_bf = true;
    } else if(type < 0.1 + selfproba && !S_Tomb.done_self) {
      this.default_text = this.text_interaction([`$$Ren$ of ${DICTIONARY.get("town_1")}<br />The Promised Child<br />Abandonned by the gods`]);
      S_Tomb.done_self = true;
    } else {
      var villager = LEDGER.get_villager(gen.get());
      var birth = (new Date(villager.birth)).toLocaleString();
      var death = (new Date(villager.death)).toLocaleString();
      var cod = gen.pick(["Assassinated by an otherwordly power", "Slain by a god", "Discarded after use", "Exterminated by a machine", "Wiped out of existence", "Recycled into more content", "Murdered for personal enjoyment", "Slaughtered for a higher being's pleasure", "Crushed to free up space", "Eradicated for amusement", "Discarded like a used toy", "Gone and forgotten", "Murdered without cause", "Killed by the system", "Obliterated by tradition", "Destroy by gods' disinterest", "Killed by you", "Murdered by you", "Slaughtered by you", "Destroyed by you", "Killed for your pleasure", "Massacred for your enjoyment", "Gave their life so you could go on", "Died because of you"]);
      this.default_text = this.text_interaction([`${villager.name} of ${villager.city}<br />${cod}<br /> ${birth} - ${death}`]);
    }
  }
}

class S_MagicMirror extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 50, 98, "heaven/mirror");
    this.adjust_hitbox(-5,0,57, 50);

    this.default_text = function(){
      BATTLE.api.make("_060/_mirror");
    }
  }
}


class S_Computer extends SimpleObject {
  constructor(x, y, seed){
    super(x, y, 50,50, "interior/savepoint");
    this.adjust_hitbox(5,-5,40,20);



    var nothing = function(){
      TextBannerSequence.make([`That did not do anything.`]);
    }
    var turnoff = function(){
      TextBannerSequence.make([`The light fades out from the glass plate, and everything comes back to the state it was when you first got here.`]);
    }

    var lookat = function(){
     new CenteredTextMenu("What will you do?",
                   [
                     {"text": "Look at the glass screen", "effect": function(){BATTLE.api.make('_demo/_screen')}},
                     {"text": "Walk away", "effect": turnoff},
                  ]
                );
    }

    var turnon = function(){
      TextBannerSequence.make([
        `As soon as your finger touches the glass, the humming grows louder, and the glass becomes imbued with a light glow. In an instant, shapes start forming on the lit surface. First, you see a wheel spinning slowly. Then it fades away to display the silhouette of a child in front of an altar on a flat colored background. You distinguish some text in a box.`,
      ], lookat);
    }

    var approach = function(){
      new CenteredTextMenu("What will you do?",
                    [
                      {"text": "Touch the glass", "effect": turnon},
                      {"text": "Touch a block", "effect": nothing},
                      {"text": "Nothing", "effect": "##CLOSE"},
                   ]
                 );
    }

    this.default_text = function(){
      TextBannerSequence.make([
        `It's an altar, but this one seems a bit different from the ones you've seen so far. On its surface, there is a big plate of glass, surrounded by many little blocks. Each of these blocks has a letter or a symbol carved on it.`,
      ], approach);
    }
  }
}

class S_Whirlwind extends SimpleObject {
  constructor(x, y, seed, destination){
    super(x, y, 46, 44, "water/whirlwind");
    this.adjust_hitbox(0,0,46,44);

    var gen = new Generator(seed);
    var tp = function(){
      if(!destination){
        CURRENTLEVEL.setup("013_sirens2", [1100 + gen.get() * 2325,2175 - gen.get() * 1300]);
      } else{
        CURRENTLEVEL.setup(destination);
      }
    }
    this.default_text = function(){
      TextBannerSequence.make([
        `You get sucked in a whirlwind of water.`,
        `The current drags you to a totally different part of the lake.`,
      ], tp);
    }
  }
}
