
ItemEvents.rightClicked('kubejs:mindshatter_orb', event => {
        //if (!event.player.persistentData.contains('kubejs_class:dreamweaver')) return
        let player = event.player
        let player_username = event.player.username
        let player_x = event.player.x
        let player_y = event.player.y
        let player_z = event.player.z
        Utils.server.runCommandSilent(`/sanity set ${player_username} 0`)
        player.potionEffects.add('minecraft:speed', 500, 2)
        player.potionEffects.add('minecraft:haste', 500, 2)
        player.tags.add('mindshatter')
        player.tags.add('insane')
        Utils.server.scheduleInTicks(500, event => {
            Utils.server.runCommandSilent(`/sanity set ${player_username} 100`)
            player.tags.remove('mindshatter')
            Utils.server.runCommandSilent(`/tp ${player_username} ${player_x} ${player_y} ${player_z}`)
Utils.server.runCommandSilent(`/particle nikgubs_blades_plus:blue_spark ${player_x} ${player_y} ${player_z} 0.5 0.5 0.5 4 100 force @a`)
            player.playSound('undead_revamp2:bidyboom')
        })
        player.addItemCooldown('kubejs:mindshatter_orb', 1000)

})



ItemEvents.rightClicked('kubejs:rune_of_the_dreamweaver', event => {
    event.player.persistentData.putString('mark', ' ')
})


/// Dreanweaver new ability:

/// Shoot 3 times, give the entity a tag called 'dreamweaver mark'. Make the 3rd shot cause wither damage
/// If hit them with the dagger to cause insanity if theyre a player, if theyre not then stun for 5 seconds and cause bleed

const sorrow_counter = new Map()
EntityEvents.hurt(event => {
    if (event.source.actual == null) return
    if (!event.source.player) return
    if (!event.source.projectile) return
    if (!event.source.actual.persistentData.contains('kubejs_class:dreamweaver')) return
    if (event.source.player.offHandItem.displayName.string != '   [战争贩子]') return
    let username = event.source.actual.username
    let id = event.entity.type
    if (event.entity.tags.contains(`dreamweaver_mark_${username}`)) return
    if (sorrow_counter[username+id] == undefined) {
        sorrow_counter[username+id] = 1
    } else {
        sorrow_counter[username+id] += 1
    }
    if (sorrow_counter[username+id] != 3) return
    event.entity.tags.add(`dreamweaver_mark_${username}`)
    event.source.actual.tell('织梦师标记已添加。')
    event.entity.potionEffects.add('tetra:bleeding',40)
    sorrow_counter[username] = 0
})


/// Remove dreamweaver mark from entity if they hit the dreamweaver
EntityEvents.hurt(event => {
    if (event.source.actual == null) return
    if (!event.entity.player) return
    let d_username = event.entity.username
    if (!event.source.actual.tags.contains(`dreamweaver_mark_${d_username}`)) return
    event.source.actual.tags.remove(`dreamweaver_mark_${d_username}`)
})


EntityEvents.hurt(event => {
    if (event.source.actual == null) return
    if (!event.source.player) return
    let username = event.source.player.username
    if (event.source.projectile) return
    if (!event.entity.tags.contains(`dreamweaver_mark_${username}`)) return
    if (!event.source.actual.persistentData.contains('kubejs_class:dreamweaver')) return
    if (event.source.player.mainHandItem.displayName.string != '   [苦痛]') return
    if (event.entity.player) {
        let target_username = event.entity.username
        Utils.server.runCommandSilent(`/sanity set ${target_username} 0`)
        event.entity.tags.add('insane')
        let entity = event.entity
        event.entity.potionEffects.add('minecraft:weakness', 400, 1)
        Utils.server.scheduleInTicks(400, event => {
            Utils.server.runCommandSilent(`/sanity set ${target_username} 100`)
            entity.tags.remove('insane')
        })
    } else {
        if (event.entity.tags.contains('boss')) {
            event.entity.potionEffects.add('tetra:stun', 80)
        } else {
            event.entity.potionEffects.add('tetra:stun', 160)
        }
    }
    event.entity.tags.remove(`dreamweaver_mark_${username}`)
})