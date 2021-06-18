// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/forests/squirrel.png", 'background');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Berry, 1);
BATTLE.operations.add_loot("", 4);


// ===================
//hack PLAYER CABAILITIES
// ===================

PLAYER_ACTIONS.useless(ABILITY.Pray);

// ===================
//hack MONSTER BEHAVIOR
// ===================
var attack = {
  attack_amplitude: 0.01, // Between 0 and 1
  warning_time_s: 1.4,
  react_time_s: 0.1,
  time_variation: 0.5, // 1 = 100%
};

BATTLE.monster_actions.add_textual("The Squirrel burrows its little teeth deep into your hand.", attack);
BATTLE.monster_actions.add_textual("The Squirrel keeps jumping around energetically. It's getting hard to follow where it's going to attack from.", attack);
BATTLE.monster_actions.add_textual("The Squirrel jumps on your face and scratches it with its little fangs.", attack);



// ===================
//hack START
// ===================
BATTLE.operations.start("A Savage Squirrel Springs on Stage.");

//todo
