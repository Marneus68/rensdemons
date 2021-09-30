// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/hell/sandworm.png", 'background');
PLAYER_ACTIONS.allow_flight();


BATTLE.operations.add_loot(ITEM.Scale, 1);


// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(1500);

/*TODO T3 defense
PLAYER_ACTIONS.win(ABILITY.Persuade, 3);                  // 250  DIPL
PLAYER_ACTIONS.win(ABILITY.Intimidate, 1);                // 666  DIPL

PLAYER_ACTIONS.win(ITEM.Sword_iron, 2);                 // 20  WEAP
PLAYER_ACTIONS.win(ITEM.Dagger, 3);                       // 50  WEAP

PLAYER_ACTIONS.win(ABILITY.Thunder, 1);                   // 83  ELEM
PLAYER_ACTIONS.win(ABILITY.Storm, 2);                     // 166  ELEM

PLAYER_ACTIONS.win(ABILITY.Poison, 3);                    // 25  SPIR
PLAYER_ACTIONS.win(ABILITY.Confusion, 1);                 // 666  SPIR

PLAYER_ACTIONS.win(ITEM.Poison_darts, 5, true);           // 5   TOOL
PLAYER_ACTIONS.win(ITEM.Rope, 1);                         // 100  TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_venom, 3, true);           // 40  ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_chaos, 1, true);           // 75  ALCH


PLAYER_ACTIONS.win(PARTYMEMBERS.FemmeFatale);
PLAYER_ACTIONS.win(PARTYMEMBERS.WiseOld);
PLAYER_ACTIONS.win(PARTYMEMBERS.RetiredProtector);
*/




// ===================
//hack MONSTER BEHAVIOR
// ===================

var attack = {
  attack_amplitude: 0.7, // Between 0 and 1
  warning_time_s: 0.5,
  react_time_s: 0.3,
  variability: 0.8, // 1 = 100%
};


BATTLE.monster_actions.add_textual("The Sandworm undulates hypnotically and makes you realize that you're only a flesh puppet subject to circumstances without any free will.", attack);
BATTLE.monster_actions.add_textual("The Sandworm mersmerizes motions makes you feel like you don't know yourself anymore. You feel alien in this body. Is it really you?", attack);
BATTLE.monster_actions.add_textual("The Sandworm mystic dance seems to have severed the link between your body and your soul. The flesh puppet acts by itself, and you're stuck within, powerless to control anything, not even managing to articulate a mouth into a scream.", attack);

// ===================
//hack START
// ===================

BATTLE.operations.start("A Swirly Sandworm Spews its Spite.");
