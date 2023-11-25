ItemEvents.rightClicked('kubejs:rune_of_the_bloodripper', event => {
    event.player.persistentData.putInt('blood', 0)
    event.player.persistentData.putInt('bound_blood', 1)
    event.player.persistentData.putInt('bound_blood_leveling', 0)
    let blood  = event.player.persistentData.blood
    event.player.paint({
        blood: {
            w: '$screenW', 
            h: '$screenH',
            x: 0,
            y: -35,
            alignX: 'center',
            alignY: 'bottom',
			draw: 'ingame',
            color: 'darkRed',
            type: 'text',
            text: `${blood}`,
            shadow: true,
            scale: 1,
        }
    })
})

const tier_1_entities = [
    'dungeons_mobs:blastling',
    'takesapillage:skirmisher',
    'dungeons_mobs:royal_guard',
    'dungeons_mobs:geomancer',


]

const tier_2_entities = [
    'dungeons_mobs:whisperer',
    'dungeons_mobs:wraith',
    'irons_spellbooks:cryomancer',
    'irons_spellbooks:pyromancer',
    'dungeons_mobs:blastling',
    'takesapillage:skirmisher',
    'dungeons_mobs:royal_guard',
    'dungeons_mobs:geomancer',
]

const tier_3_entities = [
    'dungeons_mobs:whisperer',
    'dungeons_mobs:wraith',
    'irons_spellbooks:cryomancer',
    'irons_spellbooks:pyromancer',
    'dungeons_mobs:blastling',
    'takesapillage:skirmisher',
    'dungeons_mobs:royal_guard',
    'dungeons_mobs:geomancer',
    'dungeons_mobs:leapleaf', 
    'born_in_chaos_v1:dire_hound_leader',
    'irons_spellbooks:citadel_keeper',
    'irons_spellbooks:necromancer'
]

let bloodripper_map = new Map();
EntityEvents.death(event => {
    let player = event.level.getNearestPlayer(event.entity, 20)
    if (player == null) return;
    //if (event.source.actual == null) return
    //if (!event.entity.monster) return
    //if (!event.source.actual.player) return
    if (!player.persistentData.contains('kubejs_class:bloodripper')) return
    if (event.level.day) {
        player.persistentData.blood += parseInt(event.entity.maxHealth/5)
    } else {
        player.persistentData.blood += parseInt(event.entity.maxHealth/5)
        player.persistentData.blood += parseInt(event.entity.maxHealth/5)
    }
    player.paint({blood: {text: `${player.persistentData.blood}`}})
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (player.persistentData.blood < 20) return
    let player_username = player.username
    player.persistentData.bound_blood_leveling += 1

    if (player.persistentData.bound_blood < 3) {
        let randomIndex = Math.floor(Math.random() * tier_1_entities.length);
        let selectedEntity = tier_1_entities[randomIndex];
        bloodripper_map[player_username] = selectedEntity
        Utils.server.runCommandSilent(`/execute at ${player_username} run summon ${selectedEntity} ${x} ${y} ${z}`)
        player.persistentData.blood -= 20
        player.paint({blood: {text: `${player.persistentData.blood}`}})

    } else if (player.persistentData.bound_blood >= 3 && player.persistentData.bound_blood < 5) {
        let randomIndex = Math.floor(Math.random() * tier_2_entities.length);
        let selectedEntity = tier_2_entities[randomIndex];
        bloodripper_map[player_username] = selectedEntity
        Utils.server.runCommandSilent(`/execute at ${player_username} run summon ${selectedEntity} ${x} ${y} ${z}`)
        player.persistentData.blood -= 20
        player.paint({blood: {text: `${player.persistentData.blood}`}})

    } else if (player.persistentData.bound_blood >= 5) {
        let randomIndex = Math.floor(Math.random() * tier_3_entities.length);
        let selectedEntity = tier_3_entities[randomIndex];
        bloodripper_map[player_username] = selectedEntity
        Utils.server.runCommandSilent(`/execute at ${player_username} run summon ${selectedEntity} ${x} ${y} ${z}`)
        player.persistentData.blood -= 20
        player.paint({blood: {text: `${player.persistentData.blood}`}})
    }
    if (player.persistentData.bound_blood_leveling < (player.persistentData.bound_blood*20)) return
    player.tell('Bloodripper Level-Up')
    player.persistentData.bound_blood += 1
    player.persistentData.bound_blood_leveling = 0
})



EntityEvents.spawned(event => {
    let player = event.level.getNearestPlayer(event.entity, 10)
    if (player == null) return
    let player_username = player.username
    let display_name = event.entity.displayName.getString()
    if (bloodripper_map[player_username] == event.entity.type) {
        event.entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
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
        event.entity.customName = `${player_username}'s ${display_name}`
        bloodripper_map[player_username] = 'empty'
        let x = event.entity.x
        let y = event.entity.y
        let z = event.entity.z
        event.level.spawnLightning(x, y, z, true)
        if (player.persistentData.bound_blood >= 2) {
            event.entity.potionEffects.add('minecraft:speed', 999999, 1)
        }
        if (player.persistentData.bound_blood >= 4) {
            event.entity.potionEffects.add('alexsmobs:soulsteal', 999999)
        }
        if (player.persistentData.bound_blood >= 6) {
            event.entity.potionEffects.add('minecraft:resistance', 999999)
        }
        if (player.persistentData.bound_blood >= 8) {
            event.entity.potionEffects.add('minecraft:strength', 999999)
        }
        if (player.persistentData.bound_blood >= 10) {
            event.entity.potionEffects.add('dungeons_gear:soul_protection', 999999)
        }
    }
})


EntityEvents.hurt(event => {
    if (!event.level.night) return
    if (event.source.actual == null) return
    if (!event.source.actual.player) return
    let player = event.source.actual
    //let player = event.level.getNearestPlayer(event.entity, 20)
    if (!player.persistentData.contains('kubejs_class:bloodripper')) return
    event.entity.attack(event.damage * 1.75)
})