// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('mountains/chimera');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Meat, 0.1);
BATTLE.operations.add_loot(ITEM.Feather, 1);
BATTLE.operations.add_loot(ITEM.Fur, 0.1);


// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(300);

PLAYER_ACTIONS.win(PARTYMEMBERS.TorturedSoul);
PLAYER_ACTIONS.win(PARTYMEMBERS.RetiredProtector);
PLAYER_ACTIONS.win(PARTYMEMBERS.StreetSmart);


PLAYER_ACTIONS.win(ABILITY.Thunder, 3);                   // 150  ELEM
PLAYER_ACTIONS.win(ABILITY.Storm, 2);                     // 200  ELEM

PLAYER_ACTIONS.win(ABILITY.Poison, 5);                    // 75   SPIR
PLAYER_ACTIONS.win(ABILITY.Petrify, 3);                   // 300  SPIR

PLAYER_ACTIONS.win(ABILITY.Sneak, 4);                     // 200  DIPL
PLAYER_ACTIONS.win(ABILITY.Persuade, 2);                  // 500  DIPL

PLAYER_ACTIONS.win(ITEM.Elixir_ice, 3, true);           // 150  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_chaos, 1, true);           // 200  ALCH

PLAYER_ACTIONS.win(ITEM.Shield, 1);                       // 200  WEAP
PLAYER_ACTIONS.win(ITEM.Spear, 2);                        // 250  WEAP

PLAYER_ACTIONS.win(ITEM.Net, 1);                          // 200  TOOL

// ===================
//hack MONSTER BEHAVIOR
// ===================
BESTIARY.setup_attacks("mountains/chimera", {
  attack_amplitude: 0.4, // Between 0 and 1
  warning_time_s: 0.4,
  react_time_s: 1,
  variability: 0.5, // 1 = 100%
});

// ===================
//hack START
// ===================

BATTLE.operations.start(BESTIARY.intro("mountains/chimera"));
