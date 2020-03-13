// use(TextBox)
// runtime SCREEN

var _TEXTBOX_ZINDEX = 10000;


class TextBanner extends TextBox {
    constructor() {
        var top = Math.floor(SCREEN.height() * 0.63);
        var left = Math.floor(SCREEN.width() * 0.1);
        var height = Math.floor(SCREEN.height() * 0.33);
        var width = Math.floor(SCREEN.width() * 0.8);

        var padding = 30;

        super(left,top+height, width, height, padding);
    }
}
