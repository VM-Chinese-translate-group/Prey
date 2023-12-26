
ItemEvents.rightClicked('kubejs:summoner', event => {
    event.player.persistentData.putInt('common_summoner_counter', 1)
    event.player.persistentData.putInt('rare_summoner_counter', 1)
    event.player.persistentData.putInt('epic_summoner_counter', 1)

    event.player.persistentData.putInt('common_summoned_counter', 0)
    event.player.persistentData.putInt('rare_summoned_counter', 0)
    event.player.persistentData.putInt('epic_summoned_counter', 0)
})


const common_summoned_pets = {
    'crow':15,
    'sugar_glider':15,
    'bald_eagle': 20,
    'mantis_shrimp':25
}

Object.entries(common_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_bone_effigy`, event => {
        let player_name = event.player.username;
        let count = event.item.getCount()
        
        if (count >= 10) {
            event.player.give(`kubejs:${pet}_summoning_stone`)
            Utils.server.runCommandSilent(`/clear ${player_name} kubejs:${pet}_bone_effigy 10`)
            if (!event.player.persistentData.contains('kubejs_class:beastmaster')) return
            event.player.getPersistentData().putBoolean(`kubejs_summoner:${pet}`, true)
        }
    })
})

const rare_summoned_pets = {
    'capuchin_monkey':25,
    'flutter':30,
    'mimic_octopus': 35,
    'tarantula_hawk':35,
    'elephant':85,
    'komodo_dragon':55,
    'kangaroo': 45,
}

Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_bone_effigy`, event => {
        let player_name = event.player.username;
        let count = event.item.getCount()
        if (count >= 10) {
            event.player.give(`kubejs:${pet}_summoning_stone`)
            Utils.server.runCommandSilent(`/clear ${player_name} kubejs:${pet}_bone_effigy 10`)
            if (!event.player.persistentData.contains('kubejs_class:beastmaster')) return
            event.player.getPersistentData().putBoolean(`kubejs_summoner:${pet}`, true)
        }
    })
})

const epic_summoned_pets = {
    'gorilla':70,
    'crocodile':70,
    'grizzly_bear':70,
}
Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_bone_effigy`, event => {
        let player_name = event.player.username;
        let count = event.item.getCount()
        
        if (count >= 10) {
            event.player.give(`kubejs:${pet}_summoning_stone`)
            Utils.server.runCommandSilent(`/clear ${player_name} kubejs:${pet}_bone_effigy 10`)
            if (!event.player.persistentData.contains('kubejs_class:beastmaster')) return
            event.player.getPersistentData().putBoolean(`kubejs_summoner:${pet}`, true)
        }
    })
})



Object.entries(common_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        let name = event.player.username
        let x = event.player.x
        let y = event.player.y
        let z = event.player.z
        Utils.server.runCommandSilent(`/clear ${name} kubejs:${pet}_summoning_stone 1`)
            if (!event.player.persistentData.contains('kubejs_class:beastmaster')) {
                Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
            } else {
                Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(event.player.persistentData.common_summoner_counter)*0.75},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health*(event.player.persistentData.common_summoner_counter*0.75)}f}]}`)
            }
    })

    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        if (!event.player.persistentData.contains('kubejs_class:beastmaster')) return
        let name = event.player.username
        let username = event.player.username
        event.player.persistentData.common_summoned_counter += 1
        if (event.player.persistentData.common_summoned_counter != 15*event.player.persistentData.common_summoner_counter) return
        event.player.persistentData.common_summoner_counter+=1
        Utils.server.tell(`普通召唤宠物：生命值升级`)
        event.player.persistentData.common_summoned_counter = 0
    })
})

Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        let name = event.player.username
        let x = event.player.x
        let y = event.player.y
        let z = event.player.z
        Utils.server.runCommandSilent(`/clear ${name} kubejs:${pet}_summoning_stone 1`)
            if (!event.player.persistentData.contains('kubejs_class:beastmaster')) {
                Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
            } else {
                Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(event.player.persistentData.rare_summoner_counter)*0.75},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health*(event.player.persistentData.rare_summoner_counter*0.75)}f}]}`)
            }
    })

    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        if (!event.player.persistentData.contains('kubejs_class:beastmaster')) return
        let name = event.player.username
        let username = event.player.username
        event.player.persistentData.rare_summoned_counter += 1
        if (event.player.persistentData.rare_summoned_counter != 15*event.player.persistentData.rare_summoner_counter) return
        event.player.persistentData.rare_summoner_counter+=1
        Utils.server.tell(`稀有召唤宠物：生命值升级`)
        event.player.persistentData.rare_summoned_counter = 0
    })
})


Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        let name = event.player.username
        let x = event.player.x
        let y = event.player.y
        let z = event.player.z
        event.level.spawnLightning(x, y, z, true)
        Utils.server.runCommandSilent(`/clear ${name} kubejs:${pet}_summoning_stone 1`)
            if (!event.player.persistentData.contains('kubejs_class:beastmaster')) {
                Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
            } else {
                Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(event.player.persistentData.epic_summoner_counter)*0.75},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health*(event.player.persistentData.epic_summoner_counter*0.75)}f}]}`)
            }
    })

    ItemEvents.rightClicked(`kubejs:${pet}_summoning_stone`, event => {
        if (!event.player.persistentData.contains('kubejs_class:beastmaster')) return
        let name = event.player.username
        let username = event.player.username
        event.player.persistentData.epic_summoned_counter += 1
        if (event.player.persistentData.epic_summoned_counter != 15*event.player.persistentData.epic_summoner_counter) return
        event.player.persistentData.epic_summoner_counter+=1
        Utils.server.tell(`史诗召唤宠物：生命值升级`)
        event.player.persistentData.epic_summoned_counter = 0
    })
})

const all_summoned_pets = [
    'crow',
    'sugar_glider',
    'bald_eagle',
    'mantis_shrimp',
    'capuchin_monkey',
    'flutter',
    'mimic_octopus',
    'tarantula_hawk',
    'elephant',
    'komodo_dragon',
    'kangaroo',
    'gorilla',
    'crocodile',
    'grizzly_bear',
]

all_summoned_pets.forEach(pet => {
    ItemEvents.rightClicked('kubejs:summoners_gateway', event => {
        if (!event.player.persistentData.contains('kubejs_class:beastmaster')) return
        let name = event.player.username
        if (!event.player.persistentData.contains(`kubejs_summoner:${pet}`)) return
        event.player.give(`kubejs:${pet}_summoning_stone`)
        Utils.server.runCommandSilent(`/clear ${name} kubejs:summoners_gateway 1`)
    })
})


//Late game golem summon with AI chip and flamer
///execute at ${name} summon lategamegolems:lgg_entity ~ ~ ~ {Inventory:{Items:[{Slot:2,id:"lategamegolems:lgg_flamer",Count:1}, {Slot:1,id:"lategamegolems:lgg_ai_chip_follower",Count:1}]}}

Object.entries(common_summoned_pets).forEach(([pet, health]) => {
    EntityEvents.spawned(`alexsmobs:${pet}`, event => {
        const randomNumber = Math.random();
        if (randomNumber < 0.30) return
            let player = event.level.getNearestPlayer(event.entity, 60)
            if (player == null) return
            if (!player.persistentData.contains('kubejs_class:beastmaster')) return
            let name = player.username
            let x = event.entity.x
            let y = event.entity.y
            let z = event.entity.z
            Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(event.player.persistentData.common_summoner_counter)*0.75},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health*(event.player.persistentData.common_summoner_counter*0.75)}f}]}`)
            event.cancel()
    })
})

Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
    EntityEvents.spawned(`alexsmobs:${pet}`, event => {
        const randomNumber = Math.random();
        if (!randomNumber < 0.20) return
            let player = event.level.getNearestPlayer(event.entity, 60)
            if (player == null) return
            if (!player.persistentData.contains('kubejs_class:beastmaster')) return
            let name = player.username
            let x = event.entity.x
            let y = event.entity.y
            let z = event.entity.z
            Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(event.player.persistentData.rare_summoner_counter)*0.75},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health*(event.player.persistentData.rare_summoner_counter*0.75)}f}]}`)
            event.cancel()
    })
})

Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
    EntityEvents.spawned(`alexsmobs:${pet}`, event => {
        const randomNumber = Math.random();
        if (!randomNumber < 0.10) return
            let player = event.level.getNearestPlayer(event.entity, 60)
            if (player == null) return
            if (!player.persistentData.contains('kubejs_class:beastmaster')) return
            let name = player.username
            let x = event.entity.x
            let y = event.entity.y
            let z = event.entity.z
            Utils.server.runCommandSilent(`/execute at ${name} run summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(event.player.persistentData.epic_summoner_counter)*0.75},Owner:${name},Tags:["summoning_stone_pet"],Attributes:[{Name:"generic.max_health",Base:${health*(event.player.persistentData.epic_summoner_counter*0.75)}f}]}`)
            event.cancel()
    })
})

//Object.entries(rare_summoned_pets).forEach(([pet, health]) => {
   // EntityEvents.spawned(`alexsmobs:${pet}`, event => {
   //     let player = event.level.getNearestPlayer(event.entity, 60)
   //     let player_username = player.username
  //      if (!player.tags.contains('beastmaster_two')) return
  //      const randomNumber = Math.random();
  //      if (randomNumber < 0.50) {
//
//        } else {
 //           let x = event.entity.x
  //          let y = event.entity.y
    //        let z = event.entity.z
      //      if (!player.persistentData.contains('kubejs_class:beastmaster')) {
        //        Utils.server.runCommandSilent(`/execute at ${name} summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
//
  //          } else {
    //            Utils.server.runCommandSilent(`/execute at ${name} summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(common_summoner_counter[name]*0.75)},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health*(common_summoner_counter[player_username]*0.75)}f}]}`)
      //      }
        //    event.cancel()
        //}
    //})
//})
//Object.entries(epic_summoned_pets).forEach(([pet, health]) => {
  //  EntityEvents.spawned(`alexsmobs:${pet}`, event => {
    //    let player = event.level.getNearestPlayer(event.entity, 60)
      //  let player_username = player.username
        //if (!player.tags.contains('beastmaster_three')) return
        //const randomNumber = Math.random();
        //if (randomNumber < 0.50) {

        //} else {
          //  let x = event.entity.x
            //let y = event.entity.y
//            let z = event.entity.z
  //          if (!player.persistentData.contains('kubejs_class:beastmaster')) {
    ////            Utils.server.runCommandSilent(`/execute at ${name} summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health}f}]}`)
//
  //          } else {
    //            Utils.server.runCommandSilent(`/execute at ${name} summon alexsmobs:${pet} ${x} ${y} ${z} {Health:${health*(common_summoner_counter[name]*0.75)},Owner:${name},Attributes:[{Name:"generic.max_health",Base:${health*(common_summoner_counter[player_username]*0.75)}f}]}`)
      //      }
//            event.cancel()
  //      }
    //})
//})

//Late game golem summon with AI chip and flamer
///execute at ${name} summon lategamegolems:lgg_entity ~ ~ ~ {Inventory:{Items:[{Slot:2,id:"lategamegolems:lgg_flamer",Count:1}, {Slot:1,id:"lategamegolems:lgg_ai_chip_follower",Count:1}]}}



// Make the bow item








//// Conjurer Entities to summon:
// Skeleton Vanguard
// Citadel keeper
//born_in_chaos_v1:fallen_chaos_knight