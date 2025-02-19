const HTML = {
  js:{
    clone: function(obj){
      return JSON.parse(JSON.stringify(obj));
    }
  },

  canvas: {
    tint: function(canvas, color){
      canvas.getContext('2d').globalCompositeOperation = 'source-in';
      canvas.getContext('2d').fillStyle = PALETTE.color_code_with_default(color, color);
      canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
    },

    draw_gradient_in: function(canvas, color, x, y, r){
      canvas.getContext('2d').globalCompositeOperation = 'source-in';
      var grd = canvas.getContext('2d').createRadialGradient(x, y, 2, x, y, r);
      grd.addColorStop(0, PALETTE.color_code_with_default(color, color));
      grd.addColorStop(0.3, PALETTE.color_code_with_default(color, color));
      grd.addColorStop(1, "transparent");
      canvas.getContext('2d').fillStyle = grd;
      canvas.getContext('2d').fillRect(x-r, y-r, 2*r, 2*r);
    },

    draw_circle_in: function(canvas, color, r, from, to){
      canvas.getContext('2d').globalCompositeOperation = 'source-in';
      canvas.getContext('2d').fillStyle = PALETTE.color_code_with_default(color, color);

      canvas.getContext('2d').beginPath();
      canvas.getContext('2d').moveTo(r,r);
      canvas.getContext('2d').arc(r, r, r, Math.PI * 2 - to, Math.PI * 2 - from);
      canvas.getContext('2d').closePath();
      canvas.getContext('2d').fill();
    },


    draw_line_in: function(canvas, color, fromx, fromy, tox, toy){
      canvas.getContext('2d').globalCompositeOperation = 'source-over';
      canvas.getContext('2d').strokeStyle = PALETTE.color_code_with_default(color, color);

      canvas.getContext('2d').lineWidth = 1;
      canvas.getContext('2d').beginPath();
      canvas.getContext('2d').moveTo(fromx, fromy);
      canvas.getContext('2d').lineTo(tox, toy);
      canvas.getContext('2d').stroke();
    },

    draw: function(canvas, path, color){
      var ressource = RESOURCES.get_img(path);
      RESOURCES.onload(ressource, function() {
        canvas.getContext('2d').drawImage(ressource, 0, 0);
        if(color) HTML.canvas.tint(canvas, color);
      });
    },

    make: function(w, h, z){
      var html_canvas = document.createElement('canvas');
      html_canvas.style.position = "absolute";
      html_canvas.style.width = w + "px";
      html_canvas.style.height = h + "px";
      html_canvas.width = w;
      html_canvas.height = h;
      if(z){
        html_canvas.style.zIndex = z;
      }
      return html_canvas;
    },
  },

  _get_dimension_value: function(v){
    if(v.endsWith && v.endsWith("%")){
      return v;
    } else {
      return v + "px";
    }
  },

  div: {
    make: function(options){
      var div = document.createElement('div');
      div.style.position = "absolute";
      if(options){
        if(options.id) {
          div.id = options.id;
        }
        if(options.position) {
          div.style.position = options.position;
        }
        if(options.margin) {
          div.style.margin = HTML._get_dimension_value(options.margin);
        }
        if(options.opacity) {
          div.style.opacity = options.opacity;
        }
        if(options.overflow) {
          div.style.overflow = options.overflow;
        }
        if(options.w) {
          div.style.width = HTML._get_dimension_value(options.w);
        }
        if(options.h) {
          div.style.height = HTML._get_dimension_value(options.h);
        }
        if(options.left) {
          div.style.left = HTML._get_dimension_value(options.left);
        }
        if(options.top) {
          div.style.top = HTML._get_dimension_value(options.top);
        }
        if(options.z){
          div.style.zIndex = options.z;
        }
        if(options.background){
          div.style.background = PALETTE.color_code_with_default(options.background, options.background);
        }
        if(options.border){
          div.style.border = options.border;
        }
      }
      return div;
    },
  },

  snapToGrid(x,y){
    return [Math.round(x/25)*25, Math.round(y/25)*25];
  },

}
