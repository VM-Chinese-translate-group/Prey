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



/// Parasitic Ripper
ItemEvents.entityInteracted(event => {
    let player = event.player
    if (event.target.tags.contains(`${player.username}_ripped`)) return
    if (event.level.day) return
    if (!event.target.monster) return
    if (!player.persistentData.contains('kubejs_class:bloodripper')) return;
    if (event.target.player) return
    if (event.target.tags.contains('blood_kill')) return
    if (event.target.maxHealth > 30*event.player.persistentData.bound_blood) return
        if (event.target.health <= event.target.maxHealth*0.50) {
        event.target.kill()
        let x = event.target.x
        let y = event.target.y
        let z = event.target.z
        event.target.tags.add('blood_kill')
        Utils.server.runCommandSilent(`/particle irons_spellbooks:blood ${x} ${y} ${z} 0.5 0.5 0.5 1 200 force @a`)
        event.target.playSound('undead_revamp2:bidyboom')
        player.persistentData.blood += 2
        player.paint({blood: {text: `${player.persistentData.blood}`}})
        if (player.persistentData.bound_blood == 1) {
            player.health += player.maxHealth *0.05
        }
        if (player.persistentData.bound_blood == 3) {
            player.health += player.maxHealth *0.10
        }
        if (player.persistentData.bound_blood == 5) {
            player.health += player.maxHealth *0.15
        }
        if (player.persistentData.bound_blood == 7) {
            player.health += player.maxHealth *0.20
        }
        if (player.persistentData.bound_blood == 9) {
            player.health += player.maxHealth *0.30
        }
    }
})

EntityEvents.death(event => {
    if (event.level.day) return
    //if (event.source.actual == null) return
    if (!event.source.player) return
    const player = event.source.player
    if (!event.entity.monster) return
    if (!player.persistentData.contains('kubejs_class:bloodripper')) return;
    if (event.entity.tags.contains('blood_kill')) return
    player.persistentData.blood += 1
    player.paint({blood: {text: `${player.persistentData.blood}`}})
})


EntityEvents.hurt(event => {
    if (event.level.day) return
    //if (event.entity.health < event.entity.maxHealth*0.50) return
    if (event.entity.maxHealth <= 0) return
    if (event.entity.tags.contains('boss')) return
    if (!event.source.player) return
    const player = event.source.player
    if (!event.source.actual.persistentData.contains('kubejs_class:bloodripper')) return
    if (event.entity.tags.contains(`${player.username}_ripped`)) return
    if (event.entity.maxHealth > player.persistentData.bound_blood*30) return
    let rip_chance = (player.persistentData.blood*0.01)/3
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber > rip_chance) return
    event.entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
    event.level.spawnLightning(x, y, z, true)
    event.entity.health = event.entity.maxHealth
    event.entity.tags.add(`${player.username}_ripped`)
    let display_name = event.entity.displayName.getString()
    event.entity.customName = `${player.username}\u7684\u8150\u5316${display_name}`
    player.persistentData.blood -= 10
    if (player.persistentData.blood < 0) {
        player.persistentData.blood = 0
    }
    player.persistentData.bound_blood_leveling += 1
    player.paint({blood: {text: `${player.persistentData.blood}`}})

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
    if (player.persistentData.bound_blood_leveling < player.persistentData.bound_blood*20) return
    player.tell('血裂者升级')
    player.persistentData.bound_blood += 1
    player.persistentData.bound_blood_leveling = 0
/// Still to do: Leveling, maybe other stuff
})


ItemEvents.entityInteracted(event => {
    if (event.player.maxHealth > event.player.maxHealth - event.player.maxHealth*0.05) return
    if (!event.target.tags.contains(`${event.player.username}_ripped`)) return
    let health = event.player.maxHealth *0.05
    event.target.health = event.target.health-(health*3)
    event.player.health = event.player.health+health

})