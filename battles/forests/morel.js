// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/forests/mushroom_1.png", 'background');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Mushroom, 1);

// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(300);

PLAYER_ACTIONS.win(PARTYMEMBERS.UpbeatDojikko);
PLAYER_ACTIONS.win(PARTYMEMBERS.TorturedSoul);

PLAYER_ACTIONS.useless(PARTYMEMBERS.StreetSmart);
PLAYER_ACTIONS.useless(PARTYMEMBERS.RetiredProtector);

PLAYER_ACTIONS.useless(ABILITY.Fireball, 1);                  // 50   ELEM
PLAYER_ACTIONS.win(ABILITY.Storm, 2);                     // 200  ELEM
PLAYER_ACTIONS.win(ABILITY.Asphyxiate, 1);                // 500  ELEM

PLAYER_ACTIONS.win(ABILITY.Poison, 3);                    // 75   SPIR
PLAYER_ACTIONS.useless(ABILITY.Shrink, 1);                    // 150  SPIR
PLAYER_ACTIONS.win(ABILITY.Petrify, 1);                   // 300  SPIR

PLAYER_ACTIONS.useless(ABILITY.Circumvent, 1);                // 100  DIPL
PLAYER_ACTIONS.win(ABILITY.Sneak, 2);                     // 200  DIPL
PLAYER_ACTIONS.win(ABILITY.Persuade, 1);                  // 500  DIPL

PLAYER_ACTIONS.useless(ITEM.Elixir_vine, 1, true);            // 75   ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_venom, 1, true);           // 100  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_decay, 1, true);           // 150  ALCH

PLAYER_ACTIONS.useless(ITEM.Sword_wooden, 1);                 // 20   WEAP
PLAYER_ACTIONS.win(ITEM.Dagger, 3);                       // 75   WEAP
PLAYER_ACTIONS.win(ITEM.Spear, 1);                        // 250  WEAP

PLAYER_ACTIONS.win(ITEM.Poison_darts, 5, true);           // 10   TOOL
PLAYER_ACTIONS.win(ITEM.Arrow, 5, true);                  // 5    TOOL
PLAYER_ACTIONS.useless(ITEM.Net, 1);                          // 200  TOOL

// ===================
//hack MONSTER BEHAVIOR
// ===================
var attack = {
  attack_amplitude: 0.3, // Between 0 and 1
  warning_time_s: 0.3,
  react_time_s: 1.2,
  time_variation: 0.8, // 1 = 100%
};

BATTLE.monster_actions.add_textual("The Morel expands its rhizome at an incredible speed. It expands under your feet and starts ensnaring them.", attack);
BATTLE.monster_actions.add_textual("The Morel grows its roots longer, and they surge suddenly out of the ground and converge towards you.", attack);
BATTLE.monster_actions.add_textual("The Morel activates its rhizome which shakes the ground beneath you. You start to sink in the mud, grabbed by the vegetal tentacles.", attack);



// ===================
//hack START
// ===================
BATTLE.operations.start("A Menacing Morel Meets its Match.");

//todo
