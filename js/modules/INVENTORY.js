
const INVENTORY = {
  _inventory: new FluidMap(),

  factory: {
    export: function() {
      return INVENTORY._inventory.export();
    },

    import: function(save) {
      INVENTORY._inventory = new FluidMap(save);
    },
  },

  display: {
    list: function() {
      var html = "";
      for (var i in INVENTORY._inventory.get("")){
        html += i + " (" + INVENTORY._inventory.get([i]) + ")<br/>";
      }

      new MenuScreen("<b>Inventory</b><hr/>" + html );
    },
  },

  has_object: function(name) {
    return INVENTORY._inventory.get([name]);
  },

  increase: function(name, quantity) {
    INVENTORY._inventory.increment([name], quantity);
  },

}
