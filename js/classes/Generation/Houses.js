
var _MAX_ROOM_W = 500;
var _MAX_ROOM_H = 500;
var _MIN_ROOM_W = 100;
var _MIN_ROOM_H = 100;

class HG_Room {
    constructor(gen, x, y, imposed_dimensions) {
      this.gen = gen;
      this.x = x;
      this.y = y;
      this.dimention(imposed_dimensions);
      this.draw();
      this.decorate();
    }

    dimention(imposed_dimensions) {
      if (!imposed_dimensions)  imposed_dimensions = [];
      this.w = imposed_dimensions[0];
      this.h = imposed_dimensions[1];

      if (!this.w)        this.w = _MIN_ROOM_W + (_MAX_ROOM_W - _MIN_ROOM_W) * this.gen.get();
      if (!this.h)        this.h = _MIN_ROOM_H + (_MAX_ROOM_H - _MIN_ROOM_H) * this.gen.get();
    }

    _gen_furniture_function(furnitures){
      var g = this.gen;
      return function(x,y) {
        var furniture = RANDOM.pick(furnitures, g);
        return new furniture(x, y);
      }
    }

    draw() {
      new S_Floor(this.x, this.y, this.w, this.h);
    }

    decorate(){
      var r = this.gen.get();
      if (r < 0.3){
        this.decorate_bedroom();
      } else if (r < 0.6) {
        this.decorate_kitchen();
      } else{
        this.decorate_random_room();
      }
    }

    fill_top_wall(furniture, slot_width, y_offset){
      var capacity = this.w / slot_width;

      var nb_furniture = 1;
      nb_furniture += Math.floor(this.gen.get() * Math.max(0, capacity-1));

      for (var i = 0; i < nb_furniture; i++){
        var r = this.gen.get();
        // provisory position for hash of object
        var f = furniture(this.x + i * this.w/nb_furniture + r * (this.w/nb_furniture), this.y - this.h + y_offset);
        var x_offset = i * this.w/nb_furniture + r * (this.w/nb_furniture - f.h_w);

        f.place_at(this.x + x_offset, this.y - this.h + y_offset);
        if (!this.is_top && (x_offset + f.h_w > this.w / 2 - 20 && x_offset < this.w / 2 + 20)) { // leave the middle open for a hallway :/
          f.destroy();
        } else if (x_offset > this.w - f.h_w) {
          f.destroy();
        }
      }
    }

    decorate_bedroom(){ //70 px top
      var top_wall_function = this._gen_furniture_function([S_Bed, S_Hay]);
      this.fill_top_wall(top_wall_function, 50, 50);
    }

    decorate_kitchen(){
      var top_wall_function = this._gen_furniture_function([S_Shelf, S_Bucket, S_Cabinet, S_Jar, S_Stool]);
      this.fill_top_wall(top_wall_function, 60, 15);

      new S_Housefire(this.x + this.w /2, this.y - this.h/2);
    }

    //       , ,S_Chair, S_Table,
    decorate_random_room(){
      var top_wall_function = this._gen_furniture_function([S_Statue]);
      this.fill_top_wall(top_wall_function, this.w, 15);
      new S_Jar(this.x + this.w /2, this.y - this.h/2);
    }

    expand_top() {
       this.room_top = new HG_Room(this.gen, this.x, this.y - this.h - 25, [this.w, 0]);
       this.room_top.is_top = true;
       var connection_x = this.x + Math.min(this.room_top.w, this.w)/2 - 25;
       new S_Floor(connection_x, this.y - this.h + 25, 50, 75);
    }

    expand_right() {
       this.room_right = new HG_Room(this.gen, this.x + this.w + 25, this.y, [0, this.h]);
       var connection_y = this.y - Math.min(this.room_right.h, this.h)/2 + 25;
       new S_Floor(this.x + this.w - 25, connection_y, 75, 50);
    }

    expand_diag() {
      var x = this.room_right.x;
      var y = this.room_top.y;
      var w = this.room_right.w;
      var h = this.room_top.h;
      var diag = new HG_Room(this.gen, x, y, [w, h]);
      diag.is_top = true;
      var connection_left = [x, y - h/2];
      var connection_bot = [x + w/2, y];

      new S_Floor(connection_left[0]-50, connection_left[1]+25, 75, 50);
      new S_Floor(connection_bot[0]-25, connection_bot[1]+50, 50, 75);
    }

    expand() {
      this.expand_top();
      this.expand_right();
      this.expand_diag();
    }

    main_entrance(outside) {
      var f = new S_Floor(this.x + 0.5*this.w - 25, this.y + 25, 50, 50);
      f.interaction = function(){
        CURRENTLEVEL.setup(outside);
      }
      return [this.x + 0.5*this.w - 15, this.y - 25];
    }
}


class HouseGenerator {
    constructor(seed, outside) {
      this.gen = new Generator(seed);
      this.MAX_ROOM_W = 500;
      this.MAX_ROOM_H = 500;
      this.MIN_ROOM_W = 100;
      this.MIN_ROOM_H = 100;
      this.x = 200;
      this.y = 1000;
      this.outside = outside
    }

    build() {
      var main_hall = new HG_Room(this.gen, this.x, this.y);
      main_hall.expand();
      return main_hall.main_entrance(this.outside); // entrance
    }

}
