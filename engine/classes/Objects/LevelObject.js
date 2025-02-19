// runtime: LEVEL, CHARACTER


class LevelObject {
    constructor(sprite, x, y, force_index) {
        this.x = x;
        this.y = y;
        this.original_x = x;
        this.original_y = y;
        this.visual_element = sprite;

        this.visual_element.place_at(x, y);
        this.walkable = false;
        CURRENTLEVEL.objects.index_object(this, force_index);
    }

    place_at(x,y){
        this.x = x;
        this.y = y;
        this.visual_element.place_at(x, y);
    }

    shift(dx, dy) {
      this.y += dy;
      this.x += dx;
      this.visual_element.shift(dx, dy);
    }

    hash() {
      return this.constructor.name + "/" + this.original_x + "/" + this.original_y;
    }

    debug_name() {
      var name = this.constructor.name;
      if (this.battle){
        name += `(${this.battle})`;
      }
      return name + "/" + Math.floor(this.original_x) + "/" + Math.floor(this.original_y);
    }

    get_visual() {
      return this.visual_element;
    }

    make_walkable(dont_adjust_depth) {
      this.walkable = true;
      if(! dont_adjust_depth && this.visual_element){
        this.visual_element.adjust_depth(this.visual_element.y-this.visual_element.height);
      }
    }

    adjust_hitbox(x,y,w,h) {
      this.h_x = x - CHARACTER.margin_right;
      this.h_y = y + CHARACTER.margin_top;
      this.h_w = w + CHARACTER.margin_left + CHARACTER.margin_right;
      this.h_h = h + CHARACTER.margin_top + CHARACTER.margin_bottom;
    }

    draw_hitbox() {
      var html_rectangle = HTML.div.make({
        w:this.h_w,
        h:this.h_h,
        top:(this.visual_element.y + this.h_y - this.h_h),
        left:(this.visual_element.x + this.h_x),
      });
      html_rectangle.style.position = "absolute";
      html_rectangle.style.border = "3px dotted DarkGrey";
      html_rectangle.style.margin = "-3px";
      html_rectangle.style.zIndex = "30000";
      if (this.constructor.name == "SBattle"){
        html_rectangle.style.backgroundColor = "#FF000055";
          if(this.battle && this.battle.startsWith("encounters/")){
            html_rectangle.style.backgroundColor = "#00FF0055";
          }
        } else if (this.constructor.name == "SE_event_loot" || this.constructor.name == "SE_small_groundItem" || this.constructor.name == "SE_groundItem" || this.constructor.name == "SB_rubble"){
          html_rectangle.style.backgroundColor = "#0000FF55";
        } else if (this.constructor.name == "SE_event" || this.constructor.name == "SE_conversation" || this.constructor.name == "SE_FillerFlavor" || this.constructor.name.startsWith("EB_")){
          html_rectangle.style.backgroundColor = "#00FF0055";
        }

      var label = HTML.div.make({w: 200, top: this.h_h/3, h:35});
      label.innerHTML = this.debug_name();
      label.style.fontWeight = "bold";
      label.style.fontSize = "small";
      label.style.overflow = "hidden";
      label.style.backgroundColor = "#FFFFFF33";
      html_rectangle.appendChild(label);

      this.visual_element.container.style.opacity = 0.5;

      CURRENTLEVEL.system.html().appendChild(html_rectangle);
    }

    draw_display_name() {
      if(! this.display_name){
        return;
      }
      var label = HTML.div.make({
        w: 80,
        h: 30,
        z: 10000,
        top:(this.visual_element.y + this.h_y - this.h_h) + 5,
        left:this.visual_element.x + 5,// + this.h_x),
      });
      label.innerHTML = this.display_name();
      label.style.fontWeight = "bold";
      label.style.fontSize = "small";
      label.style.border = "2px dotted black";
      label.style.overflow = "hidden";
      label.style.backgroundColor = "#FFFFFF55";

      CURRENTLEVEL.system.html().appendChild(label);
    }

    get_depth() {
      return this.visual_element.get_depth();
    }

    is_at_hitbox(x,y) {
      if (x >= this.visual_element.x + this.h_x && x <= this.visual_element.x + this.h_x + this.h_w) {
        if (y >= this.visual_element.y + this.h_y - this.h_h && y <= this.visual_element.y + this.h_y) {
          return true;
        }
      }
      return false;
    }

    is_at_sprite(x,y) {
      return this.visual_element.is_at(x,y);
    }

    is_interactible(x, y) {
      return (this.interaction && this.is_at_sprite(x,y));
    }

    is_walkable(x,y) {
      if (this.is_at_hitbox(x,y)) {
        if (this.walkable) {
          return 1;
        } else if (! this.walkable) {
          return -1;
        }
      }
      return 0;
    }

    distance_to_character() {
      return this.visual_element.distance_to_character();
    }

    destroy(stillborn) {
      if (!stillborn && this.record_death){
        this.record_death();
      }

      CURRENTLEVEL.objects.program_destruction(this, stillborn);
    }

    finish_destroy() {
      if (this.visual_element){
        this.visual_element.destroy();
      }
      delete this;
    }

    text_interaction(texts, seed) {
      if(!seed){
        seed = Math.random(); // we dont care much if its kept consistent over time, its just flavor text
      }
      var gen = new Generator(seed);
      this.text = RANDOM.pick(texts, gen);
      var self = this;
      var f = function() {
        var array = self.text;
        if (typeof array == "string") {
          array= [array];
        }
        TextBannerSequence.make(array);
      }
      return f;
    }
}

class SimpleObject extends LevelObject {
  constructor(x, y, w, h, name, color) {
    var visual = new StaticSprite("assets/objects/" + name + ".png", color ? color:'obj_light');
    visual.specify_sprite_size(w, h);
    super(visual, x, y);
  }

  interaction(){
    if (this.default_text) {
      this.default_text();
    }
  }
}
