// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/waters/anemone.png", 'background');
PLAYER_ACTIONS.allow_flight();

// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(300);

PLAYER_ACTIONS.win(PARTYMEMBERS.UpbeatDojikko);
PLAYER_ACTIONS.win(PARTYMEMBERS.SnobRich);

PLAYER_ACTIONS.useless(PARTYMEMBERS.BestFriend);
PLAYER_ACTIONS.useless(PARTYMEMBERS.RetiredProtector);
PLAYER_ACTIONS.useless(PARTYMEMBERS.TraitorFisher);

PLAYER_ACTIONS.win(ABILITY.Fireball, 4);                  // 50   ELEM
PLAYER_ACTIONS.win(ABILITY.Thunder, 3);                   // 150  ELEM
PLAYER_ACTIONS.win(ABILITY.Storm, 3);                     // 200  ELEM
PLAYER_ACTIONS.useless(ABILITY.Asphyxiate, 1);                // 500  ELEM

PLAYER_ACTIONS.win(ABILITY.Poison, 2);                    // 75   SPIR
PLAYER_ACTIONS.win(ABILITY.Shrink, 2);                    // 150  SPIR
PLAYER_ACTIONS.useless(ABILITY.Petrify, 1);                   // 300  SPIR

PLAYER_ACTIONS.win(ABILITY.Circumvent, 1);                // 100  DIPL
PLAYER_ACTIONS.useless(ABILITY.Sneak, 1);                     // 200  DIPL
PLAYER_ACTIONS.win(ABILITY.Persuade, 1);                  // 500  DIPL

PLAYER_ACTIONS.win(ITEM.Elixir_chaos, 1, true);            // 20   ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_ice, 1, true);             // 50   ALCH
PLAYER_ACTIONS.useless(ITEM.Elixir_vine, 1, true);            // 75   ALCH

PLAYER_ACTIONS.win(ITEM.Dagger, 4);                       // 75   WEAP
PLAYER_ACTIONS.useless(ITEM.Mace, 1);                         // 100  WEAP
PLAYER_ACTIONS.win(ITEM.Spear, 2);                        // 250  WEAP

PLAYER_ACTIONS.win(ITEM.Poison_darts, 3, true);           // 10   TOOL
PLAYER_ACTIONS.win(ITEM.Arrow, 2, true);                  // 5    TOOL
PLAYER_ACTIONS.useless(ITEM.Rope, 1);                         // 100  TOOL

// ===================
//hack MONSTER BEHAVIOR
// ===================
var attack = {
  attack_amplitude: 0.2, // Between 0 and 1
  warning_time_s: 0.3,
  react_time_s: 1.3,
  time_variation: 0.6, // 1 = 100%
};

BATTLE.monster_actions.add_textual("The Anemone extends its giant squirmy tentacle in your direction.", attack);
BATTLE.monster_actions.add_textual("The Anemone spreads out a cloud of dark liquid, you better avoid it.", attack);
BATTLE.monster_actions.add_textual("The Anemone spits balls of a venomous goo.", attack);


// ===================
//hack START
// ===================
BATTLE.operations.start("An Angry Anemone Articulates its Appendage.");

//todo
