PlayerEvents.loggedIn(event => {
    let blood  = event.player.persistentData.blood
    if (event.player.persistentData.contains('kubejs_class:bloodripper')) {
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
    }
})

PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.contains('kubejs_class:spirit_caller')) {
        let souls = event.player.persistentData.souls
        event.player.paint({
            souls_word: {
                type: 'text',
                text: `Souls: ${souls}`,
                w: '$screenW', 
                h: '$screenH',
                x: 69,
                y: -60,
                alignX: 'center',
                alignY: 'bottom',
                draw: 'ingame',
                color: 'lightPurple',
                shadow: true,
                scale: 1,
            },
            summon_points: {
                type: 'text',
                text: `XP: ${parseInt(1000*event.player.persistentData.souls_levels-event.player.persistentData.souls_leveling)}`,
                w: '$screenW', 
                h: '$screenH',
                x: 69,
                y: -50,
                alignX: 'center',
                alignY: 'bottom',
                draw: 'ingame',
                color: 'aqua',
                shadow: true,
                scale: 1,
            }
        })
    }
})


PlayerEvents.loggedIn(event => {
    let blood  = event.player.persistentData.blood
    if (event.player.persistentData.contains('kubejs_class:bloodripper')) {
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
    }
})

PlayerEvents.loggedIn(event => {
    if (!event.player.persistentData.contains('kubejs_class:bounty_hunter')) return
    let name = event.player.username
    let player = event.player
    event.server.scheduleInTicks(12000, event => {
        let x = player.x
        let y = player.y
        let z = player.z
        Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:kangaroo ${x} ${y} ${z} {Health:45,Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:45f}]}`)
        Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:kangaroo ${x} ${y} ${z} {Health:45,Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:45f}]}`)
        Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:kangaroo ${x} ${y} ${z} {Health:45,Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:45f}]}`)
        event.reschedule()
    })
})