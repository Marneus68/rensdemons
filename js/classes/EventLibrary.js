// use(Object)
// runtime: Rectangle, StaticSprite

class S_event extends LevelObject {
  constructor(x, y, size) {
    if (!size){
      size = 75;
    }
    var visual = new StaticSprite("assets/objects/event.png", 'obj_dark', size, size);
    super(visual, x, y);

    //this.visual_element.draw();
    this.adjust_hitbox(0,0,size,size);
  }

  interaction() {}
}

class SE_battle extends S_event {
  constructor(x, y, battle, size) {
    super(x, y, size);
    this.battle = battle;
  }

  interaction() {
    // default battle callback ^.^
    var self = this;
    var battleCallback = function(){
      self.destroy();
    };
    BATTLE.api.make(this.battle, battleCallback);
  }

  hash() {
    return super.hash() + "/" + this.battle;
  }
}

class SE_treasure extends S_event {
  constructor(x, y, object, quantity, size) {
    super(x, y, size);
    this.object = object;
    this.quantity = quantity;
  }

  interaction() {
    INVENTORY.increase(this.object, this.quantity);
    var self = this;
    TextBannerSequence.make([
      "Ren found something on the ground. It's a " + self.object + ".",
    ], function(){self.destroy();})
  }

  hash() {
    return super.hash() + "/" + this.object;
  }
}
