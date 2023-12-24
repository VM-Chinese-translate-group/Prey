
let pet_regen = new Map()
EntityEvents.hurt(event => {
    if (!event.entity.tags.contains('kubejs_pet_regen')) return
    let pet_id = event.entity.id
    const healthPercent = event.entity.health / event.entity.maxHealth * 100
    if (healthPercent > 80) return
    //Utils.server.tell('Regen Check')
    if (pet_regen[pet_id] == false) return
    if (pet_regen[pet_id] == undefined) {
        pet_regen[pet_id] = false
    }
    pet_regen[pet_id] = false

    event.entity.potionEffects.add('minecraft:regeneration', 60, 3)
    Utils.server.scheduleInTicks(1200, () => {
        pet_regen[pet_id] = true
        //Utils.server.tell('pet regen ready')

    })
})
/// Less than 80%




let pet_resistance = new Map()
EntityEvents.hurt(event => {
    if (!event.entity.tags.contains('kubejs_pet_resistance')) return
    let pet_id = event.entity.id
    const healthPercent = event.entity.health / event.entity.maxHealth * 100
    if (healthPercent > 75) return
    //Utils.server.tell('Regen Check')
    if (pet_resistance[pet_id] == false) return
    if (pet_resistance[pet_id] == undefined) {
        pet_resistance[pet_id] = false
    }
    pet_resistance[pet_id] = false

    event.entity.potionEffects.add('minecraft:resistance', 60, 1)
    Utils.server.scheduleInTicks(1200, () => {
        pet_resistance[pet_id] = true
        //Utils.server.tell('pet regen ready')

    })
})
//// Less than 76


let pet_absorption = new Map()
EntityEvents.hurt(event => {
    if (!event.entity.tags.contains('kubejs_pet_absorption')) return
    let pet_id = event.entity.id
    const healthPercent = event.entity.health / event.entity.maxHealth * 100
    if (healthPercent > 60) return
    //Utils.server.tell('Regen Check')
    if (pet_absorption[pet_id] == false) return
    if (pet_absorption[pet_id] == undefined) {
        pet_absorption[pet_id] = false
    }
    pet_absorption[pet_id] = false

    event.entity.potionEffects.add('minecraft:absorption', 200, 2)
    Utils.server.scheduleInTicks(1200, () => {
        pet_absorption[pet_id] = true
        //Utils.server.tell('pet regen ready')

    })
})
/// At less than 60% health the pet gains regen. 1 minute cooldown


let pet_dragon = new Map()
EntityEvents.hurt(event => {
    if (!event.entity.tags.contains('kubejs_pet_dragon')) return
    let pet_id = event.entity.id
    const healthPercent = event.entity.health / event.entity.maxHealth * 100
    if (healthPercent > 40) return
    //Utils.server.tell('Regen Check')
    if (pet_dragon[pet_id] == false) return
    if (pet_dragon[pet_id] == undefined) {
        pet_dragon[pet_id] = false
    }
    pet_dragon[pet_id] = false

    event.entity.potionEffects.add('undead_unleashed:flame_breathing', 20)
    Utils.server.scheduleInTicks(1200, () => {
        pet_dragon[pet_id] = true
        //Utils.server.tell('pet regen ready')

    })
})

/// Less than 40




let pet_strike = new Map()
EntityEvents.hurt(event => {
    if (!event.entity.tags.contains('kubejs_pet_strike')) return
    if (event.source.actual == null) return
    let pet_id = event.entity.id
    let ent_x = event.source.actual.x
    let ent_y = event.source.actual.y
    let ent_z = event.source.actual.z
    const healthPercent = event.entity.health / event.entity.maxHealth * 100
    if (healthPercent > 20) return
    //Utils.server.tell('Regen Check')
    if (pet_strike[pet_id] == false) return
    if (pet_strike[pet_id] == undefined) {
        pet_strike[pet_id] = false
    }
        pet_strike[pet_id] = false
        event.entity.potionEffects.add('cofh_core:lightning_resistance', 60)
        event.level.spawnLightning(ent_x, ent_y, ent_z, false)
        Utils.server.scheduleInTicks(1200, () => {
            pet_dragon[pet_id] = true
        })
})
/// Less than 20


let pet_strength = new Map()
EntityEvents.hurt(event => {
    if (event.source.actual == null) return
    if (!event.source.actual.tags.contains('kubejs_pet_strength')) return
    let pet_id = event.source.actual.id
    
    if (pet_strength[pet_id] == undefined) {
        pet_strength[pet_id] = 1
    } else {
        pet_strength[pet_id]++
    }

    if (pet_strength[pet_id] != 5) return
    event.source.actual.potionEffects.add('minecraft:strength', 60, 1)
    pet_strength[pet_id] = 0
})
/// Strength Effect after dealing 5 hits


EntityEvents.spawned(event => {
    if (!event.entity.tags.contains('kubejs_pet_soul_steal')) return
    event.entity.potionEffects.add('alexsmobs:soul_steal', 9999999)
})

// Permanent (Fix tooltip)

let pet_speed = new Map()
EntityEvents.death(event => {
    if (event.source.actual == null) return
    if (!event.source.actual.tags.contains('kubejs_pet_speed')) return
    event.source.actual.potionEffects.add('minecraft:speed', 200, 1)
})

// Upon killing an enemy they gain a speed boost for 10 seconds


let pet_invis = new Map()
EntityEvents.death(event => {
    if (event.source.actual == null) return
    if (!event.source.actual.tags.contains('kubejs_pet_invis')) return
    event.source.actual.potionEffects.add('irons_spellbooks:true_invisibility', 100, 1)
})


// Upon killing an enemy they gain invis for 10 seconds

EntityEvents.spawned(event => {
    if (event.entity.player) return
    let player = event.level.getNearestPlayer(event.entity, 20)
    if (player == null) return
    let player_username = player.username
    let playerUUID = player.uuid
    let intArrays = $UUIDUtil.uuidToIntArray(playerUUID)
    let intarray0 = parseFloat(intArrays[0]).toString()

    let intarray1 = parseFloat(intArrays[1]).toString()

    let intarray2 = parseFloat(intArrays[2]).toString()

    let intarray3 = parseFloat(intArrays[3]).toString()

    //console.log(event.source.actual.nbt.tags.get('Owner').toString())
    if (event.entity.nbt.tags.get('Owner') == null) return
    let owner =  event.entity.nbt.tags.get('Owner').toString()
    if (owner != `[I;${intarray0},${intarray1},${intarray2},${intarray3}]`) return
    //Utils.server.tell('Owner Check')
    if (player.persistentData.contains('kubejs:regeneration_elixir')) {
        event.entity.tags.add('kubejs_pet_regen')
    }
    if (player.persistentData.contains('kubejs:strength_elixir')) {
        event.entity.tags.add('kubejs_pet_strength')
    }
    if (player.persistentData.contains('kubejs:fire_elixir')) {
        event.entity.tags.add('kubejs_pet_dragon')
    }
    if (player.persistentData.contains('kubejs:charged_elixir')) {
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
    if (player.persistentData.contains('kubejs:absorption_elixir')) {
        event.entity.tags.add('kubejs_pet_absorption')
    }
    if (player.persistentData.contains('kubejs:angel_wings_elixir')) {
        event.entity.tags.add('kubejs_pet_levitation')
    }
})

let pet_levitation = new Map()
EntityEvents.hurt(event => {
    if (!event.entity.tags.contains('kubejs_pet_levitation')) return
    let pet_id = event.entity.id
    const healthPercent = event.entity.health / event.entity.maxHealth * 100
    if (healthPercent > 15) return
    //Utils.server.tell('Regen Check')
    if (pet_levitation[pet_id] == false) return
    if (pet_levitation[pet_id] == undefined) {
        pet_levitation[pet_id] = false
    }
    pet_levitation[pet_id] = false
    event.entity.tags.add('lev')
    Utils.server.scheduleInTicks(300, () => {
        event.entity.tags.remove('lev')
    })
    Utils.server.scheduleInTicks(1200, () => {
        pet_absorption[pet_id] = true
        //Utils.server.tell('pet regen ready')
    })
})
EntityEvents.hurt(event => {
    if (!event.entity.tags.contains('lev')) return
    if (event.source.actual == null) return
    if (event.source.actual.persistentData.boss == 1) return
    event.source.actual.potionEffects.add('levitation', 3, 75)

})
/// add strike elixir
/// add soul steal, absorption, and resistance pet abilities

/// Angel Wings effect: if a pet gets to less than 15% health then for 10 seconds, anything that hits it will get the leviation effect for 3 ticks and 100 amp
