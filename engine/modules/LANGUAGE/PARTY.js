var summon_friend = function(name) {
  return RANDOM.pick([
    `You ask ${name} for help!`,
    `You decide to let ${name} take care of the $$&ENEMY$.`,
    `You leave the floor to ${name}.`,
  ]) + " ";
};

LANGUAGE.actions[PARTYMEMBERS.BestFriend] = {
  usage: function(){
    var text = summon_friend(DICTIONARY.get(PARTYMEMBERS.BestFriend)) + RANDOM.pick([
      `$$BestFriend$ approaches the $$&ENEMY$ cautiously.`,
      `You watch, terrified, as $$BestFriend$ moves towards the $$&ENEMY$ to try and establish contact.`,
      `$$BestFriend$, brimming with optimism, attempts to establish a link with the $$&ENEMY$ by talking softly to it.`,
      `$$BestFriend$ raises a hand towards the $$&ENEMY$, in an attempt to tame it.`,
    ]);

    var dialog = RANDOM.pick([
      `$$BestFriend$: If you wouldn't mind letting us through, please?`,
      `$$BestFriend$: There's really no need for us to fight!`,
      `$$BestFriend$: Must violence always be the answer?`]);
    return [text, dialog];
  },
  fail: function(){
    return RANDOM.pick([
      `The $$&ENEMY$ pushes $$BestFriend$ away, and charges at the two of you, taking advantage of your vulnerability.`,
      `$$BestFriend$'s attempt is a failure. The $$&ENEMY$ is fiercer than ever, and attacks the both of you.`,
      `The $$&ENEMY$ does not respond well to $$BestFriend$'s approach. $$BestFriend$, disappointed and sad, withdraws in a corner.`,
    ]);
  },
  win: function(){
    return RANDOM.pick([
      `You cannot believe your eyes, but somehow the murmur of $$BestFriend$ managed to win the $$&ENEMY$ over. Completely tamed, it is now harmless to you.`,
      `The soothing voice of $$BestFriend$ succeeds at removing the will to fight from the $$&ENEMY$.`,
      `Perhaps something in the gentle demeanor of $$BestFriend$ touched the heart of the $$&ENEMY$. In any case, it backs away from the fight, leaving you free.`,
    ]);
  },
};

LANGUAGE.actions[PARTYMEMBERS.PreciousChild] = {
  usage: function(){
    var text = summon_friend(DICTIONARY.get(PARTYMEMBERS.PreciousChild)) + RANDOM.pick([
      `$$PreciousChild$ hides behind you, grabbing your arm, peeking shyly at the $$&ENEMY$.`,
      `$$PreciousChild$ tiptoes forward towards the $$&ENEMY$. The child fidgets hesitantly while looking at his opponent.`,
      `$$PreciousChild$ takes your hand, and together you approach the $$&ENEMY$.`,
      `$$PreciousChild$ cheers at the $$&ENEMY$ with a brimming smile.`]);

    var dialog = RANDOM.pick([
      `$$PreciousChild$: Will you be my friend?`,
      `$$PreciousChild$: Please stop being a bad guy.`,
      `$$PreciousChild$: I will protect my friends!`]);
    return [text, dialog];
  },
  fail: function(){
    return RANDOM.pick([
      `The $$&ENEMY$ does not seem to notice $$PreciousChild$. Surely, if it did, it would react.`,
      `The shy voice of the little boy does not reach the $$&ENEMY$. You jump in front of $$PreciousChild$ to protect him.`,
      `The $$&ENEMY$ does not react. You're worried about $$PreciousChild$, so you push him out of the way before hostilities pick up.`,
    ]);
  },
  win: function(){
    return RANDOM.pick([
      `The innocent smile of $$PreciousChild$ seems to melt the heart of the $$&ENEMY$. It doesn't want to fight anymore.`,
      `As soon as it sees $$PreciousChild$, the face of the $$&ENEMY$ lights up. $$PreciousChild$'s candor touches its heart and pacifies it for good.`,
      `$$&ENEMY$ cannot help but be moved by $$PreciousChild$'s innocence. It approaches you, and you can tell that all ill intent is gone.`,
    ]);
  },
};

LANGUAGE.actions[PARTYMEMBERS.UpbeatDojikko] = {
  usage: function(){
    var text = summon_friend(DICTIONARY.get(PARTYMEMBERS.UpbeatDojikko)) + RANDOM.pick([
      `$$UpbeatDojikko$ takes out her crystal ball to peek at the world of the departed. As she gets it out of her bag, however, it sleeps between her fingers. She juggles with it for a moment, as the ball resist her attempts at catching, before finally seizing it.`,
      `$$UpbeatDojikko$ stands in front of the $$&ENEMY$ and takes out her proverbial tarot deck. A draft immediately causes the cards to fly in all directions, and she moans as she puts them back together.`,
      `$$UpbeatDojikko$ closes her eyes and enters a state of transe to communicate with the spirit world. Her body begins to shake, producing a tingling noise from the jewelry she's wearing. She shakes so much that she falls on the ground. She crawls back on all fours.`]);

    var dialog = RANDOM.pick([
      `$$UpbeatDojikko$: My little spirit friends are calling, why won't you play with them?`,
      `$$UpbeatDojikko$: Let me turn your frown upside down!`,
      `$$UpbeatDojikko$: You know, the afterlife can be a lot of fun too!`]);
    return [text, dialog];
  },
  fail: function(){
    return RANDOM.pick([
      `$$UpbeatDojikko$ remembers a bit late that her powers are useless against a $$&ENEMY$. Oopsies.`,
      `It turns out that $$UpbeatDojikko$ has the phobia of the $$&ENEMY$. As soon as she realizes what she's up against, she runs away screaming, flailing her arms in the air.`,
      `It only takes a sudden motion from the $$&ENEMY$ in her direction to make $$UpbeatDojikko$ jump with surprise and fall on her bottom. It looks like she won't be very helpful here.`,
    ]);
  },
  win: function(){
    return RANDOM.pick([
      `$$UpbeatDojikko$ tells the $$&ENEMY$ about the details of its future. The depiction is scaringly accurate, and the $$&ENEMY$ screams to cover her predictions as she describes in gruesome details its future death. The $$&ENEMY$ would rather flee than hearing this.`,
      `$$UpbeatDojikko$ reveals to the $$&ENEMY$ what the spirits showed her. It includes many embarassing secrets. The $$&ENEMY$ yells in a panic, begging her to stop, before running away.`,
      `$$UpbeatDojikko$ shares with the $$&ENEMY$ her vision of a close friend or relative that the $$&ENEMY$ lost a long time ago. The scene gets surreal as the $$&ENEMY$ starts weeping, crying out for their departed acquaintance. `,
    ]);
  },
};
