const blacklisted_horror_entities = [
    'boh:siren_head',
    'boh:jeff_the_killer',
    'boh:gold_lost',
    'boh:gold_hostile',
    'boh:rake',
    'boh:slender_man',
    'boh:ben_drowned',
    'boh:springtrap',
    'boh:smile_dog',
    'boh:xenomorph'

]



blacklisted_horror_entities.forEach((entity) => {
    EntityEvents.spawned(`${entity}`, event => {
        event.cancel()
    })
})

EntityEvents.spawned(`minecraft:cat`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_cat ${x} ${y} ${z}`)
        event.cancel()
    }
})

EntityEvents.spawned(`minecraft:chicken`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_chicken ${x} ${y} ${z}`)
        event.cancel()
    }
})

EntityEvents.spawned(`minecraft:cow`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_cow ${x} ${y} ${z}`)
        event.cancel()
    }
})

EntityEvents.spawned(`minecraft:fox`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_fox ${x} ${y} ${z}`)
        event.cancel()
    }
})

EntityEvents.spawned(`minecraft:llama`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_llama ${x} ${y} ${z}`)
        event.cancel()
    }
})

EntityEvents.spawned(`minecraft:pig`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_pig ${x} ${y} ${z}`)
        event.cancel()
    }
})

EntityEvents.spawned(`minecraft:polar_bear`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_polar_bear ${x} ${y} ${z}`)
        event.cancel()
    }
})


EntityEvents.spawned(`minecraft:villager`, event => {
    let randomNumber = Math.random();
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    if (randomNumber < 0.02) {
        Utils.server.runCommandSilent(`/summon skinandbonesremastered:skin_walker_villager ${x} ${y} ${z}`)
        event.cancel()
    }
})
//////////////////////////////
ItemEvents.rightClicked('kubejs:trial_blood_oath', event => {
    let player_username = event.player.username
    let player = event.player
    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
        Utils.server.runCommandSilent(`/sanity set ${player_username} 0`)
        event.player.tags.add('berserker_insane')
        player.tags.add('insane')
})

EntityEvents.death(event => {
    if (!event.entity.player) return
    if (!event.player.tags.contains('berserker_insane')) return
    let player_username = event.player.username
    event.player.tags.remove('berserker_insane')
    event.player.tags.remove('insane')
    Utils.server.scheduleInTicks(200, e => {
    event.player.tell('血契试炼：失败')
    berserker_insanity_kills[player_username] = 0
    })
})

let berserker_insanity_kills = new Map()
EntityEvents.death(event => {
    if (!event.source.player) return
    if (!event.source.player.tags.contains('berserker_insane')) return
    let player_username = event.source.player.username
    if (event.entity.type != 'sanitydim:rotting_stalker' && event.entity.type != 'sanitydim:sneaking_terror') return

    if (berserker_insanity_kills[player_username] == undefined) {
        berserker_insanity_kills[player_username] = 1
    } else {
        berserker_insanity_kills[player_username]++
    }

    if (berserker_insanity_kills[player_username] != 5) return
    Utils.server.runCommandSilent(`/sanity set ${player_username} 100`)
    event.player.tags.remove('berserker_insane')
    event.player.tags.remove('insane')
    event.player.give('kubejs:blood_oath')
    Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Berserker 1`)
    event.player.tell('血契试炼：完成')
    event.item.setCount(0)
    Utils.server.scheduleInTicks(18000, e => {
        event.player.give('kubejs:blood_oath')
        e.reschedule()
    })
})


