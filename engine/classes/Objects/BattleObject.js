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
      this.enemy_actions = [];
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

    add_enemy_action(text, attack) {
      this.enemy_actions.push({text: text, attack: attack});
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
      var sprite = color == 'obj_light' ? '2' : '';
      var visual = new StaticSprite(`assets/interface/event${sprite}.png`, color, size, size);
      super(x, y, name, 2, "objects/" + name, visual);
      this.adjust_hitbox(0, 0, size, size);
    }

    interaction() {
      // We rely on the CURRENTLEVEL cleanup to destroy it
      this.icon = S_event.make_icon("event_swords", this.x, this.y);
      super.interaction();
      this.destroy();
    }

    display_name() {
      return "Special: " + this.constructor.name;
    }
}

class ItemBattleObject extends BattleObject {
    constructor(x, y, w, h, name, max_actions) {
      var visual = new StaticSprite("assets/objects/" + name + ".png", 'obj_light');
      visual.specify_sprite_size(w, h);
      super(x, y, name, max_actions, "objects/" + name, visual);
      this.set_description(BESTIARY.intro(name));
    }
}

class SoulBattleObject extends BattleObject {
    constructor(x, y, name, spritenb) {
      var visual = new VisualElement(0,0,-1,-1);

      super(x, y, name, 4, "characters/villager" + spritenb, visual);
      this.lastingBattle = true;
    }
}
