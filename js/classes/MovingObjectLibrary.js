// use(Object, MovingObject)
// runtime: Rectangle, StaticSprite


class MM_Child extends MovingObject {
  constructor(x, y, visual) {
    super(visual, x, y, 32, 48);
    this.adjust_hitbox(10, 0, 10, 5);
  }

  interaction() {
    this.face_character();
    CONSOLE.error("No interaction implemented for child.");
  }
}

class M_ChildM extends MM_Child {
  constructor(x, y) {
    super(x, y, new MovingSprite("assets/characters/child_m.png", 'obj_dark', 32, 48));
  }
}

class M_ChildF extends MM_Child {
  constructor(x, y) {
    super(x, y, new MovingSprite("assets/characters/child_f.png", 'obj_dark', 32, 48));
  }
}

class M_Priest extends MovingObject {
  constructor(x, y) {
    var visual = new MovingSprite("assets/characters/priest.png", 'obj_dark', 32, 48);
    super(visual, x, y, 32, 48);
    this.adjust_hitbox(7, 3, 20, 12);
  }

  interaction() {
    this.face_character();
    CONSOLE.error("No interaction implemented for priest.");
  }
}
