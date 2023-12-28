const $RPGGods = Java.loadClass("rpggods.RPGGods")


ItemEvents.rightClicked('kubejs:rune_of_the_spirit_caller', event => {
    event.player.persistentData.putInt('souls', 0)
    event.player.persistentData.putInt('souls_levels', 1)
    event.player.persistentData.putInt('souls_leveling', 0)
    event.player.persistentData.putString('summon_id', ' ')
    event.player.persistentData.putInt('summon_cost', 0)
    let souls = event.player.persistentData.souls
    event.player.paint({
        souls_word: {
            type: 'text',
            text: `灵魂：${souls}`,
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
            text: `经验：${parseInt(1000*event.player.persistentData.souls_levels-event.player.persistentData.souls_leveling)}`,
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
})



EntityEvents.death(event => {
    if (!event.entity.isMonster()) return
    const { source } = event
    if (!source instanceof $EntityDamageSource) return
    if (source.actual == null) return
    if (!source.actual.player) return
    let player = source.actual
    if (!player.persistentData.contains('kubejs_class:spirit_caller')) return
    if (event.level.day) {
        player.persistentData.souls += parseInt(event.entity.maxHealth/6)
    } else {
        player.persistentData.souls += parseInt(2*(event.entity.maxHealth/6))/// Double soul collection at night
        
    }
    player.paint({souls_word: {text: `灵魂：${player.persistentData.souls}`}})
    player.paint({summon_points: {text: `召唤经验升级至${parseInt(1000*player.persistentData.souls_levels-player.persistentData.souls_leveling)}`}})
})

//EntityEvents.hurt(event => {
   // if (!event.entity.isMonster()) return
   // const { source } = event
   // if (!source instanceof $EntityDamageSource) return
   // if (!source.actual.player) return
   // let player = source.actual
   // if (!player.persistentData.contains('kubejs_class:spirit_caller')) return
  //  if (event.level.day) {
   //     player.persistentData.souls += parseInt(event.entity.maxHealth/6)
//
    //    player.paint({souls_word: {text: `灵魂：${player.persistentData.souls}`}})
  //  } else {
   //     player.persistentData.souls += parseInt(event.entity.maxHealth/6)
    //    player.persistentData.souls += parseInt(event.entity.maxHealth/6) /// Double soul collection at night
    //    player.paint({souls_word: {text: `灵魂：${player.persistentData.souls}`}})
  //  }
//})






//////////////////////////////////////////////////////////////// Dev Tools //////////////////////////////////////////////////////////////////

//ItemEvents.rightClicked('minecraft:emerald', event => {
    //if (dev_tools == 0) return
    //event.player.persistentData.souls += 50
  //  event.player.paint({souls_word: {text: `灵魂：${event.player.persistentData.souls}`}})
//})



ItemEvents.entityInteracted('kubejs:admin_sword', event => {
    let player = event.player
    let player_username = player.username
    let display_name = event.target.displayName.getString()
    event.target.customName = `${player_username}\u7684${display_name}`
    event.target.getCapability($RPGGods.TAMEABLE).orElse(null).setTamedBy(player)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Subtract 20 souls on death
EntityEvents.death(event => {
    if (!event.entity.player) return
    if (!event.entity.persistentData.contains('kubejs_class:spirit_caller')) return
    event.entity.persistentData.souls = event.entity.persistentData.souls -= 20
    if (event.entity.persistentData.souls < 0) {
        event.entity.persistentData.souls = 0
    }
    event.player.paint({souls_word: {text: `灵魂：${event.player.persistentData.souls}`}})
})


/// 3 hits on boss gives you a soul
let boss_hits = new Map()
EntityEvents.hurt(event => {
    const { source } = event
    if (!source instanceof $EntityDamageSource) return
    if (!source.player) return
    let player = source.player
    if (!event.entity.tags.contains('boss')) return
    let player_username = event.source.player.username
    if (!player.persistentData.contains('kubejs_class:spirit_caller')) return

    if (boss_hits[player_username] == undefined) {
        boss_hits[player_username] = 1
    } else {
        boss_hits[player_username]++
    }

    if (boss_hits[player_username] != 3) return
    player.persistentData.souls += 1
    player.paint({souls_word: {text: `灵魂：${player.persistentData.souls}`}})
    player.paint({summon_points: {text: `召唤经验升级至${parseInt(1000*event.player.persistentData.souls_levels-event.player.persistentData.souls_leveling)}`}})
    boss_hits[player_username] = 0  
})

/////
ItemEvents.rightClicked('kubejs:orb_of_slaughtered_foes', event => {
    if (!event.player.persistentData.contains('kubejs_class:spirit_caller')) return
    if (event.player.persistentData.souls == 0) return
        let player_username = event.player.username
        let entity_id = event.player.persistentData.summon_id
        let entity_cost = event.player.persistentData.summon_cost
        let souls = event.player.persistentData.souls
        if (entity_cost > souls) {
            event.player.tell('你需要'+ (entity_cost - souls)+ '以上的灵魂以召唤这种生物')
        } else {
            event.player.tags.add('OOSF')
            Utils.server.scheduleInTicks(40, () => {
                event.player.tags.remove('OOSF')
            })
            Utils.server.runCommandSilent(`/execute at ${player_username} run summon ${entity_id}`)
            event.player.persistentData.souls -= event.player.persistentData.summon_cost
            event.player.paint({souls_word: {text: `灵魂：${event.player.persistentData.souls}`}})
            event.player.paint({summon_points: {text: `召唤经验升级至${parseInt(1000*event.player.persistentData.souls_levels-event.player.persistentData.souls_leveling)}`}})

        }
    })


///////////////////////////////////////

EntityEvents.spawned(event => {
    if (event.entity.player) return
    if (!event.entity.monster) return
    let player = event.level.getNearestPlayer(event.entity, 3)
    if (player == null) return
    if (!player.player) return
    if (!player.tags.contains('OOSF')) return
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
    event.entity.tags.add('sc_entity')
    let display_name = event.entity.displayName.getString()
    event.entity.customName = `${player.username}\u7684${display_name}`
///

    player.persistentData.souls_leveling += event.entity.maxHealth/3
    if (player.persistentData.souls_leveling <= 1000*player.persistentData.souls_levels) return



////


    //if (event.entity.maxHealth <= 30) return
    //if (player.persistentData.souls_leveling < 5) return
    player.persistentData.souls_levels += 1
    //标记
    Utils.server.tell('灵魂水晶升级')
    player.persistentData.souls_leveling = 0
    player.paint({summon_points: {text: `召唤经验升级至${parseInt(1000*player.persistentData.souls_levels-player.persistentData.souls_leveling)}`}})
})

//ItemEvents.rightClicked('kubejs:admin_sword', event => {
 //   Utils.server.tell(event.player.persistentData.souls_leveling)
   // Utils.server.tell(event.player.persistentData.souls_levels)
  /// / ///event.player.persistentData.souls += 1000000
   // let souls_needed = parseInt(1000*event.player.persistentData.souls_levels-event.player.persistentData.souls_leveling)
  ///  Utils.server.tell('Summon Points Needed: '+souls_needed)
//})
EntityEvents.death(event => {
    ///if (event.source.actual == null) return
    const { source } = event
    if (!source instanceof $EntityDamageSource) return
    if (!source.player) return
    let player = source.player
    let player_username = player.username
    if (!player.persistentData.contains('kubejs_class:spirit_caller')) return
    let entity_id = event.entity.type
    let entity_health = parseInt(event.entity.maxHealth/2)
    if (player.offHandItem != 'kubejs:spirit_crystal') return
    if (player.persistentData.souls_levels == 1) {
        if (event.entity.maxHealth <= 30) {
            player.persistentData.summon_id = entity_id
            player.persistentData.summon_cost = entity_health
            //标记
            player.tell(event.entity.displayName.getString()+ '灵魂被捕获。')
        } else {
            player.tell('此生物对水晶来说太强')
        }
    } else if (player.persistentData.souls_levels == 2) {
        if (event.entity.maxHealth <= 75) {
            player.persistentData.summon_id = entity_id
            player.persistentData.summon_cost = entity_health
            player.tell(event.entity.displayName.getString()+ '灵魂被捕获。')
        } else {
            player.tell('此生物对水晶来说太强')
        }
    } else if (player.persistentData.souls_levels == 3) {
        if (event.entity.maxHealth <= 120) {
            player.persistentData.summon_id = entity_id
            player.persistentData.summon_cost = entity_health
            player.tell(event.entity.displayName.getString()+ '灵魂被捕获。')
        } else {
            player.tell('此生物对水晶来说太强')
        }
    } else if (player.persistentData.souls_levels == 4) {
        if (event.entity.maxHealth <= 240) {
            player.persistentData.summon_id = entity_id
            player.persistentData.summon_cost = entity_health
            player.tell(event.entity.displayName.getString()+ '灵魂被捕获。')
        } else {
            player.tell('此生物对水晶来说太强')
        }
    } else if (player.persistentData.souls_levels == 5) {
        if (event.entity.maxHealth <= 480) {
            player.persistentData.summon_id = entity_id
            player.persistentData.summon_cost = entity_health
            player.tell(event.entity.displayName.getString()+ '灵魂被捕获。')
        } else {
            player.tell('此生物对水晶来说太强')
        }
    } else if (player.persistentData.souls_levels == 6) {
        if (event.entity.maxHealth <= 960) {
            player.persistentData.summon_id = entity_id
            player.persistentData.summon_cost = entity_health
            player.tell(event.entity.displayName.getString()+ '灵魂被捕获。')
        } else {
            player.tell('此生物对水晶来说太强')
        }
    } else if (player.persistentData.souls_levels > 6) {
        if (event.entity.maxHealth <= 999) {
            player.persistentData.summon_id = entity_id
            player.persistentData.summon_cost = entity_health
            player.tell(event.entity.displayName.getString()+ '灵魂被捕获。')
        } else {
            player.tell('此生物对水晶来说太强')
        }
    }

})
