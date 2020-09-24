// ===================
// =================== INITIALIZATION
// ===================
new CenteredImage("assets/battles/viper.png", 'background');

// ===================
// =================== ABILITIES CALLBACKS
// ===================

PLAYER_ACTIONS.default_useless.flee();
PLAYER_ACTIONS.default_useless.pray();
PLAYER_ACTIONS.default_useless.stone();
PLAYER_ACTIONS.default_win.elixir_fire();

// ===================
// =================== DEFAULT MONSTER BEHAVIOR
// ===================
var throwbranch = "Throw branch";

BATTLE.monster_actions.add_textual("The Viper slithers on the ground towards you.", 1);
BATTLE.monster_actions.add_textual("The Viper open its jaw, it shines with drool. Or is that poison?", 1);
BATTLE.monster_actions.add_textual("The Viper's pointy tongue emits a strident hiss.", 1);

var putSnakeOnStick = PLAYER_ACTIONS.function.unlock_replacing_action({
  name: throwbranch,
  outcome: BATTLETREE.WIN,
  description: ["You throw the branch with its temporary occupant.",
                "They disappear together in the darkness, far from you."],
  consume_item: ITEM.Stick,
});

PLAYER_ACTIONS.add({
  name: ITEM.Stick,
  description: "You point the branch towards the vicious enemy with your trembling hand. The viper gets distracted and seems more interested by the branch than you. It wraps yourself around it.",
  function: putSnakeOnStick,
});

PLAYER_ACTIONS.add({
  name: ITEM.Bone,
  outcome: BATTLETREE.WIN,
  description: ["You slice the Viper in half with the sharp bone.",
                "In its fresh remains, you manage to extract one of its fangs. It could be useful later."],
  give_item: ITEM.Fang,
});

//PLAYER_ACTIONS.make_victory_in_n_hits(5, "test", "testsss");


// ===================
// =================== START
// ===================
BATTLE.operations.start("A Vicious Viper Ventured into View.");
