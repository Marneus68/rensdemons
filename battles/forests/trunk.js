// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/forests/trunk.png", 'background');
PLAYER_ACTIONS.allow_flight();

/*T2 WIP
BATTLE.operations.add_loot(ITEM.Meat, 0.5);
BATTLE.operations.add_loot(ITEM.Bone, 1);
BATTLE.operations.add_loot("", 2);

// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(300);

PLAYER_ACTIONS.win(PARTYMEMBERS.StreetSmart);
PLAYER_ACTIONS.win(PARTYMEMBERS.SavageChild);

PLAYER_ACTIONS.win(ABILITY.Ice_bolt, 5);                  // 100  ELEM
PLAYER_ACTIONS.win(ABILITY.Asphyxiate, 1);                // 500  ELEM

PLAYER_ACTIONS.win(ABILITY.Petrify, 1);                   // 300  SPIR

PLAYER_ACTIONS.win(ABILITY.Circumvent, 3);                // 100  DIPL

PLAYER_ACTIONS.win(ITEM.Elixir_ice, 2, true);             // 50   ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_vine, 1, true);            // 75   ALCH

PLAYER_ACTIONS.win(ITEM.Mace, 4);                         // 100  WEAP
PLAYER_ACTIONS.win(ITEM.Spear, 1);                        // 250  WEAP

PLAYER_ACTIONS.win(ITEM.Rope, 3);                         // 100  TOOL

// ===================
//hack MONSTER BEHAVIOR
// ===================
var attack = {
  attack_amplitude: 0.3, // Between 0 and 1
  warning_time_s: 0.2,
  react_time_s: 1.5,
  time_variation: 0.2, // 1 = 100%
};*/

BATTLE.monster_actions.add_textual("The Trunk falls in your direction in a loud rumble.", attack);
BATTLE.monster_actions.add_textual("The Trunk rolls towards you at incredible speed.", attack);
BATTLE.monster_actions.add_textual("The Trunk extends a pointy twig to pierce your body.", attack);



// ===================
//hack START
// ===================

BATTLE.operations.start("A Terrifying Tottering Trunk Towers over you.");
