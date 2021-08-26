
class VillagerSoul extends SoulBattleObject {
  constructor(type, sprite_nb, salt){
    super(salt * -1000, salt * -1000, "villagers/" + type, sprite_nb);

    if (sprite_nb == 2 || sprite_nb == 3) {
      this.vname = gen.pick(DATASETS.male_names);
    } else {
      this.vname = gen.pick(DATASETS.female_names);
    }

    switch(type){
      case "acceptance":
        this.setup_acceptance();
        break;
      case "denial":
        this.setup_denial();
        break;
      case "fear":
        this.setup_fear();
        break;
      case "hope":
        this.setup_hope();
        break;
      case "indulgence":
        this.setup_indulgence();
        break;
    }
  }

  setup_acceptance() {
    var attack = {
      attack_amplitude: 0.1, // Between 0 and 1
      warning_time_s: 2,
      react_time_s: 1,
      time_variation: 0.5, // 1 = 100%
    };

    this.add_enemy_action(`There's an awkward silence during which you don't know what to say.`, attack);
    this.add_enemy_action(`${this.vname} is looking at you in silence.`, attack);
    this.add_enemy_action(`You feel that the villager's gloominess is getting to you.`, attack);

    this.add_enemy_action(`${this.vname} stares at you with empty eyes.`);
    this.add_enemy_action(`${this.vname} stands still in front of you.`);
    this.add_enemy_action(`${this.vname} sighs.`);
    this.add_enemy_action(`${this.vname} simply waits for the conversation to go on.`);


    var start_text = gen.pick([
      `The villager salutes you with a monotonous voice.`,
      `The villager barely raises an eyebrow noticing you.`,
      `The villager doesn't react to your presence.`,
      `The person in front of you is barely moving. If it weren't for their breathing, you might think they were a statue.`,
      `${this.vname}: "Hi!"`,
      `${this.vname}: "Hi! We're glad your path lead you here. We hope you'll share our peace!"`,
    ]);
    this.set_description(start_text);


    this.add_interaction("Weather",`${this.vname}: "If the Goddess sent us these storms, it's surely that the wind is good for us. A human can survive on very little food, you know..."`);
    this.add_interaction("Weather",`${this.vname}: "I don't look at the sky anymore, that way I'm never disappointed if it's not sunny!"`);
    this.add_interaction("Weather",`${this.vname}: "You're looking at things the wrong way. What good is the sun, apart for the crops? What good are the crops, apart keeping us alive longer? And why would I want to be apart from the Goddess any longer than necessary?"`);

    this.add_interaction("Crops",`${this.vname}: "I don't really need food, I'll eat while there is some, but I'll be glad to join the Goddess when She calls me back to Her."`);
    this.add_interaction("Crops",`${this.vname}: "Wheat is the food of the body. Mine is already dead. Soon it will be nothing but dust. What matters is the food of the spirit."`);
    this.add_interaction("Crops",`${this.vname}: "I don't mind famine. If we had food, we'd stay alive longer, and then we'd suffer for longer."`);

    this.add_interaction("War",`${this.vname}: "War will always be with us, it's simply the best way for us to go back to our Goddess."`);
    this.add_interaction("War",`${this.vname}: "When monsters raid us next, I won't fight back. Death is the only relief from the fear of the next raid."`);
    this.add_interaction("War",`${this.vname}: "We have less raids than other parts of the Kingdom because we send sacrifices to the monsters. It appeases their appetite."`);
    this.add_interaction("War", [`${this.vname}: "Best not think about it!"`,
                                `$$Ren$: "Shouldn't you prepare yourselves to defend?"`,
                                `${this.vname}: "What's the use, we don't stand a chance. Best prepare ourselves for our inevitable demise."`]);

    this.add_interaction("Hunt",`${this.vname}: "Yes, we do hunt most of our food. It's a very spiritual moment between the hunter and their prey. We'll all be united in death, sometime."`);
    this.add_interaction("Hunt",`${this.vname}: "I like to hunt and to take other animals' lives. It's good practice for when I'll have to take my own."`);
    this.add_interaction("Hunt",`${this.vname}: "What's the point in hunting? Why take innocent lives to prolong ours, since we are doomed anyway."`);

    this.add_interaction("Taxes",`${this.vname}: "We don't pay taxes to the kingdom. What's the point, soon there won't be a kingdom left."`);
    this.add_interaction("Taxes",`${this.vname}: "Yes, I usually give all my money. I won't need it soon, anyway."`);
    this.add_interaction("Taxes",`${this.vname}: "Since I'm dying soon, I'm don't keep any money. So there's nothing to take from."`);

    this.add_interaction("King",`${this.vname}: "He owns us. I'll follow his orders and do whatever I can to contribute, even if it's a lost cause!"`);
    this.add_interaction("King",`${this.vname}: "Poor lad, thrown in charge of this mess and tasked with an impossible quest. It's a lost battle, and yet he has to fight... I tell you, wouldn't want to be him..."`);
    this.add_interaction("King",`${this.vname}: "Sometimes I dream about his death. Surely after he's gone we can all officially give up, and this whole suffering will end."`);

    this.add_interaction("Health",`${this.vname}: "Diseases are a blessing in disguise. Most often the pain is short and you die pretty fast."`);
    this.add_interaction("Health",`${this.vname}: "I don't fear diseases. I'm sure monsters will kill you before you get a chance to get sick."`);
    this.add_interaction("Health",`${this.vname}: "Health comes and goes, it's unavoidable. I'm not a big believer in hygiene. There's no use trying to avoid plagues, they'll get to you eventually."`);

    this.add_interaction("Family",`${this.vname}: "I don't want children. I can't bring myself to impose this world of suffering on others."`);
    this.add_interaction("Family",`${this.vname}: "Most of my family is already dead. My siblings are waiting for me with the Goddess. I can't wait for my turn to join them."`);
    this.add_interaction("Family",`${this.vname}: "My only child was stillborn. It's probably just as well, at least she didn't suffer. She might be the lucky one."`);

    this.add_interaction("Promised Child",`${this.vname}: "The Promised Child could come, or not. It doesn't matter. It's too late."`);
    this.add_interaction("Promised Child",`${this.vname}: "I'm sure the Promised Child was born a long time ago and was killed by the monsters. Maybe there was even several Promised Children."`);
    this.add_interaction("Promised Child",`${this.vname}: "I think it's pretty clear by now that the Promised Child is not coming. We've waited hundreds of years. Why would they come now?"`);

    this.add_interaction("Job",`${this.vname}: "I have the privilege to work on building tombs. It's an important responsibility. Our lives are transient, but our final rest will be eternal!"`);
    this.add_interaction("Job",`${this.vname}: "I offer council to prepare people for death. I organize sessions of prayers and meditations. I guess you could call me a guide for the spirits."`);
    this.add_interaction("Job",`${this.vname}: "I'm what you'd call the executioner, I guess. I'm in charge of picking the sacrifices, preparing them, and executing the ceremony at the altar. It's probably the most important job of all!"`);
    this.add_interaction("Job",`${this.vname}: "I don't have a job. I don't want to waste my time building things that are just going to be destroyed or disappear."`);

    this.add_interaction("Rumors",`${this.vname}: "I hear there will be a raid soon. Many will die. I hope my turn comes."`);
    this.add_interaction("Rumors",`${this.vname}: "Many here are saying that the Goddess has abandoned us. I can't tell if it's true, but it sure looks like it."`);
    this.add_interaction("Rumors",`${this.vname}: "People around here keep saying that the grave is a better place than this wretched world. I'm not sure if I believe them, but if things keep piling up, I might..."`);

    this.add_interaction("Dreams",`${this.vname}: "My only wish is for my death to be painless."`);
    this.add_interaction("Dreams",`${this.vname}: "I just wish the pain would stop."`);
    this.add_interaction("Dreams",`${this.vname}: "I hope our sacrifice pleases the Goddess and spares us a bit from suffering."`);

    this.add_interaction("Traditions",`${this.vname}: "Every month, we designate a sacrifice, who gets killed in the church as an offering to the Goddess. We hope it eases her anger, and lessens our punishment."`);
    this.add_interaction("Traditions",`${this.vname}: "We do regular sacrifices to the Goddess. We all want to give ourselves to Her, so we draw the lucky chosen at random. Only our blood willingly offered can appease the Goddess."`);
    this.add_interaction("Traditions",`${this.vname}: "No matter how many executions we do, the Goddess will not stop punishing her. I don't dare imagine how much worse things would be without our sacrifices."`);

    this.add_interaction("City",`${this.vname}: "Welcome to the best city in the world! The only place with the courage to look at reality in the face!"`);
    this.add_interaction("City",`${this.vname}: "Welcome to the best city in the world, where we know how wretched our kind is. We try very hard to atone and to appease the anger of the Goddess by making sacrifices."`);
    this.add_interaction("City",`${this.vname}: "Things are horrible, the only sensible thing to do is to accept our inevitable death and learn to love our suffering."`);
    this.add_interaction("City",`${this.vname}: "Here, we value wisdom and knowledge. Once you know your fate, you must accept it."`);

    this.add_interaction("Religion",`${this.vname}: "Praise be to the Goddess and may She forgive us and lessen Her punishment!"`);
    this.add_interaction("Religion",`${this.vname}: "We pray, offer blood and lives, so that the Goddess may forgive us and ease our pain!"`);
    this.add_interaction("Religion",`${this.vname}: "Religion is the only way to forgiveness which will keep our punishment bearable."`);
  }
//TODO
  setup_denial() {
    var attack = {
      attack_amplitude: 0.05, // Between 0 and 1
      warning_time_s: 0.2,
      react_time_s: 0.2,
      time_variation: 0.8, // 1 = 100%
    };
    this.add_enemy_action(`The stranger stares at you judgmentally in silence.`, attack);


    var start_text = gen.pick([
      `${this.vname}: "I haven't seen you around here before. We don't really like strangers in this town..."`,
    ]);
    this.set_description(start_text);


    this.add_interaction("Weather", `${this.vname}: "Yes, the weather has been dreadful. It's obvious, since we share the sky with lowlives heretics, we must also share their punition..."`);
  }

  setup_fear() {
    var attack = {
      attack_amplitude: 0.05, // Between 0 and 1
      warning_time_s: 0.2,
      react_time_s: 0.2,
      time_variation: 0.8, // 1 = 100%
    };
    this.add_enemy_action(`The stranger stares at you judgmentally in silence.`, attack);
    this.add_enemy_action(`The villager's glacial gaze is pretty oppressive.`, attack);
    this.add_enemy_action(`${this.vname} scolds you. What are you doing here? Isn't there somewhere else you should be?`, attack);
    this.add_enemy_action(`${this.vname} doesn't seem convinced that you're telling the truth. They press you for more details.`, attack);
    this.add_enemy_action(`You have to subject yourself to the relentless questioning of ${this.vname}.`, attack);
    this.add_enemy_action(`${this.vname} asks for proof of your faith, but it seems that nothing you say will ever be good enough.`, attack);
    this.add_enemy_action(`${this.vname} asks you an embarrassing questions.`, attack);


    var start_text = gen.pick([
      `The villager looks at you suspiciously, their eyes silently asking what you want.`,
      `The villager snappily asks you what you want.`,
      `The villager notices straight away your unfamiliar face. They grumpily come to scold you.`,
      `The person in front of you keeps darting suspicious glances at you and taking quick notes in a small black book.`,
      `${this.vname}: "Who are you and what are you doing here?"`,
      `${this.vname}: "I haven't seen you around here before. We don't really like strangers in this town..."`,
    ]);
    this.set_description(start_text);


    this.add_interaction("Weather", `${this.vname}: "Yes, the weather has been dreadful. It's obvious, since we share the sky with lowlives heretics, we must also share their punition..."`);
    this.add_interaction("Weather", `${this.vname}: "It's such a shame that the Goddess has to punish all of us for the actions of a few bad apples..."`);
    this.add_interaction("Weather", `${this.vname}: "If only people were more zealous, the Goddess wouldn't have to ruin the crops to punish them..."`);

    this.add_interaction("Crops", `${this.vname}: "We all have to ration ourselves pretty strictly to make sure that the food supplies last. We don't get a lot, with all the outsiders coming in, destroying our crops, stealing our supplies..."`);
    this.add_interaction("Crops", `${this.vname}: "Are you here to steal my food? I've earned it fair and square. I'm not going to give it to outsiders like you."`);
    this.add_interaction("Crops", `${this.vname}: "Why don't you farm your own crops before enquiring about honest folks like me? A lot of talking, not a lot of working... It's because of people like you that the Goddess has forsaken us!"`);
    this.add_interaction("Crops", `${this.vname}: "We get really worse yields than we deserve. It's because people are not praying enough. I spend hours every day repenting, and I wish I could do more."`);

    this.add_interaction("War", `${this.vname}: "Damn these monsters coming from who-knows-were to pillage and destroy our beloved lands!"`);
    this.add_interaction("War", `${this.vname}: "Some say the monster invasion is punishment for our sins. Each monster is born from a sinner. I can't wait to get rid of all the scum so that only pure people remain and the problem will be solved once and for all!"`);
    this.add_interaction("War", `${this.vname}: "I'm sure it's travelers like you who bring the monsters to our doors..."`);
    this.add_interaction("War", `${this.vname}: "Things will only improve after we've thoroughly defeated all the outsiders in battle, and pushed them back where they come from. Or better yet, exterminate them!"`);
    this.add_interaction("War", `${this.vname}: "The monsters won't cease attacking as long as there's impurity in our hearts. We must pray harder!"`);

    this.add_interaction("Hunt", `${this.vname}: "Our hunters are the best there is! I just hope they are careful and don't bring dangers to our town by getting followed!"`);
    this.add_interaction("Hunt", `${this.vname}: "Truth be told, we almost never hunt. Leaving the town is way too risky."`);
    this.add_interaction("Hunt", `${this.vname}: "I don't trust those hunter folks. They just galivant willy-nilly outside the village. Who knows what kind of stuff happens there..."`);

    this.add_interaction("Taxes", `${this.vname}: "I don't mind financing our war efforts. But I do mind when the money is spent in useless bails for unworthy people, or even worse, outsiders."`);
    this.add_interaction("Taxes", `${this.vname}: "I'm paying my dues. I'm not convinced that everyone else is doing the same. I'm pretty sure there's corruption somewhere. With the amount I've donated, we should have won the war by now!"`);
    this.add_interaction("Taxes", `${this.vname}: "I don't like paying taxes. You can't ever be sure that the money doesn't end up in the wrong pocket. Not everyone is an upstanding citizen like I am."`);

    this.add_interaction("King", `${this.vname}: "He's too weak, we need someone stronger to weed out the bad elements of this kingdom, and to kick the intruders out!"`);
    this.add_interaction("King", `${this.vname}: "If I was king, I wouldn't have let things get this bad."`);
    this.add_interaction("King", `${this.vname}: "Yes, I support the king. I'm not one of those troublemakers causing chaos in our fine kingdom."`);

    this.add_interaction("Health", `${this.vname}: "We would be fine if it weren't for outsiders bringing plagues and diseases into this beautiful city."`);
    this.add_interaction("Health", `${this.vname}: "I'm taking great care of protecting myself. I almost never leave my house, so I don't run into diseases, and I pray the Goddess every hour, so that she protects me!"`);
    this.add_interaction("Health", `${this.vname}: "I spend most of my day cleaning my house. We wouldn't have plagues if everyone was as diligent as me. Those bad apples make it hard for the rest of honest folk like me..."`);

    this.add_interaction("Family", `${this.vname}: "I cut ties with my family. Their morals were too loose for my taste. I didn't want to be associated with this kind of people, and become part of the problem."`);
    this.add_interaction("Family", `${this.vname}: "When I meet someone right, and we have children together, we'll educate them properly. Moral standards have been going down lately, and the children are as bad as it gets. No wonder why we get divine punishments..."`);
    this.add_interaction("Family", `${this.vname}: "I want to start a family, I just haven't met the right person. It's important for me that my life partner is pure, you know. I wouldn't want to invite misfortune on our home. I need to chose carefully!"`);

    this.add_interaction("Promised Child", `${this.vname}: "The Promised Child would have been here a long time ago if people were not so impure. The Goddess did not send us Her child because we're not worthy yet. We haven't prayed enough, it's that simple."`);
    this.add_interaction("Promised Child", `${this.vname}: "I'm not sure the Promised Child is ever coming, to be honest. There's so much sin everywhere. I don't know how such a dark environment can birth a holy child. We must repent!"`);
    this.add_interaction("Promised Child", `${this.vname}: "I spend all my time praying the Goddess and asking Her to send Her Promised Child to save me. I'm sure She will find my devotion worthy."`);

    this.add_interaction("Job", [
        `${this.vname}: "The world would be a much better place if everyone was doing their job as diligently as me!"`,
        `$$Ren$: "Oh, what do you do?"`,
        `${this.vname}: "Nothing at the moment, I pray!"`,
      ]);
    this.add_interaction("Job", `${this.vname}: "Most people in this city are devotes. They don't have a job per se, they dedicate their whole life to praying the Goddess and mediating, repenting and asking for forgiveness."`);
    this.add_interaction("Job", `${this.vname}: "I belong to the militia. We go through the town and make sure that public order is respected, and that people are acting in a proper and devout way. You might say that I'm the protector of the spiritual peace of this kingdom. So you better watch what you're doing, I'm keeping an eye on you, outsider."`);
    this.add_interaction("Job", `${this.vname}: "I work at the temple. We conduct random raids in the village, to punish the corrupt people who are at the root of our suffering. Once we finish getting rid of this scum, surely the Goddess will grant us peace and prosperity. You can see how important my job is."`);

    this.add_interaction("Rumors", `${this.vname}: "I keep hearing that some people have settled in this city without deserving their place... I'm sure their laziness is attracting monsters upon us..."`);
    this.add_interaction("Rumors", `${this.vname}: "Rumor has it that there are people in this city that do not do their due diligence and pray enough. I'm pretty sure this is true, and this is why the Goddess is punishing us."`);
    this.add_interaction("Rumors", `${this.vname}: "Rumors are plentiful in this city. Nobody is as perfect as me, everyone has dirty laundry. We're still far from a perfect world. If only people tried a little harder..."`);
    this.add_interaction("Rumors", `${this.vname}: "I'm sure that my neighbor is slacking off from prayer. I've heard many people confirming it..."`);

    this.add_interaction("Dreams", `${this.vname}: "I just wish that everybody was doing as much effort as me..."`);
    this.add_interaction("Dreams", `${this.vname}: "If only we could get rid of the invaders, life would be so much better..."`);
    this.add_interaction("Dreams", `${this.vname}: "I wish there were more hours in the day, so that I could pray the Goddess for longer!"`);

    this.add_interaction("Traditions", `${this.vname}: "Every week, we hold a citizen tribunal, to confront our unworthy neighbors with their sins. It's for the good of all of us, we must be righteous if we are to survive."`);
    this.add_interaction("Traditions", `${this.vname}: "We have regular deliberations to decide who should we banish from the town. It's important to banish someone every month, it keeps the city pure, and the fear keeps people in check..."`);
    this.add_interaction("Traditions", `${this.vname}: "Despite our trials and banishments, the city is still full of sin. I say we need to be more strict, so that we finally stop attracting monsters."`);

    this.add_interaction("City", `${this.vname}: "Welcome to the best city in the world! We probably have faults, but we're very devoted to getting rid of them as soon as we notice."`);
    this.add_interaction("City", `${this.vname}: "Welcome to the best city in the world! We work very hard at keeping it pure and weeding out the unwanted elements."`);
    this.add_interaction("City", `${this.vname}: "Things are horrible, it's the fault of outsiders like you and lowlives who are not devoted enough to the Goddess. You better do things the right way if you want to stay here."`);
    this.add_interaction("City", `${this.vname}: "Here, we value purity and devotion!"`);

    this.add_interaction("Religion", `${this.vname}: "Praise be to the Goddess for keeping us righteous!"`);
    this.add_interaction("Religion", `${this.vname}: "We pray zealously to show that we are worthy and to keep the bad away from us."`);
    this.add_interaction("Religion", `${this.vname}: "Religion is the only way to purity which will keep the monsters at bay."`);
  }
//TODO
  setup_hope() {
    var attack = {
      attack_amplitude: 0.05, // Between 0 and 1
      warning_time_s: 0.2,
      react_time_s: 0.2,
      time_variation: 0.8, // 1 = 100%
    };
    this.add_enemy_action(`The stranger stares at you judgmentally in silence.`, attack);


    var start_text = gen.pick([
      `${this.vname}: "I haven't seen you around here before. We don't really like strangers in this town..."`,
    ]);
    this.set_description(start_text);


    this.add_interaction("Weather", `${this.vname}: "Yes, the weather has been dreadful. It's obvious, since we share the sky with lowlives heretics, we must also share their punition..."`);
  }
//TODO
  setup_indulgence() {
    var attack = {
      attack_amplitude: 0.05, // Between 0 and 1
      warning_time_s: 0.2,
      react_time_s: 0.2,
      time_variation: 0.8, // 1 = 100%
    };
    this.add_enemy_action(`The stranger stares at you judgmentally in silence.`, attack);


    var start_text = gen.pick([
      `${this.vname}: "I haven't seen you around here before. We don't really like strangers in this town..."`,
    ]);
    this.set_description(start_text);


    this.add_interaction("Weather", `${this.vname}: "Yes, the weather has been dreadful. It's obvious, since we share the sky with lowlives heretics, we must also share their punition..."`);
  }

}


var make_banner_function = function(text){
  return function() {
    TextBannerSequence.make([text]);
  };
}

var get_rejection_soul = function(type, seed, indoors, gen) {
  var excuses = [];
  var threshold = 0.05;

  if(type == CITIES.acceptance){
    return undefined;
  }
  if(type == CITIES.indulgence){
    excuses.push(make_banner_function(`The villager just blows you a kiss.`));
    excuses.push(make_banner_function(`The villager winks at you, a little bit too salaciously for your taste.`));
    excuses.push(make_banner_function(`Villager: "Hello cutie, having fun?"`));

    if(indoors){
      excuses.push(make_banner_function(`Villager: "Well hello, look what the cat dragged in! Coming to my house, did you have anything in mind?"`));
      excuses.push(make_banner_function(`Villager: "I see you made yourself at home... I have an idea what we could do, if you get my drift..."`));
      threshold = 0.1;
    } else {
      threshold = 0.2;
    }
  }
  if(type == CITIES.denial){
    excuses.push(make_banner_function(`Villager: "What are you doing in my house?"`));
    excuses.push(make_banner_function(`The villager does not seem to see you. They ignore your attempts to communicate.`));
    excuses.push(make_banner_function(`The villager passes you by without noticing you, visibly deep in very happy thoughts.`));
    excuses.push(make_banner_function(`Villager: "Hello! Isn't this just the best possible day in the best possible world?"`));
    threshold = 0.2;
  }
  if(type == CITIES.fear){
    excuses.push(make_banner_function(`The villager pretends to not see you.`));
    excuses.push(make_banner_function(`The villager looks at you with a judgmental expression. It's clear they don't want anything to do with you.`));
    excuses.push(make_banner_function(`The villager gives you a dark look that chills your very soul. Never have you felt so hated by someone you did not know.`));
    excuses.push(make_banner_function(`The villager snears at you and continues their life as if you were not there.`));
    excuses.push(make_banner_function(`Villager: "What makes you think you can talk to me?"`));
    if(indoors){
      excuses.push(make_banner_function(`Villager: "Get out!"`));
      excuses.push(make_banner_function(`Villager: "What are you doing in my house?"`));
      excuses.push(make_banner_function(`Villager: "You have no business being here! This is trespassing!"`));
      threshold = 0.6;
    } else{
      threshold = 0.4;
    }
  }
  if(type == CITIES.hope){
    if(indoors){
      excuses.push(make_banner_function(`Villager: "Get out!"`));
      excuses.push(make_banner_function(`Villager: "What are you doing in my house?"`));
      threshold = 0.3;
    } else {
      excuses.push(make_banner_function(`The villager just passes you by and addresses you a warm smile.`));
      excuses.push(make_banner_function(`The villager seems busy doing their own things.`));
      threshold = 0.1;
    }
  }

  if(seed < threshold) {
    return {interaction: RANDOM.pick(excuses, gen)};
  }
  return undefined;
}

var get_meta_soul = function(seed, sprite_nb) {
  return {interaction: function() {
    SPECIALBATTLES.villager("villagers", "villager" + sprite_nb, seed);
  }};
}


var get_villager_soul = function(type, gen, indoors, sprite_nb) {
  var seed = gen.get();
  if (seed < 0.03) {
    return get_meta_soul(seed, sprite_nb);
  }

  var rejection_soul = get_rejection_soul(type, seed, indoors, gen);
  if (rejection_soul){
    return rejection_soul;
  }

  return new VillagerSoul(type, sprite_nb, seed);
}


class M_NPC extends MovingObject {
  constructor(x, y, sprite) {
    var visual = new MovingSprite("assets/characters/" + sprite + ".png", 'obj_dark', 32, 48);
    super(visual, x, y, 32, 48);
    this.adjust_hitbox(7, 3, 20, 12);
  }
}

class M_Villager extends M_NPC {
  constructor(type, x, y, seed, indoors) {
    var gen = new Generator(seed);
    var sprite_nb = gen.int(5);
    super(x, y, "villager" + sprite_nb);
    this.seed = gen.get();
    this.sprite_nb = sprite_nb;
    this.soul = get_villager_soul(type, gen, indoors, sprite_nb);
  }

  interaction() {
    this.face_character();
    this.soul.interaction(this.sprite_nb, this.seed);
  }
}

class M_Vendor extends M_Villager {
  constructor(x, y, seed, type, threshold) {
    super("", x,y,seed);
    this.type = type;
    this.threshold = threshold;
  }

  interaction() {
    this.face_character();
    SHOP.enter(this.type, this.threshold);
  }
}

class M_Trainer extends M_Villager {
  constructor(x, y, seed, type, threshold) {
    super("", x,y,seed);
    this.type = type;
    this.threshold = threshold;
  }

  interaction() {
    this.face_character();
    TRAINER.enter(this.type, this.threshold);
  }
}
