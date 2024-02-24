const lesser_discs = {
    'born_in_chaos_v1:nightmare_stalker': 'nightmare_stalker',
    'born_in_chaos_v1:supreme_bonescaller': 'supreme_bonescaller',
    'irons_spellbooks:archevoker': 'archevoker',
    'dungeons_mobs:geomancer': 'geomancer',
	'minecraft:illusioner': 'illusioner',
	'dungeons_mobs:mage': 'mage',
    'dungeons_mobs:iceologer': 'iceologer',
	'dungeons_mobs:mountaineer': 'mountaineer',
	'dungeons_mobs:royal_guard': 'royal_guard',
	'dungeons_mobs:windcaller': 'windcaller',
	'takesapillage:archer': 'archer',
	'takesapillage:skirmisher': 'skirmisher',
	'takesapillage:legioner': 'legioner',
    'irons_spellbooks:cryomancer': 'cryomancer',
    'irons_spellbooks:pyromancer': 'pyromancer',
    'irons_spellbooks:necromancer': 'necromancer',
    'dungeons_mobs:fungus_thrower': 'fungus_thrower',
    'born_in_chaos_v1:sir_the_headless': 'sir_the_headless',
    'born_in_chaos_v1:scarlet_persecutor': 'scarlet_persecutor',
    'born_in_chaos_v1:skeleton_demoman': 'skeleton_demoman',
    'blue_skies:crynocerous': 'crynocerous',
    'blue_skies:polargeist': 'polargeist',
    'blue_skies:whistleshell_crab': 'whistleshell_crab',
}
const superior_discs = {
    'irons_spellbooks:citadel_keeper': 'citadel_keeper',
    'undead_unleashed:frenzied_knight': 'frenzied_knight',
    'dungeons_mobs:blastling': 'blastling',
	'dungeons_mobs:snareling': 'snareling',
    'dungeons_mobs:watchling': 'watchling',
    'born_in_chaos_v1:skeleton_thrasher': 'skeleton_thrasher',
    'dungeons_mobs:leapleaf': 'leapleaf',
    'dungeons_mobs:wavewhisperer': 'wavewhisperer',
    'dungeons_mobs:wildfire': 'wildfire',
    'dungeons_mobs:wraith': 'wraith',
    'born_in_chaos_v1:dire_hound_leader': 'dire_hound_leader',

}
const paramount_discs = {
    'mutantmonsters:mutant_creeper': 'mutant_creeper',
    'mutantmonsters:mutant_skeleton': 'mutant_skeleton',
    'mutantmonsters:mutant_zombie': 'mutant_zombie',
    'mutantmonsters:mutant_enderman': 'mutant_enderman',
    'mutantmore:mutant_shulker': 'mutant_shulker',
    'mutantmonsters:mutant_snow_golem': 'mutant_snow_golem'

}

Object.entries(lesser_discs).forEach(([id, name]) => {
    EntityEvents.spawned(`${id}`, event => {
        if (event.entity.player) return
        let entity = event.level.getNearestPlayer(event.entity, 3)
        if (entity == null) return
        if (!entity.player) return
        if (!entity.tags.contains('lesser_summoning_disc')) return
        let player_username = entity.username
        let display_name = event.entity.displayName.getString()
        event.entity.customName = `${player_username}\u7684${display_name}`
        event.entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(entity)
        let player = entity
        if (player.persistentData.contains('kubejs:regeneration_elixir')) {
            event.entity.tags.add('kubejs_pet_regen')
        }
        if (player.persistentData.contains('kubejs:strength_elixir')) {
            event.entity.tags.add('kubejs_pet_strength')
        }
        if (player.persistentData.contains('kubejs:fire_elixir')) {
            event.entity.tags.add('kubejs_pet_dragon')
        }
        if (player.persistentData.contains('kubejs_class:summoner')) {
            event.entity.tags.add('kubejs_pet_strike')
        }
        if (player.persistentData.contains('kubejs:speed_elixir')) {
            event.entity.tags.add('kubejs_pet_speed')
        }
        if (player.persistentData.contains('kubejs:shadow_form_elixir')) {
            event.entity.tags.add('kubejs_pet_invis')
        }
        if (player.persistentData.contains('kubejs:soul_steal_elixir')) {
            event.entity.tags.add('kubejs_pet_soul_steal')
        }
        if (player.persistentData.contains('kubejs:resistance_elixir')) {
            event.entity.tags.add('kubejs_pet_resistance')
        }
        if (player.persistentData.contains('kubejs:speed_elixir')) {
            event.entity.tags.add('kubejs_pet_absorption')
        }
    })

    EntityEvents.death(`${id}`, event => {
        if (event.source == null) return
        if (!event.source.player) return
        let player_username = event.source.player.username
        let randomMath = Math.random()
        if (randomMath > 0.02) return
        let x = event.entity.x
        let y = event.entity.y
        let z = event.entity.z
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ${x} ${y} ${z} loot minecraft:loot_boxes/lesser_summoning_discs`)
    })

})

ItemEvents.rightClicked('kubejs:lesser_summoning_disc', event => {
    let name = event.entity.username
    event.player.tags.add('lesser_summoning_disc')
    Utils.server.scheduleInTicks(20, () => {
        event.player.tags.remove('lesser_summoning_disc')
    })
    const entries = Object.entries(lesser_discs);

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * entries.length);

    // Use the random index to access a random entry
    const randomEntry = entries[randomIndex]
    Utils.server.runCommandSilent(`/execute at ${name} run summon ${randomEntry[0]}`)
    event.item.count -= 1

})

////////////////////////////////////////////////////////////////////////////////////////////////


Object.entries(superior_discs).forEach(([id, name]) => {
    EntityEvents.spawned(`${id}`, event => {
        let entity = event.level.getNearestPlayer(event.entity, 3)
        if (entity == null) return
        if (!entity.player) return
        if (!entity.tags.contains('superior_summoning_disc')) return
        let player_username = entity.username
        let display_name = event.entity.displayName.getString()
        event.entity.customName = `${player_username}\u7684${display_name}`
        event.entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(entity)
        let player = entity
        if (player.persistentData.contains('kubejs:regeneration_elixir')) {
            event.entity.tags.add('kubejs_pet_regen')
        }
        if (player.persistentData.contains('kubejs:strength_elixir')) {
            event.entity.tags.add('kubejs_pet_strength')
        }
        if (player.persistentData.contains('kubejs:fire_elixir')) {
            event.entity.tags.add('kubejs_pet_dragon')
        }
        if (player.persistentData.contains('kubejs_class:summoner')) {
            event.entity.tags.add('kubejs_pet_strike')
        }
        if (player.persistentData.contains('kubejs:speed_elixir')) {
            event.entity.tags.add('kubejs_pet_speed')
        }
        if (player.persistentData.contains('kubejs:shadow_form_elixir')) {
            event.entity.tags.add('kubejs_pet_invis')
        }
        if (player.persistentData.contains('kubejs:soul_steal_elixir')) {
            event.entity.tags.add('kubejs_pet_soul_steal')
        }
        if (player.persistentData.contains('kubejs:resistance_elixir')) {
            event.entity.tags.add('kubejs_pet_resistance')
        }
        if (player.persistentData.contains('kubejs:speed_elixir')) {
            event.entity.tags.add('kubejs_pet_absorption')
        }
    })

    EntityEvents.death(`${id}`, event => {
        if (event.source == null) return
        if (!event.source.player) return
        let player_username = event.source.player.username
        let randomMath = Math.random()
        if (randomMath > 0.02) return
        let x = event.entity.x
        let y = event.entity.y
        let z = event.entity.z
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ${x} ${y} ${z} loot minecraft:loot_boxes/superior_summoning_discs`)
    })

})

ItemEvents.rightClicked('kubejs:superior_summoning_disc', event => {
    let name = event.entity.username
    event.player.tags.add('superior_summoning_disc')
    Utils.server.scheduleInTicks(20, () => {
        event.player.tags.remove('superior_summoning_disc')
    })
    const entries = Object.entries(superior_discs);

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * entries.length);

    // Use the random index to access a random entry
    const randomEntry = entries[randomIndex]
    Utils.server.runCommandSilent(`/execute at ${name} run summon ${randomEntry[0]}`)
    event.item.count -= 1
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
Object.entries(paramount_discs).forEach(([id, name]) => {
    EntityEvents.spawned(`${id}`, event => {
        let entity = event.level.getNearestPlayer(event.entity, 3)
        if (entity == null) return
        if (!entity.player) return
        if (!entity.tags.contains('paramount_summoning_disc')) return
        let player_username = entity.username
        let display_name = event.entity.displayName.getString()
        event.entity.customName = `${player_username}\u7684${display_name}`
        event.entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(entity)
        let player = entity
        if (player.persistentData.contains('kubejs:regeneration_elixir')) {
            event.entity.tags.add('kubejs_pet_regen')
        }
        if (player.persistentData.contains('kubejs:strength_elixir')) {
            event.entity.tags.add('kubejs_pet_strength')
        }
        if (player.persistentData.contains('kubejs:fire_elixir')) {
            event.entity.tags.add('kubejs_pet_dragon')
        }
        if (player.persistentData.contains('kubejs_class:summoner')) {
            event.entity.tags.add('kubejs_pet_strike')
        }
        if (player.persistentData.contains('kubejs:speed_elixir')) {
            event.entity.tags.add('kubejs_pet_speed')
        }
        if (player.persistentData.contains('kubejs:shadow_form_elixir')) {
            event.entity.tags.add('kubejs_pet_invis')
        }
        if (player.persistentData.contains('kubejs:soul_steal_elixir')) {
            event.entity.tags.add('kubejs_pet_soul_steal')
        }
        if (player.persistentData.contains('kubejs:resistance_elixir')) {
            event.entity.tags.add('kubejs_pet_resistance')
        }
        if (player.persistentData.contains('kubejs:speed_elixir')) {
            event.entity.tags.add('kubejs_pet_absorption')
        }
    })

    EntityEvents.death(`${id}`, event => {
        if (event.source == null) return
        if (!event.source.player) return
        let player_username = event.source.player.username
        let randomMath = Math.random()
        if (randomMath > 0.02) return
        let x = event.entity.x
        let y = event.entity.y
        let z = event.entity.z
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ${x} ${y} ${z} loot minecraft:loot_boxes/paramount_summoning_discs`)
    })

})

ItemEvents.rightClicked('kubejs:paramount_summoning_disc', event => {
    let name = event.entity.username
    event.player.tags.add('paramount_summoning_disc')
    Utils.server.scheduleInTicks(20, () => {
        event.player.tags.remove('paramount_summoning_disc')
    })
    const entries = Object.entries(paramount_discs);

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * entries.length);

    // Use the random index to access a random entry
    const randomEntry = entries[randomIndex]
    Utils.server.runCommandSilent(`/execute at ${name} run summon ${randomEntry[0]}`)
    event.item.count -= 1
})