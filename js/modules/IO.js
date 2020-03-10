// runtime: LEVEL

const IO = {
  _PRESSED_KEYS: {},

  onScroll: function(event){
      event.preventDefault();
      /*if (DRAWING.lock_scroll) {
          DRAWING.scroll();
          return false;
      }*/
  },

  onClick: function(x,y){
    LEVEL.click(x, y);
  },

  onPressKey: function(key){
    if (!(key in IO._PRESSED_KEYS)) {
        IO._PRESSED_KEYS[key] = true;
    }
    IO.keyManager();
  },

  onReleaseKey: function(key){
    delete IO._PRESSED_KEYS[key];
    IO.keyManager();
  },

  keyManager: function(){
      if ('escape' in IO._PRESSED_KEYS || 'esc' in IO._PRESSED_KEYS || 27 in IO._PRESSED_KEYS){

      }
      if ('shift' in IO._PRESSED_KEYS || 16 in IO._PRESSED_KEYS){
          //CHARACTER.run();
      } else {
          //CHARACTER.walk();
      }

      for (var key in IO._PRESSED_KEYS) {
          if (key === 'w' || key === 87) {
            LEVEL.up();
          }
          if (key === 's' || key === 83) {
            LEVEL.down();
          }
          if (key === 'a' || key === 65) {
            LEVEL.left();
          }
          if (key === 'd' || key === 68) {
            LEVEL.right();
          }
      }
  },
}


// Events listeners

document.addEventListener('keydown', function (event) {
    var key = event.key || event.keyCode;
    IO.onPressKey(key.toLowerCase());
});

document.addEventListener('keyup', function (event) {
    var key = event.key || event.keyCode;
    IO.onReleaseKey(key.toLowerCase());
});


window.addEventListener('scroll', IO.onScroll, { passive: false });
window.addEventListener('touchmove', IO.onScroll, { passive: false});
window.addEventListener('resize', IO.onScroll, { passive: false});

window.addEventListener('click', function (event) {
    event.preventDefault();
    var destination_x = window.pageXOffset + event.clientX;
    var destination_Y = window.pageYOffset + event.clientY;

    IO.onClick(destination_x, destination_Y);
}, { passive: false});

window.addEventListener('touchstart',function (event) {
    event.preventDefault();
    var destination_x = window.pageXOffset + event.touches[0].clientX;
    var destination_Y = window.pageYOffset + event.touches[0].clientY;

    IO.onClick(destination_x, destination_Y);
}, { passive: false});
