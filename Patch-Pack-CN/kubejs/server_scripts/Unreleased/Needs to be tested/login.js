PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.contains('kubejs_class:bloodripper')) {
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
                text: ` - 经验升级至：${player.persistentData.bloodripper_xp}`,
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
    }
})

PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.contains('kubejs_class:spirit_caller')) {
        let souls = event.player.persistentData.souls
        let souls_levels = event.player.persistentData.souls_levels
        event.player.paint({
            spirit_caller: {
                type: 'text',
                text: `唤灵者：等级${souls_levels}`,
                w: '$screenW', 
                h: '$screenH',
                x: 5,
                y: 20,
                draw: 'ingame',
                shadow: true,
                color: 'darkAqua',
                scale: 1,
            },
            souls_word: {
                type: 'text',
                text: ` -灵魂：${souls}`,
                w: '$screenW', 
                h: '$screenH',
                x: 5,
                y: 30,
                draw: 'ingame',
                color: 'aqua',
                shadow: true,
                scale: 1,
            },
            summon_points: {
                type: 'text',
                text: ` - 经验升级至：${parseInt(400*event.player.persistentData.souls_levels-event.player.persistentData.souls_leveling)}`,
                w: '$screenW', 
                h: '$screenH',
                x: 5,
                y: 40,
                draw: 'ingame',
                color: 'green',
                shadow: true,
                scale: 1,
            },
        })
    }
})

PlayerEvents.loggedIn(event => {
    if (event.player.persistentData.HVT_counter == 0) return
    if (event.player.persistentData.HVT_counter == null) return
    event.player.paint({
        hvt: {
            w: '$screenW', 
            h: '$screenH',
            x: 37,
            y: -65,
            alignX: 'left',
            alignY: 'center',
            draw: 'ingame',
            color: 'yellow',
            type: 'text',
            centered: false,
            text: event.player.persistentData.HVT_name,
            shadow: true,
            scale: 0.8,},
        target: {
            w: '$screenW', 
            h: '$screenH',
            x: 5,
            y: -65,
            alignX: 'left',
            alignY: 'center',
            draw: 'ingame',
            color: 'darkRed',
            type: 'text',
            centered: false,
            text: `目标：`,
            shadow: true,
            scale: 0.8,},
        quests: {
            w: '$screenW', 
            h: '$screenH',
            x: 10,
            y: -80,
            alignX: 'left',
            alignY: 'center',
            draw: 'ingame',
            color: 'gold',
            type: 'text',
            centered: false,
            text: `任务`,
            shadow: true,
            scale: 1.05,},
        quests_underline: {
            w: '$screenW', 
            h: '$screenH',
            x: 6,
            y: -79,
            alignX: 'left',
            alignY: 'center',
            draw: 'ingame',
            color: 'gold',
            type: 'text',
            centered: false,
            text: `_______`,
            shadow: true,
            scale: 1.05,},
        })
    })

