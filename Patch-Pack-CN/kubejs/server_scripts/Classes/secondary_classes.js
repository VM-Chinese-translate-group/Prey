const x_subclass_drops = [
    'guardian',
    'battlemage',
    'conjurer',
    'spellsword', 
    'kensei', 
    'berserker', 
    'spirit_caller', 
    'alchemist',
    'bounty_hunter', 
    'dreamweaver', 
    'arcane_ranger',
    'explorer',
    'bloodripper',
    'beastmaster'
]


const x_mainclass_drops = [
    'warlock',
    'warden',
    'rogue',
    'scout',
    'blacksmith',
    'summoner',
]

const subclass_crates = [
    'beastmaster',
    'explorer',
]

ItemEvents.rightClicked('kubejs:cleansing_serum', event => {
    x_mainclass_drops.forEach((mainclass) => {
        event.player.persistentData.remove(`kubejs_class:${mainclass}`)
    })
    x_subclass_drops.forEach((subclass) => {
        event.player.persistentData.remove(`kubejs_class:${subclass}`)
    })
    event.item.count -= 1
    event.player.tell('所有职业进度已重置。')
})


x_mainclass_drops.forEach((mainclass) => {
    ItemEvents.rightClicked(`kubejs:class_lootbox`, event => {
        const player_username = event.player.username
        let player = event.player
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:class_lootbox 1`)
        if (player.persistentData.contains(`kubejs_class:${mainclass}`)) {
            Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/${mainclass}_lootbox`)
        }
    })
})

x_subclass_drops.forEach((subclass) => {
    ItemEvents.rightClicked(`kubejs:class_lootbox`, event => {
        const player_username = event.player.username
        let player = event.player
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:class_lootbox 1`)
        if (player.persistentData.contains(`kubejs_class:${subclass}`)) {
            Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/${subclass}_lootbox`)
        }
    })
})


x_subclass_drops.forEach((x_subclass_drops) => {
    ServerEvents.genericLootTables((event) => {
        event.addGeneric(`loot_boxes/${x_subclass_drops}`, (table) => {
        })
	})
})

x_subclass_drops.forEach((x_subclass_drops) => {
    ItemEvents.rightClicked(`kubejs:rune_of_the_${x_subclass_drops}`, event => {
        if (event.player.persistentData.contains('kubejs_class:blacksmith')) return
        const player_username = event.player.username
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ${player_username} loot minecraft:loot_boxes/${x_subclass_drops}`)
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${x_subclass_drops} 1`) 
    })
})

ItemEvents.rightClicked(`kubejs:subclass_skill_point`, event => {
    const player = event.player
    const player_username = player.username
    Utils.server.runCommandSilent(`/clear ${player_username} kubejs:subclass_skill_point 1`)
    
    if (player.persistentData.contains(`kubejs_class:guardian`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Guardian 1`)
    }
    if (player.persistentData.contains(`kubejs_class:battlemage`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Battlemage 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:conjurer`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Conjurer 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:blacksmith`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Crafting 3`)
    }
        
    if (player.persistentData.contains(`kubejs_class:spellsword`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Spellsword 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:kensei`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Kensei 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:berserker`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Melee 2`)
    }
        
    if (player.persistentData.contains(`kubejs_class:spirit_caller`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Spirit_Caller 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:alchemist`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Crafting 3`)
    }
        
    if (player.persistentData.contains(`kubejs_class:bounty_hunter`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Bounty_Hunter 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:dreamweaver`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Dreamweaver 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:arcane_ranger`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Arcane_Ranger 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:explorer`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Explorer 1`)
    }
        
    if (player.persistentData.contains(`kubejs_class:bloodripper`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Bloodripper 1`)
    }

    if (player.persistentData.contains(`kubejs_class:beastmaster`)) {
        Utils.server.runCommandSilent(`/puffish_skills points add ${player_username} Beastmaster 1`)
    }
})



x_subclass_drops.forEach((x_subclass_drop) => {
    ItemEvents.rightClicked(`kubejs:rune_of_the_${x_subclass_drop}`, event => {
        if (event.player.persistentData.subclass_counter > 0) return
        event.player.persistentData.subclass_counter += 1
        let player_username = event.player.username
        Utils.server.runCommandSilent(`/execute at ${player_username} run loot spawn ~ ~1 ~ loot minecraft:loot_boxes/${x_subclass_drop}`)
        event.player.getPersistentData().putBoolean(`kubejs_class:${x_subclass_drop}`, true)
        event.item.count -= 1
        x_subclass_drops.forEach((class_item) => {
            Utils.server.runCommandSilent(`/clear ${player_username} kubejs:rune_of_the_${class_item}`)
            Utils.server.runCommandSilent(`/kill @e[type=item,nbt={Item:{id:"kubejs:rune_of_the_${class_item}"}}]`)
        })        
    })
})



const z_subclasses = {
    'guardian': 'Guardian',
    'battlemage': 'Battlemage',
    'conjurer': 'Conjurer',
    'spellsword': 'Spellsword',
    'kensei': 'Kensei',
    'spirit_caller': 'Spirit_Caller',
    'alchemist': 'Alchemist',
    'bounty_hunter': 'Bounty_Hunter',
    'dreamweaver': 'Dreamweaver',
    'arcane_ranger': 'Arcane_Ranger',
    'explorer': 'Explorer',
    'bloodripper': 'Bloodripper',
    'beastmaster': 'Beastmaster',
}

Object.entries(z_subclasses).forEach(([id, name]) => {
    ItemEvents.rightClicked(`kubejs:rune_of_the_${id}`, event => {
        if (event.player.persistentData.subclass_counter > 0) return
        let player_name = event.player.username
        Utils.server.runCommandSilent(`/puffish_skills category unlock @p ${name}`)
    })
})

ItemEvents.rightClicked('kubejs:rune_of_the_berserker', event => {
    if (event.player.persistentData.subclass_counter > 0) return
    let player_name = event.player.username
    Utils.server.runCommandSilent(`/puffish_skills category unlock @p Berserker`)
    Utils.server.runCommandSilent(`/puffish_skills points add ${player_name} Berserker 1`)
})
