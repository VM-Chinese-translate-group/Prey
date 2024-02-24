let berserker_hitcounter_map = new Map();
let berserker_hurtcounter_map = new Map();
let berserker_trigger = false;
EntityEvents.hurt(event => {
    let source = event.source;
    let target = event.entity
    let source_player = source.player;
    
    if (source_player) {
    if (!source_player.persistentData.contains(`kubejs_trial_complete:bloodlust`)) return;
    let sp_user = source.player.username; 
        
        if (berserker_hitcounter_map[sp_user] > 4) {
            berserker_hitcounter_map[sp_user] = 4;
        }

        if (berserker_hitcounter_map[sp_user] == undefined) {
            berserker_hitcounter_map[sp_user] = 1;
            Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:haste 4 ${berserker_hitcounter_map[sp_user]*2}`)
        } else {
            berserker_hitcounter_map[sp_user] + 1;
            Utils.server.runCommandSilent(`/effect give ${sp_user} minecraft:haste 4 ${berserker_hitcounter_map[sp_user]*2}`)
        }
    }
})    

ItemEvents.rightClicked('kubejs:rune_of_the_berserker', event => {
    if (event.player.persistentData.subclass_counter == 1) return
    event.player.tags.add('berserker')
})

EntityEvents.hurt(event => {
    let source = event.source;
    let target = event.entity
    let target_player = target.player;
    let source_player = source.player;

    if (target_player) {
    if (!event.entity.persistentData.contains(`kubejs_trial_complete:bloodlust`)) return;
    let tp_user = event.entity.username;
    
    if (berserker_hurtcounter_map[tp_user] == 2) {
        if (berserker_hurtcounter_map[berserker_trigger]) return;
            Utils.server.runCommandSilent(`/effect clear ${tp_user} minecraft:haste`)
            Utils.server.runCommandSilent(`/effect clear ${tp_user} minecraft:speed`)
            berserker_hurtcounter_map[tp_user] = 0;
            berserker_hitcounter_map[tp_user] = 0;
    }

    if (berserker_hurtcounter_map[tp_user] == undefined) {
        if (berserker_hurtcounter_map[berserker_trigger]) return;
            berserker_hurtcounter_map[tp_user] = 1;
            berserker_hurtcounter_map[berserker_trigger] = true;
            event.server.scheduleInTicks(10, () => {
                berserker_hurtcounter_map[berserker_trigger] = false
        })
    } else {
        if (berserker_hurtcounter_map[berserker_trigger]) return;
            berserker_hurtcounter_map[tp_user]++;
            berserker_hurtcounter_map[berserker_trigger] = true;
            event.server.scheduleInTicks(10, () => {
                berserker_hurtcounter_map[berserker_trigger] = false
            })
    }
}
}) 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


ItemEvents.rightClicked('kubejs:blacksmith', event => {
    if (event.player.persistentData.mainclass_counter == 1) return
    let player_name = event.player.username
    event.player.persistentData.putInt('per_tools_counter', 0)
    event.player.persistentData.putInt('per_armor_counter', 0)
    event.player.persistentData.putInt('per_blacksmith_counter', 1)
    let e_counter = event.player.persistentData.per_blacksmith_counter
    blacksmith_tool_commands.forEach((command) => {
        Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${e_counter*1.1}`)
    })
    blacksmith_armor_commands.forEach((command) => {
        Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${e_counter*1.1}`)
    })
})

ItemEvents.crafted(event => {
    
    if (!event.player.persistentData.contains(`kubejs_class:blacksmith`)) return
    if (!event.item.hasTag('forge:tools')) return
    if (event.item.hasTag('forge:tools/wooden')) return
    if (event.item.hasTag('forge:tools/stone')) return

    
    event.player.persistentData.per_tools_counter += 1

    let player_name = event.player.username
    let e_counter = event.player.persistentData.per_blacksmith_counter
    let t_counter = event.player.persistentData.per_tools_counter


    if (t_counter == e_counter*50) {
        event.player.tell(`铁匠工具升级进度：已完成50%`)
    }

    if (t_counter == e_counter*250) {
        event.player.tell(`铁匠工具升级进度：已完成50%`)
    }

    Utils.server.tell('e_counter = '+e_counter)
    Utils.server.tell('t_counter = '+t_counter)
    //Utils.server.tell('Required: ' + e_counter*5)\
    //Utils.server.tell(t_counter >= e_counter*500)
    if (t_counter < e_counter*500) return
        //Utils.server.tell('Counter Passed')
        event.player.persistentData.per_tools_counter = 0
        Utils.server.runCommandSilent(`/tell ${player_name} 铁匠增幅：升级`)
        event.player.persistentData.per_blacksmith_counter += 1
        blacksmith_tool_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${e_counter*1.1}`)
    })
})


ItemEvents.crafted(event => {
    
    if (!event.player.persistentData.contains(`kubejs_class:blacksmith`)) return
    if (!event.item.hasTag('forge:armor')) return

    event.player.persistentData.per_armor_counter += 1

    let player_name = event.player.username
    let e_counter = event.player.persistentData.per_blacksmith_counter
    let a_counter = event.player.persistentData.per_armor_counter

    if (a_counter == e_counter*40) {
        event.player.tell(`铁匠盔甲升级进度：已完成10%`)
    }

    if (a_counter == e_counter*200) {
        event.player.tell(`铁匠盔甲升级进度：已完成50%`)
    }

    //Utils.server.tell('e_counter = '+e_counter)
    //Utils.server.tell('t_counter = '+t_counter)
    //Utils.server.tell('Required: ' + e_counter*5)\
    //Utils.server.tell(a_counter >= e_counter*400)
    if (a_counter < e_counter*400) return
        //Utils.server.tell('Counter Passed')
        event.player.persistentData.per_armor_counter = 0
        Utils.server.runCommandSilent(`/tell ${player_name} 铁匠增幅：升级`)
        event.player.persistentData.per_blacksmith_counter += 1
        blacksmith_armor_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${e_counter*1.1}`)
    })
})



const blacksmith_tool_commands = [
    
    'skilltree:crafted_melee_weapon_attack_speed base set',
    'skilltree:crafted_melee_weapon_damage_bonus base set',
    'skilltree:crafted_ranged_weapon_attack_speed base set',
    'skilltree:crafted_ranged_weapon_sockets base set',
    'skilltree:crafted_shields_armor_bonus base set'
]
const blacksmith_armor_commands = [
    'skilltree:armor_defence base set',    
    'skilltree:crafted_boots_sockets base set',
    'skilltree:crafted_helmets_sockets base set',
    'skilltree:crafted_equipment_duarability base set',
]



PlayerEvents.respawned(event => {
    const player_name = event.player.username
    const player = event.player

    if (!event.player.persistentData.contains(`kubejs_class:blacksmith`)) return
    let e_counter = event.player.persistentData.per_blacksmith_counter
        blacksmith_tool_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${e_counter*1.1}`)
        })
        blacksmith_armor_commands.forEach((command) => {
            Utils.server.runCommandSilent(`/attribute ${player_name} ${command} ${e_counter*1.1}`)
        })
    }
)