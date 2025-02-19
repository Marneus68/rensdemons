// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('forests/tree');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Mushroom, 0.5);
BATTLE.operations.add_loot(ITEM.Berry, 0.5);
BATTLE.operations.add_loot(ITEM.Stick, 1.5);
BATTLE.operations.add_loot("", 0.5);


// ===================
//hack PLAYER CAPABILITIES
// ===================

PLAYER_ACTIONS.kill_with_anything_over(700);

PLAYER_ACTIONS.win(ABILITY.Persuade, 2);                  // 250  DIPL
PLAYER_ACTIONS.win(ABILITY.Intimidate, 1);                // 666  DIPL

PLAYER_ACTIONS.win(ITEM.Mace, 3);                         // 75  WEAP
PLAYER_ACTIONS.win(ITEM.Axe, 1);                          // 600  WEAP

PLAYER_ACTIONS.win(ABILITY.Fireball, 2);                  // 10  ELEM
PLAYER_ACTIONS.win(ABILITY.Asphyxiate, 1);                // 250  ELEM

PLAYER_ACTIONS.win(ABILITY.Shrink, 3);                    // 66  SPIR
PLAYER_ACTIONS.win(ABILITY.Petrify, 2);                   // 166  SPIR

PLAYER_ACTIONS.win(ITEM.Poison_darts, 4, true);           // 5   TOOL
PLAYER_ACTIONS.win(ITEM.Rope, 1);                         // 100  TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_fire, 1, true);            // 10  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_decay, 1, true);           // 50  ALCH


PLAYER_ACTIONS.win(PARTYMEMBERS.SavageChild);
PLAYER_ACTIONS.win(PARTYMEMBERS.DumbMuscles);
PLAYER_ACTIONS.win(PARTYMEMBERS.StreetSmart);


// ===================
//hack MONSTER BEHAVIOR
// ===================
BESTIARY.setup_attacks("forests/tree", {
  attack_amplitude: 0.6, // Between 0 and 1
  warning_time_s: 0.5,
  react_time_s: 0.8,
  variability: 0.1, // 1 = 100%
});


// ===================
//hack START
// ===================

BATTLE.operations.start(BESTIARY.intro("forests/tree"));
