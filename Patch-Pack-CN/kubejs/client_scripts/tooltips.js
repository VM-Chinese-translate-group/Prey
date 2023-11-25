//本愿说他搞这个文件
const bone_effigy = [
    'crow',
    'sugar_glider',
    'bald_eagle',
    'mantis_shrimp',
    'capuchin_monkey',
    'flutter',
    'mimic_octopus',
    'tarantula_hawk',
    'elephant',
    'komodo_dragon',
    'kangaroo',
    'gorilla',
    'crocodile',
    'grizzly_bear',
]

ItemEvents.tooltip(event => {
	event.addAdvanced('kubejs:gorilla_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' HP:').gold(), Text.of(' 70').darkGreen()])
		text.add(3, [Text.of(' Modes:').gold(), Text.of(' Stay, Wander').gray()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.green(' Monke').bold(true))
	  })

	  event.addAdvanced('kubejs:grizzly_bear_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 70').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.gray(' > Can use as a mount without a saddle.'))
		text.add(7, Text.gray(' > Attacks have powerful knockback'))
	  })


	  event.addAdvanced('kubejs:crow_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow,').darkAqua(), Text.of(' Gather').yellow()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.gray(' > Can gather items and deliver to nearby containers'))
		text.add(7, Text.gray(' > Deals additional damage to the undead'))
		text.add(8, Text.gray(' > Can be made to perch on a player\'s shoulders.'))
	  })

	  event.addAdvanced('kubejs:crocodile_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 70').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander').gray()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.gray(' > Can drag its target to water and deathroll'))
	  })
	  
	  event.addAdvanced('kubejs:capuchin_monkey_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, [Text.of(' > Can be given an').gray(), Text.of(' Ancient Dart').gold(), Text.of(' to increase attack damage and add piercing ability').gray()])
		text.add(7, Text.green(' > Monke').bold(true))
	  })

	  event.addAdvanced('kubejs:elephant_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 85').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Wander').gray()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.gray(' > Can be mounted with a chest'))
	  })

	  event.addAdvanced('kubejs:komodo_dragon_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 55').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, [Text.of(' > Attacks inflict').gray(), Text.of(' Poison').darkGreen()])
		text.add(7, Text.gray(' > Can mount and ride with a saddle'))

	  })

	  event.addAdvanced('kubejs:tarantula_hawk_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 40').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.gray(' > Attacks paralyze Arthropods'))
	  })

	  event.addAdvanced('kubejs:kangaroo_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 45').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.gray(' > Has a storage space in its pouch'))
		text.add(7, Text.gray(' > Can be given Melee Weapon, Chestplate, and Helmet to use in combat'))
	  })

	  event.addAdvanced('kubejs:bald_eagle_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, [Text.of(' > Can be used for scouting areas if equipped with').gray(), Text.of(' Falconry Glove and Hood').gold()])
	  })

	  event.addAdvanced('kubejs:sugar_glider_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 20').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.gray(' > Cannot Attack'))
		text.add(7, [Text.of(' > Basically ').gray(), Text.of('worthless').darkRed()])
	  })


	  event.addAdvanced('kubejs:flutter_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 30').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, Text.green(' > Can fly out of harms way'))
		text.add(7, Text.green(' > Attacks home in on target'))
	  })

	  event.addAdvanced('kubejs:mantis_shrimp_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 25').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow, ').yellow(), Text.of('Break Blocks').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, [Text.of(' > Attacks inflict a').gray(), Text.of(' Fire Effect').red(), Text.of(' on the target').gray()])
		text.add(7, [Text.of(' > To enter').gray(), Text.of(' Break Blocks mode').darkAqua(), Text.of(', give it the block you wish to break and set to').gray(), Text.of(' Wander mode').gold()])
	})

	  event.addAdvanced('kubejs:mimic_octopus_summoning_stone', (item, advanced, text) => {
		
		text.add(1, Text.yellow('Attributes:').underlined(true))
		text.add(2, [Text.of(' > HP:').gold(), Text.of(' 35').darkGreen()])
		text.add(3, [Text.of(' > Modes:').gold(), Text.of(' Stay, Wander,').gray(), Text.of(' Follow').darkAqua()])
		text.add(4, Text.white(' '))
		text.add(5, Text.yellow('Special Traits:').underlined(true))
		text.add(6, [Text.of(' > Can only survive in water unless a ').gray(), Text.of('Slime Ball ').green(), Text.of('is applied which must be reapplied every 2 days.').gray()])
		text.add(7, [Text.of(' > Mimics other creatures when provided with particular items. During this imitation, you can empower it with').gray(), Text.of(' 5-8 mimicream').gold(), Text.of(' to enable').gray(), Text.of(' Special Attacks.').yellow()])
		text.add(8, Text.white(' '))
		if (!event.alt) {
			text.add(9, [Text.of('Hold ').yellow(), Text.of('ALT ').gold(), Text.of('to learn more about its').yellow(), Text.of(' Forms,').aqua(), Text.of(' Attacks,').red(), Text.of(' and respective ').yellow(), Text.of('Items').green()])
		  } else {
			text.add(9, [Text.of('Creeper Form: ').aqua()])
			text.add(10, [Text.of(' > Item:').green(), Text.of(' Gunpowder').gray()])
			text.add(11, [Text.of(' > Attack:').red(), Text.of(' Creates small explosions').gray()])
			text.add(12, [Text.of(' ').gray()])
			text.add(13, [Text.of('Guardian Form: ').aqua()])
			text.add(14, [Text.of(' > Items:').green(), Text.of(' Prismarine Crystals or Shards').gray()])
			text.add(15, [Text.of(' > Attack:').red(), Text.of(' Fires a Laser Beam').gray()])
			text.add(16, [Text.of(' ').gray()])
			text.add(17, [Text.of('Pufferfish Form: ').aqua()])
			text.add(18, [Text.of(' > Item:').green(), Text.of(' Pufferfish').gray()])
			text.add(19, [Text.of(' > Attack:').red(), Text.of(' Poisonous Spikes').gray()])
		  }
	  })

	event.add('blocky_siege:roaster_stand','Load with Fire Charges and power with a Redstone Signal')

	event.addAdvanced('kubejs:warlock', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('to view ').yellow(), Text.of('Subclass Synergies').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('Subclass Synergies:').gold().underlined()])
		  text.add(3, [Text.of(' > Battlemage').aqua()])
		  text.add(4, [Text.of(' > Guardian').aqua()])
		  text.add(5, [Text.of(' > Conjurer').aqua()])
		  text.add(6, [Text.of(' > Spellsword').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('CTRL ').gold(), Text.of('to view ').yellow(), Text.of('Class Attributes').gold()])
		  } else {
			text.add(1, Text.gold('Class Attributes:').underlined().italic())
			text.add(2, [Text.of(' - Class Stat:').gray(), Text.of(' +100 Max Mana...').blue(), Text.of(' (Subclass Synergy: ').yellow(), Text.of('+150 Max Mana').darkPurple(), Text.of(')').yellow()])
			text.add(3, [Text.of(' - Class Pet:').gray(), Text.of(' Tarantula Hawk').gold()])
			text.add(4, [Text.of(' - Class Passive:').gray(), Text.of(' Gain 45 Mana for killing ANY mob').lightPurple()])
		  }
		  text.add(1, [Text.of('Summary:').gold().underlined().italic(), Text.of(' A Magic focused class. Recommended Subclasses range from frontline damage-dealing to backline healing and support.')])
		  text.add(2, Text.gold('  ')) 
	  })


	  event.addAdvanced('kubejs:rogue', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('to view ').yellow(), Text.of('Subclass Synergies').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('Subclass Synergies:').gold().underlined()])
		  text.add(3, [Text.of(' > Bounty Hunter').aqua()])
		  text.add(4, [Text.of(' > Alchemist').aqua()])
		  text.add(5, [Text.of(' > Dream Weaver').aqua()])
		  text.add(6, [Text.of(' > Berserker').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('CTRL ').gold(), Text.of('to view ').yellow(), Text.of('Class Attributes').gold()])
		  } else {
			text.add(1, Text.gold('Class Attributes:').underlined().italic())
			text.add(2, [Text.of(' - Class Stat:').gray(), Text.of(' +20% Crit Damage...').blue(), Text.of(' (Subclass Synergy: ').yellow(), Text.of('+30% Crit Damage').darkPurple(), Text.of(')').yellow()])
			text.add(3, [Text.of(' - Class Pet:').gray(), Text.of(' Kangaroo').gold()])
			text.add(4, [Text.of(' - Class Passive:').gray(), Text.of(' Upon killing an enemy you are concealed in shadow and gain a burst of speed for 5 seconds').lightPurple()])
		  }
		  text.add(1, [Text.of('Summary:').gold().underlined().italic(), Text.of(' A main class focused on stealth and precise attacks. The recommended Subclasses are each incredibly unique and change the way the game is fundamentally played')])
		  text.add(2, Text.gold('  ')) 
	  })



	  event.addAdvanced('kubejs:scout', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('to view ').yellow(), Text.of('Subclass Synergies').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('Subclass Synergies:').gold().underlined()])
		  text.add(3, [Text.of(' > Arcane Ranger').aqua()])
		  text.add(4, [Text.of(' > Explorer').aqua()])
		  text.add(5, [Text.of(' > Dreamweaver').aqua()])
		  text.add(6, [Text.of(' > Kensei').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('CTRL ').gold(), Text.of('to view ').yellow(), Text.of('Class Attributes').gold()])
		  } else {
			text.add(1, Text.gold('Class Attributes:').underlined().italic())
			text.add(2, [Text.of(' - Class Stat:').gray(), Text.of(' +20% Ranged Attack Speed...').blue(), Text.of(' (Subclass Synergy: ').yellow(), Text.of('+35% Ranged Attack Speed').darkPurple(), Text.of(')').yellow()])
			text.add(3, [Text.of(' - Class Pet:').gray(), Text.of(' Bald Eagle').gold()])
			text.add(4, [Text.of(' - Class Passive:').gray(), Text.of(' Every 10th sucessful projectile hit will summon a ').lightPurple(), Text.of('Lightning Bolt').yellow(), Text.of(' and strike the target. Projectiles include thrown items.').lightPurple()])
		  }
		  text.add(1, [Text.of('Summary:').gold().underlined().italic(), Text.of(' Focused on ranged attacks and precise CQC. Recommended Subclasses are very diverse and offer specialized tools like 5-shot bows and Dual Magical Daggers')])
		  text.add(2, Text.gold('  ')) 
	  })

	  event.addAdvanced('kubejs:warden', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('SHIFT ').darkPurple(), Text.of('to view ').yellow(), Text.of('Subclass Synergies').darkPurple()])
		  } else {
		  text.add(1, Text.gold('  ')) 
		  text.add(2, [Text.of('Subclass Synergies:').gold().underlined()])
		  text.add(3, [Text.of(' > Spellsword').aqua()])
		  text.add(4, [Text.of(' > Kensei').aqua()])
		  text.add(5, [Text.of(' > Berserker').aqua()])
		  text.add(6, [Text.of(' > Arcane Ranger').aqua()])
		  text.add(7, Text.gold('  ')) 
		  }
		  if (!event.ctrl) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('CTRL ').gold(), Text.of('to view ').yellow(), Text.of('Class Attributes').gold()])
		  } else {
			text.add(1, Text.gold('Class Attributes:').underlined().italic())
			text.add(2, [Text.of(' - Class Stat:').gray(), Text.of(' +2 Base Armor...').blue(), Text.of(' (Subclass Synergy: ').yellow(), Text.of('+2.5 Base Armor').darkPurple(), Text.of(')').yellow()])
			text.add(3, [Text.of(' - Class Pet:').gray(), Text.of(' Grizzly Bear').gold()])
			text.add(4, [Text.of(' - Class Passive:').gray(), Text.of(' Upon killing an enemy regenerate a small amount of health').lightPurple()])
		  }
		  text.add(1, [Text.of('Summary:').gold().underlined().italic(), Text.of(' This bold Main Class excels at staying in the fight as long as possible. Recommended Subclasses are flexible and combine melee combat with the unique aspects of other main classes.')])
		  text.add(2, Text.gold('  ')) 
	  })


	  event.addAdvanced('kubejs:summoner', (item, advanced, text) => {
		
		  text.add(1, [Text.of('Summary:').gold().underlined().italic(), Text.of(' The Summoner focuses on commanding allied mobs, with Subclasses employing unique methods to dominate creatures.')])
		  text.add(2, Text.gold('  ')) 
		  text.add(3, [Text.of('ONLY SUBCLASSES AVAILABLE').gold().underlined(), Text.of(' (Unique to Summoner)').darkPurple()])
		  text.add(4, [Text.of(' > Bloodripper').darkRed()])
		  text.add(5, [Text.of(' > Beastmaster').green()])
		  text.add(6, [Text.of(' > Spirit Caller').aqua()])
		  text.add(7, Text.gold('  ')) 
		  text.add(8, Text.gold('Class Attributes:').underlined().italic())
		  text.add(9, [Text.of(' - Class Stat:').gray(), Text.of(' +20% Damage Against Poisoned').blue()])
		  text.add(10, [Text.of(' - Class Pet:').gray(), Text.of(' Komodo Dragon').gold()])
		  text.add(11, [Text.of(' - Class Passive:').gray(), Text.of(' Certain mobs have a chance of being automatically tamed by you when they spawn.').lightPurple()])

	  })

	  event.addAdvanced('kubejs:blacksmith', (item, advanced, text) => {
		text.add(1, [Text.of('Summary:').gold().underlined().italic(), Text.of(' The Blacksmith is specializes in crafting fine tools and armor. Their expertise grows with each creation, enhancing their mastery over time')])
		text.add(2, Text.gold('  ')) 
		text.add(3, Text.yellow('Class Attributes:').underlined(true))
		text.add(4, [Text.of(' > DOES NOT GET A SUBCLASS').red().bold()])
		text.add(5, [Text.of(' > Class Pet:').gray(), Text.of(' Crocodile').gold()])
		text.add(6, [Text.of(' > Class Passives:').gray(), Text.of(' Class Stats can be updgraded.').lightPurple()])
		text.add(7, Text.gold(' '))
		text.add(8, Text.yellow('Passive Details:').underlined())
		text.add(9, [Text.of(' > For Every').white(), Text.of(' 250 Tools').red(), Text.of(' or ').white(), Text.of('200 Armor Pieces').gold(), Text.of(' you craft you are granted').white(), Text.of(' +1').green(), Text.of(' to all ').white(), Text.of('Upgradeable Stats').darkGreen(), Text.of('. Wooden and Stone tools do not count towards Crafted Tools.').white()])
		text.add(10, Text.gold(' '))
		text.add(11, Text.gold(' '))
		if (!event.shift) {
			text.add(11, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Upgradeable Stats').darkGreen().underlined()])
		} else {
			text.add(11, Text.yellow('Upgradeable Tool Stats').underlined())
			text.add(12, Text.gray(' - Crafted Melee Weapon Attack Speed'))
			text.add(13, Text.gray(' - Crafted Melee Weapon Attack Damage'))
			text.add(14, Text.gray(' - Crafted Ranged Weapon Attack Speed'))
			text.add(15, Text.gray(' - Crafted Ranged Weapon Gem Sockets'))
			text.add(16, Text.gray(' - Crafted Shields Armor Bonus'))
			text.add(17, Text.gray(' '))
			text.add(18, Text.yellow('Upgradeable Armor Stats').underlined())
			text.add(19, Text.gray(' - Crafted Armor Defence'))
			text.add(20, Text.gray(' - Crafted Boots Gem Sockets'))
			text.add(21, Text.gray(' - Crafted Helmets Gem Sockets'))
			text.add(22, Text.gray(' - Crafted Equipment Durability'))
		}
	  })
	  event.addAdvanced('supplementaries:quiver', (item, advanced, text) => {
		
		text.add(1, [Text.of('Hover this item over Arrows and').gray(), Text.of(' Right-Click ').gold(), Text.of('To put Arrows in the Quiver.').gray(), ]), 
		text.add(2, Text.gold(' ')) 
		text.add(3, [Text.of('Hold').gray(), Text.of(' X ').gold(), Text.of('to view the Arrows and cycle between them').gray()])
	  })

	event.addAdvanced('kubejs:rune_of_the_guardian', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Holy Spell Power').gold()])
			text.add(3, [Text.of(' >').white(), Text.of(' 30%').green(), Text.of(' chance to regain').white(), Text.of(' mana').blue(), Text.of(' after killing a Monster').white()])

		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Max Mana'))
			text.add(3, Text.aqua(' > Spell Resistance'))
			text.add(4, Text.aqua(' > Holy Spell Power'))
			text.add(5, Text.aqua(' > Spell Cooldown'))
			text.add(6, Text.aqua(' '))
		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > A versatile support class wielding the').white(), Text.of(' Guardians Grimoire').lightPurple().italic(), Text.of(' and the ').white(), Text.of('Thunderbolt Lancer').lightPurple().italic(), Text.of(', offering healing and protection.')])
		  text.add(3, Text.yellow('  '))
	  })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_battlemage', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Fire Spell Power').gold()])
			text.add(3, [Text.of(' > Getting').white(), Text.of(' 10 Kills').red(), Text.of(' will grant the').white(), Text.of(' Charged').lightPurple(), Text.of(' effect for 10 seconds').white()])
  
		}

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Ender Spell Power'))
			text.add(3, Text.aqua(' > Lightning Spell Power'))
			text.add(4, Text.aqua(' > Ice Spell Power'))
			text.add(5, Text.aqua(' > Fire Spell Power'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > An offensive spell-casting class wielding the').white(), Text.of(' Battlemages Codex').lightPurple().italic(), Text.of(', offering access to powerful elemental spells.')])
		  text.add(3, Text.yellow('  '))


	  })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_beastmaster', (item, advanced, text) => {
		
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Equipped with').white(), Text.of(' Jagged Bone').lightPurple().italic(), Text.of(' and ').white(), Text.of(' Frostbite Blade').lightPurple().italic(), Text.of(', this class commands powerful allies and pets, overwhelming foes with a legion of formidable creatures.')])
		  text.add(3, Text.yellow('  '))
		  text.add(4, Text.yellow('Passives').underlined(true))
		  text.add(5, [Text.of(' >').white(), Text.of(' Summoning Stone Pets').blue(), Text.of(' have').white(), Text.of(' 35% more health').green()])
		  text.add(6, [Text.of(' > Gathering 10 identical').white(), Text.of(' Bone Totems').gold(), Text.of(' permanently captures an animals soul. Using the').white(), Text.of(' Summoners Gateway').gold(), Text.of(' grants you a').white(), Text.of(' Summoning Stone').gold(), Text.of(' for each captured animal soul')])
		  text.add(7, [Text.of(' > Using enough of the same ').white(), Text.of('Summoning Stone Pet').blue(), Text.of(' will cause it to').white(), Text.of(' Level-Up').darkGreen(), Text.of('. Each').white(), Text.of(' Level-Up').darkGreen(), Text.of(' grants that Pet Type a massive').white(), Text.of(' Health Boost').green()])
		  text.add(8, [Text.of(' >').white(), Text.of(' Beastmaster Totem').darkGreen(), Text.of(' cooldown is greatly reduced').white()]) 
		  text.add(9, Text.yellow('  ')) 
		  text.add(10, Text.yellow('Talent Tree Skills').underlined(true))
		  text.add(11, Text.aqua(' > Max Health'))
		  text.add(12, Text.aqua(' > Max Feathers'))
		  text.add(13, Text.aqua(' > Feathers Regen Rate'))
		  text.add(14, Text.aqua(' > Crit Chance if Wounded'))
		  text.add(15, Text.yellow('  '))

	  })


	  event.addAdvanced('kubejs:rune_of_the_bloodripper', (item, advanced, text) => {
		text.add(1, Text.yellow('Summary').underlined(true))
		text.add(2, [Text.of(' > Wielding Twin Scythes,').white(), Text.of(' Desolation').darkRed().italic(), Text.of(' and ').white(), Text.of(' Reckoning,').darkRed().italic(), Text.of(' this subclass harvests blood from monsters and uses it to summon Allies in place of their victim.')])
		text.add(3, Text.yellow('  '))
		text.add(4, Text.yellow('Passives').underlined(true))
		text.add(5, [Text.of(' > Harvest').white(), Text.of(' Blood').darkRed(), Text.of(' to summon').white(), Text.of(' Allies').blue(), Text.of(' where enemies die. Every').white(), Text.of(' 50 Allies').blue(), Text.of(' summoned will cause the Bloodripper to').white(), Text.of(' Level-Up').green(), Text.of(', granting stronger').white(), Text.of(' Allies').blue(), Text.of(' and').white(), Text.of(' Permanent Effects').yellow()])
		text.add(6, [Text.of(' > At night, deal').white(), Text.of(' 75% more damage').red(), Text.of(' and double the amount of').white(), Text.of(' Harvested Blood ').darkRed(), Text.of('from each enemy.').white()])
		text.add(7, Text.yellow('  ')) 
		text.add(8, Text.yellow('Talent Tree Skills').underlined(true))
		text.add(9, Text.aqua(' > Attack Speed'))
		text.add(10, Text.aqua(' > Attack Knockback'))
		text.add(11, Text.aqua(' > Melee Crit Damage'))
		text.add(12, Text.aqua(' > Life Per Hit'))
		text.add(13, Text.yellow('  '))
		if (!event.shift) {
			text.add(14, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view ').gold(), Text.of('Bloodripper Levels').darkRed().underlined()])
		} else {
			text.add(14, Text.darkRed('Bloodripper Levels:').underlined())
			text.add(15, [Text.of(' Level 1: ').gold(), Text.of('Access to').white(), Text.of(' Tier 1 Summons').green()])
			text.add(16, [Text.of(' Level 2: ').gold(), Text.of('Blood Summons gain a permanent').white(), Text.of(' Speed 2 Effect').darkGreen()])
			text.add(17, [Text.of(' Level 3: ').gold(), Text.of('Access to ').white(), Text.of('Tier 2 Summons').yellow()])
			text.add(18, [Text.of(' Level 4: ').gold(), Text.of('Blood Summons gain a permanent').white(), Text.of(' Soul Steal Effect').lightPurple()])
			text.add(19, [Text.of(' Level 5: ').gold(), Text.of('Access to').white(), Text.of(' Tier 3 Summons').red()])
			text.add(20, [Text.of(' Level 6: ').gold(), Text.of('Blood Summons gain a permanent').white(), Text.of(' Resistance Effect').darkAqua()])
			text.add(21, [Text.of(' Level 8: ').gold(), Text.of('Blood Summons gain a permanent').white(), Text.of(' Strength Effect').red()])
			text.add(22, [Text.of(' Level 10: ').gold(), Text.of('Blood Summons gain the').white(), Text.of(' Soul Protection Effect').yellow(), Text.of(', reviving them ONCE when they die.')])
			text.add(23, Text.yellow('  '))

		}
		text.add(14, Text.yellow('  '))
		if (!event.alt) {
			text.add(15, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view possible').gold(), Text.of(' Blood Summons').darkRed().underlined()])
		} else {
			text.add(15, Text.darkRed('Bloodripper Summons').underlined())
			text.add(16, [Text.of('Tier 1 Summons: ').green()])
			text.add(17, [Text.of('  > ').gold(), Text.of('Royal Guard').italic()])
			text.add(18, [Text.of('  > ').gold(), Text.of('Geomancer').italic()])
			text.add(19, [Text.of('  > ').gold(), Text.of('Blastling').italic()])
			text.add(20, [Text.of('  > ').gold(), Text.of('Skirmisher').italic()])
			text.add(21, [Text.of(' ').gold()])
			text.add(22, [Text.of('Tier 2 Summons: ').yellow()])
			text.add(23, [Text.of('  > ').gold(), Text.of('All Tier 1 Summons').italic()])
			text.add(24, [Text.of('  > ').gold(), Text.of('Cryomancer').italic()])
			text.add(25, [Text.of('  > ').gold(), Text.of('Pyromancer').italic()])
			text.add(26, [Text.of('  > ').gold(), Text.of('Whisperer').italic()])
			text.add(27, [Text.of('  > ').gold(), Text.of('Wraith').italic()])
			text.add(28, [Text.of(' ').gold()])
			text.add(29, [Text.of('Tier 3 Summons: ').red()])
			text.add(30, [Text.of('  > ').gold(), Text.of('All Tier 1 and 2 Summons').italic()])
			text.add(31, [Text.of('  > ').gold(), Text.of('Citadel Keeper').italic()])
			text.add(32, [Text.of('  > ').gold(), Text.of('Dire Hound Leader').italic()])
			text.add(33, [Text.of('  > ').gold(), Text.of('Necromancer').italic()])
			text.add(34, [Text.of('  > ').gold(), Text.of('Leapleaf').italic()])
			text.add(35, Text.yellow('  '))

		}

	})

/// In guide book make sure to distinguish that certain bonuses only go to certain creature types. The 3 types are Summoned (from summoning stones), Tamed (from the taming flute), and Conjured (from spells)

event.addAdvanced('kubejs:rune_of_the_conjurer', (item, advanced, text) => {
	

	if (!event.alt) {
		text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
	  } else {
		text.add(1, Text.yellow('Passives').underlined(true))
		text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' damage with').gold(), Text.of(' Spellbook Summons').aqua()])
		text.add(3, [Text.of(' >').white(), Text.of(' +10').green(), Text.of(' Mana when a ').gold(), Text.of('Spellbook Summon').aqua(), Text.of(' kills an enemy ').gold()])
		text.add(4, [Text.of(' >').white(), Text.of(' When').gold(), Text.of(' Spellbook Summons').aqua(), Text.of(' attack an enemy they').gold(), Text.of(' regain health ').green()])
	}
	if (!event.shift) {
		text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
	  } else {
		text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
		text.add(2, Text.aqua(' > Blood Spell Power'))
		text.add(3, Text.aqua(' > Evocation Spell Power'))
		text.add(4, Text.aqua(' > Spell Cooldown Reduction'))
		text.add(5, Text.aqua(' > Summoned Creature Damage'))
		text.add(6, Text.yellow('  '))
	  }
	  text.add(1, Text.yellow('Summary').underlined(true))
	  text.add(2, [Text.of(' > Armed with the').white(), Text.of(' Tome of Death').lightPurple().italic(), Text.of(' and ').white(), Text.of('Rootweavers Fang').lightPurple().italic(), Text.of(', this class conjures powerful allies to aid them in battle.')])
	  text.add(3, Text.yellow('  '))
  })
	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_spellsword', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Faster Spell Cooldown').gold()])
			text.add(3, [Text.of(' > Killing a Monster with a').white(), Text.of(' Spell').gold(), Text.of(' from a').white(), Text.of(' Scroll').blue(), Text.of(' or').white(), Text.of(' Spellbook').blue(), Text.of(' will grant a ').white(), Text.of('10% Damage Bonus').darkRed(), Text.of(' for').white(), Text.of(' 8 Seconds').yellow()])
  
		}

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Attack Speed'))
			text.add(3, Text.aqua(' > Attack Knockback'))
			text.add(4, Text.aqua(' > Spell Resistance'))
			text.add(5, Text.aqua(' > Cooldown Reduction'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > The savagery of').white(), Text.of(' Astral Shard').lightPurple().italic(), Text.of(' with').white(), Text.of(' Solaris\'').lightPurple().italic(), Text.of(' magical mastery makes this hybrid class excellent in both close combat and long range spellcasting.')])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_kensei', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Attack Speed').gold()])
			text.add(3, [Text.of(' >').white(), Text.of(' 30%').green(), Text.of(' chance to get a 10 Second').white(), Text.of(' Haste').yellow(), Text.of(' effect after killing a Monster').white()])
  
		}

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Ranged Damage'))
			text.add(3, Text.aqua(' > Movement Speed'))
			text.add(4, Text.aqua(' > Attack Speed'))
			text.add(5, Text.aqua(' > Feathers Regen Rate'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Harnessing both').white(), Text.of(' Chaos').darkRed().italic(), Text.of(' and').white(), Text.of(' Harmony').darkAqua().italic(), Text.of(', the Kensei cuts down any foe that dares threaten the balance.')])
		  text.add(3, Text.yellow('  '))
	  })


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_berserker', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' > Talent Tree consists of ').white(), Text.of('The 6 Forgotten Trials.').darkRed().italic(), Text.of(' For each Forgotten Trial completed you gain a').white(), Text.of(' Passive Ability').lightPurple()])
			text.add(3, [Text.of(' >').white(), Text.of(' +5%').green(), Text.of(' Attack Speed When Wounded').gold()])
		}

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Trials').underlined(true))
			text.add(2, [Text.of(' > Trial: ').white(), Text.of(' Bloodlust').darkRed().italic()])
			text.add(3, [Text.of(' > Trial: ').white(), Text.of(' Surge').darkRed().italic()])
			text.add(4, [Text.of(' > Trial: ').white(), Text.of(' Shadow Form').darkRed().italic()])
			text.add(5, [Text.of(' > Trial: ').white(), Text.of(' Restoration').darkRed().italic()])
			text.add(6, [Text.of(' > Trial: ').white(), Text.of(' Strike').darkRed().italic()])
			text.add(7, [Text.of(' > Trial: ').white(), Text.of(' Blood Oath').darkRed().italic()])
			text.add(8, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Armed with').white(), Text.of(' Mighty').lightPurple().italic(), Text.of(' and').white(), Text.of(' Wrath').lightPurple().italic(), Text.of(', The Berserker must confront').white(), Text.of(' The 6 Forgotten Trials').darkRed(), Text.of(' to reclaim his lost skills')])
		  text.add(3, Text.yellow('  '))
	  })
	  

	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_spirit_caller', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +15%').green(), Text.of(' Projectile Damage').gold()])
			text.add(3, [Text.of(' > You gather').white(), Text.of(' Souls').aqua().italic(), Text.of(' when you kill a Monster or get').white(), Text.of(' 3x hits').yellow(), Text.of(' on a boss.')])
			text.add(4, [Text.of(' > Capture ').white(), Text.of('Spirits').darkPurple(), Text.of(' of powerful mobs by defeating them while you have a').white(), Text.of(' Spirit Crystal ').gold(), Text.of('in your ').white(), Text.of('offhand').gold().underlined(), Text.of('. Using Souls, summon the Spirits as allies using the').white(), Text.of(' Orb of Slaughtered Foes.').darkRed()])

		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Feathers Regen'))
			text.add(3, Text.aqua(' > Melee Damage'))
			text.add(4, Text.aqua(' > Incoming Healing'))
			text.add(5, Text.aqua(' > Experience from Mobs')) /// 
			text.add(6, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > The Spirit Caller wields the sword').white(), Text.of(' Aether').lightPurple().italic(), Text.of(',').white(), Text.of(' a Spirit Crystal,').lightPurple().italic(), Text.of(' and the ').white(), Text.of('Orb of Slaughtered Foes').darkRed().italic(), Text.of(' while harnessing collected').white(), Text.of(' Souls').aqua(), Text.of(' to summon defeated enemy ').white(), Text.of('Spirits').darkPurple()])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:rune_of_the_explorer', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +100% ').green(), Text.of('Fishing Luck').gold()])
			text.add(3, [Text.of(' >').white(), Text.of(' +50% ').green(), Text.of('Experience from fishing').gold()])
			text.add(4, [Text.of(' >').white(), Text.of(' 10% ').green(), Text.of('Chance to recieve double loot from fishing').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Max Health'))
			text.add(3, Text.aqua(' > Max Feathers'))
			text.add(4, Text.aqua(' > Feathers Regen Rate'))
			text.add(5, Text.aqua(' > Movement Speed'))
			text.add(6, Text.yellow('  '))
		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Possessing an assortment of gadgets such as').white(), Text.of(' Anomoly').lightPurple().italic(), Text.of(', the').white(), Text.of(' Iron Paraglider').aqua(), Text.of(', and the').white(), Text.of(' Eternal Steak').gold(), Text.of(', the Explorer is an incredibly versatile class allowing for a variety of playstyles.')])
		  text.add(3, Text.yellow('  '))
	  })

	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
	  event.addAdvanced('kubejs:rune_of_the_arcane_ranger', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Attack Knockback').gold()])
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Bow Charge Speed'))
			text.add(3, Text.aqua(' > Spell Cooldown'))
			text.add(4, Text.aqua(' > Cast Time Reduction'))
			text.add(5, Text.aqua(' > Movement Speed'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > The Arcane Ranger wields').white(), Text.of(' Fury').lightPurple().italic(), Text.of(' and an array of arrows for ranged annihilation, while').white(), Text.of(' Potentia').lightPurple().italic(), Text.of(' and').white(), Text.of(' Tempest').lightPurple().italic(), Text.of(' dominate close combat.')])
		  text.add(3, Text.yellow('  '))
		
	  })


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_dreamweaver', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').gray(), Text.of(' +10%').green(), Text.of(' Chance to Ignite your target').gold()])
			text.add(3, [Text.of(' > ').gray(), Text.of('+100%').green(), Text.of(' damage to ').gold(), Text.of('Players').green(), Text.of(' that are insane.').gold()])
			text.add(4, Text.yellow('---------------------------------------'))
			text.add(5, [Text.of(' > Attacking with').gray(), Text.of(' Warmonger').red(), Text.of(' and').gray(), Text.of(' Torment').darkRed(), Text.of(' in a certain pattern will apply').gray(), Text.of(' negative effects').gold(), Text.of(' to your Target.').gray(), Text.of(' Players').green(), Text.of(' and').gray(), Text.of(' non-players').aqua(), Text.of(' receive different').gray(), Text.of(' Negative Effects.').yellow()])
			text.add(6, [Text.of(' > You are').gray(), Text.of(' REQUIRED').gold(), Text.of(' to use').gray(), Text.of(' Torment').darkRed(), Text.of(' in your').gray(), Text.of(' Main-hand').yellow(), Text.of(' and').gray(), Text.of(' Warmonger').red(), Text.of(' in your').gray(), Text.of(' Off-hand').yellow(), Text.of(' for the effects to work.').gray()])
			text.add(7, [Text.of(' ').gray()])
			text.add(8, [Text.of('How to use:').yellow().underlined()])
			text.add(9, [Text.of(' > Shoot the enemy three times with').gray(), Text.of(' Warmonger').red(), Text.of(' to give the enemy').gray(), Text.of(' The Dreamweavers Mark').lightPurple(), Text.of(' and a').gray(), Text.of(' Bleeding Effect').gold()])
			text.add(10, [Text.of(' > Follow up with a slash from').gray(), Text.of(' Torment').darkRed(), Text.of(' to finish the combo.').gray()])
			text.add(11, [Text.of('     - Targeted Players').darkGreen(), Text.of(' will go').gray(), Text.of(' Insane').darkPurple(), Text.of(' and be ').gray(), Text.of('Weakened').blue(), Text.of(' for').gray(), Text.of(' 20 seconds').yellow()])
			text.add(12, [Text.of('     - Targeted Mobs').aqua(), Text.of(' will be stunned for').gray(), Text.of(' 8 seconds').yellow(), Text.of(' but Bosses for ').gray(), Text.of('4 seconds').yellow()])
			text.add(13, [Text.of('  ').yellow()])
			text.add(14, [Text.of('Note:').red(), Text.of(' Getting hit by an enemy that has the').gray(), Text.of(' The Dreamweavers Mark').lightPurple(), Text.of(' will require you to restart your combo.').gray()])


		}

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Attack Speed with Ranged Weapon'))
			text.add(3, Text.aqua(' > Arrow Life Steal'))
			text.add(4, Text.aqua(' > Maximum Life Under Potion Effect'))
			text.add(5, Text.aqua(' > Life Per Hit Under Potion Effect'))
			text.add(6, Text.yellow('  '))
		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Equipped with').white(), Text.of(' Warmonger').red().italic(), Text.of(' and ').white(), Text.of('Torment,').darkRed().italic(), Text.of(' the Dreamweaver warps the mind of their targets, causing them to become Stunned or Insane.')])
		  text.add(3, Text.yellow('  '))
		})


	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:rune_of_the_bounty_hunter', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('ALT ').yellow(), Text.of('to view Passives').gold()])
		  } else {
			text.add(1, Text.yellow('Passives').underlined(true))
			text.add(2, [Text.of(' >').white(), Text.of(' +10%').green(), Text.of(' Crit Chance if Wounded').gold()])
			text.add(3, [Text.of(' > Completing a').white(), Text.of(' Bounty').gold().italic(), Text.of(' or ').white(), Text.of('High Value Target Contract').gold().italic(), Text.of(' rewards you with significantly better payouts than other Subclasses.')])
			text.add(4, [Text.of(' > ').white(), Text.of('3 Friendly Kangaroos ').green(), Text.of(' are summoned every 10 minutes').white()])

		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').gold(), Text.of('SHIFT ').yellow(), Text.of('to view Talent Tree Skills.').gold()])
		  } else {
			text.add(1, Text.yellow('Talent Tree Skills').underlined(true))
			text.add(2, Text.aqua(' > Damage With Shield Equipped'))///
			text.add(3, Text.aqua(' > Health Regen'))
			text.add(4, Text.aqua(' > Critical Hit Chance'))
			text.add(5, Text.aqua(' > Critical Hit Damage'))
			text.add(6, Text.yellow('  '))
		  }

		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Equipped with a ').white(), Text.of('full set of armor').gold(), Text.of(', the exceptional ').white(), Text.of('Whisperwind Rapier').lightPurple().italic(), Text.of(', and ').white(), Text.of('Vanguards Boomerang').lightPurple().italic(), Text.of(', this class excels in 1-on-1 combat.')])
		  text.add(3, Text.yellow('  '))
		
	  })



	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	  event.addAdvanced('kubejs:rune_of_the_alchemist', (item, advanced, text) => {
		

		if (!event.alt) {
			text.add(1, [Text.of('Hold ').red(), Text.of('ALT ').yellow(), Text.of('to view Negative Passives').red()])
		  } else {
			text.add(1, Text.darkRed('Negative Passives:').underlined(true))
			text.add(2, Text.red(' > No On-Hit Feathers Regen Effect'))
			text.add(3, Text.red(' > Attacks only do 25% of their normal damage'))
			text.add(4, Text.red(' > Max health is decreased by 50%'))
			
		  }

		if (!event.shift) {
			text.add(1, [Text.of('Hold ').green(), Text.of('SHIFT ').yellow(), Text.of('to view Positive Passives.').green()])
		  } else {
			text.add(1, Text.darkGreen('Positive Passives').underlined(true))
			text.add(2, Text.green(' > Your max health is increased to normal while under a potion effect'))
			text.add(3, Text.green(' > +200% Max Feathers'))
			text.add(4, Text.green(' > +50% Feathers Regen Rate'))
			text.add(5, Text.green(' > +75% Duration and Strength for ALL brewed potions'))
			text.add(6, Text.green(' > +75% Attack Speed Under Potion Effect'))
			text.add(7, Text.green(' > +75% Damage UNDER Potion Effect'))
			text.add(8, Text.green(' > +25% Damage PER Potion Effect'))
			text.add(9, Text.green(' > +25% Crit Chance against poisoned enemy'))
			text.add(10, Text.green(' > +25% Crit Damage against poisoned enemy'))
			text.add(11, Text.green(' > +20% Incoming Healing'))
			text.add(12, Text.yellow('  '))

		  }
		  text.add(1, Text.yellow('Summary').underlined(true))
		  text.add(2, [Text.of(' > Even with the').white(), Text.of(' Acidic Bone').lightPurple().italic(), Text.of(', the Alchemist is initally quite weak. However, it gains extraordinary buffs from potions and overtime it can reach unimaginable heights of power.')])
		  text.add(3, Text.yellow('  '))
		})




	  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	  event.addAdvanced('kubejs:creeper_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Creepers').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Creepers').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Creepers').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:skeleton_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Skeletons').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Skeletons').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Skeletons').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
		})
		  event.addAdvanced('kubejs:spider_bounty', (item, advanced, text) => {
			
			if (!event.shift) {
				text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
			  } else {
				text.add(1, Text.gold('Bounty Details:'))
				text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Spiders').italic().darkRed()])
				text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Spiders').italic().darkRed()]) 
				text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Spiders').italic().darkRed()])
				text.add(5, Text.yellow(' '))
				text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
			  }
			  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
			  text.add(2, Text.yellow(' '))
			  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
			  text.add(4, Text.yellow(' '))
			})

	  event.addAdvanced('kubejs:zombie_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Zombies').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Zombies').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Zombies').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
		})
	
	  event.addAdvanced('kubejs:enderman_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Endermen').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Endermen').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Endermen').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])  
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:pillager_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Pillagers').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Pillagers').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Pillagers').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])  
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	

	  event.addAdvanced('kubejs:piglin_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 15x Piglins').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 25x Piglins').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 50x Piglins').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 5 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 50').darkGreen().italic()])  
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
	  })	
	  
	  event.addAdvanced('kubejs:drowned_bounty', (item, advanced, text) => {
		
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
		  } else {
			text.add(1, Text.gold('Bounty Details:'))
			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 25x Drowned').italic().darkRed()])
			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 50x Drowned').italic().darkRed()]) 
			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of('  Kill 75x Drowned').italic().darkRed()])
			text.add(5, Text.yellow(' '))
			text.add(6, [Text.of(' > Bonus:').gold(), Text.of(' You are rewarded').white(), Text.of(' 3 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 75').darkGreen().italic()])   
		  }
		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
		  text.add(4, Text.yellow(' '))
		})

//	  event.addAdvanced('kubejs:mutant_bounty', (item, advanced, text) => {
//		
//		if (!event.shift) {
//			text.add(1, [Text.of('Hold ').white(), Text.of('SHIFT ').yellow(), Text.of('to see').white(), Text.of(' Bounty Details').gold()])
//		  } else {
//			text.add(1, Text.gold('Bounty Details:'))
//			text.add(2, [Text.of(' > Common Reward:').green(), Text.of(' Kill 10x Mutants').italic().darkRed()])
//			text.add(3, [Text.of(' > Uncommon Reward:').yellow(), Text.of(' Kill 15x Mutants').italic().darkRed()]) 
//			text.add(4, [Text.of(' > Rare Reward:').darkPurple(), Text.of(' Kill 25x Mutants').italic().darkRed()])
//			text.add(5, Text.yellow(' '))
//			text.add(6, [Text.of(' > Bonus').gold(), Text.of(' You are rewarded').white(), Text.of(' 10 Bronze Coins').yellow(), Text.of(' for each kill after').white(), Text.of(' 25').darkGreen().italic()]) 
//		  }
//		  text.add(1, [Text.of('Right-Click ').gold(), Text.of('to begin the hunt.').white()])
//		  text.add(2, Text.yellow(' '))
//		  text.add(3, [Text.of('Time Limit: ').white(), Text.of('5 Minutes').green()])
//		  text.add(4, Text.yellow(' '))
//	  })

	event.addAdvanced('musketmod:pistol', (item, advanced, text) => {
		
		  text.add(1, [Text.of('Press ').gold(), Text.of('F').yellow().italic(), Text.of(' to put in your offhand and use with a melee weapon simultaneously.').gold()])
		  text.add(2, Text.yellow(' '))
		  text.add(3, [Text.of('Uses ').gold().italic(), Text.of('Paper Cartriges ').yellow(), Text.of('as ammo.').gold().italic()])


	  })

	event.addAdvanced('kubejs:subclass_skill_point', (item, advanced, text) => {
		text.add(1, [Text.of('Grants a ').gray(), Text.of('Subclass Skill Point ').gold()])
	})
//.tooltip('Right click with this item in your hand to add a skill point to your subclass skill tree.')
	event.addAdvanced('kubejs:torn_page', (item, advanced, text) => {
		text.add(1, [Text.of('Collect and use ').gray(), Text.of('10 ').yellow(), Text.of('to gain a ').gray(), Text.of('Subclass Skill Point').gold()])
	})

	event.addAdvanced('kubejs:bloodlust', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('50').red().underlined(), Text.of(' Enemies in ').white(), Text.of('5 Minutes').gold()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Each successful hit grants a stacking ').white(), Text.of('Haste').gold(), Text.of(' effect for ').white(), Text.of('4 seconds. Stacks to').white(), Text.of(' +90% Attack Speed').gold(), Text.of('. If you are hit').white(), Text.of(' 3 times').darkRed(), Text.of(' then the effect clears.').white()])
	})

	event.addAdvanced('kubejs:restoration', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('500').red().underlined(), Text.of(' Enemies with ').white(), Text.of('Spells').blue()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Regenerate ').white(), Text.of('60 Mana').blue(), Text.of(' on kill').white()])
	})

	event.addAdvanced('kubejs:strike', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('1500').red().underlined(), Text.of(' Enemies with ').white(), Text.of('Projectiles').darkPurple()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' On the ').white(), Text.of('15th').yellow(), Text.of(' successful projectile hit, two ').white(), Text.of('Lightning Bolts').yellow(), Text.of(' will strike the current target.')])
	})
	event.addAdvanced('kubejs:surge', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Spawns a Tamed baby Wolf. You must help it defeat certain creatures. If the dog dies, you fail. ').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Stage 1:').gold(), Text.of(' Kill a ').gray(), Text.of('Tusklin.').red(), Text.of(' Found in the').gray(), Text.of(' Ice Spikes biome.').blue()]),
		text.add(4, [Text.of('Stage 2:').gold(), Text.of(' Kill a').gray(), Text.of(' Skinwalker.').red(), Text.of(' Found in many').gray(), Text.of(' Temperate Biomes including ').gray(), Text.of('Plains, Forests, and Taigas.').green()]),
		text.add(5, [Text.of('Stage 3:').gold(), Text.of(' Kill a').gray(), Text.of(' Antlered Wendigo').red(), Text.of('. Found in its den in').gray(), Text.of(' Old Growth Pine Taiga or Taiga biomes.').darkGreen()]),
		text.add(6, [Text.of('Stage 4:').gold(), Text.of(' ???').darkRed()]),
		text.add(7, Text.white(' ')),
		text.add(8, [Text.of('Reward:').green().italic(), Text.of(' Killing an enemy grants a ').white(), Text.of('6 Second Speed Boost').green()])
	})
	event.addAdvanced('kubejs:trial_blood_oath', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Become ').white(), Text.of('Insane').darkRed(), Text.of(' and face your inner demons. Slaughter').white(), Text.of(' 5').red(), Text.of(' of the creatures that haunt you without dying.').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Every').white(), Text.of(' 15 minutes').blue(), Text.of(' you will recieve a ').white(), Text.of('Blood Oath').darkRed(), Text.of('. If used, you will be granted a one time effect that'), Text.of(' revives you upon death').gold()])
	})// Not Finished

	event.addAdvanced('kubejs:shadow_form', (item, advanced, text) => {
		text.add(1, [Text.of('Trial:').darkRed().italic(), Text.of(' Kill ').white(), Text.of('150').red().underlined(), Text.of(' enemies without dying.').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Reward:').green().italic(), Text.of(' Upon reaching 30% health you will be given the').white(), Text.of(' Heartstop').darkPurple(), Text.of(' effect for ').white(), Text.of('20 Seconds').gold().underlined(), Text.of('. Under this effect you are temporarily invulnerable but take 50% of accumulated damage once it wears off. ').white()])
		text.add(4, Text.white(' ')),
		text.add(5, [Text.of('Effect Cooldown: ').yellow(), Text.of('3 Minutes').darkGreen()])
	})
	event.addAdvanced('kubejs:time_turner', (item, advanced, text) => {
		text.add(1, [Text.of('Warp time and bring the darkness or the dawn.').gold().italic()])
		text.add(2, [Text.of(' ').gray().italic()])
		text.add(3, [Text.of('10% Chance to warp the mind of the user, causing them to go').gray().italic(), Text.of(' Insane').darkRed().italic(), Text.of('. Insanity lasts for 1 Minute').gray().italic()])
	})
	event.addAdvanced('kubejs:blood_oath', (item, advanced, text) => {
		text.add(1, [Text.of('Effect: ').yellow(), Text.of('Using this item will grant an effect that').white(), Text.of(' resurrects').gold().italic(), Text.of(' you upon death.').white()])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Cooldown: ').gray(), Text.of('5 Minutes').darkGreen()])
	})

	event.addAdvanced('kubejs:summoners_gateway', (item, advanced, text) => {
		text.add(1, [Text.of('Grants a ').white(), Text.of('Summoning Stone').gold(), Text.of(' for all permanently captured animal souls ')])
		text.add(2, Text.white(' ')),
		text.add(3, [Text.of('Cooldown: ').yellow(), Text.of('5 Minutes').darkGreen()])
	})
	event.addAdvanced('kubejs:taming_flute', (item, advanced, text) => {
		if (!event.shift) {
			text.add(1, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view').yellow(), Text.of(' Tameable Animals').gold()])
		  } else {
			text.add(1, [Text.of('Tameable Animals').gold().underlined()])
			text.add(2, [Text.of(' > Moose').yellow()])
			text.add(3, [Text.of(' > Snow Leapord').yellow()])
			text.add(4, [Text.of(' > Bison').yellow()])
			text.add(5, [Text.of(' > Anaconda').yellow()])
			text.add(6, [Text.of(' > Dropbear').yellow()])
			text.add(7, [Text.of(' > Rhino').yellow()])
			text.add(8, [Text.of(' > Tiger').yellow()])
			text.add(9, [Text.of(' > Tusklin').yellow()])
		  }
		text.add(1, [Text.of('Allows the player to tame a variety of animals ').gray()])
		text.add(2, Text.white(' '))
	});

	event.addAdvanced('kubejs:evasion_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Hunt down and slaughter a').white(), Text.of(' Cave Dweller').darkRed()])
		text.add(3, [Text.of(' ').darkRed()])
		text.add(4, [Text.of('Reward:').gold().underlined()])
		text.add(5, [Text.of('  Evasion Elixir').aqua()])

	});

	event.addAdvanced('kubejs:speed_elixir_relic', (item, advanced, text) => {
		
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Feed').white(), Text.of(' 5').gold(), Text.of(' Baby Villagers').darkGreen(), Text.of(' to each of the ').white(), Text.of('Creatures').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  The Villagers MUST be baby Villagers').gray()])
		text.add(6, [Text.of(' ').red()])
		text.add(7, [Text.of('Reward:').gold().underlined()])
		text.add(8, [Text.of('  Speed Elixir').aqua()])
		text.add(9, [Text.of(' ' ).green()])
		if (!event.shift) {
			text.add(10, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view').yellow(), Text.of(' Creatures').darkRed(), Text.of(' that need to be fed.')])
		  } else {
			text.add(10, [Text.of('Creatures requiring sustinance:').gold().underlined().italic()])
			text.add(11, [Text.of('> Anacondas:').yellow(), Text.of(' Found in ').gray(), Text.of('Swamps').darkGreen(), Text.of(' and').gray(), Text.of(' Mangrove Swamps').darkGreen()])
			text.add(12, [Text.of('> Murmurs:').yellow(), Text.of(' Found in ').gray(), Text.of('Caves').gold(), Text.of(' beneath').gray(), Text.of(' Y: -30').blue()])
			text.add(13, [Text.of('> Rocky Rollers:').yellow(), Text.of(' Found rarely in').gray(), Text.of(' Dripstone Caves').gold()])
			text.add(14, [Text.of('> Soul Vultures:').yellow(), Text.of(' Found in').gray(), Text.of(' Soul Sand Valleys').red(), Text.of(' in').gray(), Text.of(' The Nether').darkRed()])
			text.add(15, [Text.of('> Crocodiles:').yellow(), Text.of(' Found in').gray(), Text.of(' Swamps, Mangrove Swamps, and Rivers').darkGreen()])
		  }
	});

	event.addAdvanced('kubejs:resistance_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Reach the 3rd tier for each of the').white(), Text.of(' Bounties').yellow()])
		text.add(3, [Text.of(' ').darkRed()])
		text.add(4, [Text.of('Reward:').gold().underlined()])
		text.add(5, [Text.of('  Resistance Elixir').aqua()])

	});

	event.addAdvanced('kubejs:regeneration_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 300 Monsters').darkRed(), Text.of(' with your').white(), Text.of(' Class Pet').darkGreen()])
		text.add(3, [Text.of(' ').darkRed()])
		text.add(4, [Text.of('Reward:').gold().underlined()])
		text.add(5, [Text.of('  Regeneration Elixir').aqua()])
	});

	event.addAdvanced('kubejs:shadow_form_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Acquire ').white(), Text.of('Yamato').lightPurple().italic(), Text.of(' and kill ').white(), Text.of('50 Monsters').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Warning:').red(), Text.of(' Recieving 5 hits from ANY source will result in failure')])
		text.add(5, [Text.of(' ').darkRed()])
		text.add(6, [Text.of('Reward:').gold().underlined()])
		text.add(7, [Text.of('  Heartstop Elixir').aqua()])
	});

	event.addAdvanced('kubejs:strength_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 100 Piglin Brutes').darkRed(), Text.of(' while dual wielding ').white(), Text.of('Golden Axes').lightPurple().italic()])
		text.add(3, [Text.of(' ').darkRed()])
		text.add(4, [Text.of('Reward:').gold().underlined()])
		text.add(5, [Text.of('  Strength Elixir').aqua()])
	});

	event.addAdvanced('kubejs:endurance_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 150 Monsters').darkRed(), Text.of(' without dying').white()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' > It must be Nighttime').gray()])
		text.add(6, [Text.of(' ').darkRed()])
		text.add(7, [Text.of('Reward:').gold().underlined()])
		text.add(8, [Text.of('  Endurance Elixir').aqua()])
	});

	event.addAdvanced('kubejs:fire_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of('> Kill').white(), Text.of(' 100 Flying Creatures').darkRed(), Text.of(' with the ').white(), Text.of('Firebolt Spell').aqua().underlined().italic(), Text.of(' (any tier)').yellow()])
		text.add(3, [Text.of(' ').darkRed()])
		text.add(4, [Text.of('Reward:').gold().underlined()])
		text.add(5, [Text.of('  Dragons Breath Elixir').aqua()])
	});

	event.addAdvanced('kubejs:absorption_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Acquire any ').white(), Text.of('Jetpack').aqua().underlined().italic(), Text.of(' and the ').white(), Text.of('Bazooka').aqua().underlined().italic(), Text.of('. While airborne with the Jetpack, rain down hellfire on Fish, Squids, and other Sealife.').white(), Text.of(' 100 Sealife Souls required.').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  Be 10+ blocks above the targets for the kills to count').gray()])
		text.add(6, [Text.of(' >  Stay airborne with a Jetpack for the entire challenge').gray()])
		text.add(7, [Text.of(' ').darkRed()])
		text.add(8, [Text.of('Reward:').gold().underlined()])
		text.add(9, [Text.of('  Absorption Elixir').aqua()])
	});

	event.addAdvanced('kubejs:charged_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Kill').white(), Text.of(' 500 Enemies').red(), Text.of(' with ').white(), Text.of('Spells').aqua(), Text.of(' (any tier)').yellow()])
		text.add(3, [Text.of(' ').darkRed()])
		text.add(4, [Text.of('Reward:').gold().underlined()])
		text.add(5, [Text.of('  Charged Elixir').aqua()])
	});

	event.addAdvanced('kubejs:soul_steal_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Enter a Village under the cover of darkness. Using the ').white(), Text.of('Shotgun').aqua(), Text.of(', steal the souls of').white(), Text.of(' 50 sleeping Villagers').darkRed()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  Villagers MUST be in bed for the kills to count').gray()])
		text.add(6, [Text.of(' >  You may only get kills during the Night').gray()])
		text.add(7, [Text.of(' ').darkRed()])
		text.add(8, [Text.of('Reward:').gold().underlined()])
		text.add(9, [Text.of('  Soul Steal Elixir').aqua()])
	})

	event.addAdvanced('kubejs:angel_wings_elixir_relic', (item, advanced, text) => {
		text.add(1, [Text.of('Challenge:').gold().underlined()])
		text.add(2, [Text.of(' > Acquire any').white(), Text.of(' Paraglider').lightPurple(), Text.of(' and the').white(), Text.of(' Grenade Launcher').lightPurple(), Text.of('. While Paragliding, kill ').white(), Text.of('150 enemies').darkRed(), Text.of(' with the Grenade Launcher').white()])
		text.add(3, [Text.of(' ').red()])
		text.add(4, [Text.of('Requirements:').red()])
		text.add(5, [Text.of(' >  You MUST be 10+ blocks above the targets for the kills to count').gray()])
		text.add(6, [Text.of(' >  You MUST be Paragliding for the kills to count').gray()])
		text.add(7, [Text.of(' ').darkRed()])
		text.add(8, [Text.of('Reward:').gold().underlined()])
		text.add(9, [Text.of('  Angel Wings Elixir').aqua()])
	});

	bone_effigy.forEach((effigy) => {
		event.addAdvanced(`kubejs:${effigy}_bone_effigy`, (item, advanced, text) => {
			text.add(1, [Text.of('Collect and use').gray(), Text.of(' 10 ').yellow(), Text.of('to acquire a').gray(), Text.of(` Summoning Stone`).gold()])
		});
	});

	event.addAdvanced('kubejs:high_value_target', (item, advanced, text) => {
		text.add(1, [Text.of('High-Value Target').gold(), Text.of(' contracts reward you greatly for eliminating exceptionally dangerous enemies').white()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Requirement: ').red(), Text.of('You must kill the Target at Night.').gray().italic().underlined()])
		text.add(4, [Text.of(' ').red()])
		if (!event.alt) {
			text.add(5, [Text.of('Hold ').yellow(), Text.of('ALT ').gold(), Text.of('to view expanded ').yellow(), Text.of('Description').lightPurple()])
			} else {
			text.add(5, [Text.of('High Value Targets').gold(), Text.of(' are Bounty Contracts but chosen at random from a list of tougher foes. Upon Completion, their').white(), Text.of(' Bounty Counter').red(), Text.of(' increases by').white(), Text.of(' 1').darkGreen(), Text.of(' so you will need to defeat the same entity more times when it is randomly selected again. But, the ').white(), Text.of('Coin rewards').yellow().italic(), Text.of(' grow substantially with each entity elimination.').white()])
		}
		text.add(6, [Text.of(' ').red()])

		if (!event.shift) {
			text.add(7, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view all potential').yellow(), Text.of(' Targets').darkRed()])
			} else {
				text.add(7, [Text.of('Possible Targets:').darkRed().underlined()])
				text.add(8, [Text.of(' > Mutant Creatures').gold().italic()])
				text.add(9, [Text.of(' > Nightmare Stalker').gold().italic()])
				text.add(9, [Text.of(' > Skeleton Thrasher').gold().italic()])
				text.add(9, [Text.of(' > Citadel Keeper').gold().italic()])
				text.add(9, [Text.of(' > Frenzied Knight').gold().italic()])
				text.add(9, [Text.of(' > Supreme Bonescaller').gold().italic()])
				text.add(9, [Text.of(' > Deepling Angler').gold().italic()])
				text.add(9, [Text.of(' > Skin Walker').gold().italic()])
				text.add(9, [Text.of(' > Antlered Wendigo').gold().italic()])
				text.add(9, [Text.of(' > Arch Evoker').gold().italic()])
				text.add(9, [Text.of(' > Drowned Necromancer').gold().italic()])
			};
		});

	event.addAdvanced('kubejs:mindshatter_orb', (item, advanced, text) => {
		text.add(1, [Text.of('Gaze into the').gray(), Text.of(' Mindshatter Orb').darkPurple().italic(), Text.of(' to plunge yourself into the depths of madness. You will gain the strength of a madman, but be hunted by unspeakable terrors.').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Insanity Effects: ').gold().italic()])
		text.add(4, [Text.of(' > Speed Boost').darkAqua()])
		text.add(5, [Text.of(' > Attack Speed Boost').darkAqua()])
		text.add(6, [Text.of(' > Cooldown:').red(), Text.of(' 20 Seconds').green()])
		text.add(7, [Text.of(' ').red()])
		text.add(8, [Text.of('When the Insanity Effect ends you will be teleported back to where you activated it.').yellow()])
	});


	event.addAdvanced('kubejs:spirit_crystal', (item, advanced, text) => {
		text.add(1, [Text.of('Holding the ').gold(), Text.of('Spirit Crystal').darkPurple().italic(), Text.of(' in your off-hand will capture the Spirit of a killed entity. ').gold()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Using the').gray(), Text.of(' Orb of Slaughtered Foes').red().italic(), Text.of(', you are able to summon the captured entity as an').gray(), Text.of(' Ally').darkGreen(), Text.of(' at the cost of').gray(), Text.of(' Souls').aqua().italic()])
	});

	event.addAdvanced('kubejs:orb_of_slaughtered_foes', (item, advanced, text) => {
		text.add(1, [Text.of('Summon the creature trapped in your ').gold(), Text.of('Spirit Crystal').darkPurple().italic(), Text.of(' at the cost of').gold(), Text.of(' Souls').aqua()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Warning:').red(), Text.of(' Some creatures are naturally hostile towards others, even if they both belong to you.').gray()])
	});


	event.addAdvanced('kubejs:lesser_summoning_disc', (item, advanced, text) => {
		text.add(1, [Text.of('Summons an enemy mob as an ally.').gray()])
		text.add(2, [Text.of(' ').red()])
		if (!event.shift) {
			text.add(3, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view all potential').yellow(), Text.of(' Summons').darkRed()])
			} else {
				text.add(3, [Text.of('Nightmare Stalker').red()])
				text.add(3, [Text.of('Supreme Bonescaller').red()])
				text.add(3, [Text.of('Archevoker').red()])
				text.add(3, [Text.of('Geomancer').red()])
				text.add(3, [Text.of('Illusioner').red()])
				text.add(3, [Text.of('Mage').red()])
				text.add(3, [Text.of('Iceologer').red()])
				text.add(3, [Text.of('Mountaineer').red()])
				text.add(3, [Text.of('Royal Guard').red()])
				text.add(3, [Text.of('Windcaller').red()])
				text.add(3, [Text.of('Archer').red()])
				text.add(3, [Text.of('Skirmisher').red()])
				text.add(3, [Text.of('Legioner').red()])
				text.add(3, [Text.of('Cryomancer').red()])
				text.add(3, [Text.of('Pyromancer').red()])
				text.add(3, [Text.of('Necromancer').red()])
				text.add(3, [Text.of('Soul Wizard').red()])
				text.add(3, [Text.of('Fungus Thrower').red()])
				text.add(3, [Text.of('The Headless').red()])
				text.add(3, [Text.of('Scarlet Persecutor').red()])
				text.add(3, [Text.of('Skeleton Demoman').red()])
				text.add(3, [Text.of('Cryonocerous').red()])
				text.add(3, [Text.of('Polargeist').red()])
				text.add(3, [Text.of('Whistleshell Crab').red()])
			};
	});


	event.addAdvanced('kubejs:superior_summoning_disc', (item, advanced, text) => {
		text.add(1, [Text.of('Summons an enemy mob as an ally.').gray()])
		text.add(2, [Text.of(' ').red()])
		if (!event.shift) {
			text.add(3, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view all potential').yellow(), Text.of(' Summons').darkRed()])
			} else {
				text.add(3, [Text.of('Ancient Knight').red()])
				text.add(3, [Text.of('Frenzied Knight').red()])
				text.add(3, [Text.of('Blastling').red()])
				text.add(3, [Text.of('Snareling').red()])
				text.add(3, [Text.of('Watchling').red()])
				text.add(3, [Text.of('Skeleton Thrasher').red()])
				text.add(3, [Text.of('Deepling Angler').red()])
				text.add(3, [Text.of('Deepling Brute').red()])
				text.add(3, [Text.of('Leapleaf').red()])
				text.add(3, [Text.of('Wavewhisperer').red()])
				text.add(3, [Text.of('Wildfire').red()])
				text.add(3, [Text.of('Wraith').red()])
				text.add(3, [Text.of('Dire Hound Leader').red()])
			}
		});
	event.addAdvanced('kubejs:paramount_summoning_disc', (item, advanced, text) => {
		text.add(1, [Text.of('Summons an enemy mob as an ally.').gray()])
		text.add(2, [Text.of(' ').red()])
		if (!event.shift) {
			text.add(3, [Text.of('Hold ').yellow(), Text.of('SHIFT ').gold(), Text.of('to view all potential').yellow(), Text.of(' Summons').darkRed()])
			} else {
				text.add(3, [Text.of('Mutant Creeper').red()])
				text.add(3, [Text.of('Mutant Skeleton').red()])
				text.add(3, [Text.of('Mutant Zombie').red()])
				text.add(3, [Text.of('Mutant Enderman').red()])
			};
	});

	event.addAdvanced('kubejs:lesser_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+1%').green(), Text.of(' chance that an').gray(), Text.of(' Elixir ').lightPurple(), Text.of('activates upon taking damage').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Acquire by: ').red()])
		text.add(4, [Text.of(' - Common Bounty Reward Lootbox').gold()])
	});

	event.addAdvanced('kubejs:superior_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+2%').green(), Text.of(' chance that an').gray(), Text.of(' Elixir ').lightPurple(), Text.of('activates upon taking damage').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Acquire by: ').red()])
		text.add(4, [Text.of(' - Uncommon Bounty Reward Lootbox').gold()])
	});

	event.addAdvanced('kubejs:paramount_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+3%').green(), Text.of(' chance that an').gray(), Text.of(' Elixir ').lightPurple(), Text.of('activates upon taking damage').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Acquire by: ').red()])
		text.add(4, [Text.of(' - Rare Bounty Reward Lootbox').gold()])
	});

	event.addAdvanced('kubejs:exalted_elixir_shard', (item, advanced, text) => {
		text.add(1, [Text.of('+5%').green(), Text.of(' chance that an').gray(), Text.of(' Elixir ').lightPurple(), Text.of('activates upon taking damage').gray()])
		text.add(2, [Text.of(' ').red()])
		text.add(3, [Text.of('Acquire by: ').red()])
		text.add(4, [Text.of(' - Boss kills').gold()])
	});

	event.addAdvanced(`kubejs:evasion_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Evasion').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' >').gray(), Text.of(' None').red()])
	});
	
	event.addAdvanced(`kubejs:speed_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Speed').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature').blue(), Text.of(' kills an enemy they gain ').gray(), Text.of('Speed 2').lightPurple(), Text.of(' for ').gray(), Text.of('10 Seconds').green()])
	});

	event.addAdvanced(`kubejs:resistance_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Resistance').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature\'s').blue(), Text.of(' HP falls below 75% they gain ').gray(), Text.of('Resistance 2').lightPurple(), Text.of(' for ').gray(), Text.of('3 Seconds').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' Cooldown:').red(), Text.of(' 1 Minute').gold()])
	});

	event.addAdvanced(`kubejs:regeneration_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Regeneration').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature\'s').blue(), Text.of(' HP falls below 80% they gain ').gray(), Text.of('Regeneration 4').lightPurple(), Text.of(' for ').gray(), Text.of('3 Seconds').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' Cooldown:').red(), Text.of(' 1 Minute').gold()])
	});

	event.addAdvanced(`kubejs:strength_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Strength').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature').blue(), Text.of(' lands 5 consecutive hits they gain ').gray(), Text.of('Strength').lightPurple(), Text.of(' for ').gray(), Text.of('3 Seconds').green()])
	});

	event.addAdvanced(`kubejs:endurance_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Endurance').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' >').gray(), Text.of(' None').red()])
	});

	event.addAdvanced(`kubejs:absorption_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Absorption').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature\'s').blue(), Text.of(' HP falls below').gray(), Text.of(' 60%').yellow(), Text.of(' they gain ').gray(), Text.of('Absorption').lightPurple(), Text.of(' for ').gray(), Text.of('10 Seconds').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' Cooldown:').red(), Text.of(' 1 Minute').gold()])
	});

	event.addAdvanced(`kubejs:charged_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Charged').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature\'s').blue(), Text.of(' HP falls below').gray(), Text.of(' 20%').green(), Text.of(' they will summon a ').gray(), Text.of('Lightning Bolt').yellow(), Text.of(' to strike their attacker').gray()])
		text.add(7, [Text.of(' >').gray(), Text.of(' Cooldown:').red(), Text.of(' 1 Minute').gold()])
	});

	event.addAdvanced(`kubejs:angel_wings_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Angel Wings').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature\'s').blue(), Text.of(' HP falls below').gray(), Text.of(' 15%').green(), Text.of(' they will launch their attacker into the air ').gray()])
		text.add(7, [Text.of(' >').gray(), Text.of(' Cooldown:').red(), Text.of(' 1 Minute').gold()])
	});

	event.addAdvanced(`kubejs:soul_steal_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Soul Steal').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' >').gray(), Text.of(' Allied Creature\'s').yellow(), Text.of(' gain a').gray(), Text.of(' PERMANENT ').green(), Text.of('Soul Steal').lightPurple(), Text.of(' Effect ').gray()])
	});

	event.addAdvanced(`kubejs:fire_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Fire Breathing').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature\'s').blue(), Text.of(' HP falls below 40% they gain ').gray(), Text.of('Fire Breathing').lightPurple(), Text.of(' for ').gray(), Text.of('1 Second').green()])
		text.add(7, [Text.of(' >').gray(), Text.of(' Cooldown:').red(), Text.of(' 1 Minute').gold()])
	});

	event.addAdvanced(`kubejs:shadow_form_elixir`, (item, advanced, text) => {
		text.add(1, [Text.of('Player Effects: ').gold().italic()])
		text.add(2, [Text.of(' >').gray(), Text.of(' 1%').green(), Text.of(' chance to trigger the').gray(), Text.of(' Heart Stop').lightPurple(), Text.of(' effect upon taking damage.').gray()])
		text.add(3, [Text.of(' > Gather').gray(), Text.of(' Elixir Shards').yellow(), Text.of(' to increase the chance of effects triggering.').gray()])
		text.add(4, [Text.of(' ')])
		text.add(5, [Text.of('Allied Creature Effects:').gold().italic()])
		text.add(6, [Text.of(' > When an').gray(), Text.of(' Allied Creature').blue(), Text.of(' kills an enemy they gain ').gray(), Text.of('Invisibility').lightPurple(), Text.of(' for ').gray(), Text.of('5 Seconds').green()])

	});

	event.addAdvanced('kubejs:common_beastmaster_totem', (item, advanced, text) => {
		text.add(1, [Text.of('Able to tame ').gold(), Text.of('Animals').darkGreen(), Text.of(' with a Max Health of').gold(), Text.of(' 25 ').green(), Text.of('or lower').gold()])
		text.add(2, [Text.of(' > Cooldown:').gray(), Text.of(' 1 Minute').red()])
		text.add(3, [Text.of(' > Beastmaster Subclass').darkAqua(), Text.of(' Cooldown:').gray(), Text.of(' 30 Seconds').red()])
	});

	event.addAdvanced('kubejs:uncommon_beastmaster_totem', (item, advanced, text) => {
		text.add(1, [Text.of('Able to tame ').gold(), Text.of('Animals').darkGreen(), Text.of(' with a Max Health of').gold(), Text.of(' 50 ').green(), Text.of('or lower').gold()])
		text.add(2, [Text.of(' > Cooldown:').gray(), Text.of(' 2 Minutes').red()])
		text.add(3, [Text.of(' > Beastmaster Subclass').darkAqua(), Text.of(' Cooldown:').gray(), Text.of(' 45 Seconds').red()])
	});

	event.addAdvanced('kubejs:rare_beastmaster_totem', (item, advanced, text) => {
		text.add(1, [Text.of('Will tame').gold(), Text.of(' ANY Animal').darkGreen()])
		text.add(2, [Text.of(' > Cooldown:').gray(), Text.of(' 3 Minutes').red()])
		text.add(3, [Text.of(' > ').gray(), Text.of('Beastmaster Subclass').darkAqua(), Text.of(' Cooldown:').gray(), Text.of(' 1 Minute').red()])
	});
	
})











