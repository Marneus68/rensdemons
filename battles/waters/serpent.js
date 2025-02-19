// ===================
//hack INITIALIZATION
// ===================
BESTIARY.picture('waters/serpent');
PLAYER_ACTIONS.allow_flight();
AUDIO.music.interface.boss();

BATTLE.operations.add_loot(ITEM.Scale, 1);



// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(2000);
PLAYER_ACTIONS.kill_with_any_party_member(5);


PLAYER_ACTIONS.win(ABILITY.Persuade, 6);                  // 250  DIPL
PLAYER_ACTIONS.win(ABILITY.Sneak, 8);                     // 83  DIPL

PLAYER_ACTIONS.win(ITEM.Spear, 7);                        // 250  WEAP
PLAYER_ACTIONS.win(ITEM.Shield, 5);
PLAYER_ACTIONS.win(ITEM.Sword_great, 3);                  // 1000 WEAP

PLAYER_ACTIONS.win(ABILITY.Earthquake, 4);                // 666  ELEM
PLAYER_ACTIONS.win(ABILITY.Asphyxiate, 4);                // 250  ELEM

PLAYER_ACTIONS.win(ABILITY.Shrink, 7);                    // 66  SPIR
PLAYER_ACTIONS.win(ABILITY.Confusion, 4);                 // 666  SPIR

PLAYER_ACTIONS.win(ITEM.Poison_darts, 12, true);           // 5   TOOL
PLAYER_ACTIONS.win(ITEM.Rope, 8);                         // 100  TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_vine, 8, true);            // 30  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_venom, 6, true);           // 40  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_decay, 4, true);           // 50  ALCH

// ===================
//hack MONSTER BEHAVIOR
// ===================

BESTIARY.setup_attacks("waters/serpent", {
  attack_amplitude: 0.7, // Between 0 and 1
  warning_time_s: 0.2,
  react_time_s: 0.8,
  variability: 0.4, // 1 = 100%
});




// ===================
//hack START
// ===================
BATTLE.operations.start(BESTIARY.intro("waters/serpent"));
