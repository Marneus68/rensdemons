// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/world_easy/skeleton.png", 'background');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Bone, 5);
BATTLE.operations.add_loot(ITEM.Sword_wooden, 1);
BATTLE.operations.add_loot("", 14);

// ===================
//hack PLAYER CABAILITIES
// ===================



// ===================
//hack MONSTER BEHAVIOR
// ===================
var attack = {
  attack_amplitude: 0.1, // Between 0 and 1
  warning_time_s: 2,
  react_time_s: 1,
  time_variation: 0.5, // 1 = 100%
};

BATTLE.monster_actions.add_textual("...", attack);
BATTLE.monster_actions.add_textual("...", attack);
BATTLE.monster_actions.add_textual("...", attack);



// ===================
//hack START
// ===================

BATTLE.operations.start("A Snorty Skeleton Seizes its Sword.");


//todo
