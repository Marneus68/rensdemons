// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('world/knight');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Sword_iron, 0.1);
BATTLE.operations.add_loot(ITEM.Shield, 0.1);
BATTLE.operations.add_loot("", 3);


// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(700);


PLAYER_ACTIONS.win(ABILITY.Sneak, 3);                     // 83  DIPL
PLAYER_ACTIONS.win(ABILITY.Persuade, 2);                  // 250  DIPL

PLAYER_ACTIONS.win(ITEM.Sword_iron, 1);                   // 500  WEAP
PLAYER_ACTIONS.win(ITEM.Shield, 2);                       // 200  WEAP

PLAYER_ACTIONS.win(ABILITY.Ice_bolt, 3);                  // 50  ELEM
PLAYER_ACTIONS.win(ABILITY.Asphyxiate, 2);                // 250  ELEM

PLAYER_ACTIONS.win(ABILITY.Poison, 3);                    // 25  SPIR
PLAYER_ACTIONS.win(ABILITY.Confusion, 1);                 // 666  SPIR

PLAYER_ACTIONS.win(ITEM.Arrow, 6, true);                  // 2   TOOL
PLAYER_ACTIONS.win(ITEM.Net, 1);                          // 200  TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_fire, 4, true);            // 10  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_decay, 1, true);           // 50  ALCH



PLAYER_ACTIONS.win(PARTYMEMBERS.TraitorFisher);
PLAYER_ACTIONS.win(PARTYMEMBERS.PreciousChild);
PLAYER_ACTIONS.win(PARTYMEMBERS.FemmeFatale);


// ===================
//hack MONSTER BEHAVIOR
// ===================
BESTIARY.setup_attacks("world/knight", {
  attack_amplitude: 0.3, // Between 0 and 1
  warning_time_s: 0.7,
  react_time_s: 0.7,
  variability: 0.7, // 1 = 100%
});



// ===================
//hack START
// ===================

BATTLE.operations.start(BESTIARY.intro("world/knight"));
