const GLT = [
    'common_bounty_reward',
    'uncommon_bounty_reward',
    'rare_bounty_reward',

    'common_pet_lootbox',
    'uncommon_pet_lootbox',
    'rare_pet_lootbox',
    
    'warlock',
    'warden',
    'rogue',
    'scout',
    'blacksmith',
    'summoner',

    'warlock_lootbox',
    'warden_lootbox',
    'rogue_lootbox',
    'scout_lootbox',
    'blacksmith_lootbox',
    'summoner_lootbox',

    'cave_dweller',
    'drowned_necromancer',

    'alchemist_lootbox',
    'arcane_ranger_lootbox',
    'kensei_lootbox',
    'guardian_lootbox',
    'explorer_lootbox',
    'bounty_hunter_lootbox',
    'dreamweaver_lootbox',
    'spirit_caller_lootbox',
    'berserker_lootbox',
    'kensei_lootbox',
    'beastmaster_lootbox',
    'spellsword_lootbox',
    'battlemage_lootbox',
    'conjurer_lootbox',

    'beastmaster_lootbox',
    'bloodripper_lootbox',

    'food_lootbox',

    'gorilla_effigy',
    'grizzly_bear_effigy',
    'crow_effigy',
    'crocodile_effigy',
    'capuchin_monkey_effigy',
    'elephant_effigy',
    'komodo_dragon_effigy',
    'tarantula_hawk_effigy',
    'mantis_shrimp_effigy',
    'kangaroo_effigy',
    'bald_eagle_effigy',
    'sugar_glider_effigy',
    'mimic_octopus_effigy',
    'flutter_effigy',


    'lesser_summoning_discs',
    'superior_summoning_discs',
    'paramount_summoning_discs',

    'common_coin_day',
    'common_coin_night',

    'uncommon_coin_day',
    'uncommon_coin_night',

    'rare_coin_day',
    'rare_coin_night',

    'cold_eye',
    'lost_eye',
    'nether_eye',


]

const x_class_lootboxes = {
    common_coin_day: [
        '1x numismaticoverhaul:bronze_coin'
    ],
    common_coin_night: [
        '2x numismaticoverhaul:bronze_coin'
    ],

    uncommon_coin_day: [
        '3x numismaticoverhaul:bronze_coin'
    ],
    uncommon_coin_night: [
        '5x numismaticoverhaul:bronze_coin'
    ],

    rare_coin_day: [
        '1x numismaticoverhaul:silver_coin'
    ],
    rare_coin_night: [
        '2x numismaticoverhaul:silver_coin'
    ],
    guardian : [
        Item.of('tetra:modular_single', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"霹雳长矛\"}'},honing_progress:359,id:\"5130e1d4-ade0-4728-8cbe-2325686aa622\",\"single/binding\":\"single/binding\",\"single/binding_material\":\"single_binding/irons_spellbooks_hogskin\",\"single/handle\":\"single/light_handle\",\"single/handle/settle_progress\":286,\"single/handle:single_handle/wrap/irons_spellbooks_hogskin\":0,\"single/head\":\"single/trident\",\"single/head/settle_progress\":301,\"single/head:spearhead/serrated\":1,\"single/head:spearhead/tempered\":1,\"single/light_handle_material\":\"light_handle/byg_cherry\",\"single/trident_material\":\"trident/trident\",weapon_attributes:'{\"parent\":\"bettercombat:trident\",\"attributes\":{\"attack_range\":3.0,\"pose\":\"\",\"two_handed\":false,\"category\":\"trident\",\"attacks\":[{\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.0,\"angle\":0.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_stab\",\"swing_sound\":{\"id\":\"bettercombat:spear_stab\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('dungeons_gear:thundering', 1).enchant('minecraft:loyalty', 3),        
        Item.of('irons_spellbooks:priest_chestplate', '{Damage:364}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:priest_helmet', '{Damage:250}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('irons_spellbooks:iron_spell_book', '{ISB_spellbook:{activeSpellIndex:1,spellSlots:5,spells:[{level:5,sid:"irons_spellbooks:shield",slot:0},{level:5,sid:"irons_spellbooks:blessing_of_life",slot:1},{level:5,sid:"irons_spellbooks:fortify",slot:2},{level:5,sid:"irons_spellbooks:healing_circle",slot:3},{level:3,sid:"irons_spellbooks:oakskin",slot:4}]},display:{Name:\'{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#FFFFFF","text":"守护者的魔法书"}\'},rpgloot.randomize:0b}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1),
        Item.of('dungeons_gear:totem_of_soul_protection', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:mana_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:concentration_amulet').enchant('soulbound:soulbound', 1).enchant('mending', 1),
    ],
    
    battlemage: [
        Item.of('irons_spellbooks:wandering_magician_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:mana_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:mana_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:mana_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('irons_spellbooks:cast_time_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:cooldown_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:wandering_magician_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:wandering_magician_leggings', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:gold_spell_book', '{ISB_spellbook:{activeSpellIndex:0,spellSlots:6,spells:[{level:6,sid:"irons_spellbooks:earthquake",slot:0},{level:4,sid:"irons_spellbooks:lightning_lance",slot:1},{level:7,sid:"irons_spellbooks:electrocute",slot:2},{level:5,sid:"irons_spellbooks:icicle",slot:3},{level:6,sid:"irons_spellbooks:starfall",slot:4},{level:6,sid:"irons_spellbooks:burning_dash",slot:5}]},RepairCost:0,csController:{},display:{Name:\'{"text":"战斗法师的法典"}\'},rpgloot.randomize:0b}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1)

    ],
    conjurer: [
        Item.of('irons_spellbooks:cultist_chestplate', '{Damage:364}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:cultist_helmet', '{Damage:250}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('irons_spellbooks:conjurers_talisman').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,ISB_spell:{level:3,type:55},RepairCost:0,display:{Name:'{\"text\":\"织根的尖牙\"}'},honing_progress:435,id:\"10e46b5b-09ef-49aa-b6c9-9190617bb149\",\"sword/basic_hilt_material\":\"basic_hilt/blaze_rod\",\"sword/blade\":\"sword/short_blade\",\"sword/grip_loop_material\":\"grip_loop/iron\",\"sword/guard\":\"sword/socket\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/hilt:hilt/wrap/leather\":0,\"sword/pommel\":\"sword/grip_loop\",\"sword/short_blade_material\":\"short_blade/iron\",\"sword/socket_material\":\"sword_socket/socket_pristine_lapis\",weapon_attributes:'{\"parent\":\"bettercombat:dagger\",\"attributes\":{\"attack_range\":3.5,\"two_handed\":false,\"category\":\"dagger\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"conditions\":[\"DUAL_WIELDING_SAME_CATEGORY\",\"MAIN_HAND_ONLY\"],\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.4,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:dual_handed_stab\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:villager_spell_book', '{ISB_spellbook:{activeSpellIndex:4,spellSlots:6,spells:[{level:5,sid:"irons_spellbooks:raise_dead",slot:0},{level:3,sid:"irons_spellbooks:summon_vex",slot:1},{level:5,sid:"irons_spellbooks:summon_polar_bear",slot:2},{level:5,sid:"irons_spellbooks:ascension",slot:3},{level:3,sid:"irons_spellbooks:angel_wing",slot:4},{level:9,sid:"irons_spellbooks:wisp",slot:5}]},display:{Name:\'{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#FFFFFF","text":"死亡图腾"}\'},rpgloot.randomize:0b}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1)
    ],

    blacksmith: [
        Item.of('sophisticatedstorage:iron_chest', 2, '{woodType:"oak"}'),
        Item.of('create:potato_cannon', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('immersive_armors:steampunk_leggings', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('sophisticatedbackpacks:backpack').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '64x minecraft:potato',
        '32x minecraft:baked_potato',
        'tetra:basic_workbench',
        Item.of('create_sa:copper_jetpack_chestplate', '{Damage:0,tagWater:1600.0d}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_shield', '{Damage:0,HideFlags:1,honing_progress:144,id:"4c40ef2e-4e2a-4638-b51a-e1f95b67e1c6","shield/boss":"shield/sturdy_boss","shield/buckler_material":"buckler/iron","shield/grip":"shield/straps","shield/plate":"shield/buckler","shield/straps_material":"straps/leather","shield/sturdy_boss_material":"sturdy_boss/iron"}').enchant('dungeons_gear:refreshment', 1).enchant('minecraft:loyalty', 2).enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_single', '{Damage:0,HideFlags:1,honing_progress:277,id:"110505d3-b3c1-484f-a2ec-475a0bcd47fc","single/handle":"single/light_handle","single/handle/settle_progress":261,"single/handle:single_handle/wrap/leather":0,"single/head":"single/spearhead","single/head/settle_progress":337,"single/light_handle_material":"light_handle/oak","single/spearhead_material":"spearhead/iron",tetraticScaleY:1.75f,tetraticScaleZ:1.5f,weapon_attributes:\'{"parent":"bettercombat:trident","attributes":{"attack_range":3.0,"pose":"","two_handed":false,"category":"trident","attacks":[{"hitbox":"FORWARD_BOX","damage_multiplier":1.0,"angle":0.0,"upswing":0.5,"animation":"bettercombat:one_handed_stab","swing_sound":{"id":"bettercombat:spear_stab","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}').enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('minecraft:loyalty', 2),
        Item.of('tetra:modular_double', '{"double/basic_hammer_left_material":"basic_hammer/iron","double/basic_hammer_right_material":"basic_hammer/iron","double/basic_handle_material":"basic_handle/spruce","double/handle":"double/basic_handle","double/head_left":"double/basic_hammer_left","double/head_right":"double/basic_hammer_right",id:"11fcb1de-a10f-4ccd-9bef-92b45297aa88"}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        
    ],
    spellsword:[
        Item.of('irons_spellbooks:iron_spell_book', '{ISB_spellbook:{activeSpellIndex:0,spellSlots:5,spells:[{level:5,sid:"irons_spellbooks:ray_of_siphoning",slot:0},{level:5,sid:"irons_spellbooks:blaze_storm",slot:1},{level:3,sid:"irons_spellbooks:blood_needles",slot:2},{level:5,sid:"irons_spellbooks:firebolt",slot:3},{level:4,sid:"irons_spellbooks:acid_orb",slot:4}]},csController:{},display:{Name:\'{"bold":false,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"#FFFFFF","text":"破晓"}\'},rpgloot.randomize:0b}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1),
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,csController:{},display:{Name:'{\"text\":\"星碎\"}'},honing_progress:416,id:\"c14632e3-9ab4-463e-8d02-b9d820246e67\",repairCount:1,rpgloot.randomize:0b,\"sword/basic_hilt_material\":\"basic_hilt/stick\",\"sword/blade\":\"sword/saber_blade\",\"sword/blade/settle_progress\":352,\"sword/blade:blade/hooked\":1,\"sword/counterweight_material\":\"counterweight/byg_lament\",\"sword/fuller\":\"sword/reinforced_fuller\",\"sword/guard\":\"sword/socket\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/hilt/settle_progress\":285,\"sword/hilt:hilt/wrap/irons_spellbooks_hogskin\":0,\"sword/pommel\":\"sword/counterweight\",\"sword/reinforced_fuller_material\":\"reinforced_fuller/irons_spellbooks_frozen_bone\",\"sword/saber_blade_material\":\"saber_blade/iron\",\"sword/socket_material\":\"sword_socket/socket_jasper\",weapon_attributes:'{\"parent\":\"bettercombat:cutlass\",\"attributes\":{\"attack_range\":3.5,\"two_handed\":false,\"category\":\"cutlass\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":1.0,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:sword_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":1.0,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:sword_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('dungeons_gear:dark_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('irons_spellbooks:shadowwalker_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:cooldown_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1)
    ],
    kensei:[        
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"混沌\"}'},honing_progress:435,id:\"6fe25198-2b29-4e00-8ee6-04941bb9bb1d\",rpgloot.randomize:0b,\"sword/basic_hilt_material\":\"basic_hilt/bone\",\"sword/blade\":\"sword/katana_blade\",\"sword/blade:blade/tempered\":1,\"sword/fuller\":\"sword/reinforced_fuller\",\"sword/grip_loop_material\":\"grip_loop/bone\",\"sword/guard\":\"sword/sturdy_guard\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/hilt:hilt/wrap/chain\":0,\"sword/katana_blade_material\":\"katana_blade/stone\",\"sword/pommel\":\"sword/grip_loop\",\"sword/reinforced_fuller_material\":\"reinforced_fuller/gold\",\"sword/sturdy_guard_material\":\"sturdy_guard/iron\",weapon_attributes:'{\"parent\":\"bettercombat:katana\",\"attributes\":{\"attack_range\":3.5,\"pose\":\"bettercombat:pose_two_handed_katana\",\"two_handed\":true,\"category\":\"katana\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:two_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:katana_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"VERTICAL_PLANE\",\"damage_multiplier\":1.2,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:two_handed_slash_vertical_left\",\"swing_sound\":{\"id\":\"bettercombat:katana_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"VERTICAL_PLANE\",\"damage_multiplier\":1.2,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:two_handed_slash_vertical_right\",\"swing_sound\":{\"id\":\"bettercombat:katana_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:two_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:katana_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_bow', '{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,"bow/compound_string_material":"compound_string/phantom_membrane","bow/flatbow_stave_material":"flatbow_stave/crimson","bow/riser":"bow/sights","bow/sights_material":"sights/bone","bow/stave":"bow/flatbow_stave","bow/stave/settle_progress":438,"bow/stave:quality":1,"bow/stave:stave/wrap/phantom_membrane":0,"bow/string":"bow/compound_string","bow/string/settle_progress":541,display:{Name:\'{"text":"和谐"}\'},honing_progress:63,id:"fe1cca98-6e6b-480e-9303-dd575ad2b84e",rpgloot.randomize:0b}').enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('minecraft:infinity', 1),
        Item.of('1x minecraft:arrow').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('epicsamurai:iron_samurai_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1), 
        Item.of('supplementaries:quiver').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('irons_spellbooks:emerald_stoneplate_ring').enchant('soulbound:soulbound', 1).enchant('mending', 1),
    ],
    berserker:[ 
        '12x minecraft:cooked_beef',
        Item.of('epicsamurai:steel_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('dungeons_gear:totem_of_regeneration', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('dungeons_gear:champions_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_double', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"超凡\"}'},\"double/basic_handle_material\":\"basic_handle/blaze_rod\",\"double/binding\":\"double/socket\",\"double/claw_right_material\":\"claw/gold\",\"double/handle\":\"double/basic_handle\",\"double/handle:basic_handle/wrap/phantom_membrane\":0,\"double/head_left\":\"double/tomahawk_left\",\"double/head_right\":\"double/claw_right\",\"double/socket_material\":\"double_socket/socket_pristine_lapis\",\"double/tomahawk_left_material\":\"tomahawk/iron\",honing_progress:573,id:\"bb95f900-35ae-4ace-a837-87206a248fb7\",weapon_attributes:'{\"parent\":\"bettercombat:axe\",\"attributes\":{\"attack_range\":3.0,\"two_handed\":false,\"category\":\"axe\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":1.0,\"angle\":90.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:axe_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":1.0,\"angle\":90.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:axe_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('minecraft:loyalty', 4),
        Item.of('tetra:modular_double', '{Damage:0,EnchantmentMapping:{"minecraft:loyalty":"double/head_left"},HideFlags:1,RepairCost:0,display:{Name:\'{"text":"暴怒"}\'},"double/basic_handle_material":"basic_handle/blaze_rod","double/binding":"double/socket","double/claw_right_material":"claw/gold","double/handle":"double/basic_handle","double/handle:basic_handle/wrap/phantom_membrane":0,"double/head_left":"double/tomahawk_left","double/head_left/settle_progress":298,"double/head_right":"double/claw_right","double/socket_material":"double_socket/socket_pristine_lapis","double/tomahawk_left_material":"tomahawk/stone",honing_progress:500,id:"ad592628-2ff5-4475-8ea6-477b700754e2",weapon_attributes:\'{"parent":"bettercombat:axe","attributes":{"attack_range":3.0,"two_handed":false,"category":"axe","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":1.0,"angle":90.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:axe_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":1.0,"angle":90.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:axe_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}').enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('minecraft:loyalty', 4).enchant('dungeons_gear:committed', 2)
    ],
    spirit_caller:[
        '12x croptopia:mead',
        Item.of('kubejs:orb_of_slaughtered_foes').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('kubejs:spirit_crystal').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('dungeons_gear:thief_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('dungeons_gear:thief_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('born_in_chaos_v1:dark_metal_armor_leggings', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"以太\"}'},honing_progress:344,id:\"0c9c028b-bd44-4b8c-a44f-5987b17e320b\",repairCount:1,\"sword/basic_hilt_material\":\"basic_hilt/bone\",\"sword/blade\":\"sword/rapier_blade\",\"sword/decorative_pommel_material\":\"decorative_pommel/iron\",\"sword/guard\":\"sword/socket\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/hilt/settle_progress\":270,\"sword/hilt:hilt/wrap/leather\":0,\"sword/pommel\":\"sword/decorative_pommel\",\"sword/rapier_blade_material\":\"rapier_blade/iron\",\"sword/socket_material\":\"sword_socket/socket_pristine_emerald\",weapon_attributes:'{\"parent\":\"bettercombat:rapier\",\"attributes\":{\"attack_range\":2.0,\"two_handed\":false,\"category\":\"rapier\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.9,\"angle\":90.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:rapier_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.1,\"angle\":0.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_stab\",\"swing_sound\":{\"id\":\"bettercombat:rapier_stab\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1)
    ],

    alchemist:[
        Item.of('dungeons_gear:satchel_of_elixirs', '{Damage:0}'),
        'davespotioneering:compound_brewing_stand',
        '12x croptopia:mead',
        Item.of('immersive_armors:steampunk_leggings', '{Damage:0,RepairCost:7}').enchant('dungeons_gear:potion_aura', 2).enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_sword', '{Damage:0,EnchantmentMapping:{"minecraft:loyalty":"sword/blade"},HideFlags:1,RepairCost:0,display:{Name:\'{"text":"酸骨"}\'},honing_progress:403,id:"d3e294d4-d61a-4aa9-a744-4389bf3734f8","sword/basic_hilt_material":"basic_hilt/blaze_rod","sword/blade":"sword/throwing_knife","sword/blade/settle_progress":279,"sword/counterweight_material":"counterweight/bone","sword/guard":"sword/socket","sword/hilt":"sword/basic_hilt","sword/hilt/settle_progress":269,"sword/hilt:hilt/wrap/string":0,"sword/pommel":"sword/counterweight","sword/socket_material":"sword_socket/socket_amethyst","sword/throwing_knife_material":"throwing_knife/bone",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":3.5,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}').enchant('minecraft:loyalty', 3).enchant('soulbound:soulbound', 1).enchant('mending', 1)
    ],
    bounty_hunter:[
        Item.of('immersive_armors:bone_boots', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('immersive_armors:bone_leggings', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('immersive_armors:heavy_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),        
        Item.of('immersive_armors:heavy_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        '3x kubejs:kangaroo_summoning_stone',
        Item.of('immersive_armors:steampunk_helmet', '{Damage:0}'),
        Item.of('immersive_armors:steampunk_helmet', '{Damage:0}'),
        Item.of('immersive_armors:steampunk_helmet', '{Damage:0}'),
        Item.of('tetra:modular_sword', '{Damage:0,HideFlags:1,honing_progress:175,id:"f1aca1ff-812a-4bcf-a282-9cca9fab8a2f","sword/basic_hilt_material":"basic_hilt/stick","sword/blade":"sword/stiletto_blade","sword/decorative_pommel_material":"decorative_pommel/stone","sword/guard":"sword/makeshift_guard","sword/hilt":"sword/basic_hilt","sword/makeshift_guard_material":"makeshift_guard/stone","sword/pommel":"sword/decorative_pommel","sword/stiletto_blade_material":"stiletto_blade/bone",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":2.0,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}'),
        Item.of('tetra:modular_sword', '{Damage:0,HideFlags:1,honing_progress:175,id:"f1aca1ff-812a-4bcf-a282-9cca9fab8a2f","sword/basic_hilt_material":"basic_hilt/stick","sword/blade":"sword/stiletto_blade","sword/decorative_pommel_material":"decorative_pommel/stone","sword/guard":"sword/makeshift_guard","sword/hilt":"sword/basic_hilt","sword/makeshift_guard_material":"makeshift_guard/stone","sword/pommel":"sword/decorative_pommel","sword/stiletto_blade_material":"stiletto_blade/bone",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":2.0,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}'),
        Item.of('tetra:modular_sword', '{Damage:0,HideFlags:1,honing_progress:175,id:"f1aca1ff-812a-4bcf-a282-9cca9fab8a2f","sword/basic_hilt_material":"basic_hilt/stick","sword/blade":"sword/stiletto_blade","sword/decorative_pommel_material":"decorative_pommel/stone","sword/guard":"sword/makeshift_guard","sword/hilt":"sword/basic_hilt","sword/makeshift_guard_material":"makeshift_guard/stone","sword/pommel":"sword/decorative_pommel","sword/stiletto_blade_material":"stiletto_blade/bone",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":2.0,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}'),
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"轻风剑\"}'},honing_progress:564,id:\"965875ee-8149-4d9f-a3a8-d9cab6693c77\",\"sword/basic_hilt_material\":\"basic_hilt/blaze_rod\",\"sword/blade\":\"sword/rapier_blade\",\"sword/blade:blade/serrated\":1,\"sword/blade:blade/tempered\":1,\"sword/grip_loop_material\":\"grip_loop/phantom_membrane\",\"sword/guard\":\"sword/socket\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/hilt:hilt/wrap/phantom_membrane\":0,\"sword/pommel\":\"sword/grip_loop\",\"sword/rapier_blade_material\":\"rapier_blade/iron\",\"sword/socket_material\":\"sword_socket/socket_pristine_emerald\",weapon_attributes:'{\"parent\":\"bettercombat:rapier\",\"attributes\":{\"attack_range\":3.5,\"two_handed\":false,\"category\":\"rapier\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.9,\"angle\":90.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:rapier_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.1,\"angle\":0.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_stab\",\"swing_sound\":{\"id\":\"bettercombat:rapier_stab\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('dungeons_gear:guarding_strike', 2),
        Item.of('tetra:modular_shield', '{Damage:0,EnchantmentMapping:{"minecraft:loyalty":"shield/plate"},HideFlags:1,RepairCost:0,display:{Name:\'{"text":"尖兵的回旋镖"}\'},honing_progress:146,id:"2ed505e4-7a52-45d5-a27a-29eed82564df","shield/basic_grip_material":"basic_grip/copper","shield/boss":"shield/sturdy_boss","shield/grip":"shield/basic_grip","shield/grip/settle_progress":309,"shield/grip:workable":1,"shield/plate":"shield/tower","shield/plate/settle_progress":387,"shield/plate:shield/aerodynamic_trim/iron":0,"shield/plate:shield/studs/iron":0,"shield/sturdy_boss_material":"sturdy_boss/iron","shield/tower_material":"tower/oak"}').enchant('minecraft:loyalty', 3).enchant('soulbound:soulbound', 1).enchant('mending', 1),
    ],
    dreamweaver:[        
        Item.of('tetra:modular_bow', '{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,"bow/basic_string_material":"basic_string/phantom_membrane","bow/recurve_stave_material":"recurve_stave/byg_cherry","bow/riser":"bow/sights","bow/sights_material":"sights/echo_shard","bow/stave":"bow/recurve_stave","bow/stave/settle_progress":434,"bow/stave:stave/wrap/phantom_membrane":0,"bow/string":"bow/basic_string","bow/string/settle_progress":537,display:{Name:\'{"text":"战争贩子"}\'},honing_progress:141,id:"60504119-d64a-4c84-81de-20be3cf250c8",rpgloot.randomize:0b}').enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('minecraft:infinity', 1),        
        Item.of('archers_paradox:quartz_arrow').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"苦痛\"}'},honing_progress:240,id:\"4eeba3a5-9d15-4fda-9167-0fd243c2eef6\",rpgloot.randomize:0b,\"sword/basic_hilt_material\":\"basic_hilt/stick\",\"sword/blade\":\"sword/short_blade\",\"sword/blade:blade/serrated\":1,\"sword/decorative_pommel_material\":\"decorative_pommel/iron\",\"sword/guard\":\"sword/socket\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/pommel\":\"sword/decorative_pommel\",\"sword/short_blade_material\":\"short_blade/bone\",\"sword/socket_material\":\"sword_socket/socket_prase\",weapon_attributes:'{\"parent\":\"bettercombat:dagger\",\"attributes\":{\"attack_range\":3.0,\"two_handed\":false,\"category\":\"dagger\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"conditions\":[\"DUAL_WIELDING_SAME_CATEGORY\",\"MAIN_HAND_ONLY\"],\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.4,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:dual_handed_stab\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('environmental:thief_hood', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('immersive_armors:heavy_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('immersive_armors:heavy_leggings', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('supplementaries:quiver').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('kubejs:mindshatter_orb').enchant('soulbound:soulbound', 1).enchant('mending', 1),
    ],
    arcane_ranger:[
        Item.of('tetra:modular_bow', '{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,"bow/basic_string_material":"basic_string/irons_spellbooks_hogskin","bow/extended_rest_material":"extended_rest/iron","bow/recurve_stave_material":"recurve_stave/crimson","bow/riser":"bow/extended_rest","bow/stave":"bow/recurve_stave","bow/stave/settle_progress":402,"bow/stave:stave/wrap/hide":0,"bow/string":"bow/basic_string","bow/string/settle_progress":343,display:{Name:\'{"text":"狂怒"}\'},honing_progress:148,id:"20aff03e-384f-4a76-8638-bd3de4505bbe"}').enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('minecraft:infinity', 1),
        Item.of('supplementaries:quiver').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('1x archers_paradox:quartz_arrow').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '25x archers_paradox:lightning_arrow',
        '32x minecraft:baked_potato',
        Item.of('dungeons_gear:archers_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1), 
        Item.of('irons_spellbooks:pumpkin_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('windswept:snow_boots', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '25x archers_paradox:explosive_arrow',
        Item.of('dungeons_gear:totem_of_shielding', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_sword', '{Damage:0,EnchantmentMapping:{},HideFlags:1,ISB_spell:{id:"irons_spellbooks:ascension",level:1},RepairCost:0,display:{Name:\'{"text":"风暴"}\'},honing_progress:331,id:"2385c744-5e20-4f7a-bb73-73ed30f0dffd",rpgloot.randomize:0b,"sword/basic_hilt_material":"basic_hilt/stick","sword/binding_material":"sword_binding/string","sword/blade":"sword/short_blade","sword/blade/settle_progress":321,"sword/counterweight_material":"counterweight/bone","sword/guard":"sword/binding","sword/hilt":"sword/basic_hilt","sword/hilt/settle_progress":252,"sword/hilt:hilt/wrap/leather":0,"sword/pommel":"sword/counterweight","sword/short_blade_material":"short_blade/iron",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":3.0,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1),
        Item.of('tetra:modular_sword', '{Damage:0,EnchantmentMapping:{},HideFlags:1,ISB_spell:{id:"irons_spellbooks:oakskin",level:6},RepairCost:0,display:{Name:\'{"text":"权力"}\'},honing_progress:290,id:"a40b1219-6873-4521-9bd1-ceda689ece11",rpgloot.randomize:0b,"sword/basic_hilt_material":"basic_hilt/stick","sword/binding_material":"sword_binding/string","sword/blade":"sword/short_blade","sword/blade/settle_progress":306,"sword/counterweight_material":"counterweight/bone","sword/guard":"sword/binding","sword/hilt":"sword/basic_hilt","sword/hilt/settle_progress":226,"sword/hilt:hilt/wrap/leather":0,"sword/pommel":"sword/counterweight","sword/short_blade_material":"short_blade/iron",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":3.0,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1)
    ],
    explorer:[
        'minecraft:white_bed',
        '32x minecraft:baked_potato',
        '64x musketmod:cartridge',
        Item.of('immersive_armors:warrior_chestplate').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('immersive_armors:wooden_leggings').enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('airhop:air_hop', 2),
        Item.of('musketmod:musket_with_bayonet', '{Damage:0,RepairCost:3,rpgloot.randomize:0b}').enchant('minecraft:knockback', 2).enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('artifacts:eternal_steak').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('create_sa:slime_boots', "{Damage:0,RepairCost:3,display:{Name:'{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\" \"},{\"translate\":\"item.create_sa.slime_boots\"},{\"text\":\" \"},{\"translate\":\"modifier.name.dmcloot.swiftness\"}],\"translate\":\"modifier.name.dmcloot.mending\"}'},dmcloot.mending:1,dmcloot.rarity:\"common\",dmcloot.swiftness:1,rpgloot.randomize:0b}").enchant('soulbound:soulbound', 1).enchant('mending', 1).enchant('dungeons_gear:explorer', 3),
        Item.of('sophisticatedbackpacks:diamond_backpack').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('vc_gliders:paraglider_iron', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('tetra:modular_sword', '{Damage:0,EnchantmentMapping:{},HideFlags:1,ISB_spell:{id:"irons_spellbooks:summon_horse",level:3},RepairCost:0,display:{Name:\'{"text":"Stallion\\\'s Call"}\'},honing_progress:500,id:"242e5345-107c-4d63-9c8e-46c5bed66af6",rpgloot.randomize:0b,"sword/basic_hilt_material":"basic_hilt/blaze_rod","sword/binding_material":"sword_binding/string","sword/blade":"sword/short_blade","sword/blade:blade/hooked":1,"sword/blade:blade/tempered":1,"sword/counterweight_material":"counterweight/iron","sword/guard":"sword/binding","sword/hilt":"sword/basic_hilt","sword/hilt:hilt/wrap/phantom_membrane":0,"sword/pommel":"sword/counterweight","sword/short_blade_material":"short_blade/iron",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":3.0,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1),
        Item.of('grapplemod:grapplinghook', '{Damage:0,custom:{angle:20.0d,attract:0b,attractradius:3.0d,crc32:2252267022L,detachonkeyrelease:0b,doublehook:0b,enderstaff:0b,hookgravity:1.0d,maxlen:30.0d,motor:0b,motoracceleration:0.2d,motordampener:0b,motormaxspeed:4.0d,motorwhencrouching:0b,motorwhennotcrouching:1b,oneropepull:0b,phaserope:0b,playermovementmult:1.0d,pullbackwards:1b,reelin:1b,repel:0b,repelforce:1.0d,rocket:0b,rocket_active_time:0.5d,rocket_force:1.0d,rocket_refuel_ratio:15.0d,rocket_vertical_angle:0.0d,smartdoublemotor:1b,smartmotor:0b,sneakingangle:10.0d,sneakingverticalthrowangle:0.0d,sticky:0b,throwspeed:2.0d,verticalthrowangle:0.0d}}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
    ],

    bloodripper: [
        Item.of('tetra:modular_double', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"荒土\"}'},\"double/basic_handle_material\":\"basic_handle/irons_spellbooks_frozen_bone\",\"double/binding\":\"double/binding\",\"double/binding_material\":\"double_binding/byg_shulkren_vine\",\"double/butt_right_material\":\"butt/iron\",\"double/handle\":\"double/basic_handle\",\"double/handle:basic_handle/wrap/leather\":0,\"double/head_left\":\"double/sickle_left\",\"double/head_left:double/warforged\":0,\"double/head_right\":\"double/butt_right\",\"double/head_right/settle_progress\":325,\"double/sickle_left_material\":\"sickle/stalwart_dungeons_tungsten\",honing_progress:562,id:\"7da7c4b0-4d7b-4400-b26e-39762217f324\",repairCount:1,rpgloot.randomize:0b,weapon_attributes:'{\"parent\":\"bettercombat:sickle\",\"attributes\":{\"attack_range\":3.0,\"two_handed\":false,\"category\":\"sickle\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.9,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.9,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"conditions\":[\"DUAL_WIELDING_SAME_CATEGORY\",\"MAIN_HAND_ONLY\"],\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.2,\"angle\":0.0,\"upswing\":0.5,\"animation\":\"bettercombat:dual_handed_slash_cross\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":0.8,\"randomness\":0.1}},{\"conditions\":[\"DUAL_WIELDING_SAME_CATEGORY\",\"OFF_HAND_ONLY\"],\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.3,\"angle\":0.0,\"upswing\":0.5,\"animation\":\"bettercombat:dual_handed_slash_uncross\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":1.2,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1),
        Item.of('tetra:modular_double', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"计算\"}'},\"double/basic_handle_material\":\"basic_handle/irons_spellbooks_frozen_bone\",\"double/binding\":\"double/binding\",\"double/binding_material\":\"double_binding/byg_shulkren_vine\",\"double/butt_right_material\":\"butt/iron\",\"double/handle\":\"double/basic_handle\",\"double/handle:basic_handle/wrap/leather\":0,\"double/head_left\":\"double/sickle_left\",\"double/head_left:double/warforged\":0,\"double/head_right\":\"double/butt_right\",\"double/head_right/settle_progress\":325,\"double/sickle_left_material\":\"sickle/stalwart_dungeons_tungsten\",honing_progress:562,id:\"7da7c4b0-4d7b-4400-b26e-39762217f324\",repairCount:1,rpgloot.randomize:0b,weapon_attributes:'{\"parent\":\"bettercombat:sickle\",\"attributes\":{\"attack_range\":3.0,\"two_handed\":false,\"category\":\"sickle\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.9,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.9,\"angle\":120.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"conditions\":[\"DUAL_WIELDING_SAME_CATEGORY\",\"MAIN_HAND_ONLY\"],\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.2,\"angle\":0.0,\"upswing\":0.5,\"animation\":\"bettercombat:dual_handed_slash_cross\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":0.8,\"randomness\":0.1}},{\"conditions\":[\"DUAL_WIELDING_SAME_CATEGORY\",\"OFF_HAND_ONLY\"],\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.3,\"angle\":0.0,\"upswing\":0.5,\"animation\":\"bettercombat:dual_handed_slash_uncross\",\"swing_sound\":{\"id\":\"bettercombat:sickle_slash\",\"volume\":1.0,\"pitch\":1.2,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1),
        Item.of('born_in_chaos_v1:nightmare_mantleofthe_night_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('dungeons_gear:battle_robes_leggings', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('immersive_armors:wither_chestplate').enchant('soulbound:soulbound', 1).enchant('mending', 1),
    ],

    beastmaster: [
        '5x kubejs:rare_pet_lootbox',
        '5x kubejs:uncommon_pet_lootbox',
        Item.of('tetra:modular_sword', '{Damage:0,EnchantmentMapping:{},HideFlags:1,ISB_spell:{id:"irons_spellbooks:summon_polar_bear",level:7},RepairCost:0,display:{Name:\'{"text":"关系"}\'},honing_progress:335,id:"b47d6fc1-a4c8-4723-b9f9-8491d762466e",rpgloot.randomize:0b,"sword/basic_hilt_material":"basic_hilt/stick","sword/binding_material":"sword_binding/string","sword/blade":"sword/short_blade","sword/blade/settle_progress":325,"sword/counterweight_material":"counterweight/bone","sword/guard":"sword/binding","sword/hilt":"sword/basic_hilt","sword/hilt/settle_progress":256,"sword/hilt:hilt/wrap/leather":0,"sword/pommel":"sword/counterweight","sword/short_blade_material":"short_blade/iron",weapon_attributes:\'{"parent":"bettercombat:dagger","attributes":{"attack_range":3.0,"two_handed":false,"category":"dagger","attacks":[{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_right","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"hitbox":"HORIZONTAL_PLANE","damage_multiplier":0.8,"angle":150.0,"upswing":0.5,"animation":"bettercombat:one_handed_slash_horizontal_left","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}},{"conditions":["DUAL_WIELDING_SAME_CATEGORY","MAIN_HAND_ONLY"],"hitbox":"FORWARD_BOX","damage_multiplier":1.4,"angle":150.0,"upswing":0.5,"animation":"bettercombat:dual_handed_stab","swing_sound":{"id":"bettercombat:dagger_slash","volume":1.0,"pitch":1.0,"randomness":0.1}}]}}\'}').enchant('soulbound:soulbound', 1).enchant('minecraft:mending', 1),
        Item.of('tetra:modular_sword', "{Damage:0,EnchantmentMapping:{},HideFlags:1,RepairCost:0,display:{Name:'{\"text\":\"尖骨\"}'},honing_progress:268,id:\"13d807e8-fecb-4111-9bdf-100ead8e85ca\",repairCount:1,rpgloot.randomize:0b,\"sword/basic_hilt_material\":\"basic_hilt/irons_spellbooks_frozen_bone\",\"sword/blade\":\"sword/stiletto_blade\",\"sword/blade/settle_progress\":313,\"sword/grip_loop_material\":\"grip_loop/phantom_membrane\",\"sword/guard\":\"sword/socket\",\"sword/hilt\":\"sword/basic_hilt\",\"sword/hilt/settle_progress\":338,\"sword/hilt:hilt/wrap/phantom_membrane\":0,\"sword/pommel\":\"sword/grip_loop\",\"sword/socket_material\":\"sword_socket/socket_pristine_emerald\",\"sword/stiletto_blade_material\":\"stiletto_blade/iron\",weapon_attributes:'{\"parent\":\"bettercombat:dagger\",\"attributes\":{\"attack_range\":3.5,\"two_handed\":false,\"category\":\"dagger\",\"attacks\":[{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_right\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"hitbox\":\"HORIZONTAL_PLANE\",\"damage_multiplier\":0.8,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:one_handed_slash_horizontal_left\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}},{\"conditions\":[\"DUAL_WIELDING_SAME_CATEGORY\",\"MAIN_HAND_ONLY\"],\"hitbox\":\"FORWARD_BOX\",\"damage_multiplier\":1.4,\"angle\":150.0,\"upswing\":0.5,\"animation\":\"bettercombat:dual_handed_stab\",\"swing_sound\":{\"id\":\"bettercombat:dagger_slash\",\"volume\":1.0,\"pitch\":1.0,\"randomness\":0.1}}]}}'}").enchant('soulbound:soulbound', 1).enchant('mending', 1),        Item.of('dungeons_gear:evocation_robes_leggings', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('dungeons_gear:rugged_climbing_chestplate', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('dungeons_gear:rugged_climbing_helmet', '{Damage:0}').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        '32x minecraft:baked_potato',
        Item.of('kubejs:rare_beastmaster_totem').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('kubejs:summoners_gateway').enchant('soulbound:soulbound', 1).enchant('mending', 1),


    
    
    ],

    warlock:[
        'kubejs:rune_of_the_guardian',
        'kubejs:rune_of_the_battlemage',
        'kubejs:rune_of_the_conjurer',
        'kubejs:rune_of_the_spellsword', 
        'kubejs:rune_of_the_kensei', 
        'kubejs:rune_of_the_berserker', 
         
        'kubejs:rune_of_the_alchemist',
        'kubejs:rune_of_the_bounty_hunter', 
        'kubejs:rune_of_the_dreamweaver', 
        'kubejs:rune_of_the_arcane_ranger',
        'kubejs:rune_of_the_explorer',
        'kubejs:tarantula_hawk_summoning_stone',
        Item.of('sophisticatedbackpacks:backpack').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('prefab:item_house_improved').enchant('soulbound:soulbound', 1).enchant('mending', 1)
    ],
    warden:[
        'kubejs:rune_of_the_guardian',
        'kubejs:rune_of_the_battlemage',
        'kubejs:rune_of_the_conjurer',
        'kubejs:rune_of_the_spellsword', 
        'kubejs:rune_of_the_kensei', 
        'kubejs:rune_of_the_berserker', 
         
        'kubejs:rune_of_the_alchemist',
        'kubejs:rune_of_the_bounty_hunter', 
        'kubejs:rune_of_the_dreamweaver', 
        'kubejs:rune_of_the_arcane_ranger',
        'kubejs:rune_of_the_explorer',
        'kubejs:grizzly_bear_summoning_stone',
        Item.of('sophisticatedbackpacks:backpack').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('prefab:item_house_improved').enchant('soulbound:soulbound', 1).enchant('mending', 1)
    ],
    rogue:[
        'kubejs:rune_of_the_guardian',
        'kubejs:rune_of_the_battlemage',
        'kubejs:rune_of_the_conjurer',
        'kubejs:rune_of_the_spellsword', 
        'kubejs:rune_of_the_kensei', 
        'kubejs:rune_of_the_berserker', 
         
        'kubejs:rune_of_the_alchemist',
        'kubejs:rune_of_the_bounty_hunter', 
        'kubejs:rune_of_the_dreamweaver', 
        'kubejs:rune_of_the_arcane_ranger',
        'kubejs:rune_of_the_explorer',
        'kubejs:kangaroo_summoning_stone',
        Item.of('sophisticatedbackpacks:backpack').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('prefab:item_house_improved').enchant('soulbound:soulbound', 1).enchant('mending', 1)
    ],
    scout:[
        Item.of('alexsmobs:falconry_glove').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('alexsmobs:falconry_hood').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        'kubejs:bald_eagle_summoning_stone',
        'kubejs:rune_of_the_guardian',
        'kubejs:rune_of_the_battlemage',
        'kubejs:rune_of_the_conjurer',
        'kubejs:rune_of_the_spellsword', 
        'kubejs:rune_of_the_kensei', 
        'kubejs:rune_of_the_berserker', 
        'kubejs:rune_of_the_alchemist',
        'kubejs:rune_of_the_bounty_hunter', 
        'kubejs:rune_of_the_dreamweaver', 
        'kubejs:rune_of_the_arcane_ranger',
        'kubejs:rune_of_the_explorer',
        Item.of('sophisticatedbackpacks:backpack').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('prefab:item_house_improved').enchant('soulbound:soulbound', 1).enchant('mending', 1)
      ],
      summoner:[
        'kubejs:rune_of_the_bloodripper',
        'kubejs:rune_of_the_beastmaster',
        'kubejs:rune_of_the_spirit_caller',
        Item.of('sophisticatedbackpacks:backpack').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        'kubejs:komodo_dragon_summoning_stone',
        Item.of('prefab:item_house_improved').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        'minecraft:saddle'

      ],


    alchemist_lootbox:[
        '3x minecraft:nether_wart',
        '3x minecraft:blaze_powder',
        Item.of('minecraft:potion', '{Potion:"minecraft:awkward"}')
    ],
    arcane_ranger_lootbox:[
        '10x archers_paradox:lightning_arrow',
        '10x archers_paradox:blaze_arrow',
        '15x archers_paradox:quartz_arrow',
        'kubejs:food_crate',
        
    ],
    explorer_lootbox: [
        '8x musketmod:cartridge'
    ], 
    guardian_lootbox:[
        Item.of('minecraft:splash_potion',3 , '{Potion:"irons_spellbooks:instant_mana_two"}'),
        'kubejs:food_crate',
        

    ],

    bounty_hunter_lootbox: [
        Item.of('minecraft:potion',2 , '{Potion:"dungeons_gear:short_strength"}'),
        Item.of('minecraft:splash_potion', 2, '{Potion:"feathers:strong_energized_potion"}'),
        'kubejs:food_crate',
        '2x kubejs:kangaroo_summoning_stone',
    ],
    dreamweaver_lootbox: [
        '5x archers_paradox:blaze_arrow',
        '3x kubejs:food_crate',
        
    ],    
    spirit_caller_lootbox:[
        '12x musketmod:cartridge',
        
        'kubejs:food_crate',
        
    ],
    berserker_lootbox:[
        '2x kubejs:food_crate',
        
    ],
    blacksmith_lootbox: [
        Item.of('minecraft:potion', 6, '{Potion:"minecraft:water"}'),
    ],
    kensei_lootbox:[
        '8x archers_paradox:blaze_arrow',
        '8x archers_paradox:frost_arrow',
        '8x minecraft:arrow',
        'kubejs:food_crate',
        
    ],
    conjurer_lootbox:[
        Item.of('minecraft:splash_potion', '{Potion:"irons_spellbooks:instant_mana_two"}'),
        
    ],
    spellsword_lootbox:[
        Item.of('minecraft:potion', '{Potion:"irons_spellbooks:instant_mana_one"}'),
        'kubejs:food_crate',
        
    ],
    battlemage_lootbox:[
        Item.of('minecraft:splash_potion', '{Potion:"irons_spellbooks:instant_mana_two"}'),
        'kubejs:food_crate',
        
    ],
    warlock_lootbox: [
        'kubejs:food_crate',
        'kubejs:tarantula_hawk_summoning_stone'
    ],
    warden_lootbox: [
        'kubejs:food_crate',
        'kubejs:grizzly_bear_summoning_stone'
    ],
    rogue_lootbox:[
        'kubejs:food_crate',
        'kubejs:kangaroo_summoning_stone'
    ],
    scout_lootbox:[
        'kubejs:food_crate',
        'kubejs:bald_eagle_summoning_stone'
    ],
    summoner_lootbox: [
        'kubejs:food_crate',
        'kubejs:komodo_dragon_summoning_stone'
    ],

    beastmaster_lootbox: [
        '2x kubejs:rare_pet_lootbox',
        '2x kubejs:uncommon_pet_lootbox',
        '2x kubejs:common_pet_lootbox',
        Item.of('kubejs:summoners_gateway').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('kubejs:summoners_gateway').enchant('soulbound:soulbound', 1).enchant('mending', 1),
        Item.of('kubejs:summoners_gateway').enchant('soulbound:soulbound', 1).enchant('mending', 1),


    ],


    gorilla_effigy: [
        'kubejs:gorilla_bone_effigy'
    ],
    grizzly_bear_effigy: [
        'kubejs:grizzly_bear_bone_effigy'
    ],
    crow_effigy: [
        'kubejs:crow_bone_effigy'
    ],
    crocodile_effigy: [
        'kubejs:crocodile_bone_effigy'
    ],
    capuchin_monkey_effigy: [
        'kubejs:capuchin_monkey_bone_effigy'
    ],
    elephant_effigy: [
        'kubejs:elephant_bone_effigy'
    ],
    komodo_dragon_effigy: [
        'kubejs:komodo_dragon_bone_effigy'
    ],
    tarantula_hawk_effigy: [
        'kubejs:tarantula_hawk_bone_effigy'
    ],
    mantis_shrimp_effigy: [
        'kubejs:mantis_shrimp_bone_effigy'
    ],
    kangaroo_effigy: [
        'kubejs:kangaroo_bone_effigy'
    ],
    bald_eagle_effigy: [
        'kubejs:bald_eagle_bone_effigy'
    ],
    sugar_glider_effigy: [
        'kubejs:sugar_glider_bone_effigy'
    ],
    mimic_octopus_effigy: [
        'kubejs:mimic_octopus_bone_effigy'
    ],
    flutter_effigy: [
        'kubejs:flutter_bone_effigy'
    ],
    cave_dweller: [
        'kubejs:evasion_elixir'
    ],
    drowned_necromancer: [
        'endrem:exotic_eye'
    ],

    lesser_summoning_discs: [
        'kubejs:lesser_summoning_disc'
    ],
    superior_summoning_discs: [
        'kubejs:superior_summoning_disc'
    ],
    paramount_summoning_discs: [
        'kubejs:paramount_summoning_disc'
    ],



}

GLT.forEach((GLT) => {
    ServerEvents.genericLootTables((event) => {
        event.addGeneric(`loot_boxes/${GLT}`, (table) => {
        })
	})
})


LootJS.modifiers((event) => {
    Object.entries(x_class_lootboxes).forEach(([name, items]) => {
      event.addLootTableModifier(`loot_boxes/${name}`).addLoot(items);
    });
  });




