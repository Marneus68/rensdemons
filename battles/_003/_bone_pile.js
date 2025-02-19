
new CenteredBattleImage("assets/battles/encounters/rubble.png", 'background', 2);



PLAYER_ACTIONS.escape();
PLAYER_ACTIONS.escape("Avert eyes");

PLAYER_ACTIONS.useless(ABILITY.Pray);

PLAYER_ACTIONS.add({
  name: "Dig",
  unlock: true,
  outcome: BATTLETREE.WIN,
  description: ["You take a deep breath, gather your courage and start fumbling around in the pile of bones in search for something that could help you.",
                "You find nothing of great interest, but there is a bone that seems especially sharp. Maybe you can get some use from it."],
  give_item: ITEM.Bone,
});

BATTLE.operations.start("You find a pile of bones on the ground. They are blackened by years in this prison. You have no doubt that they are remnants of your unlucky predecessors.");
