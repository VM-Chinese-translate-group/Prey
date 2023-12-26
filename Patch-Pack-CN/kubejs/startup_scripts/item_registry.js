//priority: 900
const subclass_runes = {
    'guardian': 'guardian_rune',//
    'battlemage': 'battlemage_rune',//
    'conjurer': 'conjurer_rune',
    'spellsword': 'spellsword_rune',//
    'kensei': 'kensei_rune',//
    'berserker': 'berserker_rune',//
    'spirit_caller': 'spirit_caller_rune',//
    'alchemist': 'alchemist_rune',//
    'bounty_hunter': 'bounty_hunter_rune',//
    'dreamweaver':'dreamweaver_rune',//
    'arcane_ranger': 'arcane_ranger_rune',
    'explorer': 'explorer_rune',
    'bloodripper': 'bloodripper_rune',
    'beastmaster': 'beastmaster_rune',//
};



const summon_items = {
    'gorilla': '2 Modes: Stay, Wander. Will defend its owner from attackers',
    'grizzly_bear': '3 Modes: Follow, Stay, Wander. Can be ridden without a saddle. Will defend its owner from attackers',
    'crow': '4 Modes: Follow, Stay, Wander, Gather Items (Gathers nearby items and brings to containers). Will defend its owner from attackers and deals additional damage to the undead.',
    'crocodile': '2 modes: Wander, Stay. Crocodiles will attack by biting their target with their jaws then dragging them into Water where they proceed to do a death roll to damage their target.',
    'capuchin_monkey':'3 Modes: Follow, Stay, Wander. Will defend its owner. Give this animal an Ancient Dart to increase its attack damage and add a piercing ability.',
    'elephant': 'Cannot be commanded to follow but can be ridden. Will defend its owner from attackers.',
    'komodo_dragon': '3 Modes: Follow, Stay, Wander. Attacks inflict poison. Can be ridden with a saddle.',
    'tarantula_hawk': '3 Modes: Follow, Stay, Wander. Will aid its owner in a fight. Due to the Debilitating Sting effect, Tarantula Hawks are very good at protecting their owner, especially from arthropods.',
    'mantis_shrimp': '4 Modes: Follow, Stay, Wander, Break Blocks. Will defend its owner from attackers with its fists which inflict a fire effect. To enter Break Blocks mode give a mantis shrimp the block you wish it to break and set to wander mode.',
    'kangaroo':'3 Modes: Follow, Stay, Wander. Has a storage space in its pouch. If given a melee weapon, chestplate or helmet the kangaroo will use them in combat.',
    'bald_eagle':'3 Modes: Follow, Stay, Wander. Will defend its owner and can be used for scouting areas if used with Falconry Glove and Hood.',
    'sugar_glider': '3 Modes: Follow, Stay, Wander. Cannot attack.',
    'mimic_octopus': '3 Modes: Follow, Stay, Wander. The Mimic Octopus will defend its owner if attacked. Using certain items on it will cause it to transform.',
    'flutter': '3 Modes: Follow, Stay, Wander. The Flutter will defend its owner if attacked'
};


const lootboxes = [
    'common_bounty_reward',
    'uncommon_bounty_reward',
    'rare_bounty_reward',

    'common_bounty_hunter_reward',
    'uncommon_bounty_hunter_reward',
    'rare_bounty_hunter_reward',

    'common_pet_lootbox',
    'uncommon_pet_lootbox',
    'rare_pet_lootbox',
    'class_lootbox',
    'food_crate',
    'arcana_lootbox',
]



const bounty_level_one = [
    'creeper',
    'skeleton',
    'spider',
    'zombie',
    'enderman',
    'pillager',
    'piglin',
    'drowned',
    //'mutant'
]

const main_class_init = [
    'warlock',
    'blacksmith',
    'warden',
    'scout',
    'rogue',
    'summoner'
]

const elixirs_init = {
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
}


const lesser_discs = {
    'born_in_chaos_v1:nightmare_stalker': 'nightmare_stalker',
    'born_in_chaos_v1:supreme_bonescaller': 'supreme_bonescaller',
    'irons_spellbooks:archevoker': 'archevoker',
    'dungeons_mobs:geomancer': 'geomancer',
	'minecraft:illusioner': 'illusioner',
	'dungeons_mobs:mage': 'mage',
    'dungeons_mobs:iceologer': 'iceologer',
	'dungeons_mobs:mountaineer': 'mountaineer',
	'dungeons_mobs:royal_guard': 'royal_guard',
	'dungeons_mobs:windcaller': 'windcaller',
	'takesapillage:archer': 'archer',
	'takesapillage:skirmisher': 'skirmisher',
	'takesapillage:legioner': 'legioner',
    'irons_spellbooks:cryomancer': 'cryomancer',
    'irons_spellbooks:pyromancer': 'pyromancer',
    'irons_spellbooks:necromancer': 'necromancer',
	'born_in_chaos_v1:seared_spirit': 'seared_spirit',
	'born_in_chaos_v1:pumpkin_spirit': 'pumpkin_spirit',
}
const superior_discs = {
    'irons_spellbooks:citadel_keeper': 'citadel_keeper',
    'undead_unleashed:frenzied_knight': 'frenzied_knight',
    'dungeons_mobs:blastling': 'blastling',
	'dungeons_mobs:snareling': 'snareling',
    'dungeons_mobs:watchling': 'watchling',
    'born_in_chaos_v1:skeleton_thrasher': 'skeleton_thrasher',
    'cataclysm:deepling_angler': 'deepling_angler',
    'cataclysm:deepling_brute': 'deepling_brute',
}
const paramount_discs = {
    'mutantmonsters:mutant_creeper': 'mutant_creeper',
    'mutantmonsters:mutant_skeleton': 'mutant_skeleton',
    'mutantmonsters:mutant_zombie': 'mutant_zombie',
    'mutantmonsters:mutant_enderman': 'mutant_enderman',
}

    StartupEvents.registry('item', event => {

        main_class_init.forEach((main_class) => {
            event.create(`${main_class}`, 'basic').group('KubeJS').texture(`kubejs:item/${main_class}`)
        })

        bounty_level_one.forEach((entity) => {
            event.create(`${entity}_bounty`, 'basic').group('KubeJS').texture('kubejs:item/bounty')
        })
        
        lootboxes.forEach(common_lootboxes => {event.create(common_lootboxes, 'basic').group('KubeJS').texture('kubejs:item/crate')})

        Object.entries(summon_items).forEach(([entity, texture]) => {
            event.create(`${entity}_summoning_stone`, 'basic').group('KubeJS').texture(`kubejs:item/${entity}_totem`)
        })
    
        Object.entries(summon_items).forEach(([entity, texture]) => {
            event.create(`${entity}_bone_effigy`, 'basic').group('KubeJS').texture(`kubejs:item/bone_effigy`)
        })

        Object.entries(subclass_runes).forEach(([name, texture]) => {
            event.create(`rune_of_the_${name}`).group('KubeJS').texture(`kubejs:item/${texture}`)
        })

        event.create('admin_sword', 'sword').tier('netherite').attackDamageBaseline(1000.0).tooltip('一把武器')
        event.create('rune_of_the_dead', 'basic').group('KubeJS').texture('kubejs:item/rune_of_the_dead').rarity('epic') /// Dead King Drop
        event.create('redstone_key', 'basic').unstackable().group('KubeJS').texture('kubejs:icons/key_01b') ///Redstone Golem Drop
        event.create('forgotten_tablet', 'basic').group('KubeJS').texture('kubejs:icons/forgotten_tablet') ///Warden Golem Drop
        event.create('torn_page', 'basic').group('KubeJS').maxStackSize(10).texture('kubejs:item/torn_page')
        event.create('create_manual', 'basic').texture('kubejs:icons/book_01g') 
        event.create('subclass_skill_point', 'basic').group('KubeJS').texture('kubejs:item/subclass_point')
        event.create('evasion_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_evasion').rarity('epic')//
        event.create('speed_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_speed').rarity('epic')//
        event.create('resistance_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_resistance').rarity('epic')//
        event.create('regeneration_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_regeneration').rarity('epic')//
        event.create('shadow_form_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_shadow').rarity('epic').displayName('止心圣酿')//
        event.create('strength_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_strength').rarity('epic')//
        event.create('endurance_elixir', 'basic').group('KubeJS').texture('kubejs:item/elixir_of_endurance').rarity('epic')//
        event.create('fire_elixir', 'basic').group('KubeJS').texture('kubejs:item/fire_elixir').rarity('epic').displayName('焰息圣酿')//
        event.create('absorption_elixir', 'basic').group('KubeJS').texture('kubejs:item/absorption_elixir').rarity('epic')//
        event.create('charged_elixir', 'basic').group('KubeJS').texture('kubejs:item/charged_elixir').rarity('epic')//
        event.create('soul_steal_elixir', 'basic').group('KubeJS').texture('kubejs:item/soul_steal_elixir').rarity('epic')//
        event.create('angel_wings_elixir', 'basic').group('KubeJS').texture('kubejs:item/angelic_elixir').rarity('epic')//
        event.create('bloodlust', 'basic').displayName('遗忘石板：嗜血').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('surge', 'basic').displayName('遗忘石板：涌动').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('restoration', 'basic').displayName('遗忘石板：急迫').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('shadow_form', 'basic').displayName('遗忘石板：止心').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('strike', 'basic').displayName('遗忘石板：雷电').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('trial_blood_oath', 'basic').displayName('遗忘石板：血契').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('blood_oath', 'basic').group('KubeJS').texture('kubejs:icons/blood_oath')
        event.create('summoners_gateway', 'basic').group('KubeJS').texture('kubejs:item/totem').displayName('召唤之门')
        event.create('evasion_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：闪避圣酿')////
        event.create('speed_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：速度圣酿')////
        event.create('resistance_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：抗性圣酿')////
        event.create('regeneration_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：回复圣酿')////
        event.create('shadow_form_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：止心圣酿')//
        event.create('strength_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：力量圣酿')////
        event.create('endurance_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：耐力圣酿')////
        event.create('fire_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：焰息圣酿')////
        event.create('absorption_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：伤害吸收圣酿')////
        event.create('charged_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：超负荷圣酿')////
        event.create('soul_steal_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：灵魂窃取圣酿')////
        event.create('angel_wings_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('圣物：天使之翼圣酿')////
        event.create('common_beastmaster_totem', 'basic').group('KubeJS').texture('kubejs:item/common_beastmaster_totem').rarity('common')
        event.create('uncommon_beastmaster_totem', 'basic').group('KubeJS').texture('kubejs:item/uncommon_beastmaster_totem').rarity('uncommon')
        event.create('rare_beastmaster_totem', 'basic').group('KubeJS').texture('kubejs:item/rare_beastmaster_totem').rarity('epic')
        event.create('time_turner', 'basic').group('KubeJS').texture('kubejs:item/time_turner').rarity('uncommon')
        event.create('high_value_target', 'basic').group('KubeJS').texture('kubejs:item/hvt')
        event.create('familiar_journey', 'basic').displayName('一段熟悉的旅途').group('KubeJS').texture('kubejs:item/old_yeller').rarity('common')
        event.create('betrayal', 'sword').tier('stone').attackDamageBaseline(1.0).group('KubeJS').texture('kubejs:item/betrayal').rarity('uncommon')
        event.create('spirit_crystal', 'basic').group('KubeJS').texture('kubejs:item/spirit_crystal').rarity('rare')
        event.create('orb_of_slaughtered_foes', 'basic').group('KubeJS').texture('kubejs:item/orb_of_slaughtered_foes').rarity('epic')
        event.create('mindshatter_orb', 'basic').group('KubeJS').texture('kubejs:item/mindshatter_orb').rarity('epic')
        event.create('lesser_elixir_shard', "basic").group('KubeJS').texture('kubejs:item/lesser_elixir_shard').rarity('common')
        event.create('superior_elixir_shard', "basic").group('KubeJS').texture('kubejs:item/superior_elixir_shard').rarity('uncommon')
        event.create('paramount_elixir_shard', "basic").group('KubeJS').texture('kubejs:item/paramount_elixir_shard').rarity('rare')
        event.create('exalted_elixir_shard', "basic").group('KubeJS').texture('kubejs:item/exalted_elixir_shard').rarity('epic')
        event.create(`lesser_summoning_disc`, 'basic').group('KubeJS').texture('kubejs:item/lesser_summoning_disc').rarity('uncommon')
        event.create(`superior_summoning_disc`, 'basic').group('KubeJS').texture('kubejs:item/superior_summoning_disc').rarity('rare')
        event.create(`paramount_summoning_disc`, 'basic').group('KubeJS').texture('kubejs:item/paramount_summoning_disc').rarity('epic')
        event.create('breakfall', "basic").group('KubeJS').texture('kubejs:item/breakfall').rarity('common').displayName('技能币：缓降技') /// Skills always enabled: Pole Climbing, fast run, safety tap
        event.create('catleap', "basic").group('KubeJS').texture('kubejs:item/catleap').rarity('common').displayName('技能币：猫扑')
        event.create('vertical_wallrun', "basic").group('KubeJS').texture('kubejs:item/vwallrun').rarity('common').displayName('技能币：蹬壁上墙')
        event.create('horizontal_wallrun', "basic").group('KubeJS').texture('kubejs:item/hwallrun').rarity('common').displayName('技能币：水平跑墙')
        event.create('crawl', "basic").group('KubeJS').texture('kubejs:item/crawl').rarity('common').displayName('技能币：爬行') //include crawl and slide
        event.create('ledgegrab', "basic").group('KubeJS').texture('kubejs:item/ledgegrab').rarity('common').displayName('技能币：壁架抓取') /// include climb up, cling to cliff, and wall slide, wall jump
	event.create('bloodripper_grim', "basic").group('KubeJS').texture('kubejs:item/bloodripper_grim').rarity('rare').displayName('血裂者的魔法书')
    
    });
  StartupEvents.registry('sound_event', event => {
        event.create('kubejs:sounds/bloodripper.ogg')
    })





    
