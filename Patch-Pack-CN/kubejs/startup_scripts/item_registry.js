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
    'gorilla': '2种模式：停留，游荡。能保护主人免受攻击',
    'grizzly_bear': '3种模式：跟随，停留，游荡。无需鞍即可骑。能保护主人免受攻击',
    'crow': '4种模式：跟随，停留，游荡，收集物品（收集附近的物品并放入容器）。能保护主人免受攻击并对亡灵造成额外伤害。',
    'crocodile': '2种模式：游荡，停留。 鳄鱼的攻击方式是用下颚咬住目标，然后将其拖入水中，并在水中进行死亡翻滚，对目标造成伤害。',
    'capuchin_monkey':'3种模式：跟随，停留，游荡。能保护它的主人。给该动物佩戴古代飞镖，可提高其攻击伤害并增加穿透能力。',
    'elephant': '无法命令它跟随，但能骑上它。能保护主人免受攻击。',
    'komodo_dragon': '3种模式：跟随，停留，游荡。攻击会造成中毒。可佩鞍骑行。',
    'tarantula_hawk': '3种模式：跟随，停留，游荡。会在战斗中帮助主人。由于具有衰弱螫伤效果，沙漠蛛蜂可以很好地保护主人，尤其是免受节肢动物的伤害。',
    'mantis_shrimp': '4种模式：跟随，停留，游荡，破坏方块。它会用拳头保护主人免受攻击，拳头会产生火焰效果。要进入破坏方块模式，请给螳螂虾一个你希望它破坏的方块，并将其设置为游荡模式。',
    'kangaroo':'3种模式：跟随，停留，游荡。袋中有一个储物空间。袋鼠会在战斗中使用获得的近战武器、胸甲或头盔。',
    'bald_eagle':'3种模式：跟随，停留，游荡。它能保护主人，如果与猎鹰手套和兜帽一起使用，还能用于侦查区域。',
    'sugar_glider': '3种模式：跟随，停留，游荡。无法攻击。',
    'mimic_octopus': '3种模式：跟随，停留，游荡。如果受到攻击，拟态章鱼会保护主人。对它使用某些物品会使它变形。',
    'flutter': '3种模式：跟随，停留，游荡。如果受到攻击，花飘飘会保护它的主人'
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

        event.create('admin_sword', 'sword').tier('netherite').attackDamageBaseline(1000.0).tooltip('一种物品')
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
        event.create('fire_elixir', 'basic').group('KubeJS').texture('kubejs:item/fire_elixir').rarity('epic').displayName('Dragons Breath Elixir')//
        event.create('absorption_elixir', 'basic').group('KubeJS').texture('kubejs:item/absorption_elixir').rarity('epic')//
        event.create('charged_elixir', 'basic').group('KubeJS').texture('kubejs:item/charged_elixir').rarity('epic')//
        event.create('soul_steal_elixir', 'basic').group('KubeJS').texture('kubejs:item/soul_steal_elixir').rarity('epic')//
        event.create('angel_wings_elixir', 'basic').group('KubeJS').texture('kubejs:item/angelic_elixir').rarity('epic')//
        event.create('bloodlust', 'basic').displayName('Forgotten Tablet: Bloodlust').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('surge', 'basic').displayName('Forgotten Tablet: Surge').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('restoration', 'basic').displayName('Forgotten Tablet: Restoration').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('shadow_form', 'basic').displayName('Forgotten Tablet: Heartstop').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('strike', 'basic').displayName('Forgotten Tablet: Strike').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('trial_blood_oath', 'basic').displayName('Forgotten Tablet: Blood Oath').group('KubeJS').texture('kubejs:icons/forgotten_tablet')
        event.create('blood_oath', 'basic').group('KubeJS').texture('kubejs:icons/blood_oath')
        event.create('summoners_gateway', 'basic').group('KubeJS').texture('kubejs:item/totem').displayName('Summoning Gateway')
        event.create('evasion_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Evasion Elixir')////
        event.create('speed_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Speed Elixir')////
        event.create('resistance_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Resistance Elixir')////
        event.create('regeneration_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Regeneration Elixir')////
        event.create('shadow_form_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Heart Stop Elixir')//
        event.create('strength_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Strength Elixir')////
        event.create('endurance_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Endurance Elixir')////
        event.create('fire_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Dragons Breath Elixir')////
        event.create('absorption_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Absorption Elixir')////
        event.create('charged_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Charged Elixir')////
        event.create('soul_steal_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Soul Steal Elixir')////
        event.create('angel_wings_elixir_relic', 'basic').group('KubeJS').texture('kubejs:item/relic').rarity('epic').displayName('Relic: Angel Wings Elixir')////
        event.create('common_beastmaster_totem', 'basic').group('KubeJS').texture('kubejs:item/common_beastmaster_totem').rarity('common')
        event.create('uncommon_beastmaster_totem', 'basic').group('KubeJS').texture('kubejs:item/uncommon_beastmaster_totem').rarity('uncommon')
        event.create('rare_beastmaster_totem', 'basic').group('KubeJS').texture('kubejs:item/rare_beastmaster_totem').rarity('epic')
        event.create('time_turner', 'basic').group('KubeJS').texture('kubejs:item/time_turner').rarity('uncommon')
        event.create('high_value_target', 'basic').group('KubeJS').texture('kubejs:item/hvt')
        event.create('familiar_journey', 'basic').displayName('A Familiar Journey').group('KubeJS').texture('kubejs:item/old_yeller').rarity('common')
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
        event.create('breakfall', "basic").group('KubeJS').texture('kubejs:item/breakfall').rarity('common').displayName('Skill Token: Breakfall') /// Skills always enabled: Pole Climbing, fast run, safety tap
        event.create('catleap', "basic").group('KubeJS').texture('kubejs:item/catleap').rarity('common').displayName('Skill Token: CatLeap')
        event.create('vertical_wallrun', "basic").group('KubeJS').texture('kubejs:item/vwallrun').rarity('common').displayName('Skill Token: Vertical Wallrun')
        event.create('horizontal_wallrun', "basic").group('KubeJS').texture('kubejs:item/hwallrun').rarity('common').displayName('Skill Token: Horizontal Wallrun')
        event.create('crawl', "basic").group('KubeJS').texture('kubejs:item/crawl').rarity('common').displayName('Skill Token: Crawl') //include crawl and slide
        event.create('ledgegrab', "basic").group('KubeJS').texture('kubejs:item/ledgegrab').rarity('common').displayName('Skill Token: Ledge Grab') /// include climb up, cling to cliff, and wall slide, wall jump

    
    
    });




    