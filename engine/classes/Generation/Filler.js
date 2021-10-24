// This expects obj_constructor to be (x,y,seed) => object


class Filler {
  constructor(seed) {
    this.gen = new Generator(seed);
    this.events = [];
  }

  // ===================
  //hack Parametrize
  // ===================

  set_zone(x, y, w, h) {
    this.zone_x = x;
    this.zone_y = y;
    this.zone_w = w;
    this.zone_h = h;
  }

  set_zone_from_floor(floor) {
    this.set_zone(floor.x, floor.y, floor.w, floor.h);
  }

  set_zone_from_filler(filler) {
    this.set_zone(filler.zone_x, filler.zone_y, filler.zone_w, filler.zone_h);
  }

  set_tries(min_tries, max_tries) {
    this.min_tries = min_tries;
    this.max_tries = max_tries;
  }

  set_guaranteed(guaranteed_products) {
    this.guaranteed_products = guaranteed_products;
  }

  set_object(w, h, obj_constructor) {
    this.obj_w = w;
    this.obj_h = h;
    // constructor expectx arguments (x,y,seed)
    this.obj_constructor = obj_constructor;
  }

  // ===================
  //hack Utilities
  // ===================

  _assess_params(params) {
    for (var i of params){
      if(! this[i]) {
        CONSOLE.error("Filler missing a " + i);
        CONSOLE.stack_trace();
      }
    }
  }

  _canBuild(x, y) {
    for(var i = -0.2; i <= 1.05; i += 0.25){
      for(var j = -0.05; j <= 1.2; j += 0.25){
        var xx = Math.max(1, x + this.obj_w * i);
        var yy = Math.max(1, y - this.obj_h * j);
        var elem = CURRENTLEVEL.io.select_interactible_at(xx, yy);
        if (elem || !CURRENTLEVEL.io.is_walkable(xx, yy)){
          return false;
        }
      }
    }
    return true;
  }

  _intersectWalk(x, y) {
    var grain = 10;
    for(var i = -1 * grain; i <= this.obj_w + grain; i += grain){
      for(var j = -1 * grain; j <= this.obj_h + grain; j += grain){
        if(CURRENTLEVEL.io.is_walkable(x + i, y - j)){
          return true;
        }
      }
    }
    return false;
  }

  // ===================
  //hack Fillers
  // ===================

  fill_by_retry(decor) {
    this._assess_params(["zone_x", "zone_y", "zone_w", "zone_h", "obj_w", "obj_h", "obj_constructor"]);
    var nb_tries = 10000;
    var nb_desired_products = this.guaranteed_products;

    if (!this.guaranteed_products){
      nb_tries = Math.max(0, this.min_tries + (this.max_tries - this.min_tries) * this.gen.get());
      nb_desired_products = 10000;
    }

    var i = 0;
    var nb_placed = 0;
    while (i < nb_tries && nb_placed < nb_desired_products) {
      var x = this.zone_x + this.gen.get() * (this.zone_w - this.obj_w);
      var y = this.zone_y - this.gen.get() * (this.zone_h - this.obj_h);

      if (decor? (!this._intersectWalk(x, y)) : this._canBuild(x, y)) {
        this.obj_constructor(x, y, this.gen.get());
        nb_placed ++;
      }

      i++;
    }
  }

  fill_by_slots(density) {
    this._assess_params(["zone_x", "zone_y", "zone_w", "zone_h", "obj_w", "obj_h", "obj_constructor"]);
    if (!density){
      density = 1;
    }
    var access_offset = 50;
    var w = this.zone_w;
    var h = this.zone_h - this.obj_h;
    var nb_slots = [Math.floor(w / this.obj_w), Math.floor(h / this.obj_h)];
    var slot_actual_size = [w / nb_slots[0], h / nb_slots[1]];

    for(var i = 0; i < nb_slots[0]; i++) {
      for(var j = 0; j < nb_slots[1]; j++) {
          if (this.gen.get() > density){
            continue;
          }

          // provisory position for hash of object
          var obj = this.obj_constructor(this.zone_x + i * slot_actual_size[0], this.zone_y - j * slot_actual_size[1]);

          var x = (i * slot_actual_size[0]) + this.gen.get() * (slot_actual_size[0] - obj.h_w);
          var y = (j * slot_actual_size[1]) + this.gen.get() * (slot_actual_size[1] - obj.h_h);
          obj.place_at(this.zone_x + x, this.zone_y - y - access_offset);
      }
    }
  }

  fill_line(clear_middle) {
    this._assess_params(["zone_x", "zone_y", "zone_w", "zone_h", "obj_w", "obj_h", "obj_constructor"]);

    var capacity = this.zone_w / this.obj_w;
    var nb_furniture = 1 + this.gen.int(Math.max(0, capacity-1));
    var slot_size = this.zone_w/nb_furniture;

    for (var i = 0; i < nb_furniture; i++){
      var r = this.gen.get();

      // provisory position for hash of object
      var obj = this.obj_constructor(this.zone_x + i * slot_size, this.zone_y - this.zone_h + this.obj_h);
      var x_offset = i * slot_size + r * (slot_size - obj.h_w);

      obj.place_at(this.zone_x + x_offset, this.zone_y - this.zone_h + this.obj_h);

      // leave the middle open for a hallway :/
      if (clear_middle && (x_offset + obj.h_w > this.zone_w / 2 - 20 && x_offset < this.zone_w / 2 + 20)) {
        obj.destroy(true);
      } else if (x_offset > this.zone_w - obj.h_w) {
        obj.destroy(true);
      }
    }
  }

  draw_for_debug(color) {
    new S_Floor(this.zone_x, this.zone_y, this.zone_w, this.zone_h, color);
  }
}


class MutliFiller extends Filler {
  constructor(filler, obj_w, obj_h) {
    super();
    Object.assign(this, filler);
    this.constructors = [];

    this.obj_w = obj_w;
    this.obj_h = obj_h;
    this.obj_constructor = this._constructor_constructor;
  }

  _constructor_constructor(x,y,seed) {
    var gen = new Generator(seed);
    var array = {};
    for (var i in this.constructors){
      array[i] = this.constructors[i].w;
    }
    var index = RANDOM.pick_in_weighted_array(array, gen);
    var f = this.constructors[index].f;
    console.log(f);
    console.log(x);

    return f(x,y,seed);
  }

  add_constructor(constructor_function, weight) {
    if (!weight){
      weight = 1;
    }
    this.constructors.push({f: constructor_function, w: weight});
  }

  clear() {
    this.constructors = [];
  }
}


class EventFiller extends MutliFiller {
  constructor(filler, hitbox_size, resize_event, recolor_event) {
    if(!hitbox_size){
      hitbox_size = 50;
    }

    super(filler, hitbox_size, hitbox_size);

    this.resize_event = resize_event;
    this.recolor_event = recolor_event;
  }

  battle(name, weight) {
    var size = this.resize_event;
    var color = this.recolor_event;
    this.add_constructor(function(x,y,seed){
        return new SBattle(x, y, name, size, color);
      }, weight);
  }

  battleRubble(item, weight) {
    var size = this.resize_event;
    var color = this.recolor_event;
    this.add_constructor(function(x,y,seed){
        new SB_rubble(x, y, item, size, color);
      }, weight);
  }

  groundItem(item, weight, quantity) {
    var size = this.resize_event;
    var color = this.recolor_event;
    this.add_constructor(function(x,y,seed){
        new SE_groundItem(x, y, item, quantity, size, color);
      }, weight);
  }

  text(text, weight) {
    var size = this.resize_event;
    var color = this.recolor_event;
    this.add_constructor(function(x,y,seed){
        new SE_event(x, y, text, size, color);
      }, weight);
  }

  byConstructor(constructorName, weight) {
    var size = this.resize_event;
    var color = this.recolor_event;
    this.add_constructor(function(x,y,seed){
        // This is gross and dangerous ofc
        // and even a bit redundant with the normal filler :/
        eval (`new ${constructorName}(${x}, ${y}, "${color}", ${size});`);
      }, weight);
  }
}
