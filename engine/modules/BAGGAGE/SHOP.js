

var _SHOP_PRICES = {};

_SHOP_PRICES[ITEM.BreathingPotion] = 5;
_SHOP_PRICES[ITEM.Elixir_fire] = 5;
_SHOP_PRICES[ITEM.Elixir_ice] = 10;
_SHOP_PRICES[ITEM.Elixir_vine] = 15;
_SHOP_PRICES[ITEM.Elixir_venom] = 25;
_SHOP_PRICES[ITEM.Elixir_decay] = 40;
_SHOP_PRICES[ITEM.Elixir_chaos] = 50;

_SHOP_PRICES[ITEM.Sword_wooden] = 20;
_SHOP_PRICES[ITEM.Dagger] = 50;
_SHOP_PRICES[ITEM.Mace] = 75;
_SHOP_PRICES[ITEM.Shield] = 200;
_SHOP_PRICES[ITEM.Spear] = 250;
_SHOP_PRICES[ITEM.Sword_iron] = 500;
_SHOP_PRICES[ITEM.Axe] = 750;
_SHOP_PRICES[ITEM.Sword_great] = 1500;

_SHOP_PRICES[ITEM.Arrow] = 2;
_SHOP_PRICES[ITEM.Poison_darts] = 5;
_SHOP_PRICES[ITEM.Rope] = 100;
_SHOP_PRICES[ITEM.Bow] = 150;
_SHOP_PRICES[ITEM.Net] = 300;

_SHOP_PRICES[ITEM.Potato] = 3;
_SHOP_PRICES[ITEM.Stone] = 5;
_SHOP_PRICES[ITEM.Mushroom] = 5;
_SHOP_PRICES[ITEM.Berry] = 6;
_SHOP_PRICES[ITEM.Seashell] = 7;
_SHOP_PRICES[ITEM.Stick] = 8;
_SHOP_PRICES[ITEM.Meat] = 10;
_SHOP_PRICES[ITEM.Flower] = 12;
_SHOP_PRICES[ITEM.Fang] = 15;
_SHOP_PRICES[ITEM.Bone] = 15;
_SHOP_PRICES[ITEM.Feather] = 20;
_SHOP_PRICES[ITEM.Linnens] = 25;
_SHOP_PRICES[ITEM.Goo] = 20;
_SHOP_PRICES[ITEM.AncientRubbles] = 20;
_SHOP_PRICES[ITEM.Fur] = 30;
_SHOP_PRICES[ITEM.Scale] = 40;
_SHOP_PRICES[ITEM.Eye] = 50;
_SHOP_PRICES[ITEM.Medallion] = 750;

_SHOP_PRICES[ITEM.Spoon] = 1;
_SHOP_PRICES[ITEM.Candle] = 2;
_SHOP_PRICES[ITEM.OldBook] = 3;
_SHOP_PRICES[ITEM.Vase] = 3;
_SHOP_PRICES[ITEM.Umbrella] = 4;
_SHOP_PRICES[ITEM.SnobRichKey] = 6;
_SHOP_PRICES[ITEM.SilverGoblet] = 8;
_SHOP_PRICES[ITEM.PorcelainDoll] = 10;
_SHOP_PRICES[ITEM.RareWine] = 20;
_SHOP_PRICES[ITEM.StuffedBearHead] = 50;
_SHOP_PRICES[ITEM.MassiveGoldStatue] = 70;


_SHOP_SELLONLY = [ITEM.Medallion, ITEM.Goo, ITEM.Eye, ITEM.Fur, ITEM.Seashell, ITEM.Fang, ITEM.Bone, ITEM.Stick, ITEM.Potato, ITEM.Stone, ITEM.Scale, ITEM.Feather, ITEM.Flower, ITEM.Linnens, ITEM.Berry, ITEM.Mushroom,
ITEM.OldBook,ITEM.PorcelainDoll,ITEM.SnobRichKey,ITEM.Spoon,ITEM.SilverGoblet,ITEM.Umbrella,ITEM.Candle,ITEM.Vase,ITEM.RareWine,ITEM.StuffedBearHead,ITEM.MassiveGoldStatue, ITEM.AncientRubbles,
];

const SHOP = {
  selling_discount: 0.5,

  _prices: {

    buy: function(object){
      return Math.round(_SHOP_PRICES[object] * (1 - 0.4 * MARTYRDOM.effect(MARTYRDOMS.Negociation)));
    },
    sell: function(object){
      return Math.ceil(SHOP.selling_discount*_SHOP_PRICES[object] * (1 + 3 * MARTYRDOM.effect(MARTYRDOMS.Negociation)));
    },
  },

  _transaction: {
    _buy: function(object, quantity) {
      var price = SHOP._prices.buy(object);
      if (INVENTORY.cash() >= price * quantity){
        INVENTORY.increase(object, quantity);
        INVENTORY.decrease(ITEM.Coin, price * quantity);
        new AlertTextBox("Purchased " + quantity + " " + object);
      }
      var choice = SHOP._current_menu.selected;
      SHOP._current_menu.close();
      SHOP._menu.buy();
      SHOP._current_menu.select(choice);
    },

    buy: function(object, shop_type){
      if(shop_type == ITEMS_ARCHETYPES_NAMES.Alchemy || shop_type == ITEMS_ARCHETYPES_NAMES.Tool){
        new PromptTextMenu("How many do you want?", "1", function(reply){
          var amount = parseInt(reply) || 1;
          SHOP._transaction._buy(object, amount);
        });
      } else {
        SHOP._transaction._buy(object, 1);
      }
    },

    _sell: function(object, count){
      var count = count || 1;
      if (INVENTORY.count(object) >= count){
        INVENTORY.decrease(object, count);
        INVENTORY.increase(ITEM.Coin, count * SHOP._prices.sell(object));
        if(object == ITEM.Medallion){
          new AlertTextBox(`You feel awful for selling the precious memento`);
        }
      }
    },

    sell: function(object){
      SHOP._transaction._sell(object, 1);
      var choice = SHOP._current_menu.selected;
      SHOP._current_menu.close();
      SHOP._menu.sell();
      SHOP._current_menu.select(choice);
    },

    selljunk: function(object){
      var sum = 0 ;
      var summary = "";
      for(var index of _SHOP_SELLONLY){
        if(!Object.keys(_SHOP_PRICES).includes(index)){
          continue;
        }
        var c = INVENTORY.count(index);
        if(!c){
          continue;
        }
        SHOP._transaction._sell(index, c);
        sum += c *  SHOP._prices.sell(index);
        if (summary.length > 0){
          summary += ", <br />";
        }
        summary += c + " " + index;
      }
      new AlertTextBox(`You sold for ${sum} coins worth of junk.`);
    },
  },


  _menu: {
    buy: function(){
      var merchant_text = `What are you interested in? Looks like you have ${INVENTORY.cash()} coins.`;
      var goods = [];

      for(var index in _SHOP_PRICES){
        if (_SHOP_SELLONLY.includes(index)){
          continue;
        }
        if (!ARCHETYPES.get_items(SHOP._current_type).includes(index)){
          continue;
        }
        if (SHOP._current_threshold && SHOP._prices.buy(index) > SHOP._current_threshold){
          continue;
        }
        (function(i){
          var text = `${i}: ${SHOP._prices.buy(i)} coins`;
          goods.push({"text": text, "effect": function(){ SHOP._transaction.buy(i, SHOP._current_type); }, "keep_open": true});
        }(index));
      }

      SHOP._current_menu = new CenteredTextMenu(merchant_text,
          goods.concat([
            TEXTMENU_EMPTYROW,
            {"text": "Leave", "effect": "##CLOSE"},
         ])
       );
    },

    sell: function(){
      var merchant_text = `What do you want to sell? Looks like you have ${INVENTORY.cash()} coins.`;
      var goods = [];

      for(var index in INVENTORY.all_objects()){
        if(!Object.keys(_SHOP_PRICES).includes(index)){
          continue;
        }
        (function(i){
          var text = `${i} (${INVENTORY.count(i)}): ${SHOP._prices.sell(i)} coins`;
          goods.push({"text": text, "effect": function(){ SHOP._transaction.sell(i); }, "keep_open": true});
        }(index));
      }

      SHOP._current_menu = new CenteredTextMenu(merchant_text,
          goods.concat([
            TEXTMENU_EMPTYROW,
            {"text": "Leave", "effect": "##CLOSE"},
         ])
       );
    },

    main: function() {
      SHOP._current_menu = new CenteredTextMenu("What do you want to do?",
          [
            {"text": "Buy (Way of the " + SHOP._current_type + ")", "effect": function(){ SHOP._menu.buy(); }},
            {"text": "Sell", "effect": function(){ SHOP._menu.sell(); }},
            {"text": "Sell all junk", "effect": function(){ SHOP._transaction.selljunk(); }},
            {"text": "Leave", "effect": "##CLOSE"},
         ]
       );
    },
  },

  menu_sell: function(type, threshold) {
    SHOP._current_type = type;
    SHOP._current_threshold = threshold;
    SHOP._menu.sell();
  },

  menu_buy: function(type, threshold) {
    SHOP._current_type = type;
    SHOP._current_threshold = threshold;
    SHOP._menu.buy();
  },

  enter: function(type, threshold) {
    SHOP._current_type = type;
    SHOP._current_threshold = threshold;
    TextBannerSequence.make([RANDOM.pick([
      `The shopkeeper welcomes you with a smile.`,
      `Shopkeeper: "What can I do for you?"`,
      `Shopkeeper: "Welcome to my little shop, how may I help you?"`,
    ])], SHOP._menu.main);
  },

  get_raw_prices: function(){
    return _SHOP_PRICES;
  },
}
