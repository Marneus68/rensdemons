// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/hell/satyr.png", 'background');
PLAYER_ACTIONS.allow_flight();


BATTLE.operations.add_loot(ITEM.Fur, 1);


// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(1500);



PLAYER_ACTIONS.win(ABILITY.Persuade, 3);                  // 250  DIPL

PLAYER_ACTIONS.win(ITEM.Spear, 2);                    // 1000 WEAP

PLAYER_ACTIONS.win(ABILITY.Asphyxiate, 3);                // 250  ELEM

PLAYER_ACTIONS.win(ABILITY.Shrink, 5);                    // 66  SPIR

PLAYER_ACTIONS.win(ITEM.Arrow, 6, true);           // 5   TOOL

PLAYER_ACTIONS.win(ITEM.Elixir_venom, 6, true);           // 40  ALCH


PLAYER_ACTIONS.win(PARTYMEMBERS.WiseOld);



// ===================
//hack MONSTER BEHAVIOR
// ===================

var attack = {
  attack_amplitude: 0.4, // Between 0 and 1
  warning_time_s: 0.2,
  react_time_s: 0.6,
  variability: 0.9, // 1 = 100%
};



BATTLE.monster_actions.add_textual("The Satyr sends you a powerful curse that tricks you into believing you are a character from a story.", attack);
BATTLE.monster_actions.add_textual("The Satyr places a hex on you that makes you forget who you are, and even the very fact that you are.", attack);
BATTLE.monster_actions.add_textual("The Satyr curses you, and renders you unable to think.", attack);
BATTLE.monster_actions.add_textual("The Satyr casts on you a powerful spell that convinces you that you are in a dream.", attack);


// ===================
//hack START
// ===================

BATTLE.operations.start(BESTIARY.intro("hell/satyr"));
