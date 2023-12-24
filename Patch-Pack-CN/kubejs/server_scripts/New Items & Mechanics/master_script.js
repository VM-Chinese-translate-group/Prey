const removeids = ['lategamegolems:lgg_upgrade_package','lategamegolems:lgg_shield','lategamegolems:lgg_flamer_magic','lategamegolems:lgg_flamer','lategamegolems:lgg_laser','lategamegolems:lgg_ai_chip_follower','lategamegolems:lgg_ai_chip_guard','skilltree:quiver','skilltree:fiery_quiver','skilltree:armored_quiver','skilltree:gilded_quiver','skilltree:toxic_quiver','skilltree:diamond_quiver','skilltree:healing_quiver','skilltree:explosive_quiver','skilltree:silent_quiver','skilltree:bone_quiver','celestisynth:breezebreaker','celestisynth:crescentia','celestisynth:solaris','lategamegolems:lgg_sword_diamond','lategamegolems:lgg_sword_netherite','lategamegolems:lgg_mace_diamond','lategamegolems:lgg_mace_netherite','lategamegolems:lgg_mace_emerald','lategamegolems:lgg_mace_iron','lategamegolems:lgg_spear_netherite','lategamegolems:lgg_spear_emerald','lategamegolems:lgg_spear_diamond','lategamegolems:lgg_spear_iron','lategamegolems:lgg_sword_emerald','lategamegolems:lgg_sword_iron','lategamegolems:lgg_axe_diamond','lategamegolems:lgg_axe_iron','lategamegolems:lgg_axe_netherite','lategamegolems:lgg_axe_emerald','xtraarrows:golden_freezing_arrow','xtraarrows:diamond_freezing_arrow','xtraarrows:netherite_freezing_arrow','xtraarrows:iron_freezing_arrow','xtraarrows:flint_freezing_arrow','xtraarrows:diamond_explosive_arrow','xtraarrows:golden_explosive_arrow','xtraarrows:netherite_explosive_arrow','xtraarrows:iron_explosive_arrow','xtraarrows:flint_explosive_arrow','archers_paradox:diamond_arrow','archers_paradox:slime_arrow','xtraarrows:netherite_lightning_arrow','xtraarrows:diamond_lightning_arrow','xtraarrows:flint_lightning_arrow','xtraarrows:iron_lightning_arrow','xtraarrows:golden_lightning_arrow',"cgm:heavy_rifle","cgm:machine_pistol","cgm:assault_rifle","cgm:mini_gun","cgm:bazooka","cgm:grenade_launcher","cgm:rifle","cgm:shotgun","cgm:pistol","cgm:workbench","cgm:specialised_grip","cgm:light_grip","cgm:weighted_stock","cgm:tactical_stock","cgm:light_stock","cgm:silencer","cgm:long_scope","cgm:medium_scope","cgm:short_scope","cgm:stun_grenade","cgm:grenade","cgm:missile","cgm:basic_bullet","cgm:shell","cgm:advanced_bullet",'powder_power:token_night_vision','powder_power:token_speed','powder_power:token_fire_resistance','powder_power:token_speed','powder_power:token_no_fall','powder_power:token_healing','powder_power:token_exp','powder_power:token_trash','powder_power:token_jump_boost','powder_power:token_haste','powder_power:token_breathing','powder_power:token_good_omen','powder_power:token_unseen','powder_power:token_greater_healing','powder_power:token_sunshine','powder_power:token_dolphin','powder_power:token_conduit_power','powder_power:token_resistance','powder_power:token_strength','powder_power:token_greater_absorption','artifacts:scarf_of_invisibility','max_armory:copper_spear','max_armory:wooden_spear','max_armory:iron_spear','max_armory:stone_spear','max_armory:diamond_spear','max_armory:golden_spear', 'max_armory:netherite_spear', 'max_armory:wooden_halberd','max_armory:iron_halberd','max_armory:stone_halberd','max_armory:diamond_halberd','max_armory:golden_halberd','max_armory:netherite_halberd']
const removemods = [
	'endrem','valhelsia_furniture','nikgubs_blades_plus', 'divineweaponry', 'rpggods', 'shieldexp'
]
const LTC = [
	 'dungeons_gear:dual_crossbow','dungeons_gear:dual_crossbow','endrem:black_eye','endrem:cold_eye', 'endrem:lost_eye','endrem:nether_eye','endrem:old_eye','endrem:rogue_eye','endrem:magical_eye','endrem:wither_eye','endrem:witch_eye','endrem:cryptic_eye','assortedtools:ultimate_fist'
]
const ELM = {
	'minecraft:evoker':'endrem:magical_eye',
	'minecraft:wither':'endrem:wither_eye',
	'blue_skies:alchemist': 'blue_skies:poison_key',
	'blue_skies:summoner': 'blue_skies:nature_key'
}


ServerEvents.recipes(e => {
	e.smelting('minecraft:leather','minecraft:rotten_flesh')
	
	e.shaped('lategamegolems:lgg_ai_chip_follower', [
		'IRI',
		'GNG',
		'IRI'
	], {
	I: 'minecraft:iron_block',
	R: 'minecraft:redstone_block',
	G: 'minecraft:gold_block',
	N: 'minecraft:netherite_ingot',
	})

	e.shaped('lategamegolems:lgg_ai_chip_guard', [
		'IRI',
		'LNL',
		'IRI'
	], {
	I: 'minecraft:iron_block',
	R: 'minecraft:redstone_block',
	L: 'minecraft:lapis_block',
	N: 'minecraft:netherite_ingot',
	})
	e.shapeless(
		Item.of('minecraft:string', 3),
		[
			'#forge:wool',
		])
	removeids.forEach((removeids) => {
		e.remove({id: `${removeids}`});
	})
	removemods.forEach((removemods) => {
		e.remove({mod: `${removemods}`})
	})

	e.shaped('supplementaries:quiver', [
		'SL',
		'SL',
		'SL'
	], {
	S: 'minecraft:string',
	L: 'minecraft:leather'

	})
	e.shaped('3x mutantmore:compound_z', [
		'EAE',
		'RGR',
		'HBH'
	], {
	E: 'undead_revamp2:huntereye',
	A: 'mutagenesis:antlers',
	R: 'mutantmonsters:mutant_skeleton_rib',
	G: 'minecraft:gunpowder',
	H: 'minecraft:spider_eye',
	B: 'minecraft:water_bucket'
	})
	e.shapeless(
		Item.of('kubejs:rare_pet_lootbox', 1),
		[
			'kubejs:uncommon_pet_lootbox',
			'kubejs:uncommon_pet_lootbox',
			'kubejs:uncommon_pet_lootbox'
		])
	e.shapeless(
		Item.of('nikgubs_blades_plus:heart_of_final', 1),
		[
			'mutantmonsters:creeper_shard',
			'mutantmonsters:mutant_skeleton_rib_cage',
			'mutantmonsters:hulk_hammer'
		])
	e.recipes.createMechanicalCrafting('cgm:bazooka', [
		'CCCCCC ',
		'CPFAMHN',
		'CCCCCC '
	], {
		C: 'create:copper_sheet',
		P: 'create:propeller',
		F: 'create:fluid_tank',
		A: 'create:potato_cannon',
		M: 'createaddition:electric_motor',
		H: 'immersive_aircraft:engine',
		N: 'minecraft:netherite_ingot'
	})
	e.recipes.createMechanicalCrafting('cgm:grenade_launcher', [
		' BBZZZB ',
		' BLPCQBD',
		'B BZZZB '
	], {
		B: 'create:brass_sheet',
		P: 'create:propeller',
		L: 'create:powered_latch',
		Z: 'createaddition:zinc_sheet',
		Q: 'create:polished_rose_quartz',
		C: 'createaddition:large_connector',
		D: 'create_sa:brass_drill_head'
	})

	e.recipes.createMechanicalCrafting('6x cgm:grenade', [
		' N ',
		'GFG',
		' N ',
		' S '
	], {
		G: 'minecraft:gunpowder',
		F: 'minecraft:firework_rocket',
		N: 'assortedcore:copper_dust',
		S: 'minecraft:flint_and_steel'
	})
	e.recipes.createMechanicalCrafting('6x cgm:stun_grenade', [
		' N ',
		'GFG',
		' N ',
		' S '
	], {
		G: 'minecraft:gunpowder',
		F: 'minecraft:firework_rocket',
		N: 'assortedcore:platinum_dust',
		S: 'minecraft:flint_and_steel'
	})
	e.recipes.createMechanicalCrafting('6x cgm:missile', [
		' D ',
		'DFD',
		' T ',
		' S '
	], {
		D: 'minecraft:diamond',
		F: 'minecraft:firework_rocket',
		T: 'minecraft:tnt',
		S: 'minecraft:flint_and_steel'
	})
	e.recipes.createMechanicalCrafting('cgm:shotgun', [
		' BBBR ',
		'FIGGBD',
		' BBBR '
	], {
		B: 'create:brass_sheet',
		R: 'createaddition:brass_rod',
		F: 'musketmod:pistol',
		D: 'createaddition:electric_motor',
		B: 'create:nixie_tube',
		G: 'create:propeller',
		I: 'create:brass_hand'
	})
	e.recipes.createMechanicalCrafting('16x cgm:shell', [
		'BFB',
		'IGI',
		'ICI'
	], {
		I: 'minecraft:iron_ingot',
		B: 'create:brass_sheet',
		F: 'minecraft:firework_rocket',
		G: 'minecraft:blaze_powder',
		C: 'minecraft:fire_charge',

	})
})



LootJS.modifiers((event) => {
	Object.entries(ELM).forEach(([entity, loot]) => {
        event.addEntityLootModifier(entity).removeLoot(loot);
	})
	LTC.forEach((LTC) => {
		event.addLootTypeModifier([LootType.CHEST]).removeLoot(`${LTC}`);
	})
})



const torn_page_drop = {

	'mutantmonsters:mutant_creeper':'kubejs:torn_page',
	'mutantmonsters:mutant_skeleton':'kubejs:torn_page',
	'mutantmonsters:mutant_enderman':'kubejs:torn_page',
	'mutantmonsters:mutant_zombie':'kubejs:torn_page'
}
ServerEvents.entityLootTables(event => {
	Object.entries(torn_page_drop).forEach(([entity, loot]) => {
		event.modifyEntity(`${entity}`, table => {
			table.addPool(pool => {
				pool.addItem(`${loot}`).randomChance(0.30)
			})
		})
	})
})

const bossdrops = {
	'stalwart_dungeons:awful_ghast': 'minecraft:nether_star',




	'mutantmonsters:mutant_creeper':'2x numismaticoverhaul:silver_coin',
	'mutantmonsters:mutant_skeleton':'2x numismaticoverhaul:silver_coin',
	'mutantmonsters:mutant_enderman':'2x numismaticoverhaul:silver_coin',
	'mutantmonsters:mutant_zombie': '2x numismaticoverhaul:silver_coin',	
	'alexsmobs:crow':'kubejs:crow_bone_effigy',
	'alexsmobs:sugar_glider':'kubejs:sugar_glider_bone_effigy',
	'alexsmobs:bald_eagle':'kubejs:bald_eagle_bone_effigy',
	'alexsmobs:mantis_shrimp':'kubejs:mantis_shrimp_bone_effigy',
	'alexsmobs:capuchin_monkey':'kubejs:capuchin_monkey_bone_effigy',
	'alexsmobs:flutter':'kubejs:flutter_bone_effigy',
	'alexsmobs:mimic_octopus':'kubejs:mimic_octopus_bone_effigy',
	'alexsmobs:tarantula_hawk':'kubejs:tarantula_hawk_bone_effigy',
	'alexsmobs:elephant':'kubejs:elephant_bone_effigy',
	'alexsmobs:komodo_dragon':'kubejs:komodo_dragon_bone_effigy',
	'alexsmobs:kangaroo':'kubejs:kangaroo_bone_effigy',
	'alexsmobs:gorilla':'kubejs:gorilla_bone_effigy',
	'alexsmobs:crocodile':'kubejs:crocodile_bone_effigy',
	'alexsmobs:grizzly_bear':'kubejs:grizzly_bear_bone_effigy',
}

ServerEvents.entityLootTables(event => {
	Object.entries(bossdrops).forEach(([entity, loot]) => {
		event.modifyEntity(`${entity}`, table => {
			table.addPool(pool => {
				pool.addItem(`${loot}`)
			})
		})
	})
})


ItemEvents.rightClicked('kubejs:food_crate', event => {
	let player = event.player.username
	Utils.server.runCommandSilent(`/execute at ${player} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/food_box`)
	Utils.server.runCommandSilent(`/clear ${player} kubejs:food_crate 1`)
})






const coin_entities = [
    'creeperoverhaul:badlands_creeper',
	'creeperoverhaul:bamboo_creeper',
	'creeperoverhaul:beach_creeper',
	'creeperoverhaul:cave_creeper',
	'creeperoverhaul:dark_oak_creeper',
	'creeperoverhaul:desert_creeper',
	'creeperoverhaul:dripstone_creeper',
	'creeperoverhaul:hills_creeper',
	'creeperoverhaul:jungle_creeper',
	'creeperoverhaul:mushroom_creeper',
	'creeperoverhaul:ocean_creeper',
	'creeperoverhaul:savannah_creeper',
	'creeperoverhaul:snowy_creeper',
	'creeperoverhaul:spruce_creeper',
	'creeperoverhaul:swamp_creeper',
	'born_in_chaos_v1:phantom_creeper',
	'dungeons_mobs:icy_creeper',
	'minecraft:creeper',
    'born_in_chaos_v1:baby_skeleton',
	'born_in_chaos_v1:baby_skeleton_2',
	'born_in_chaos_v1:baby_skeleton_minion',
	'born_in_chaos_v1:bone_imp',
	'born_in_chaos_v1:bone_imp_2',
	'born_in_chaos_v1:bone_imp_minion',
	'born_in_chaos_v1:bonescaller',
	'born_in_chaos_v1:supreme_bonescaller',
	'born_in_chaos_v1:dark_vortex',
	'born_in_chaos_v1:decrepit_skeleton',
	'born_in_chaos_v1:restless_spirit',
	'born_in_chaos_v1:spirit_guide',
	'born_in_chaos_v1:skeleton_thrasher',
	'born_in_chaos_v1:skeleton_demoman',
	'dungeons_mobs:necromancer',
	'dungeons_mobs:sunken_skeleton',
	'irons_spellbooks:citadel_keeper',
	'irons_spellbooks:necromancer',
	'rottencreatures:skeleton_lackey',
	'minecraft:skeleton',
	'minecraft:wither_skeleton',
	'minecraft:stray',
    'born_in_chaos_v1:wither_scuttler',
	'minecraft:spider',
	'minecraft:cave_spider',
    'minecraft:zombie',
	'born_in_chaos_v1:barrel_zombie',
	'born_in_chaos_v1:decaying_zombie',
	'born_in_chaos_v1:door_knight',
	'born_in_chaos_v1:zombie_clown',
	'born_in_chaos_v1:fallen_chaos_knight',
	'dungeons_mobs:frozen_zombie',
	'dungeons_mobs:jungle_zombie',
	'rottencreatures:burned',
	'rottencreatures:frostbitten',
	'rottencreatures:glacial_hunter',
	'rottencreatures:mummy',
	'rottencreatures:swampy',
	'rottencreatures:undead_miner',
	'rottencreatures:zombie_lackey',
	'undead_revamp2:bomber',
	
	'undead_revamp2:the_moonflower',
	'undead_revamp2:thebeartamer',
	'undead_revamp2:thehorrors',
	'undead_revamp2:thehunter',
	'undead_revamp2:thesmoker',
	'undead_revamp2:thespectre',
	'undead_revamp2:thespitter',
	'undead_revamp2:theswarmer',
	'minecraft:husk',
    'born_in_chaos_v1:seared_spirit',
	'born_in_chaos_v1:pumpkin_spirit',
	'dungeons_mobs:blastling',
	'dungeons_mobs:snareling',
	'minecraft:enderman',
    'dungeons_mobs:geomancer',
	'minecraft:pillager',
	'minecraft:illusioner',
	'minecraft:evoker',
	'minecraft:ravager',
	'minecraft:vindicator',
	'dungeons_mobs:iceologer',
	'dungeons_mobs:mage',
	'dungeons_mobs:mountaineer',
	'dungeons_mobs:royal_guard',
	'dungeons_mobs:windcaller',
	'irons_spellbooks:cryomancer',
	'irons_spellbooks:pyromancer',
	'irons_spellbooks:archevoker',
	'minecraft:witch',
	'takesapillage:archer',
	'takesapillage:skirmisher',
	'takesapillage:legioner',
    'dungeons_mobs:zombified_fungus_thrower',
	'minecraft:piglin',
    'minecraft:piglin_brute',
	'minecraft:zombified_piglin',
	'minecraft:hoglin',
    'dungeons_mobs:wavewhisperer',
	'rottencreatures:immortal',
	'rottencreatures:zap',
    'mutantmore:mutant_blaze',
	'mutantmore:mutant_wither_skeleton',
	'mutantmonsters:mutant_creeper',
	'mutantmonsters:mutant_skeleton',
    'mutantmonsters:mutant_zombie',
	'mutantmonsters:mutant_enderman',
    'minecraft:blaze',
    'minecraft:ghast',
    'minecraft:phantom',
    'minecraft:vex'
]

coin_entities.forEach((entity) => {
        ServerEvents.entityLootTables(event => {
                event.modifyEntity(`${entity}`, table => {
                        table.addPool(pool => {
								pool.addItem('kubejs:time_turner').randomChance(0.01)
                                pool.addItem('kubejs:zombie_bounty').randomChance(0.01)
                                pool.addItem('kubejs:creeper_bounty').randomChance(0.01)
                                pool.addItem('kubejs:skeleton_bounty').randomChance(0.01)
                                pool.addItem('kubejs:spider_bounty').randomChance(0.01)
                                pool.addItem('kubejs:piglin_bounty').randomChance(0.01)
                                pool.addItem('kubejs:enderman_bounty').randomChance(0.01)
                                pool.addItem('kubejs:pillager_bounty').randomChance(0.01)
                                pool.addItem('kubejs:drowned_bounty').randomChance(0.01)
								pool.addItem('kubejs:high_value_target').randomChance(0.01)
                                //pool.addItem('kubejs:mutant_bounty').randomChance(0.01)
                        })
                })
        })
})



const beastmaster_totem_drops = [
	'mutantmore:mutant_blaze',
	'mutantmore:mutant_wither_skeleton',
	'mutantmonsters:mutant_creeper',
	'mutantmonsters:mutant_skeleton',
	'mutantmonsters:mutant_zombie',
	'mutantmonsters:mutant_enderman',
	'born_in_chaos_v1:nightmare_stalker',
	'born_in_chaos_v1:skeleton_thrasher',
	'dungeons_mobs:wraith',
	'dungeons_mobs:iceologer',
	'irons_spellbooks:necromancer'
]



let darkness_hit = [
	'cave_dweller:cave_dweller',
	'skinandbonesremastered:skin_walker',
	'skinandbonesremastered:antelered_wendigo'
]

darkness_hit.forEach((entity) => {
	EntityEvents.hurt(event => {
    let { entity, source } = event
    if (!entity.player) return
    if (source.msgId != "mob") return
    let sourceEntity = source.actual
    if (sourceEntity.type != `${entity}`) return
    entity.potionEffects.add("blindness", 100)
})
})

let blood_oath_trigger = new Map()
ItemEvents.rightClicked('kubejs:blood_oath', event => {
    let player_username = event.entity.username

    if (blood_oath_trigger[player_username] == false) {
        Utils.server.runCommandSilent(`/tell ${player_username} Cooldown still active`)
    }

    if (blood_oath_trigger[player_username] == undefined) {
        //Utils.server.tell('Undefined ')
        blood_oath_trigger[player_username] = false
        Utils.server.runCommandSilent(`/effect give ${player_username} dungeons_gear:soul_protection 99999`)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:blood_oath 1`)
        event.server.scheduleInTicks(6000, () => {
            blood_oath_trigger[player_username] = true
        })
    }

    if (blood_oath_trigger[player_username] == true) {
        //Utils.server.tell('true ')
        blood_oath_trigger[player_username] = false
        Utils.server.runCommandSilent(`/effect give ${player_username} dungeons_gear:soul_protection 99999`)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:blood_oath 1`)
        event.server.scheduleInTicks(6000, () => {
            blood_oath_trigger[player_username] = true
        })
    }

})



LootJS.modifiers((event) => {
    event
        .addLootTypeModifier(LootType.ENTITY)
        .or((or) => {
            or.timeCheck(12750,22999).weatherCheck({thundering: true})
        })
        .modifyLoot(Ingredient.all, (itemStack) => {
            itemStack.setCount(itemStack.getCount() * 2);
            return itemStack;
        })
});



ItemEvents.rightClicked('kubejs:torn_page', event => {
	if (event.item.count !== 10) return
    event.player.give('kubejs:subclass_skill_point')
    event.item.setCount(0)
})

EntityEvents.hurt('sanitydim:sneaking_terror', event => {
	if (!event.source.actual.tags.contains('insane')) return
	event.entity.kill()
})


PlayerEvents.loggedIn((event) => {
    const player = event.player.username
	const player_real = event.player
    if(event.player.stages.has('starting_items')) return
    event.server.scheduleInTicks(3, event => {
        Utils.server.runCommandSilent(`/clear ${player}`)
        Utils.server.runCommandSilent(`/give ${player} ftbquests:book{Enchantments:[{id:"soulbound:soulbound", lvl:1}]}`)
    })
    event.player.stages.add('starting_items')
	event.server.scheduleInTicks(400, event => {
		player_real.tell('Open your Quest Book to get started.')
	})
})

PlayerEvents.loggedIn((event) => {
		if (event.server.persistentData.first_load == false) return
		event.server.persistentData.putBoolean('first_load', false)
		let player = event.player
		let player_username = player.username
		event.server.scheduleInTicks(200, event => {
			Utils.server.tell('5 Minute Peace Period Begins Now.')
			Utils.server.runCommand('/mode Stage0 noreload')
			Utils.server.runCommand('/difficulty peaceful')
			Utils.server.runCommandSilent('/playertabs setNumberOfTabs 4')
			Utils.server.runCommandSilent('/playertabs setTabName 0 Gear')
			Utils.server.runCommandSilent('/playertabs setTabName 1 Food')
			Utils.server.runCommandSilent('/playertabs setTabName 2 Blocks')
			Utils.server.runCommandSilent('/playertabs setTabName 3 Misc')
			Utils.server.runCommandSilent(`/parcool limitation enable ${player_username}`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility BreakfallReady false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Roll false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility CatLeap false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility VerticalWallRun false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility HorizontalWallRun false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility ClimbUp false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility ClingToCliff false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility WallSlide false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility WallJump false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Crawl false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Slide false`)
			Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Tap false`)

			event.server.persistentData.putInt('lev_death', 0)
			event.server.persistentData.putInt('golem_counter', 0)
			event.server.persistentData.putInt('guardian_counter', 0)
			event.server.persistentData.putInt('harbinger_counter',0)
			event.server.persistentData.putInt('ignis_counter', 0)
			event.server.persistentData.putInt('summoner_counter', 0)
			event.server.persistentData.putInt('server_stage', 1)
			player.persistentData.putFloat('arcane_affinity', 0.01)
			player.persistentData.putInt('HVT_counter', 0)
			hvt.forEach((target) => {
				player.persistentData.putInt(`${target}_hvt`, 1)
			})
		})
        event.server.scheduleInTicks(6000, event => {
            Utils.server.runCommand('/mode Stage1 noreload')
			Utils.server.runCommand('/difficulty normal')
			Utils.server.tell('The 5 minute peace period has ended. Prepare Yourself. ')
            })
    })

EntityEvents.hurt(event => {
    let dmgSource = event.source
    let target = event.entity
    let player = dmgSource.player

    if (player) {
    if (player.persistentData.contains(`kubejs_class:alchemist`)) return
    player.potionEffects.add('feathers:energized', 15, 35)
    }
  })



  ItemEvents.rightClicked(event => {
    if (event.item.id.toString().includes('kubejs:create_manual')) {
        event.server.runCommand(`/execute as ${event.entity.uuid} run create ponder`)
    }
})



EntityEvents.death('cataclysm:the_leviathan', event => {
	Utils.server.runCommandSilent('/dimension minecraft:the_end access grant')
	Utils.server.tell('End Dimension: Access Granted')
})


ServerEvents.loaded(event => {
    Utils.server.runCommandSilent('/gamerule moneyDropPercentage 0')
})


const trades = {

}

// All Create Items (Maybe make a lootbox that you can buy instead of items)
// Tetra Items
// most ores (use scroll of harvest for tiers)
// Foods (Get a food box that only gives you 1 food item to balance spice of life)
// Grapple Hook
// Backpacks
// Almost All Kubejs Items
// Hammers
// Blocky Siege items and ammo
// Some type of gambling item: Spend a moderate amount of money and then have small chances for a lot of money
// Enchanted books (Add the enchanted book to tags, add tag to the lootbox)





ServerEvents.tags('entity_type', event => {
    event.removeAll('numismaticoverhaul:the_bourgeoisie')
  })

  
  const entity_potion_effects = {
    'born_in_chaos_v1:skeleton_thrasher': 'minecraft:strength',

    //mutant skeleton soul steal


}


Object.entries(entity_potion_effects).forEach(([entity, effect]) => {
    EntityEvents.spawned(`${entity}`, event => {
        let living = event.entity;
        living.potionEffects.add(`${effect}`, 12000)
    })
})



EntityEvents.hurt('mutantmonsters:mutant_zombie', event => {
	if (event.entity.health > 10) return
	event.entity.kill()
	

})


const blacklisted_entities = [
    'mutagenesis:the_lurker',
    'kevin_trophy:kevmo',
    'kevin_trophy:kevmo_prime',
    'kevin_trophy:spitter_zombie',
    'kevin_trophy:zombie_brute',
    'alexsmobs:cachalot_whale',
    'mutagenesis:underground_creature',
    'epicsamurai:kitsune',
	'minecraft:silverfish',
	'undead_revamp2:sucker',
	'alexsmobs:underminer',
	'kevin_trophy:spitter_zombie',
	'undead_revamp2:thespitter'

]



blacklisted_entities.forEach((entity) => {
    EntityEvents.spawned(`${entity}`, event => {
        event.cancel()
    })
})





EntityEvents.spawned(`minecraft:iron_golem`, event => {
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    Utils.server.runCommandSilent(`/summon lategamegolems:lgg_entity ${x} ${y} ${z}`)
    event.cancel()
})


EntityEvents.death('minecraft:elder_guardian', event => {
    const ent_x = event.entity.x
    const ent_y = event.entity.y
    const ent_z = event.entity.z

    Utils.server.runCommandSilent(`/summon dungeons_mobs:drowned_necromancer ${ent_x} ${ent_y} ${ent_z}`)

})



EntityEvents.death('irons_spellbooks:dead_king', event => {
    const ent_x = event.entity.x
    const ent_y = event.entity.y
    const ent_z = event.entity.z
    Utils.server.runCommandSilent('/dimension minecraft:overworld access grant')
    Utils.server.runCommandSilent('/dimension minecraft:the_nether access grant')
	Utils.server.tell('Nether Access: Granted')
})

EntityEvents.death('minecraft:warden', event => {
    Utils.server.runCommandSilent('/dimension deeperdarker:otherside access grant')
})




EntityEvents.death('dungeons_mobs:redstone_golem', event => {
	if (event.server.persistentData.golem_counter > 0) return
	event.server.persistentData.golem_counter += 1
    Utils.server.runCommandSilent('/mode Stage2 noreload')
	event.server.persistentData.server_stage += 1
	//Utils.server.tell(event.server.persistentData.server_stage)
})


EntityEvents.death('minecraft:elder_guardian', event => {
	if (event.server.persistentData.guardian_counter > 0) return
	event.server.persistentData.guardian_counter += 1
	event.server.persistentData.server_stage += 1
	//Utils.server.tell(event.server.persistentData.server_stage)
})

EntityEvents.death('cataclysm:the_harbinger', event => {
	if (event.server.persistentData.harbinger_counter > 0) return
	event.server.persistentData.harbinger_counter += 1
	event.server.persistentData.server_stage += 1
	//Utils.server.tell(event.server.persistentData.server_stage)
})


EntityEvents.death('cataclysm:ignis', event => {
	if (event.server.persistentData.ignis_counter > 0) return
	event.server.persistentData.ignis_counter += 1
	event.server.persistentData.server_stage += 1
	//Utils.server.tell(event.server.persistentData.server_stage)
})

EntityEvents.death('blue_skies:summoner', event => {
	if (event.server.persistentData.summoner_counter > 0) return
	event.server.persistentData.summoner_counter += 1
    Utils.server.runCommandSilent('/mode Stage3 noreload')
	event.server.persistentData.server_stage += 1
	//Utils.server.tell(event.server.persistentData.server_stage)
})


const static_entity_health = {
    //// extra entities
    'cave_dweller:cave_dweller': 800,
	
    
	
}

Object.entries(static_entity_health).forEach(([boss_name, boss_health]) => {
    EntityEvents.spawned((event) => {
        if (event.entity.type == boss_name) {
            event.entity.maxHealth = boss_health;
            event.entity.health = boss_health;
        }
	})
})

const scaling_boss_health = {
/// Bosses
	'dungeons_mobs:drowned_necromancer': 50,
	'minecraft:elder_guardian': 100,

	'aquamirae:maze_mother': 150,
	'aquamirae:captain_cornelia': 200,
	'dungeons_mobs:redstone_golem': 300,
	'irons_spellbooks:dead_king': 250,    

	//////////////////////////////////////////////////
	'mutantmore:mutant_wither_skeleton': 350,
	'mutantmore:mutant_blaze': 350,
	'stalwart_dungeons:awful_ghast': 400,

	'minecraft:warden': 350,
	'deeperdarker:stalker': 400,


	'minecraft:wither': 450,
	'cataclysm:the_harbinger': 500,

	'cataclysm:netherite_monstrosity': 450,
	'cataclysm:ignis': 500,
	/////////////////////////////////////////
	'blue_skies:alchemist': 600,
	'blue_skies:summoner': 600,

	'blue_skies:starlit_crusher': 700,
	'blue_skies:arachnarch': 700,

	'cataclysm:the_leviathan': 800,

	'minecraft:ender_dragon': 1000,
	

	'cataclysm:ender_guardian': 600
}

Object.entries(scaling_boss_health).forEach(([name, health]) => {
	EntityEvents.spawned((event) => {
        if (event.entity.type == name) {
			let player_count = event.server.playerCount
			let server_stage = event.server.persistentData.server_stage
            event.entity.maxHealth = health * (1 + 0.30 * player_count)
            event.entity.health = health * (1 + 0.30 * player_count)
			event.entity.persistentData.putInt('boss', 1)
		}
	})
})

//Bosses meant for dragon fight: 
// 'dungeons_mobs:endersent': 450,


const scaling_entity_health = {
    'minecraft:phantom': 10,
	'minecraft:zombie': 20,
	'minecraft:skeleton': 20,
	'minecraft:wolf': 25,
	'alexsmobs:tusklin': 40,
    'dungeons_mobs:necromancer': 40,
    'dungeons_mobs:iceologer': 40,
    'alexsmobs:rocky_roller': 25,
	'born_in_chaos_v1:bonescaller': 40,
	'born_in_chaos_v1:supreme_bonescaller': 60,
	'dungeons_mobs:geomancer': 40,
	'minecraft:illusioner': 40,
	'minecraft:evoker': 40,
	'minecraft:vindicator': 40,
	'dungeons_mobs:mage': 40,
	'dungeons_mobs:mountaineer':40,
	'dungeons_mobs:royal_guard': 40,
	'dungeons_mobs:windcaller': 40,
	'irons_spellbooks:cryomancer': 45,
	'irons_spellbooks:pyromancer': 45,
	'irons_spellbooks:archevoker': 60,
	'takesapillage:archer': 40,
	'takesapillage:skirmisher': 40,
	'takesapillage:legioner': 40,
	'leosillagers:confuser': 40,
    'leosillagers:lightning_caller': 40,
    'leosillagers:meteorite_caller': 40,
    'leosillagers:necromancer': 40,
    'leosillagers:snowolager': 40,
    'leosillagers:summoner': 40,
	'skinandbonesremastered:skin_walker': 70,
	'skinandbonesremastered:antelered_wendigo': 120,
	'cataclysm:deepling': 100,
	'lategamegolems:lgg_entity': 60,
    'cataclysm:deepling_angler': 120,
    'cataclysm:deepling_brute': 175,
    'cataclysm:deepling_priest': 150,
    'leosillagers:troublemaker': 40,
	'dungeons_mobs:wraith': 40,
	'irons_spellbooks:citadel_keeper': 100,
    'irons_spellbooks:necromancer': 70,
    'undead_unleashed:frenzied_knight': 40,
    'born_in_chaos_v1:skeleton_thrasher':80,
	'born_in_chaos_v1:sir_pumpkinhead': 80,
	'dungeons_mobs:skeleton_vanguard': 40,
	'born_in_chaos_v1:sir_the_headless': 60,
	'born_in_chaos_v1:scarlet_persecutor': 40,
	'sanitydim:rotting_stalker' : 250,
	'sanitydim:sneaking_terror': 250,
	'minecraft:villager': 18,
	'mutantmore:mutant_shulker': 250,
	'mutantmonsters:mutant_creeper': 250,
	'mutantmonsters:mutant_skeleton': 250,
	'mutantmonsters:mutant_zombie': 250,
	'mutantmonsters:mutant_enderman': 250,
	'dungeons_mobs:blastling': 40,
	'mutantmonsters:mutant_snow_golem': 250,
	
	
}





Object.entries(scaling_entity_health).forEach(([name, health]) => {
	EntityEvents.spawned((event) => {
        if (event.entity.type == name) {
			let player_count = event.server.playerCount
			let server_stage = event.server.persistentData.server_stage
            event.entity.maxHealth = health * (1 + 0.15 * player_count)
            event.entity.health = health * (1 + 0.15 * player_count)
		}
	})
})





EntityEvents.spawned('kevin_trophy:blister_zombie', event => {
	let dim = event.level.dimension
	if (dim == 'minecraft:the_end') {
		event.cancel()
	}
})

EntityEvents.spawned('kevin_trophy:crawler_zombie', event => {
	let dim = event.level.dimension
	if (dim == 'minecraft:the_end') {
		event.cancel()
	}
})


	ServerEvents.recipes(event => {
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:yamato')
			.input('minecraft:totem_of_undying')
			.input('minecraft:wither_rose')
			.input('minecraft:enchanted_golden_apple')
			.input('minecraft:music_disc_11')
			.input('minecraft:netherite_ingot')
			.blockBelow('minecraft:crying_obsidian')
			.dayTime('night')
			.weather('rain')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:excalibur')
			.input('minecraft:gunpowder')
			.input('minecraft:wither_skeleton_skull')
			.input('minecraft:blaze_rod')
			.input('minecraft:string')
			.input('minecraft:ghast_tear')
			.input('alexsmobs:bear_fur')
			.input('minecraft:iron_sword')
			.weather('thunder')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:groveblade')
			.input('alexsmobs:rattlesnake_rattle')
			.input('alexsmobs:bone_serpent_tooth')
			.input('alexsmobs:crocodile_scute')
			.input('minecraft:string')
			.input('minecraft:stick')
			.input('alexsmobs:straddlite')
			.input('minecraft:wooden_sword')
			.blockBelow('minecraft:moss_block')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:gaia')
			.input('alexsmobs:rattlesnake_rattle')
			.input('alexsmobs:bone_serpent_tooth')
			.input('alexsmobs:crocodile_scute')
			.input('minecraft:string')
			.input('minecraft:stick')
			.input('alexsmobs:straddlite')
			.input('minecraft:wooden_sword')
	
		event.recipes.summoningrituals.altar('nikgubs_blades_plus:heart_of_final')
			.itemOutput('nikgubs_blades_plus:gold_hoarder')
			.input('golden_sword')
			.input('gold_ingot')
			.input('heart_of_the_sea')
			.input('tetra:pristine_lapis')
			.input('tetra:pristine_diamond')
			.input('minecraft:experience_bottle')
			.input('numismaticoverhaul:silver_coin')
			.blockBelow('minecraft:block_of_gold')

		})


/// Progression triggers

const ban_in_daylight = [
	'undead_revamp2:bomber',
	'undead_revamp2:slaveman',
	'undead_revamp2:the_moonflower',
	'undead_revamp2:thebeartamer',
	'undead_revamp2:thebidy',
	'undead_revamp2:thegliter',
	'undead_revamp2:thehorrors',
	'undead_revamp2:thehunter',
	'undead_revamp2:theordure',
	'undead_revamp2:thepregnant',
	'undead_revamp2:therod',
	'undead_revamp2:thesmoker',
	'undead_revamp2:thespectre',
	'undead_revamp2:theswarmer',
	'undead_revamp2:thewolf'
]

ban_in_daylight.forEach((entity) => {
	EntityEvents.spawned(`${entity}`, event => {
		if (event.level.isNight()) return
		event.cancel()
	})

})