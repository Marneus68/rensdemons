// ===================
// =================== INITIALIZATION
// ===================
new CenteredMovingBattleImage("assets/characters/party/StreetSmart.png", 'background',32,48, 2);
AUDIO.music.characters.StreetSmart();

var g = INVENTORY.cash();

PLAYER_ACTIONS.add({
  name: "Give money",
  unlock: true,
  description: [`You promptly comply and give him all of your ${g} coins.`,
                `As promised, the thief takes flight as swiftly and quickly as he arrived, and you find yourself stunned and penniless, still struggling to piece together what happened in your foggy mind.`,
              ],
  outcome: BATTLETREE.ESCAPE,
  extra_function: function() {
    STATS.record.flag("StreetSmart_mugged");
    INVENTORY.decrease(ITEM.Coin, g);
    INVENTORY.increase("_streetSmart_mugged_amount", g);
  },
});

PLAYER_ACTIONS.add({
  name: "Scream",
  unlock: true,
  description: [`You barely have time to open your mouth before the thief slits your throat. The last thing you see is a glimmer of pain and regret in his eyes.`],
  outcome: BATTLETREE.LOSS,
  extra_function: function(){
    STATS.record.flag("StreetSmart_mugged");
  },
});

// ===================
// =================== START
// ===================
BATTLE.operations.start([
  "Your assailant seems to be a young man dressed in leather. It's pretty clear that he spends a lot of time in nature. He jumped at you in total silence, with a feline agility, landing his sharp dagger under your throat. You're the only one who woke up. He whispers in your ear:",
  `$$StreetSmart$: "One wrong move and you're dead. Don't you dare make a sound. Just give me all of your money and everything will be fine. I don't want to have to hurt you."`,
]);
