LANGUAGE_EVENTS = {
  _without_bf: [
    [
      `...`,
      `...`
    ],
  ],

  _party: function(member){
    switch (member){
    /*

    # AERITH EVENTS  ----------------------------------------------------
    >> should these be a part of a pool of metaevents that can happen anywhere? should they include conversations with other characters???
    >> put events in their own language file?
    - event from aerith: Don't you think it's weird how we always find what we need on our way
    - event from aerith: isnt it weird that merchants buy all your shit
    - event from aerith: do we not need breaks? no sleep or toilet
    - event from aerith: how do you know youre immortal
    - event from aerith: you have an intuition about where to go O.o
    - conversation about open worlds
    - event from aerith: i cant hurt you, no friendly fire
          "I know where to go/how to progress/what to do": i.e. when you need to // game gives me clue for next location
    - event from aerith: i always pray before a risky event or when i sense the story might branch soon. You should save before risky event,  Save point before bosses
    - reference to the fact that there's always a crafting system
    */

      case PARTYMEMBERS.BestFriend:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.PreciousChild:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
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
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.WiseOld:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.TraitorFisher:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.SavageChild:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.GeniusProdigy:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.FemmeFatale:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.DisguisedPrincess:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.DumbMuscles:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.TorturedSoul:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
          ]
        ];

      case PARTYMEMBERS.RetiredProtector:
        return [
          [
            `...`,
            `...`
          ],
          [
            `...`,
            `...`
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
            `...`,
            `...`
          ]
        ];


      default:
        return [];
    }
  },

  get_shared: function(after_bestfriend_death){
    var r = LANGUAGE_EVENTS._without_bf;
    if(!after_bestfriend_death){
      r.concat(LANGUAGE_EVENTS._party(PARTYMEMBERS.BestFriend))
    }
    for(var member in PARTYMEMBERS) {
      if(PARTY.has_member(PARTYMEMBERS[member])){
        r.concat(LANGUAGE_EVENTS._party(PARTYMEMBERS[member]));
      }
    }
    return r;
  },
}
