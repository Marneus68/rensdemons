
const RESOURCES = {
  _LOADED: {},

  is_loaded: function(item) {
    RESOURCES._LOADED[item.id] = true;
  },


  get_img: function(name) {
      var resource = document.getElementById("R_" + name);
      if (resource) {
          return resource;
      }
      var resource = document.createElement("img");
      resource.id = "R_" + name;
      resource.src = name;
      resource.style = "display:none;";
      resource.onload = function(){RESOURCES.is_loaded(resource);};

      document.getElementById('resourceLoader').appendChild(resource);
      return resource;
  },

  onload: function(resource, f) {
    if(! RESOURCES._LOADED[resource.id]){
      resource.addEventListener('load', f);
    } else {
      f(); // In case it's already loaded
    }
  },

  preload: function(){
    RESOURCES.get_img('assets/battles/caves/bat.png');
    RESOURCES.get_img('assets/battles/caves/bloodsucker.png');
    RESOURCES.get_img('assets/battles/caves/crawler.png');
    RESOURCES.get_img('assets/battles/caves/lizard.png');
    RESOURCES.get_img('assets/battles/caves/mole.png');
    RESOURCES.get_img('assets/battles/caves/rhino.png');
    RESOURCES.get_img('assets/battles/caves/scorpion.png');
    RESOURCES.get_img('assets/battles/caves/slime.png');
    RESOURCES.get_img('assets/battles/encounters/casino.png');
    RESOURCES.get_img('assets/battles/encounters/ruins.png');
    RESOURCES.get_img('assets/battles/encounters/statue.png');
    RESOURCES.get_img('assets/battles/encounters/traveler.png');
    RESOURCES.get_img('assets/battles/forests/blob.png');
    RESOURCES.get_img('assets/battles/forests/boar.png');
    RESOURCES.get_img('assets/battles/forests/flower.png');
    RESOURCES.get_img('assets/battles/forests/fox.png');
    RESOURCES.get_img('assets/battles/forests/fungus.png');
    RESOURCES.get_img('assets/battles/forests/mandragora.png');
    RESOURCES.get_img('assets/battles/forests/morel.png');
    RESOURCES.get_img('assets/battles/forests/nymph.png');
    RESOURCES.get_img('assets/battles/forests/squirrel.png');
    RESOURCES.get_img('assets/battles/forests/tree.png');
    RESOURCES.get_img('assets/battles/forests/truffle.png');
    RESOURCES.get_img('assets/battles/forests/trunk.png');
    RESOURCES.get_img('assets/battles/heaven/angel.png');
    RESOURCES.get_img('assets/battles/heaven/cherub.png');
    RESOURCES.get_img('assets/battles/heaven/goddess.png');
    RESOURCES.get_img('assets/battles/heaven/maneki.png');
    RESOURCES.get_img('assets/battles/heaven/ponpon.png');
    RESOURCES.get_img('assets/battles/heaven/raijuu.png');
    RESOURCES.get_img('assets/battles/heaven/seraph.png');
    RESOURCES.get_img('assets/battles/heaven/valkyrie.png');
    RESOURCES.get_img('assets/battles/hell/centipede.png');
    RESOURCES.get_img('assets/battles/hell/devilfly.png');
    RESOURCES.get_img('assets/battles/hell/eyeball.png');
    RESOURCES.get_img('assets/battles/hell/hecatoncheir.png');
    RESOURCES.get_img('assets/battles/hell/sandworm.png');
    RESOURCES.get_img('assets/battles/hell/satyr.png');
    RESOURCES.get_img('assets/battles/hell/serpentine.png');
    RESOURCES.get_img('assets/battles/hell/toad.png');
    RESOURCES.get_img('assets/battles/hell/warlock.png');
    RESOURCES.get_img('assets/battles/mountains/chimera.png');
    RESOURCES.get_img('assets/battles/mountains/dragon.png');
    RESOURCES.get_img('assets/battles/mountains/emu.png');
    RESOURCES.get_img('assets/battles/mountains/harpy.png');
    RESOURCES.get_img('assets/battles/mountains/hawk.png');
    RESOURCES.get_img('assets/battles/mountains/manticore.png');
    RESOURCES.get_img('assets/battles/mountains/phoenix.png');
    RESOURCES.get_img('assets/battles/mountains/pterosaur.png');
    RESOURCES.get_img('assets/battles/pandemonium/abaddon.png');
    RESOURCES.get_img('assets/battles/pandemonium/asmodeus.png');
    RESOURCES.get_img('assets/battles/pandemonium/azazel.png');
    RESOURCES.get_img('assets/battles/pandemonium/belial.png');
    RESOURCES.get_img('assets/battles/pandemonium/belphegor.png');
    RESOURCES.get_img('assets/battles/pandemonium/golem.png');
    RESOURCES.get_img('assets/battles/pandemonium/hellhound.png');
    RESOURCES.get_img('assets/battles/pandemonium/ifrit.png');
    RESOURCES.get_img('assets/battles/pandemonium/lieutenant.png');
    RESOURCES.get_img('assets/battles/pandemonium/lord.png');
    RESOURCES.get_img('assets/battles/pandemonium/mammon.png');
    RESOURCES.get_img('assets/battles/pandemonium/titan.png');
    RESOURCES.get_img('assets/battles/trial/arachnid.png');
    RESOURCES.get_img('assets/battles/trial/basilisk.png');
    RESOURCES.get_img('assets/battles/trial/cockroach.png');
    RESOURCES.get_img('assets/battles/trial/rodent.png');
    RESOURCES.get_img('assets/battles/trial/viper.png');
    RESOURCES.get_img('assets/battles/waters/anemone.png');
    RESOURCES.get_img('assets/battles/waters/anglerjelly.png');
    RESOURCES.get_img('assets/battles/waters/crab.png');
    RESOURCES.get_img('assets/battles/waters/jellyfish.png');
    RESOURCES.get_img('assets/battles/waters/mermaid.png');
    RESOURCES.get_img('assets/battles/waters/naiad.png');
    RESOURCES.get_img('assets/battles/waters/octopus.png');
    RESOURCES.get_img('assets/battles/waters/serpent.png');
    RESOURCES.get_img('assets/battles/waters/squid.png');
    RESOURCES.get_img('assets/battles/waters/triton.png');
    RESOURCES.get_img('assets/battles/waters/whale.png');
    RESOURCES.get_img('assets/battles/world/arsonist.png');
    RESOURCES.get_img('assets/battles/world/bruiser.png');
    RESOURCES.get_img('assets/battles/world/butcher.png');
    RESOURCES.get_img('assets/battles/world/djinn.png');
    RESOURCES.get_img('assets/battles/world/ghost.png');
    RESOURCES.get_img('assets/battles/world/goblin.png');
    RESOURCES.get_img('assets/battles/world/grizzly.png');
    RESOURCES.get_img('assets/battles/world/knight.png');
    RESOURCES.get_img('assets/battles/world/mammoth.png');
    RESOURCES.get_img('assets/battles/world/mummy.png');
    RESOURCES.get_img('assets/battles/world/skeleton.png');
    RESOURCES.get_img('assets/battles/world/vadhaka.png');
    RESOURCES.get_img('assets/battles/world/wraith.png');
    RESOURCES.get_img('assets/battles_empathized/caves/bat.png');
    RESOURCES.get_img('assets/battles_empathized/caves/bloodsucker.png');
    RESOURCES.get_img('assets/battles_empathized/caves/crawler.png');
    RESOURCES.get_img('assets/battles_empathized/caves/mole.png');
    RESOURCES.get_img('assets/battles_empathized/caves/scorpion.png');
    RESOURCES.get_img('assets/battles_empathized/caves/slime.png');
    RESOURCES.get_img('assets/battles_empathized/forests/boar.png');
    RESOURCES.get_img('assets/battles_empathized/forests/flower.png');
    RESOURCES.get_img('assets/battles_empathized/forests/fox.png');
    RESOURCES.get_img('assets/battles_empathized/forests/mandragora.png');
    RESOURCES.get_img('assets/battles_empathized/forests/morel.png');
    RESOURCES.get_img('assets/battles_empathized/forests/nymph.png');
    RESOURCES.get_img('assets/battles_empathized/forests/squirrel.png');
    RESOURCES.get_img('assets/battles_empathized/forests/tree.png');
    RESOURCES.get_img('assets/battles_empathized/forests/truffle.png');
    RESOURCES.get_img('assets/battles_empathized/forests/trunk.png');
    RESOURCES.get_img('assets/battles_empathized/heaven/angel.png');
    RESOURCES.get_img('assets/battles_empathized/heaven/cherub.png');
    RESOURCES.get_img('assets/battles_empathized/heaven/maneki.png');
    RESOURCES.get_img('assets/battles_empathized/heaven/ponpon.png');
    RESOURCES.get_img('assets/battles_empathized/heaven/raijuu.png');
    RESOURCES.get_img('assets/battles_empathized/heaven/seraph.png');
    RESOURCES.get_img('assets/battles_empathized/heaven/valkyrie.png');
    RESOURCES.get_img('assets/battles_empathized/hell/centipede.png');
    RESOURCES.get_img('assets/battles_empathized/hell/devilfly.png');
    RESOURCES.get_img('assets/battles_empathized/hell/eyeball.png');
    RESOURCES.get_img('assets/battles_empathized/hell/hecatoncheir.png');
    RESOURCES.get_img('assets/battles_empathized/hell/sandworm.png');
    RESOURCES.get_img('assets/battles_empathized/hell/satyr.png');
    RESOURCES.get_img('assets/battles_empathized/hell/serpentine.png');
    RESOURCES.get_img('assets/battles_empathized/hell/toad.png');
    RESOURCES.get_img('assets/battles_empathized/hell/warlock.png');
    RESOURCES.get_img('assets/battles_empathized/mountains/chimera.png');
    RESOURCES.get_img('assets/battles_empathized/mountains/emu.png');
    RESOURCES.get_img('assets/battles_empathized/mountains/harpy.png');
    RESOURCES.get_img('assets/battles_empathized/mountains/hawk.png');
    RESOURCES.get_img('assets/battles_empathized/mountains/manticore.png');
    RESOURCES.get_img('assets/battles_empathized/mountains/pterosaur.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/abaddon.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/asmodeus.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/azazel.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/belial.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/belphegor.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/golem.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/hellhound.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/ifrit.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/mammon.png');
    RESOURCES.get_img('assets/battles_empathized/pandemonium/titan.png');
    RESOURCES.get_img('assets/battles_empathized/trial/arachnid.png');
    RESOURCES.get_img('assets/battles_empathized/trial/cockroach.png');
    RESOURCES.get_img('assets/battles_empathized/trial/rodent.png');
    RESOURCES.get_img('assets/battles_empathized/trial/viper.png');
    RESOURCES.get_img('assets/battles_empathized/waters/anemone.png');
    RESOURCES.get_img('assets/battles_empathized/waters/anglerjelly.png');
    RESOURCES.get_img('assets/battles_empathized/waters/crab.png');
    RESOURCES.get_img('assets/battles_empathized/waters/jellyfish.png');
    RESOURCES.get_img('assets/battles_empathized/waters/mermaid.png');
    RESOURCES.get_img('assets/battles_empathized/waters/naiad.png');
    RESOURCES.get_img('assets/battles_empathized/waters/octopus.png');
    RESOURCES.get_img('assets/battles_empathized/waters/squid.png');
    RESOURCES.get_img('assets/battles_empathized/waters/triton.png');
    RESOURCES.get_img('assets/battles_empathized/world/arsonist.png');
    RESOURCES.get_img('assets/battles_empathized/world/bruiser.png');
    RESOURCES.get_img('assets/battles_empathized/world/butcher.png');
    RESOURCES.get_img('assets/battles_empathized/world/djinn.png');
    RESOURCES.get_img('assets/battles_empathized/world/ghost.png');
    RESOURCES.get_img('assets/battles_empathized/world/goblin.png');
    RESOURCES.get_img('assets/battles_empathized/world/grizzly.png');
    RESOURCES.get_img('assets/battles_empathized/world/knight.png');
    RESOURCES.get_img('assets/battles_empathized/world/mammoth.png');
    RESOURCES.get_img('assets/battles_empathized/world/mummy.png');
    RESOURCES.get_img('assets/battles_empathized/world/skeleton.png');
    RESOURCES.get_img('assets/battles_empathized/world/vadhaka.png');
    RESOURCES.get_img('assets/battles_empathized/world/wraith.png');
    RESOURCES.get_img('assets/characters/boat.png');
    RESOURCES.get_img('assets/characters/child_f.png');
    RESOURCES.get_img('assets/characters/child_m.png');
    RESOURCES.get_img('assets/characters/guard.png');
    RESOURCES.get_img('assets/characters/priest.png');
    RESOURCES.get_img('assets/characters/ren.png');
    RESOURCES.get_img('assets/characters/spirit.png');
    RESOURCES.get_img('assets/characters/villager0.png');
    RESOURCES.get_img('assets/characters/villager1.png');
    RESOURCES.get_img('assets/characters/villager2.png');
    RESOURCES.get_img('assets/characters/villager3.png');
    RESOURCES.get_img('assets/characters/villager4.png');
    RESOURCES.get_img('assets/characters/party/BestFriend.png');
    RESOURCES.get_img('assets/characters/party/DisguisedPrincess.png');
    RESOURCES.get_img('assets/characters/party/DumbMuscles.png');
    RESOURCES.get_img('assets/characters/party/FemmeFatale.png');
    RESOURCES.get_img('assets/characters/party/GeniusProdigy.png');
    RESOURCES.get_img('assets/characters/party/PreciousChild.png');
    RESOURCES.get_img('assets/characters/party/RetiredProtector.png');
    RESOURCES.get_img('assets/characters/party/SavageChild.png');
    RESOURCES.get_img('assets/characters/party/SnobRich.png');
    RESOURCES.get_img('assets/characters/party/StreetSmart.png');
    RESOURCES.get_img('assets/characters/party/TorturedSoul.png');
    RESOURCES.get_img('assets/characters/party/TraitorFisher.png');
    RESOURCES.get_img('assets/characters/party/UpbeatDojikko.png');
    RESOURCES.get_img('assets/characters/party/WiseOld.png');
    RESOURCES.get_img('assets/interface/circle.png');
    RESOURCES.get_img('assets/interface/cross.png');
    RESOURCES.get_img('assets/interface/dodger.png');
    RESOURCES.get_img('assets/interface/event.png');
    RESOURCES.get_img('assets/interface/event2.png');
    RESOURCES.get_img('assets/interface/event_conversation.png');
    RESOURCES.get_img('assets/interface/event_purse.png');
    RESOURCES.get_img('assets/interface/event_swords.png');
    RESOURCES.get_img('assets/interface/event_text.png');
    RESOURCES.get_img('assets/interface/page.png');
    RESOURCES.get_img('assets/interface/windrose.png');
    RESOURCES.get_img('assets/objects/buildings/casern_base.png');
    RESOURCES.get_img('assets/objects/buildings/casern_details.png');
    RESOURCES.get_img('assets/objects/buildings/castle_base.png');
    RESOURCES.get_img('assets/objects/buildings/castle_details.png');
    RESOURCES.get_img('assets/objects/buildings/church_base.png');
    RESOURCES.get_img('assets/objects/buildings/church_details.png');
    RESOURCES.get_img('assets/objects/buildings/house_acceptance.png');
    RESOURCES.get_img('assets/objects/buildings/house_acceptance_windows.png');
    RESOURCES.get_img('assets/objects/buildings/house_base.png');
    RESOURCES.get_img('assets/objects/buildings/house_denial.png');
    RESOURCES.get_img('assets/objects/buildings/house_denial_windows.png');
    RESOURCES.get_img('assets/objects/buildings/house_fear.png');
    RESOURCES.get_img('assets/objects/buildings/house_fear_windows.png');
    RESOURCES.get_img('assets/objects/buildings/house_hope.png');
    RESOURCES.get_img('assets/objects/buildings/house_hope_windows.png');
    RESOURCES.get_img('assets/objects/buildings/house_indulgence.png');
    RESOURCES.get_img('assets/objects/buildings/house_indulgence_windows.png');
    RESOURCES.get_img('assets/objects/buildings/house_store.png');
    RESOURCES.get_img('assets/objects/buildings/manor_base.png');
    RESOURCES.get_img('assets/objects/buildings/manor_details.png');
    RESOURCES.get_img('assets/objects/cave/caveplant.png');
    RESOURCES.get_img('assets/objects/cave/caveplant2.png');
    RESOURCES.get_img('assets/objects/cave/cavesprouts.png');
    RESOURCES.get_img('assets/objects/cave/column.png');
    RESOURCES.get_img('assets/objects/cave/cristalbig.png');
    RESOURCES.get_img('assets/objects/cave/cristalfragment.png');
    RESOURCES.get_img('assets/objects/cave/cristalsmall.png');
    RESOURCES.get_img('assets/objects/cave/cristaltiny.png');
    RESOURCES.get_img('assets/objects/cave/godesscolumn.png');
    RESOURCES.get_img('assets/objects/cave/hole.png');
    RESOURCES.get_img('assets/objects/cave/hole2.png');
    RESOURCES.get_img('assets/objects/cave/rocklump.png');
    RESOURCES.get_img('assets/objects/exterior/pebbles.png');
    RESOURCES.get_img('assets/objects/exterior/plant.png');
    RESOURCES.get_img('assets/objects/exterior/seashell.png');
    RESOURCES.get_img('assets/objects/exterior/skeleton.png');
    RESOURCES.get_img('assets/objects/forest/plant1.png');
    RESOURCES.get_img('assets/objects/forest/shroomgiant.png');
    RESOURCES.get_img('assets/objects/forest/shroomsmall.png');
    RESOURCES.get_img('assets/objects/forest/shroomtall.png');
    RESOURCES.get_img('assets/objects/forest/tree.png');
    RESOURCES.get_img('assets/objects/forest/treepalm.png');
    RESOURCES.get_img('assets/objects/forest/treesad.png');
    RESOURCES.get_img('assets/objects/forest/vine.png');
    RESOURCES.get_img('assets/objects/heaven/bookshelf.png');
    RESOURCES.get_img('assets/objects/heaven/bookshelf_big.png');
    RESOURCES.get_img('assets/objects/heaven/cloud1.png');
    RESOURCES.get_img('assets/objects/heaven/cloud2.png');
    RESOURCES.get_img('assets/objects/heaven/cloud3.png');
    RESOURCES.get_img('assets/objects/heaven/mirror.png');
    RESOURCES.get_img('assets/objects/heaven/tomb1.png');
    RESOURCES.get_img('assets/objects/heaven/tomb2.png');
    RESOURCES.get_img('assets/objects/heaven/tomb3.png');
    RESOURCES.get_img('assets/objects/hell/beelzebub.png');
    RESOURCES.get_img('assets/objects/hell/plant.png');
    RESOURCES.get_img('assets/objects/hell/plant2.png');
    RESOURCES.get_img('assets/objects/hell/plant3.png');
    RESOURCES.get_img('assets/objects/hell/plant4.png');
    RESOURCES.get_img('assets/objects/hell/spike.png');
    RESOURCES.get_img('assets/objects/hellmap/altar.png');
    RESOURCES.get_img('assets/objects/hellmap/creep1.png');
    RESOURCES.get_img('assets/objects/hellmap/creep2.png');
    RESOURCES.get_img('assets/objects/hellmap/fang1.png');
    RESOURCES.get_img('assets/objects/hellmap/fang2.png');
    RESOURCES.get_img('assets/objects/hellmap/heaven.png');
    RESOURCES.get_img('assets/objects/hellmap/helltenta1.png');
    RESOURCES.get_img('assets/objects/hellmap/helltenta2.png');
    RESOURCES.get_img('assets/objects/hellmap/hellvulcano.png');
    RESOURCES.get_img('assets/objects/hellmap/pandemonium.png');
    RESOURCES.get_img('assets/objects/interior/alchemyshelf.png');
    RESOURCES.get_img('assets/objects/interior/barrel.png');
    RESOURCES.get_img('assets/objects/interior/bed.png');
    RESOURCES.get_img('assets/objects/interior/bocals.png');
    RESOURCES.get_img('assets/objects/interior/bottles.png');
    RESOURCES.get_img('assets/objects/interior/bottlesshelf.png');
    RESOURCES.get_img('assets/objects/interior/box.png');
    RESOURCES.get_img('assets/objects/interior/bucket.png');
    RESOURCES.get_img('assets/objects/interior/cabinet.png');
    RESOURCES.get_img('assets/objects/interior/chair.png');
    RESOURCES.get_img('assets/objects/interior/chest.png');
    RESOURCES.get_img('assets/objects/interior/chimney.png');
    RESOURCES.get_img('assets/objects/interior/clock.png');
    RESOURCES.get_img('assets/objects/interior/column.png');
    RESOURCES.get_img('assets/objects/interior/curtainedwindow.png');
    RESOURCES.get_img('assets/objects/interior/fancyshelf.png');
    RESOURCES.get_img('assets/objects/interior/flowercrown.png');
    RESOURCES.get_img('assets/objects/interior/game.png');
    RESOURCES.get_img('assets/objects/interior/hay.png');
    RESOURCES.get_img('assets/objects/interior/housefire.png');
    RESOURCES.get_img('assets/objects/interior/jar.png');
    RESOURCES.get_img('assets/objects/interior/mask.png');
    RESOURCES.get_img('assets/objects/interior/papers.png');
    RESOURCES.get_img('assets/objects/interior/pottedflower.png');
    RESOURCES.get_img('assets/objects/interior/pottedplant.png');
    RESOURCES.get_img('assets/objects/interior/rope.png');
    RESOURCES.get_img('assets/objects/interior/sack.png');
    RESOURCES.get_img('assets/objects/interior/savepoint.png');
    RESOURCES.get_img('assets/objects/interior/shelf.png');
    RESOURCES.get_img('assets/objects/interior/shielddisplay.png');
    RESOURCES.get_img('assets/objects/interior/spikymask.png');
    RESOURCES.get_img('assets/objects/interior/statue.png');
    RESOURCES.get_img('assets/objects/interior/stool.png');
    RESOURCES.get_img('assets/objects/interior/table.png');
    RESOURCES.get_img('assets/objects/interior/throne.png');
    RESOURCES.get_img('assets/objects/interior/wallcandles.png');
    RESOURCES.get_img('assets/objects/interior/weapondisplay.png');
    RESOURCES.get_img('assets/objects/interior/weaponrack.png');
    RESOURCES.get_img('assets/objects/interior/window.png');
    RESOURCES.get_img('assets/objects/map/cave.png');
    RESOURCES.get_img('assets/objects/map/crevasse.png');
    RESOURCES.get_img('assets/objects/map/forest.png');
    RESOURCES.get_img('assets/objects/map/hills0.png');
    RESOURCES.get_img('assets/objects/map/hills1.png');
    RESOURCES.get_img('assets/objects/map/lake0.png');
    RESOURCES.get_img('assets/objects/map/lake1.png');
    RESOURCES.get_img('assets/objects/map/mountain0.png');
    RESOURCES.get_img('assets/objects/map/mountain1.png');
    RESOURCES.get_img('assets/objects/map/town.png');
    RESOURCES.get_img('assets/objects/map/trees0.png');
    RESOURCES.get_img('assets/objects/map/trees1.png');
    RESOURCES.get_img('assets/objects/map/vulcano.png');
    RESOURCES.get_img('assets/objects/mountain/boulder.png');
    RESOURCES.get_img('assets/objects/mountain/rocks1.png');
    RESOURCES.get_img('assets/objects/mountain/rocks2.png');
    RESOURCES.get_img('assets/objects/mountain/rocks3.png');
    RESOURCES.get_img('assets/objects/mountain/rocks4.png');
    RESOURCES.get_img('assets/objects/mountain/rockshuge.png');
    RESOURCES.get_img('assets/objects/mountain/roots.png');
    RESOURCES.get_img('assets/objects/mountain/tallroots.png');
    RESOURCES.get_img('assets/objects/mountain/waterfall.png');
    RESOURCES.get_img('assets/objects/pandemonium/armor.png');
    RESOURCES.get_img('assets/objects/pandemonium/candle.png');
    RESOURCES.get_img('assets/objects/pandemonium/door_closed.png');
    RESOURCES.get_img('assets/objects/pandemonium/door_open.png');
    RESOURCES.get_img('assets/objects/pandemonium/flag.png');
    RESOURCES.get_img('assets/objects/pandemonium/hellwebby1.png');
    RESOURCES.get_img('assets/objects/pandemonium/hellwebby2.png');
    RESOURCES.get_img('assets/objects/pandemonium/hellwebby3.png');
    RESOURCES.get_img('assets/objects/pandemonium/hellwebby4.png');
    RESOURCES.get_img('assets/objects/pandemonium/maou.png');
    RESOURCES.get_img('assets/objects/pandemonium/mirror.png');
    RESOURCES.get_img('assets/objects/pandemonium/organ.png');
    RESOURCES.get_img('assets/objects/pandemonium/painting.png');
    RESOURCES.get_img('assets/objects/pandemonium/stairs_down.png');
    RESOURCES.get_img('assets/objects/pandemonium/stairs_up.png');
    RESOURCES.get_img('assets/objects/pandemonium/throne.png');
    RESOURCES.get_img('assets/objects/pandemonium/window.png');
    RESOURCES.get_img('assets/objects/ruins/bocals.png');
    RESOURCES.get_img('assets/objects/ruins/rubble.png');
    RESOURCES.get_img('assets/objects/ruins/rubblelarge.png');
    RESOURCES.get_img('assets/objects/ruins/web.png');
    RESOURCES.get_img('assets/objects/ruins/weblarge.png');
    RESOURCES.get_img('assets/objects/stainedglass/acceptance.png');
    RESOURCES.get_img('assets/objects/stainedglass/church.png');
    RESOURCES.get_img('assets/objects/stainedglass/circle.png');
    RESOURCES.get_img('assets/objects/stainedglass/debauch.png');
    RESOURCES.get_img('assets/objects/stainedglass/denial.png');
    RESOURCES.get_img('assets/objects/stainedglass/fear.png');
    RESOURCES.get_img('assets/objects/stainedglass/hope.png');
    RESOURCES.get_img('assets/objects/stainedglass/man.png');
    RESOURCES.get_img('assets/objects/villagers/acceptance.png');
    RESOURCES.get_img('assets/objects/villagers/denial.png');
    RESOURCES.get_img('assets/objects/villagers/fear.png');
    RESOURCES.get_img('assets/objects/villagers/hope.png');
    RESOURCES.get_img('assets/objects/villagers/indulgence.png');
    RESOURCES.get_img('assets/objects/villagers/mourning.png');
    RESOURCES.get_img('assets/objects/water/algaewall.png');
    RESOURCES.get_img('assets/objects/water/anemone.png');
    RESOURCES.get_img('assets/objects/water/bubbleplant1.png');
    RESOURCES.get_img('assets/objects/water/bubbleplant2.png');
    RESOURCES.get_img('assets/objects/water/bubbleplant3.png');
    RESOURCES.get_img('assets/objects/water/coral.png');
    RESOURCES.get_img('assets/objects/water/planks.png');
    RESOURCES.get_img('assets/objects/water/plantwall.png');
    RESOURCES.get_img('assets/objects/water/seashellpointy.png');
    RESOURCES.get_img('assets/objects/water/tentaplant.png');
    RESOURCES.get_img('assets/objects/water/tentaplantmini.png');
    RESOURCES.get_img('assets/objects/water/waterplants.png');
    RESOURCES.get_img('assets/objects/water/whirlwind.png');
    RESOURCES.get_img('assets/patterns/castle.png');
    RESOURCES.get_img('assets/patterns/clouds.png');
    RESOURCES.get_img('assets/patterns/exit.png');
    RESOURCES.get_img('assets/patterns/goo.png');
    RESOURCES.get_img('assets/patterns/lava.png');
    RESOURCES.get_img('assets/patterns/lush.png');
    RESOURCES.get_img('assets/patterns/map.png');
    RESOURCES.get_img('assets/patterns/mud.png');
    RESOURCES.get_img('assets/patterns/rock.png');
    RESOURCES.get_img('assets/patterns/sand.png');
    RESOURCES.get_img('assets/patterns/sea.png');
    RESOURCES.get_img('assets/patterns/tiling.png');
    RESOURCES.get_img('assets/patterns/town.png');
    RESOURCES.get_img('assets/patterns/web.png');
    RESOURCES.get_img('assets/patterns/wood.png');
    RESOURCES.get_img('assets/portraits_large/BestFriend_a.png');
    RESOURCES.get_img('assets/portraits_large/BestFriend_b.png');
    RESOURCES.get_img('assets/portraits_large/BestFriend_c.png');
    RESOURCES.get_img('assets/portraits_large/demon_lieutenant_a.png');
    RESOURCES.get_img('assets/portraits_large/demon_lieutenant_b.png');
    RESOURCES.get_img('assets/portraits_large/demon_lieutenant_c.png');
    RESOURCES.get_img('assets/portraits_large/demon_lord_a.png');
    RESOURCES.get_img('assets/portraits_large/demon_lord_b.png');
    RESOURCES.get_img('assets/portraits_large/demon_lord_c.png');
    RESOURCES.get_img('assets/portraits_large/DisguisedPrincess_a.png');
    RESOURCES.get_img('assets/portraits_large/DisguisedPrincess_b.png');
    RESOURCES.get_img('assets/portraits_large/DisguisedPrincess_c.png');
    RESOURCES.get_img('assets/portraits_large/DumbMuscles_a.png');
    RESOURCES.get_img('assets/portraits_large/DumbMuscles_b.png');
    RESOURCES.get_img('assets/portraits_large/DumbMuscles_c.png');
    RESOURCES.get_img('assets/portraits_large/Enchanted Wand_a.png');
    RESOURCES.get_img('assets/portraits_large/Enchanted Wand_b.png');
    RESOURCES.get_img('assets/portraits_large/Enchanted Wand_c.png');
    RESOURCES.get_img('assets/portraits_large/FemmeFatale_a.png');
    RESOURCES.get_img('assets/portraits_large/FemmeFatale_b.png');
    RESOURCES.get_img('assets/portraits_large/FemmeFatale_c.png');
    RESOURCES.get_img('assets/portraits_large/GeniusProdigy_a.png');
    RESOURCES.get_img('assets/portraits_large/GeniusProdigy_b.png');
    RESOURCES.get_img('assets/portraits_large/GeniusProdigy_c.png');
    RESOURCES.get_img('assets/portraits_large/Goddess_a.png');
    RESOURCES.get_img('assets/portraits_large/Goddess_b.png');
    RESOURCES.get_img('assets/portraits_large/Goddess_c.png');
    RESOURCES.get_img('assets/portraits_large/Holy Sword_a.png');
    RESOURCES.get_img('assets/portraits_large/Holy Sword_b.png');
    RESOURCES.get_img('assets/portraits_large/Holy Sword_c.png');
    RESOURCES.get_img('assets/portraits_large/Legendary Staff_a.png');
    RESOURCES.get_img('assets/portraits_large/Legendary Staff_b.png');
    RESOURCES.get_img('assets/portraits_large/Legendary Staff_c.png');
    RESOURCES.get_img('assets/portraits_large/Mighty War Hammer_a.png');
    RESOURCES.get_img('assets/portraits_large/Mighty War Hammer_b.png');
    RESOURCES.get_img('assets/portraits_large/Mighty War Hammer_c.png');
    RESOURCES.get_img('assets/portraits_large/PreciousChild_a.png');
    RESOURCES.get_img('assets/portraits_large/PreciousChild_b.png');
    RESOURCES.get_img('assets/portraits_large/PreciousChild_c.png');
    RESOURCES.get_img('assets/portraits_large/Priest_a.png');
    RESOURCES.get_img('assets/portraits_large/Priest_b.png');
    RESOURCES.get_img('assets/portraits_large/Priest_c.png');
    RESOURCES.get_img('assets/portraits_large/Ren_a.png');
    RESOURCES.get_img('assets/portraits_large/Ren_b.png');
    RESOURCES.get_img('assets/portraits_large/Ren_c.png');
    RESOURCES.get_img('assets/portraits_large/RetiredProtector_a.png');
    RESOURCES.get_img('assets/portraits_large/RetiredProtector_b.png');
    RESOURCES.get_img('assets/portraits_large/RetiredProtector_c.png');
    RESOURCES.get_img('assets/portraits_large/SavageChild_a.png');
    RESOURCES.get_img('assets/portraits_large/SavageChild_b.png');
    RESOURCES.get_img('assets/portraits_large/SavageChild_c.png');
    RESOURCES.get_img('assets/portraits_large/SnobRich_a.png');
    RESOURCES.get_img('assets/portraits_large/SnobRich_b.png');
    RESOURCES.get_img('assets/portraits_large/SnobRich_c.png');
    RESOURCES.get_img('assets/portraits_large/StreetSmart_a.png');
    RESOURCES.get_img('assets/portraits_large/StreetSmart_b.png');
    RESOURCES.get_img('assets/portraits_large/StreetSmart_c.png');
    RESOURCES.get_img('assets/portraits_large/TorturedSoul_a.png');
    RESOURCES.get_img('assets/portraits_large/TorturedSoul_b.png');
    RESOURCES.get_img('assets/portraits_large/TorturedSoul_c.png');
    RESOURCES.get_img('assets/portraits_large/TraitorFisher_a.png');
    RESOURCES.get_img('assets/portraits_large/TraitorFisher_b.png');
    RESOURCES.get_img('assets/portraits_large/TraitorFisher_c.png');
    RESOURCES.get_img('assets/portraits_large/UpbeatDojikko_a.png');
    RESOURCES.get_img('assets/portraits_large/UpbeatDojikko_b.png');
    RESOURCES.get_img('assets/portraits_large/UpbeatDojikko_c.png');
    RESOURCES.get_img('assets/portraits_large/WiseOld_a.png');
    RESOURCES.get_img('assets/portraits_large/WiseOld_b.png');
    RESOURCES.get_img('assets/portraits_large/WiseOld_c.png');
    RESOURCES.get_img('assets/portraits_small/BestFriend.png');
    RESOURCES.get_img('assets/portraits_small/DisguisedPrincess.png');
    RESOURCES.get_img('assets/portraits_small/DumbMuscles.png');
    RESOURCES.get_img('assets/portraits_small/FemmeFatale.png');
    RESOURCES.get_img('assets/portraits_small/GeniusProdigy.png');
    RESOURCES.get_img('assets/portraits_small/PreciousChild.png');
    RESOURCES.get_img('assets/portraits_small/Ren.png');
    RESOURCES.get_img('assets/portraits_small/RetiredProtector.png');
    RESOURCES.get_img('assets/portraits_small/SavageChild.png');
    RESOURCES.get_img('assets/portraits_small/SnobRich.png');
    RESOURCES.get_img('assets/portraits_small/StreetSmart.png');
    RESOURCES.get_img('assets/portraits_small/TorturedSoul.png');
    RESOURCES.get_img('assets/portraits_small/TraitorFisher.png');
    RESOURCES.get_img('assets/portraits_small/UpbeatDojikko.png');
    RESOURCES.get_img('assets/portraits_small/WiseOld.png');
    RESOURCES.get_img('assets/screens/gameover_layer0.png');
    RESOURCES.get_img('assets/screens/gameover_layer1.png');
    RESOURCES.get_img('assets/screens/gameover_layer2.png');
    RESOURCES.get_img('assets/screens/map_base.png');
    RESOURCES.get_img('assets/screens/map_seed.png');
    RESOURCES.get_img('assets/screens/noise.png');
    RESOURCES.get_img('assets/screens/title_bg.png');
    RESOURCES.get_img('assets/screens/title_layer0.png');
    RESOURCES.get_img('assets/screens/title_layer1.png');
    RESOURCES.get_img('assets/screens/title_layer2.png');
    RESOURCES.get_img('assets/screens/warning.png');
  },

};

RESOURCES.preload();
