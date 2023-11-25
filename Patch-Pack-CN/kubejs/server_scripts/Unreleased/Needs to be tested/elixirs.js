const elixirs = {
    'evasion': 'irons_spellbooks:evasion',
    'speed': 'minecraft:speed',
    'resistance': 'minecraft:resistance',
    'regeneration': 'minecraft:regeneration',
    'strength': 'minecraft:strength',
    'endurance': 'feathers:endurance',
    'absorption': 'minecraft:absorption',
    'charged': 'irons_spellbooks:charged',
    'angel_wings': 'irons_spellbooks:angel_wings',
    'soul_steal': 'alexsmobs:soul_steal',
    'shadow_form': 'undead_unleashed:shadow_form',
}

Object.entries(elixirs).forEach(([name, id]) => {    
    ItemEvents.rightClicked(`kubejs:${name}_elixir_relic`, event => {
        event.player.tags.add(name)
        event.item.count -= 1
    })
    ItemEvents.rightClicked(`kubejs:${name}_elixir`, event => {
        event.player.persistentData.putBoolean(`kubejs:${name}_elixir`, true)
        event.item.count -= 1
    })

    EntityEvents.hurt(event => {
        if (event.source.type == 'onFire') return
        if (!event.entity.persistentData.contains(`kubejs:${name}_elixir`)) return
        let randomNumber = Math.random();
        if (randomNumber > event.entity.persistentData.arcane_affinity) return
        event.entity.potionEffects.add(`${id}`, 200)
    })
})

const dbe = {
    'fire': 'undead_unleashed:flame_breathing',
}

Object.entries(dbe).forEach(([name, id]) => {    
    ItemEvents.rightClicked(`kubejs:${name}_elixir_relic`, event => {
        event.player.tags.add(name)
        event.item.count -= 1
    })
    ItemEvents.rightClicked(`kubejs:${name}_elixir`, event => {
        event.player.persistentData.putBoolean(`kubejs:${name}_elixir`, true)
        event.item.count -= 1
    })

    EntityEvents.hurt(event => {
        if (event.source.type == 'onFire') return
        if (!event.entity.persistentData.contains(`kubejs:${name}_elixir`)) return
        let randomNumber = Math.random();
        if (randomNumber > event.entity.persistentData.arcane_affinity) return
        event.entity.potionEffects.add(`${id}`, 25)
    })
})

const elixir_shards = {
    'kubejs:lesser_elixir_shard': 0.01,
    'kubejs:superior_elixir_shard': 0.02,
    'kubejs:paramount_elixir_shard': 0.03,
    'kubejs:exalted_elixir_shard': 0.05
}


Object.entries(elixir_shards).forEach(([name, chance]) => {
    ItemEvents.rightClicked(`${name}`, event => {
        event.player.persistentData.arcane_affinity += chance
        event.item.count -= 1
        let act_chance = chance*100
        event.player.tell(`+${act_chance}% Elixir Activation Chance`)
    })
})

