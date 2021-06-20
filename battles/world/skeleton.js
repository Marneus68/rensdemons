// ===================
//hack INITIALIZATION
// ===================
new CenteredImage("assets/battles/world_easy/skeleton.png", 'background');
PLAYER_ACTIONS.allow_flight();

BATTLE.operations.add_loot(ITEM.Bone, 5);
BATTLE.operations.add_loot(ITEM.Sword_wooden, 1);
BATTLE.operations.add_loot("", 14);

// ===================
//hack PLAYER CAPABILITIES
// ===================
PLAYER_ACTIONS.kill_with_anything_over(300);

PLAYER_ACTIONS.win(PARTYMEMBERS.RetiredProtector);
PLAYER_ACTIONS.win(PARTYMEMBERS.DisguisedPrincess);
PLAYER_ACTIONS.win(PARTYMEMBERS.SavageChild);

PLAYER_ACTIONS.useless(PARTYMEMBERS.BestFriend);
PLAYER_ACTIONS.useless(PARTYMEMBERS.SnobRich);
PLAYER_ACTIONS.useless(PARTYMEMBERS.GeniusProdigy);

PLAYER_ACTIONS.useless(ABILITY.Fireball, 1);                  // 50   ELEM
PLAYER_ACTIONS.win(ABILITY.Thunder, 3);                   // 150  ELEM
PLAYER_ACTIONS.win(ABILITY.Storm, 3);                     // 200  ELEM

PLAYER_ACTIONS.useless(ABILITY.Poison, 1);                    // 75   SPIR
PLAYER_ACTIONS.win(ABILITY.Shrink, 3);                    // 150  SPIR
PLAYER_ACTIONS.win(ABILITY.Petrify, 2);                   // 300  SPIR

PLAYER_ACTIONS.useless(ABILITY.Circumvent, 1);                // 100  DIPL
PLAYER_ACTIONS.win(ABILITY.Sneak, 3);                     // 200  DIPL
PLAYER_ACTIONS.win(ABILITY.Persuade, 1);                  // 500  DIPL

PLAYER_ACTIONS.win(ITEM.Elixir_fire, 2, true);            // 20   ALCH
PLAYER_ACTIONS.win(ITEM.Elixir_ice, 2, true);             // 50   ALCH
PLAYER_ACTIONS.useless(ITEM.Elixir_venom, 1, true);           // 100  ALCH

PLAYER_ACTIONS.win(ITEM.Sword_wooden, 4);                 // 20   WEAP
PLAYER_ACTIONS.useless(ITEM.Dagger, 1);                       // 75   WEAP
PLAYER_ACTIONS.win(ITEM.Shield, 2);                       // 200  WEAP

PLAYER_ACTIONS.useless(ITEM.Arrow, 1, true);                  // 5    TOOL
PLAYER_ACTIONS.win(ITEM.Rope, 3);                         // 100  TOOL
PLAYER_ACTIONS.win(ITEM.Net, 3);                          // 200  TOOL


// ===================
//hack MONSTER BEHAVIOR
// ===================
var attack = {
  attack_amplitude: 0.1, // Between 0 and 1
  warning_time_s: 0.9,
  react_time_s: 0.9,
  time_variation: 0.3, // 1 = 100%
};

BATTLE.monster_actions.add_textual("The skeleton hits you with its sword.", attack);
BATTLE.monster_actions.add_textual("The skeleton is quite skilled with its weapon, alternating between feints and hits.", attack);
BATTLE.monster_actions.add_textual("The skeleton swings its sword at you, while the rattling of the bones unsettles you.", attack);



// ===================
//hack START
// ===================

BATTLE.operations.start("A Snorty Skeleton Seizes its Sword.");


//todo
