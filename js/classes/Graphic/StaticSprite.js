// use(CanvasElement)

class StaticSprite extends CanvasElement {
    constructor(path, color) {
      super(color);
      this.resource = RESOURCES.get_img(path);
      var thing_to_draw = this;
      RESOURCES.onload(this.resource, function(){ thing_to_draw.draw(); });
    }

    draw() {
      // Now that it's loaded we can measure.
      this.html_canvas.width = this.resource.width;
      this.html_canvas.height = this.resource.height;

      this.html_canvas.getContext('2d').drawImage(this.resource, 0, 0);
      super.tint();
    }
}
