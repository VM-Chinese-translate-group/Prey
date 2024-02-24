ItemEvents.rightClicked('kubejs:rune_of_the_bloodripper', event => {
    event.player.persistentData.putInt('harvested_blood', 0)
    event.player.persistentData.putInt('bloodripper_level', 1)
    event.player.persistentData.putInt('bloodripper_xp', 1000)
    let harvested_blood  = event.player.persistentData.harvested_blood
    let player = event.player
    event.player.paint({
        harvested_blood: {
            w: '$screenW', 
            h: '$screenH',
            x: 5,
            y: 70,
			draw: 'ingame',
            color: 'yellow',
            type: 'text',
            text: ` - 收获的血：${harvested_blood}`,
            shadow: true,
            scale: 1,
        },
        blood_ripper: {
            type: 'text',
            text: `血裂者：等级${event.player.persistentData.bloodripper_level}`,
            w: '$screenW', 
            h: '$screenH',
            x: 5,
            y: 60,
            draw: 'ingame',
            color: 'red',
            shadow: true,
            scale: 1,
        },
        bloodripper_xp: {
            type: 'text',
            text: ` - 经验已升级至：${player.persistentData.bloodripper_xp}`,
            w: '$screenW', 
            h: '$screenH',
            x: 5,
            y: 80,
            draw: 'ingame',
            color: 'green',
            shadow: true,
            scale: 1,
        }
    })
})

EntityEvents.death(event => {
    if (event.level.day) return
    if (!event.entity.monster) return
    if (!event.source.player) return
    const player = event.source.player
    if (!player.persistentData.contains('kubejs_class:bloodripper')) return;
    if (event.entity.tags.contains('blood_kill')) return

    /// add to harvested bloodt
    player.persistentData.harvested_blood += 1
    player.paint({harvested_blood: {text: ` - 收获的血：${player.persistentData.harvested_blood}`}})

    let entity_max_health = event.entity.maxHealth
    let xp = parseInt(entity_max_health)
    player.persistentData.bloodripper_xp -= xp
    player.paint({bloodripper_xp: {text: ` - 经验已升级至：${player.persistentData.bloodripper_xp}`}})

    if (player.persistentData.bloodripper_xp > 0) return
    player.persistentData.bloodripper_level += 1
    player.persistentData.bloodripper_xp = 1000*player.persistentData.bloodripper_level
    player.paint({blood_ripper: {text: `血裂者：等级${player.persistentData.bloodripper_level}`}})
    player.paint({bloodripper_xp: {text: ` - 经验已升级至：${player.persistentData.bloodripper_xp}`}})
})



/// New parasitic ripper
/// order:
/// kill entity by right click
/// add xp to player based on entity max health


ItemEvents.entityInteracted(event => {
    const player = event.player
    let xp = parseInt(event.target.maxHealth)
    if (event.target.tags.contains(`${player.username}_ripped`)) return
    if (event.level.day) return
    if (!event.target.monster) return
    if (!player.persistentData.contains('kubejs_class:bloodripper')) return;
    if (event.target.player) return
    /// check if its already been right clicked to prevent double harvesting
    if (event.target.tags.contains('blood_kill')) return
    if (event.target.maxHealth > 30*event.player.persistentData.bloodripper_level) return
    if (event.target.health > event.target.maxHealth*0.50) return
    event.target.kill()

/// particle and sound effects
    let x = event.target.x
    let y = event.target.y
    let z = event.target.z
    Utils.server.runCommandSilent(`/particle irons_spellbooks:blood ${x} ${y} ${z} 0.5 0.5 0.5 1 200 force @a`)
    event.target.playSound('undead_revamp2:bidyboom')
    event.target.tags.add('blood_kill')
    // add to harvested blood
    player.persistentData.harvested_blood += 2
    player.paint({harvested_blood: {text: ` - 收获的血：${player.persistentData.harvested_blood}`}})
    // life steal relative to player level
    player.health += player.maxHealth *(0.03*player.persistentData.bloodripper_level)

    /// add xp to player
    player.persistentData.bloodripper_xp -= xp
    player.paint({bloodripper_xp: {text: ` - 经验已升级至：${player.persistentData.bloodripper_xp}`}})

    if (player.persistentData.bloodripper_xp > 0) return
    player.persistentData.bloodripper_level += 1
    player.persistentData.bloodripper_xp = 1000*player.persistentData.bloodripper_level
    player.paint({blood_ripper: {text: `血裂者：等级${player.persistentData.bloodripper_level}`}})
    player.paint({bloodripper_xp: {text: ` - 经验已升级至：${player.persistentData.bloodripper_xp}`}})

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
    if (event.entity.maxHealth > player.persistentData.bloodripper_level*30) return
    let rip_chance = (player.persistentData.harvested_blood*0.01)/3
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
    player.persistentData.harvested_blood -= 10
    if (player.persistentData.harvested_blood < 0) {
        player.persistentData.harvested_blood = 0
    }
    
    player.paint({harvested_blood: {text: ` - 收获的血：${player.persistentData.harvested_blood}`}})

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
    if (player.persistentData.bloodripper_level >= 2) {
        event.entity.potionEffects.add('minecraft:speed', 999999, 1)
    }
    if (player.persistentData.bloodripper_level >= 4) {
        event.entity.potionEffects.add('alexsmobs:soulsteal', 999999)
    }
    if (player.persistentData.bloodripper_level >= 6) {
        event.entity.potionEffects.add('minecraft:resistance', 999999)
    }
    if (player.persistentData.bloodripper_level >= 8) {
        event.entity.potionEffects.add('minecraft:strength', 999999)
    }
    if (player.persistentData.bloodripper_level >= 10) {
        event.entity.potionEffects.add('dungeons_gear:soul_protection', 999999)
    }

/// Still to do: Leveling, maybe other stuff
})

/** */





/**
 * New Bloodripper
 * Check off when done
 * 
 * - 1000xp
 * xp gained is equal to the max health of the mob
 * once you reach 0 xp you level up
 * 
 * rename xp and leveling stuff to get rid of confusion >>>
*/