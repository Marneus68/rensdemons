// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('heaven/valkyrie');
PLAYER_ACTIONS.allow_flight();


BATTLE.operations.add_loot(ITEM.Feather, 1);
BATTLE.operations.add_loot(ITEM.Sword_iron, 1);


// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(1500);


PLAYER_ACTIONS.win(ABILITY.Sneak, 5);                     // 83  DIPL

PLAYER_ACTIONS.win(ITEM.Sword_great, 1);                  // 1000 WEAP

PLAYER_ACTIONS.win(ABILITY.Thunder, 5);                   // 83  ELEM

PLAYER_ACTIONS.win(ABILITY.Confusion, 2);                 // 666  SPIR

PLAYER_ACTIONS.win(ITEM.Rope, 5);                         // 100  TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_ice, 6, true);             // 20  ALCH



PLAYER_ACTIONS.win(PARTYMEMBERS.FemmeFatale);




// ===================
//hack MONSTER BEHAVIOR
// ===================

BESTIARY.setup_attacks("heaven/valkyrie", {
  attack_amplitude: 0.6, // Between 0 and 1
  warning_time_s: 0.4,
  react_time_s: 0.4,
  variability: 0.95, // 1 = 100%
});

// ===================
//hack START
// ===================

BATTLE.operations.start(BESTIARY.intro("heaven/valkyrie"));
