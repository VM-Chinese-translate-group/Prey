let common_flute_cooldown = new Map();
let uncommon_flute_cooldown = new Map();
let rare_flute_cooldown = new Map();


ItemEvents.entityInteracted(event => {
    if (event.item != 'kubejs:common_beastmaster_totem') return
    if (event.target.monster) return
    if (!event.target.animal && !event.target.isWaterCreature && !event.target.ambientCreature) return
    let entity = event.target
    let player = event.entity
    let player_username = player.username
    let display_name = entity.displayName.getString()
    if (entity.tags.contains('kubejs_common_tame')) return
    if (entity.tags.contains('kubejs_uncommon_tame')) return
    if (entity.tags.contains('kubejs_rare_tame')) return
    if (entity.maxHealth < 25) {
        if (!player.persistentData.contains('kubejs_class:beastmaster ')) {
            if (common_flute_cooldown[player_username] == 0) {
                player.tell('Common Beastmaster Totem: Recharging...')
            } else {
    //
                if (common_flute_cooldown[player_username] == undefined) {
                    common_flute_cooldown[player_username] = 0
                } else {
                    common_flute_cooldown[player_username] = 0
                }
                entity.customName = `${player_username}'s ${display_name}`
                entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
                entity.tags.add(`kubejs_common_tame`)
                Utils.server.scheduleInTicks(1200, () => {
                    common_flute_cooldown[player_username]++
                    event.player.tell('Common Beastmaster Totem: Ready')
                })
    //
            }
        } else {
            if (common_flute_cooldown[player_username] == 0) {
                player.tell('Common Beastmaster Totem: Recharging...')
            } else {
    //
                if (common_flute_cooldown[player_username] == undefined) {
                    common_flute_cooldown[player_username] = 0
                } else {
                    common_flute_cooldown[player_username] = 0
                }
                entity.customName = `${player_username}'s ${display_name}`
                entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
                entity.tags.add(`kubejs_common_tame`)
                Utils.server.scheduleInTicks(600, () => {
                    common_flute_cooldown[player_username]++
                    event.player.tell('Common Beastmaster Totem: Ready')
                })
    //
            }
        }
    } else {
        event.player.tell('Upgrade your Beastmasters Totem to tame this animal')
    }
})




ItemEvents.entityInteracted(event => {
    if (event.item != 'kubejs:uncommon_beastmaster_totem') return
    if (event.target.monster) return
    if (!event.target.animal && !event.target.isWaterCreature && !event.target.ambientCreature) return
    let entity = event.target
    let player = event.entity
    let player_username = player.username
    if (event.target.tags.contains('kubejs_common_tame')) return
    if (event.target.tags.contains('kubejs_uncommon_tame')) return
    if (event.target.tags.contains('kubejs_rare_tame')) return
    let display_name = entity.displayName.getString()
    if (entity.maxHealth < 50) {
        if (!player.persistentData.contains('kubejs_class:beastmaster ')) {
            if (common_flute_cooldown[player_username] == 0) {
                player.tell('Uncommon Beastmaster Totem: Recharging...')
            } else {
    //
                if (common_flute_cooldown[player_username] == undefined) {
                    common_flute_cooldown[player_username] = 0
                } else {
                    common_flute_cooldown[player_username] = 0
                }
                entity.customName = `${player_username}'s ${display_name}`
                entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
                entity.tags.add(`kubejs_uncommon_tame`)
                Utils.server.scheduleInTicks(2400, () => {
                    common_flute_cooldown[player_username]++
                    event.player.tell('Uncommon Beastmaster Totem: Ready')
                })
    //
            }
        } else {
            if (common_flute_cooldown[player_username] == 0) {
                player.tell('Common Beastmaster Totem: Recharging...')
            } else {
    //
                if (common_flute_cooldown[player_username] == undefined) {
                    common_flute_cooldown[player_username] = 0
                } else {
                    common_flute_cooldown[player_username] = 0
                }
                entity.customName = `${player_username}'s ${display_name}`
                entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
                if (event.target.maxHealth*2 < 40) {
                    event.target.maxHealth = event.target.maxHealth*2
                    event.target.health = event.target.maxHealth*2
                }
                entity.tags.add(`kubejs_uncommon_tame`)
                Utils.server.scheduleInTicks(900, () => {
                    common_flute_cooldown[player_username]++
                    event.player.tell('Uncommon Beastmaster Totem: Ready')
                })
    //
            }
        }
    } else {
        event.player.tell('Upgrade your Beastmasters Totem to tame this animal')
    }
})



ItemEvents.entityInteracted(event => {
    if (event.item != 'kubejs:rare_beastmaster_totem') return
    if (event.target.monster) return
    if (!event.target.animal && !event.target.isWaterCreature && !event.target.ambientCreature) return
    let entity = event.target
    let player = event.entity
    if (event.target.tags.contains('kubejs_common_tame')) return
    if (event.target.tags.contains('kubejs_uncommon_tame')) return
    if (event.target.tags.contains('kubejs_rare_tame')) return
    let player_username = player.username
    let display_name = entity.displayName.getString()
    if (!player.persistentData.contains('kubejs_class:beastmaster ')) {
        if (rare_flute_cooldown[player_username] == 0) {
            player.tell('Rare Beastmaster Totem: Recharging...')
        } else {
//
            if (rare_flute_cooldown[player_username] == undefined) {
                rare_flute_cooldown[player_username] = 0
            } else {
                rare_flute_cooldown[player_username] = 0
            }
            entity.customName = `${player_username}'s ${display_name}`
            entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
            entity.tags.add(`kubejs_rare_tame`)
            Utils.server.scheduleInTicks(3600, () => {
                rare_flute_cooldown[player_username]++
                event.player.tell('Rare Beastmaster Totem: Ready')
            })
//
        }
    } else {
        if (rare_flute_cooldown[player_username] == 0) {
            player.tell('Rare Beastmaster Totem: Recharging...')
        } else {
//
            if (rare_flute_cooldown[player_username] == undefined) {
                rare_flute_cooldown[player_username] = 0
            } else {
                rare_flute_cooldown[player_username] = 0
            }
            entity.customName = `${player_username}'s ${display_name}`
            entity.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
            if (event.target.maxHealth*3 < 40) {
                event.target.maxHealth = event.target.maxHealth*3
                event.target.health = event.target.maxHealth*3
            }
            entity.tags.add(`kubejs_rare_tame`)
            Utils.server.scheduleInTicks(1200, () => {
                rare_flute_cooldown[player_username]++
                event.player.tell('Rare Beastmaster Totem: Ready')
            })
        }
    }
})


const animal_duplicates = [
    'untamedwilds:bear',
    'untamedwilds:bison',
    'untamedwilds:monitor',
    'untamedwilds:rhino',
    'untamedwilds:softshell_turtle',
    'untamedwilds:tortoise',

]

animal_duplicates.forEach((animal) => {
    EntityEvents.spawned(`${animal}`, event => {
        event.cancel()
    })
})