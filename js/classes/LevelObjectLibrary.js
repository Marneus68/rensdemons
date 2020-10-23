// use(Object)
// runtime: Rectangle, StaticSprite

class S_Floor extends LevelObject {
  constructor(x, y, w, h) {
    var visual = new Rectangle(x,y,w,h, 'background');
    super(visual, x, y);

    this.visual_element.adjust_depth(-1);
    this.adjust_hitbox(10,0,w- 20,h-10);
    this.make_walkable();
  }

  draw_hitbox(even_floors) {
    if(even_floors){
      super.draw_hitbox();
    }
  }
}

class S_Tree extends LevelObject {
  constructor(x, y) {
    var visual = new StaticSprite("assets/objects/tree.png", 'obj_light');
    super(visual, x, y);
    this.adjust_hitbox(20,0,20,15);
  }

  default_text() {
    new TextBannerRandom([
      "It's a tree.",
      "Lustrous leaves, bulky branches... yes, definitely a tree.",
      "The foliage of the tree casts a pleasant shadow.",
      "It's a completely normal tree, hiding nothing whatsoever.",
    ]);
  }

  interaction() {
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

class S_Column extends LevelObject {
  constructor(x, y) {
    var visual = new StaticSprite("assets/objects/column.png", 'obj_light');
    super(visual, x, y);
    this.adjust_hitbox(10,0,20,15);
  }

  interaction() {
    new TextBannerRandom([
      "It's a column.",
      "Nothing but a column.",
      "A simple yet elegant stone column. It's supporting the roof.",
    ]);
  }
}

class S_Statue extends LevelObject {
  constructor(x, y) {
    var visual = new StaticSprite("assets/objects/statue.png", 'obj_light');
    super(visual, x, y);
    this.adjust_hitbox(10,0,20,15);
  }

  interaction() {  }
}

class S_SavePoint extends LevelObject {
  constructor(x, y) {
    var visual = new StaticSprite("assets/objects/savepoint.png", 'obj_dark');
    super(visual, x, y);
    this.adjust_hitbox(5,-5,40,10);
  }

  interaction() {
    new CenteredTextMenu("You found an Altar of the Goddess. Will you pray that She remembers you?",
                  [
                    {"text": "Worship", "effect": function(){ SAVE.print.save_menu(); }},
                    {"text": "Postpone", "effect": "##CLOSE"}
                 ]);
  }
}

class S_House extends LevelObject {
  constructor(x, y, seed) {
    var visual = new StaticSprite("assets/objects/house.png", 'obj_dark');
    super(visual, x, y);
    this.seed = seed;
    this.adjust_hitbox(0,0,175,200);
  }

  character_can_enter() {
    var dx = (CHARACTER.get().x + 15 - this.x) / 175;
    return (dx > 0.3 && dx < 0.7);
  }

  enter() {
    var lvl = CURRENTLEVEL.level_name;
    CURRENTLEVEL.setup("empty");
    var h = new HouseGenerator(this.seed, lvl);
    var c = h.build();
    CURRENTLEVEL.initialize_with_character(c[0], c[1]);
  }

  interaction() {
    if (this.character_can_enter()){
      this.enter();
    } else {
      new TextBanner("It's a house, but this is not the entrance.");
    }

  }
}
