// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('trial/cockroach');
PLAYER_ACTIONS.allow_flight();

// ===================
//hack PLAYER CAPABILITIES
// ===================

PLAYER_ACTIONS.useless(ABILITY.Pray);
PLAYER_ACTIONS.useless(ITEM.Stick);
PLAYER_ACTIONS.useless(ITEM.Bone);

PLAYER_ACTIONS.win(ITEM.Fang, 2, true);
PLAYER_ACTIONS.win(ITEM.Stone, 3);
PLAYER_ACTIONS.win(ITEM.Elixir_fire, 1, true);


PLAYER_ACTIONS.add_spoiler();

// ===================
//hack MONSTER BEHAVIOR
// ===================
var attack = {
  attack_amplitude: 0.05, // Between 0 and 1
  warning_time_s: 2.0,
  react_time_s: 1.0,
  variability: 0.1, // 1 = 100%
};

BATTLE.monster_actions.add_textual("The Cockroach runs between your legs.", attack);
BATTLE.monster_actions.add_textual("The Cockroach emits small chirping sound.", attack);
BATTLE.monster_actions.add_textual("The Cockroach runs around in circles.", attack);

// ===================
//hack START
// ===================
BATTLE.operations.start(BESTIARY.intro("trial/cockroach"));
