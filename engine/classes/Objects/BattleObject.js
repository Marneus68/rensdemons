// runtime: LEVEL, CHARACTER

class BattleObject extends LevelObject {
    constructor(x, y, name, max_actions, battle_sprite_name, world_sprite) {
      super(world_sprite, x, y);
      this.name = name;
      this.battle_sprite_name = battle_sprite_name;
      var g = new Generator(x+y);
      this.interactions = {};
      this.special_effect = {};
      this.max_actions = 2;
      this.seeds = [];
      if (max_actions) {
        this.max_actions = max_actions;
      }
      for(var i = 0; i< this.max_actions; i++){
        this.seeds.push(g.get());
      }
      this.add_interaction(ABILITY.Escape, "You move away without looking back.");
    }

    add_interaction(command, description, effect) { // this will be adapted to give things, like items or something
      while (this.interactions[command]){
        command = command + " ";
      }
      this.interactions[command] = description;
      if(effect) {
        this.special_effect[command] = effect;
      }
    }

    get_special_effect(command) {
      if(command in this.special_effect){
        return this.special_effect[command];
      } else {
        return function(){};
      }
    }

    set_description(description) {
      this.description = description;
    }

    interaction() {
      BATTLEOBJECTSMANAGER.interact(this);
    }

    battle_name() {
      return BATTLEOBJECTSMANAGER.prefix + this.name;
    }
}

class EventBattleObject extends BattleObject {
    constructor(x, y, name, color, size) {
      size = size ? size: 50;
      color = (color && color != "undefined") ? color: 'obj_dark';
      var visual = new StaticSprite("assets/objects/event.png", color, size, size);
      super(x, y, name, 2, "objects/" + name, visual);
      this.adjust_hitbox(0, 0, size, size);
    }

    interaction() {
      super.interaction();
      this.destroy();
    }
}

class ItemBattleObject extends BattleObject {
    constructor(x, y, name, max_actions) {
      var visual = new StaticSprite("assets/objects/" + name + ".png", 'obj_light');
      super(x, y, name, max_actions, "objects/" + name, visual);
    }
}

class SoulBattleObject extends BattleObject {
    constructor(x, y, name, spritenb) {
      var visual = new VisualElement(0,0,0,0);
      super(x, y, name, 4, "battles/civilians/villager" + spritenb, visual);
      this.lastingBattle = true;
    }
}
