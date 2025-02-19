// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('mountains/emu');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Feather, 1);

// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(300);

PLAYER_ACTIONS.win(PARTYMEMBERS.BestFriend);
PLAYER_ACTIONS.win(PARTYMEMBERS.PreciousChild);
PLAYER_ACTIONS.win(PARTYMEMBERS.SnobRich);
PLAYER_ACTIONS.win(PARTYMEMBERS.GeniusProdigy);

PLAYER_ACTIONS.win(ABILITY.Asphyxiate, 3);                  // 50   ELEM
PLAYER_ACTIONS.win(ABILITY.Ice_bolt, 2);                  // 100  ELEM

PLAYER_ACTIONS.win(ABILITY.Poison, 4);                    // 75   SPIR

PLAYER_ACTIONS.win(ABILITY.Circumvent, 5);                // 100  DIPL

PLAYER_ACTIONS.win(ITEM.Elixir_chaos, 1, true);
PLAYER_ACTIONS.win(ITEM.Elixir_decay, 1, true);

PLAYER_ACTIONS.win(ITEM.Sword_wooden, 3);                 // 20   WEAP
PLAYER_ACTIONS.win(ITEM.Dagger, 2);                       // 75   WEAP

PLAYER_ACTIONS.win(ITEM.Arrow, 2, true);                  // 5    TOOL

// ===================
//hack MONSTER BEHAVIOR
// ===================
BESTIARY.setup_attacks("mountains/emu", {
  attack_amplitude: 0.5, // Between 0 and 1
  warning_time_s: 1,
  react_time_s: 1,
  variability: 0.9, // 1 = 100%
});


// ===================
//hack START
// ===================
BATTLE.operations.start(BESTIARY.intro("mountains/emu"));
