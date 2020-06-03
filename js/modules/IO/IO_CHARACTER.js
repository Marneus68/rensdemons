const IO_CHARACTER = {
  onClick: function(x,y, is_hold) {
    CURRENTLEVEL.click(x, y, is_hold);
  },

  onContinuousKeyPress: function(pressed_keys) {
      for (var key in pressed_keys) {
          if (KEYS_UTIL.is_up(key)) {
            CURRENTLEVEL.up();
          }
          if (KEYS_UTIL.is_down(key)) {
            CURRENTLEVEL.down();
          }
          if (KEYS_UTIL.is_left(key)) {
            CURRENTLEVEL.left();
          }
          if (KEYS_UTIL.is_right(key)) {
            CURRENTLEVEL.right();
          }
          if (KEYS_UTIL.is_ok(key)) {
            CURRENTLEVEL.interact_in_front();
          }
      }
  },

  is_running: function() {
    return KEYS_UTIL.is_pressed.shift();
  },
}
