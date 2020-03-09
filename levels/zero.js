
var color1 = Color.random();
var color2 = color1.opposite();
var color3 = color2.hoffset(0.3);
var color4 = color3.hoffset(0.2);

document.body.style.backgroundColor = color1.code();

new Rectangle(10,450,500,400, color2.code());

(new StaticSprite("testing/char1.png", color1.code())).move(100,100);

(new StaticSprite("testing/tree.png", color3.code())).move(20,0);
(new StaticSprite("testing/tree.png", color3.code())).move(150,30);
(new StaticSprite("testing/tree.png", color3.code())).move(290,60);


(new StaticSprite("testing/house.png", color4.code())).move(150,30);

(new StaticSprite("testing/tree.png", color3.code())).move(240,280);

/*
var style = document.createElement('style');
style.innerHTML = "div{ border-style: dotted; }";
document.body.appendChild(style);
*/
