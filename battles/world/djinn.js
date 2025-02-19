// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('world/djinn');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Elixir_chaos, 0.01);
BATTLE.operations.add_loot("", 1);


// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(700);


PLAYER_ACTIONS.win(ABILITY.Persuade, 2);                  // 250  DIPL
PLAYER_ACTIONS.win(ABILITY.Intimidate, 2);                // 666  DIPL

PLAYER_ACTIONS.win(ITEM.Spear, 2);                        // 250  WEAP
PLAYER_ACTIONS.win(ITEM.Sword_iron, 3);                   // 500  WEAP

PLAYER_ACTIONS.win(ABILITY.Thunder, 1);                   // 83  ELEM
PLAYER_ACTIONS.win(ABILITY.Storm, 1);                     // 166  ELEM

PLAYER_ACTIONS.win(ABILITY.Shrink, 3);                    // 66  SPIR
PLAYER_ACTIONS.win(ABILITY.Confusion, 1);                 // 666  SPIR

PLAYER_ACTIONS.win(ITEM.Poison_darts, 6, true);           // 5   TOOL
PLAYER_ACTIONS.win(ITEM.Rope, 1);                         // 100  TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_ice, 3, true);             // 20  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_chaos, 1, true);           // 75  ALCH

PLAYER_ACTIONS.win(PARTYMEMBERS.UpbeatDojikko);
PLAYER_ACTIONS.win(PARTYMEMBERS.BestFriend);
PLAYER_ACTIONS.win(PARTYMEMBERS.SavageChild);



// ===================
//hack MONSTER BEHAVIOR
// ===================
BESTIARY.setup_attacks("world/djinn", {
  attack_amplitude: 0.3, // Between 0 and 1
  warning_time_s: 0.5,
  react_time_s: 0.5,
  variability: 0.6, // 1 = 100%
});



// ===================
//hack START
// ===================

BATTLE.operations.start(BESTIARY.intro("world/djinn"));
