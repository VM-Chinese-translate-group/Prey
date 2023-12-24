

//// To add: 
/// > Give the dog a persistent data tag that is the players name. 
/// > If the dog dies assign the value of the name to a variable
/// > Run a command to remove the tag from the player and use the variable in place of the name part
/// > When you kill the dog make it spawn a direwolf leader with health and pet abilities. Make sure to give it a tag of the player
/// > Make it so when the direwolf dies remove the tag from the player and do everything at the end of the other trials.
/// > Make a tooltip for it


ItemEvents.rightClicked(`kubejs:surge`, event => {
    let name = event.player.username
    if (event.server.persistentData[`${name}_old_yeller`] == 1) return
    event.server.persistentData.putInt(`${name}_old_yeller`, 1)


    if (!event.player.persistentData.contains(`kubejs_class:berserker`)) return
    
    let x = event.player.x
    let y = event.player.y
    let z = event.player.z
    Utils.server.runCommandSilent(`/summon minecraft:wolf ${x} ${y} ${z} {Owner:${name},Age:-2400,Tags:["${name}_old_yeller","old_yeller"]}`)
    event.entity.tags.add('old_yeller_one')
})

EntityEvents.spawned('minecraft:wolf', event => {
    if (!event.entity.tags.contains('old_yeller')) return
    let player = event.level.getNearestPlayer(event.entity, 5)
    let player_username = player.username
    event.entity.persistentData.putString('player_username', player_username)
})

EntityEvents.death('minecraft:wolf', event => {
    if (!event.entity.tags.contains('old_yeller')) return
    let player_username = event.entity.persistentData.player_username
    event.server.persistentData[`${player_username}_old_yeller`] = 0
    Utils.server.runCommandSilent(`/tell ${player_username} Surge Trial: Failed`)
})


//step 1: Kill Tusklins
EntityEvents.death('alexsmobs:tusklin', event => {
    let player = event.level.getNearestPlayer(event.entity, 60)
    if (player == null) return
    //Utils.server.tell('player check')
    //Utils.server.tell('tusklin check')
    let player_username = player.username
   // Utils.server.tell(event.source.actual.tags.contains(`${player_username}_old_yeller`))
    if (!event.source.actual.tags.contains(`${player_username}_old_yeller`)) return
    player.tags.remove('old_yeller_one')
    player.tags.add('old_yeller_two')
    Utils.server.runCommandSilent(`/tell ${player_username} Surge Trial Part 1: Complete`)
    event.source.actual.maxHealth = event.source.actual.maxHealth*1.5;
    event.source.actual.health = event.source.actual.maxHealth*1.5;
})


//step 2: Kill a skin walker
const old_yeller_skinwalker_kills = new Map()
EntityEvents.death(event => {
    let player = event.level.getNearestPlayer(event.entity, 60)

    if (player == null) return
    if (!player.tags.contains('old_yeller_two')) return
    //Utils.server.tell('player check')
    if (event.entity.type != 'skinandbonesremastered:skin_walker') return
    //Utils.server.tell('tusklin check')
    let player_username = player.username
    //Utils.server.tell(event.source.actual.tags.contains(`${player_username}_old_yeller`))
    if (!event.source.actual.tags.contains(`${player_username}_old_yeller`)) return

    if (old_yeller_skinwalker_kills[player_username] == undefined) {
        old_yeller_skinwalker_kills[player_username] = 1
        //Utils.server.tell(old_yeller_skinwalker_kills[player_username])
    } else {
        old_yeller_skinwalker_kills[player_username]++
        //Utils.server.tell(old_yeller_skinwalker_kills[player_username])
    }

    if (old_yeller_skinwalker_kills[player_username] != 1) return
    player.tags.remove('old_yeller_two')
    player.tags.add('old_yeller_three')
    Utils.server.runCommandSilent(`/tell ${player_username} Surge Trial Part 2: Complete`)
    event.source.actual.maxHealth = event.source.actual.maxHealth*2.0;
    event.source.actual.health = event.source.actual.maxHealth*2.0;
})


const old_yeller_wendigo_kills = new Map()
EntityEvents.death(event => {
    let player = event.level.getNearestPlayer(event.entity, 60)
    if (player == null) return
    //Utils.server.tell('player check')
    if (event.entity.type != 'skinandbonesremastered:antelered_wendigo') return
    //Utils.server.tell('tusklin check')
    let player_username = player.username
    //Utils.server.tell(event.source.actual.tags.contains(`${player_username}_old_yeller`))
    if (!event.source.actual.tags.contains(`${player_username}_old_yeller`)) return

    if (old_yeller_wendigo_kills[player_username] == undefined) {
        old_yeller_wendigo_kills[player_username] = 1
        //Utils.server.tell(old_yeller_wendigo_kills[player_username])
    } else {
        old_yeller_wendigo_kills[player_username]++
        //Utils.server.tell(old_yeller_wendigo_kills[player_username])
    }

    if (old_yeller_wendigo_kills[player_username] != 1) return
    player.tags.remove('old_yeller_three')
    player.tags.add('old_yeller_four')
    Utils.server.runCommandSilent(`/tell ${player_username} Surge Trial Part 3: Complete`)
    player.giveInHand('kubejs:betrayal')
    player.tell('Stab the Dog')
    player.tell('Stab the Dog')
    player.tell('Stab the Dog')
    player.tell('Stab the Dog')
    player.tell('Stab the Dog')
})

EntityEvents.hurt('minecraft:wolf', event => {
    if (event.source.actual == null) return
    if (!event.source.player) return
    if (event.source.player.mainHandItem != 'kubejs:betrayal') return
    if (!event.source.player.tags.contains('old_yeller_four')) return
    let player_username = event.source.player.username
    let x = event.entity.x
    let y = event.entity.y
    let z = event.entity.z
    event.entity.kill()
    Utils.server.runCommandSilent(`/summon born_in_chaos_v1:dire_hound_leader ${x} ${y} ${z} {Tags:["kubejs_pet_strike","direwolf","kubejs_pet_regen","kubejs_pet_strength","kubejs_pet_dragon","kubejs_pet_speed","kubejs_pet_invis","kubejs_pet_soul_steal","kubejs_pet_resistance","kubejs_pet_absorption"]}`)
})  

EntityEvents.death('born_in_chaos_v1:dire_hound_leader', event => {
    if (!event.entity.tags.contains('direwolf')) return
    if (!event.source.player) return
    let player_username = event.source.player.username
    event.source.player.getPersistentData().putBoolean(`kubejs_trial_complete:surge`, true)
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:surge 1`)
})  

EntityEvents.spawned('born_in_chaos_v1:dire_hound_leader', event => {
    if (!event.entity.tags.contains('direwolf')) return
    event.entity.maxHealth = 200
    event.entity.health = 200

})