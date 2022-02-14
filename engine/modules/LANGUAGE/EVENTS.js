LANGUAGE_EVENTS = {
  _all_alone: [
    [
      `You decide to make camp and have a little meal.`,
      `You gaze at the fire, deep in thoughts. You really feel lonely without $$BestFriend$.`
    ],
    [
      `You bitterly think about $$BestFriend$ and how much you miss the presence of your best friend besides you.`,
      `Your life and your quest go on, but it feels like the world has lost its colors...`
    ],
  ],

  _party: function(member){
    switch (member){
    /*
    - conversation about open worlds
    */

      case PARTYMEMBERS.BestFriend:
        return [
          [
            `$$BestFriend$: "Isn't it weird that we always find what we need on our way?"`,
            `$$Ren$: "It's because the Goddess guides our steps!"`,
            `$$BestFriend$: "Sure, there's that. But it feels like every time we face an obstacle, the solution is somewhere nearby. That's not really a matter of what we do. We stumble onto things more than we succeed at finding them."`,
            `$$Ren$: "The Goddess has many powers. She pretty much rules the world. I think She puts things where She knows we'll need them."`,
            `$$BestFriend$: "Don't you think that's odd? Why doesn't she give us what we need directly, then?"`,
            `$$Ren$: "I don't know. She works in mysterious ways. She helps us so much, I don't want to question Her..."`,
            `$$BestFriend$: "Sounds like excuses to me..."`,
          ],
          [
            `$$BestFriend$: "When are we going to stop and take a break?"`,
            `$$Ren$: "Whenever you want!"`,
            `$$BestFriend$: "What about you, though? You seem like you're always ready to go on. You never take bathroom or sleep breaks..."`,
            `$$Ren$: "The Goddess gives me energy!"`,
            `$$BestFriend$: "I know that, but I can't help but worry about your body. Be careful, please!"`,
          ],
          [
            `$$BestFriend$: "I'm so impressed, you always seem to know where we should go and what we should do."`,
            `$$Ren$: "It's pretty easy. There's always some sort of clue. Most of the time we just follow the instructions of the last person we talked to, you know..."`,
            `$$BestFriend$: "What if they didn't say anything? Or if we forgot? Or if we got lost?"`,
            `$$Ren$: "Then it's time to pray the Goddess!"`,
          ],
          [
            `$$BestFriend$: "I can't help but be scared. There's so many dangers all around... Maybe we should stop this quest. What if something were to happen to you?"`,
            `$$Ren$: "Nothing bad will happen to me. One way or another, I'm bound to complete my mission."`,
            `$$BestFriend$: "Still, how can you be so sure you won't die or get badly hurt?"`,
            `$$Ren$: "Even if I'm hurt, I will recover. Don't worry. The Goddess is guaranteeing it. I'm the Promised Child, after all, am I not?"`,
            `$$BestFriend$: "I hope you're right..."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$BestFriend$: "..."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$BestFriend$: "..."`,
          ]
        ];

      case PARTYMEMBERS.PreciousChild:
        return [
          [
            `$$Ren$: "..."`,
            `$$PreciousChild$: "..."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$PreciousChild$: "..."`,
          ]
        ];

      case PARTYMEMBERS.UpbeatDojikko:
        return [
          [
            `$$UpbeatDojikko$: "I have been observing you for a while. I think you have the same power as I do, you can communicate with another world."`,
            `$$Ren$: "You can do that?"`,
            `$$UpbeatDojikko$: "Yes, I am atuned with the world of the dead. But I think your case is different. I've asked the specters and they do not recall talking to you. Who do you communicate with?"`,
            `$$Ren$: "Does the Goddess count? Maybe that's her."`,
            `$$UpbeatDojikko$: "Maybe."`,
          ],
          [
            `$$Ren$: "Hey, $$UpbeatDojikko$, you can do divination, right? Can you see anything in my future? Maybe it could help..."`,
            `$$UpbeatDojikko$: "Let me see..."`,
            `$$UpbeatDojikko$ seizes her crystal ball, incense and tarot deck. She isolates herself for a while, then comes back with a smile on her face.`,
            `$$UpbeatDojikko$: "I have seen your future, and it is promising. You will kill $$demon_lord$ and every monster that stands in your way. You will be successful in your quest!"`,
            `$$Ren$: "That's good to know! Although I'm not sure I trust your methods yet..."`,
          ]
        ];

      case PARTYMEMBERS.StreetSmart:
        return [
          [
            `$$StreetSmart$: "You know, usually, I make all my tools and weapons myself out of all the stuff I can find and pick up."`,
            `$$Ren$: "Yeah, I know a lot of adventurers do. I was kinda expecting to do the same, but it looks like it's not happening."`,
            `$$StreetSmart$: "Want me to teach you?"`,
            `$$Ren$: "I think I'd just be wasting your time. I feel like I'm fundamentally unable to do that. Like I couldn't even learn..."`,
            `$$StreetSmart$: "Okay, whatever."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$StreetSmart$: "..."`,
          ]
        ];

      case PARTYMEMBERS.WiseOld:
        return [
          [
            `$$Ren$: "Teach me, master. How can I achieve true enlightenment and get the power I need to succeed in my quest?"`,
            `$$WiseOld$: "To achieve true enlightenment, you must let go of all things, and accept your insignificant place in the whirlwinds of events."`,
            `$$WiseOld$: "You must accept and fully embody the fact that nothing matters. All meaning is constructed. Everything is arbitrary. Only then can you see the truth of the world."`,
            `$$WiseOld$: "Rid yourself of all illusions. Understand what you really are. See the universe in its whole, and peek at what lies behind."`,
            `$$Ren$: "Hmmm. This is all well and good, but I'm not sure how it'll help me defeat $$demon_lord$."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$WiseOld$: "..."`,
          ]
        ];

      case PARTYMEMBERS.TraitorFisher:
        return [
          [
            `$$TraitorFisher$: "Why are you keeping me around? Aren't you afraid that I'll betray you?"`,
            `$$Ren$: "Hmmm I'm pretty good at knowing where loyalties lie. I usually can rely on the people who join my party for life!"`,
            `$$TraitorFisher$: "But I will betray you!"`,
            `$$Ren$: "Oh, I know that fully well. But that doesn't mean you can't be useful in the meantime. Don't worry about me, I'm fully ready for your inevitable betrayal. When the time comes, I won't even bat a eye."`,
          ],
          [
            `$$Ren$: "So you're passionate about cooking?"`,
            `$$TraitorFisher$: "Yes I am. It frustrates me a lot that we don't get any chance to cook or fish."`,
            `$$Ren$: "I know! I was fully expecting to cook myself. Nowadays it's pretty standard for adventurers to fish and cook. It really feels like cooking should at least be an option."`,
            `$$Ren$: "Though I guess, maybe it's a bit overdone? It seems that tons of adventurers forget about the meals they cook and don't even eat them."`,
            `$$TraitorFisher$: "I'd consider that an insult. Maybe not cooking isn't that bad, if it avoids me that afront!"`,
          ]
        ];

      case PARTYMEMBERS.SavageChild:
        return [
          [
            `$$Ren$: "How are you, $$SavageChild$? Are you okay? Do you need anything?"`,
            `$$SavageChild$: "Meat!"`,
            `$$Ren$: "You know, you don't have to stay with me if you don't want to..."`,
            `$$SavageChild$: "Meat!"`,
            `$$Ren$: "I'm just wondering if you're really happy being on the road with me like that. It's dangerous, we fight a lot..."`,
            `$$SavageChild$: "Meat!"`,
            `$$Ren$: "Well at least you have your priorities straight."`,
          ],
          [
            `$$SavageChild$: "$$Ren$..."`,
            `$$Ren$: "You finally know my name!"`,
            `$$SavageChild$: "$$SavageChild$ protect $$Ren$!"`,
            `$$Ren$: "That's sweet! Thank you, $$SavageChild$!"`,
            `$$SavageChild$: "Now meat, please!"`,
          ]
        ];

      case PARTYMEMBERS.GeniusProdigy:
        return [
          [
            `$$Ren$: "..."`,
            `$$GeniusProdigy$: "..."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$GeniusProdigy$: "..."`,
          ]
        ];

      case PARTYMEMBERS.FemmeFatale:
        return [
          [
            `$$FemmeFatale$: "Now that I've travelled with you a bit, I see what you meant about the people. It's bizarre."`,
            `$$Ren$: "What do you mean?"`,
            `$$FemmeFatale$: "Well I did say all humans are basically the same and you can make them do anything if you know what button to press. But it's even worse than that with you..."`,
            `$$FemmeFatale$: "People just repeat the same things over and over to you, in the same conversation. It's almost like they're possessed..."`,
            `$$Ren$: "I try not to think about it too much, it's pretty scary. Maybe it's just the Goddess feeding them lines."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$FemmeFatale$: "..."`,
          ]
        ];

      case PARTYMEMBERS.DisguisedPrincess:
        return [
          [
            `$$Ren$: "..."`,
            `$$DisguisedPrincess$: "..."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$DisguisedPrincess$: "..."`,
          ]
        ];

      case PARTYMEMBERS.DumbMuscles:
        return [
          [
            `$$DumbMuscles$: "So mate, what are some good adventurer tips?"`,
            `$$Ren$: "Hum... Pray frequently. Any time you feel a big battle coming, or maybe a big decision, or anything risky, really. Just go straight to an altar and pray there."`,
            `$$DumbMuscles$: "Damn, I didn't know adventurers were so religious."`,
            `$$Ren$: "Well, the Goddess is very important for adventurer. She guides and protects everyone, and adventurers are the ones who need it the most."`,
          ],
          [
            `$$Ren$: "..."`,
            `$$DumbMuscles$: "..."`,
          ]
        ];

      case PARTYMEMBERS.TorturedSoul:
        return [
          [
            `$$TorturedSoul$: "Child, thou keep running into peril, yet thou endure every time. Thou miss every opportunity to bring your existence to an end, as if miraculously. Is this foolishness or bravery?"`,
            `$$Ren$: "I don't really feel like I have a choice in the matter, you know. The Goddess always has my back, whether I want it or not."`,
          ],
          [
            `$$TorturedSoul$: "Go forth! Make haste! I beg, do turn thine acursed blade against me!"`,
            `$$Ren$: "I can't!"`,
            `$$TorturedSoul$: "It is my deepest longing! I am in dire pain! Release me!"`,
            `$$Ren$: "That's not the problem! There is no friendly fire in this universe. My weapons and spells litteraly cannot hurt you."`,
            `$$TorturedSoul$: "Curses! Am I doomed to never escape from my unrelenting torment?"`,
          ]
        ];

      case PARTYMEMBERS.RetiredProtector:
        return [
          [
            `$$RetiredProtector$: "It's incredible, the world has changed so much since I traveled last. It has more colors, more details..."`,
            `$$Ren$: "Really?"`,
            `$$RetiredProtector$: "Yes, you kids don't know how good you have it. Back in my days, adventurers had to spend days traveling between different places, trying out all kind of combinations of items in hope to find one that would work correctly..."`,
            `$$Ren$: "There's still plenty of weirdness when it comes to what item works where, you know..."`,
            `$$RetiredProtector$: "Sure, but nowadays you're more guided. We needed to do stuff on our own. It took a lot of patience, you know..."`,
          ],
          [
            `$$RetiredProtector$: "Been watching you fight for a while. You kids have it easy..."`,
            `$$Ren$: "What do you mean?"`,
            `$$RetiredProtector$: "All your hits land, all your enemies die so fast... There's no skill whatsoever in the way you fight. You don't know what adversity really is..."`,
            `$$Ren$: "Is that... bad?"`,
            `$$RetiredProtector$: "I suppose not, it bodes well for our quest. It does make me regret all the time and effort I wasted in my youth, though..."`,
          ]
        ];

      case PARTYMEMBERS.SnobRich:
        return [
          [
            `$$SnobRich$: "You seem to amass quite a lot of items in your journey. Yet, I never see you struggle with carrying them around."`,
            `$$Ren$: "Yes, pretty much anything can fit in my bags! It's always been that way. A kind of blessing from the Goddess!"`,
            `$$SnobRich$: "That's quite a useful talent to have in business. When you have a chance, perhaps we should negociate terms for your employment as my courrier..."`,
            `$$Ren$: "No, thanks. I have no interest in becoming a mule."`,
          ],
          [
            `$$SnobRich$: "Say, you've got a real talent for sales. How do you get the merchants to buy basically everything? They even purchase your weird goo and so on."`,
            `$$Ren$: "Hmmm it's not really about the sale. It's more like I only pick up what I know they'll want..."`,
            `$$SnobRich$: "Still, it's pretty weird to see them buy everything you offer. I suppose you have a really keen grasp on the market. Are you sure you don't want to be my business partner? We could make a fortune!"`,
            `$$Ren$: "No, thanks."`,
          ]
        ];


      default:
        return [];
    }
  },

  get_shared: function(after_bestfriend_death){
    var r = [];
    if(!after_bestfriend_death){
      r = r.concat(LANGUAGE_EVENTS._party(PARTYMEMBERS.BestFriend));
    }
    for(var member in PARTYMEMBERS) {
      if(PARTY.has_member(PARTYMEMBERS[member])){
        r = r.concat(LANGUAGE_EVENTS._party(PARTYMEMBERS[member]));
      }
    }
    if (r.length == 0){
      r = LANGUAGE_EVENTS._all_alone;
    }
    return r;
  },
}
