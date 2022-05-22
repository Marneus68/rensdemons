const HIT_SPIRIT = {
  origin: function(){
    return [SCREEN.width() / 2 - 150, SCREEN.height() / 2 - 50];
  },

  start: function(index, action_object) {
    HIT_SPIRIT.index = index;

    var c = HIT_SPIRIT.origin();
    HIT_SPIRIT.result_x = c[0] + Math.floor(Math.random() * 300);
    HIT_SPIRIT.result_y = c[1] - Math.floor(Math.random() * 250);

    HIT_SPIRIT.sprite = new CenteredImage("assets/interface/spirit.png", 'void');
    HIT_SPIRIT.sprite.adjust_depth(100000);
    HIT_SPIRIT.sprite.place_at(HIT_SPIRIT.result_x - 35, HIT_SPIRIT.result_y + 35);
    HIT_SPIRIT.sprite.hide();

    HIT.text_banner = new TextBanner("Find the elusive spark of spirits.", true);

    HIT_SPIRIT.background = new Rectangle(window.scrollX + c[0] - 100, window.scrollY + c[1] + 100, 500, 500, "obj_dark");
    HIT_SPIRIT.background.html_rectangle.style.opacity = 0.8;
    HIT_SPIRIT.background.adjust_depth(1000);

    HIT_SPIRIT.keyboard_x = c[0] + 90;
    HIT_SPIRIT.keyboard_y = c[1] - 90;

    setTimeout(HIT_SPIRIT.show, 400);

    delete HIT_SPIRIT.lock;
    delete HIT_SPIRIT.keyboard_sprite;
  },

  hide: function(){
    if(HIT_SPIRIT.sprite){
      HIT_SPIRIT.sprite.hide();
    }
  },

  show: function(){
    HIT_SPIRIT.sprite.show();
    setTimeout(HIT_SPIRIT.hide, 50); // 50 is min, 500 is medium

    // ADD WEAPON, MARTYRDOM, KEYBOARD
  },

  raw_click: function(x, y) {
    if(HIT_SPIRIT.lock){
      return;
    }
    HIT_SPIRIT.lock = true;

    HIT_SPIRIT.sprite.show();

    if (!HIT_SPIRIT.keyboard_sprite){ // create the reticle only if needed
      HIT_SPIRIT.keyboard_sprite = new FixedSprite("assets/interface/cross.png", 'player');
      HIT_SPIRIT.keyboard_sprite.adjust_depth(100199);
    }

    var relative_x = x - window.scrollX;
    var relative_y = y - window.scrollY;
    HIT_SPIRIT.keyboard_sprite.place_at(relative_x - 12, relative_y + 12, true);

    var dist = Math.sqrt(Math.pow(relative_x - HIT_SPIRIT.result_x,2) + Math.pow(relative_y - HIT_SPIRIT.result_y,2));
    CONSOLE.log.debug("[HIT] Distance: " + dist);

    if(dist < 30) {
      HIT.text_banner.destroy();
      HIT.text_banner = new TextBanner("You channeled spiritual energies.", true);
      setTimeout(function(){
                    HIT.result.success(HIT_SPIRIT.index);
                }, 1000);
    } else {
      setTimeout(function(){
                    HIT.result.loss(HIT_SPIRIT.index);
                }, 1000);
    }
  },

  cleanup: function(){
    if(HIT_SPIRIT.keyboard_sprite){
      HIT_SPIRIT.keyboard_sprite.destroy();
    }
    if(HIT_SPIRIT.sprite){
      HIT_SPIRIT.sprite.destroy();
    }
    if(HIT_SPIRIT.background){
      HIT_SPIRIT.background.destroy();
    }
  },
}
