// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('pandemonium/belial');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Elixir_venom, 1);


// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(1500);


PLAYER_ACTIONS.win(ABILITY.Sneak, 5);                     // 83  DIPL

PLAYER_ACTIONS.win(ITEM.Dagger, 5);                       // 50  WEAP

PLAYER_ACTIONS.win(ABILITY.Incinerate, 1);                // 1000 ELEM

PLAYER_ACTIONS.win(ABILITY.Lull, 2);                      // 1600 SPIR

PLAYER_ACTIONS.win(ITEM.Rope, 4);                         // 100  TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_decay, 4, true);           // 50  ALCH



PLAYER_ACTIONS.win(PARTYMEMBERS.DisguisedPrincess);


// ===================
//hack MONSTER BEHAVIOR
// ===================

BESTIARY.setup_attacks("pandemonium/belial", {
  attack_amplitude: 0.75, // Between 0 and 1
  warning_time_s: 0.3,
  react_time_s: 0.3,
  variability: 0.4, // 1 = 100%
});



// ===================
//hack START
// ===================


BATTLE.operations.start(BESTIARY.intro("pandemonium/belial"));
