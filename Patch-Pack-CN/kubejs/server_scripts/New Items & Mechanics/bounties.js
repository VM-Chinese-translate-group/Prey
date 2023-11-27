
let bounty_counter = new Map()

const creeper = [
	'creeperoverhaul:badlands_creeper',
	'creeperoverhaul:bamboo_creeper',
	'creeperoverhaul:beach_creeper',
	'creeperoverhaul:cave_creeper',
	'creeperoverhaul:dark_oak_creeper',
	'creeperoverhaul:desert_creeper',
	'creeperoverhaul:dripstone_creeper',
	'creeperoverhaul:hills_creeper',
	'creeperoverhaul:jungle_creeper',
	'creeperoverhaul:mushroom_creeper',
	'creeperoverhaul:ocean_creeper',
	'creeperoverhaul:savannah_creeper',
	'creeperoverhaul:snowy_creeper',
	'creeperoverhaul:spruce_creeper',
	'creeperoverhaul:swamp_creeper',
	'born_in_chaos_v1:phantom_creeper',
	'dungeons_mobs:icy_creeper',
	'minecraft:creeper',
]

creeper.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`creeper_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`苦力怕击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`苦力怕击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			event.entity.tell(`苦力怕击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			event.entity.tell(`苦力怕击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			event.entity.tell(`苦力怕击杀数：${bounty_counter[player_username]}`)
		}
    }
	})
})

const skeleton = [
	'born_in_chaos_v1:baby_skeleton',
	'born_in_chaos_v1:baby_skeleton_2',
	'born_in_chaos_v1:baby_skeleton_minion',
	'born_in_chaos_v1:bone_imp',
	'born_in_chaos_v1:bone_imp_2',
	'born_in_chaos_v1:bone_imp_minion',
	'born_in_chaos_v1:bonescaller',
	'born_in_chaos_v1:supreme_bonescaller',
	'born_in_chaos_v1:dark_vortex',
	'born_in_chaos_v1:decrepit_skeleton',
	'born_in_chaos_v1:restless_spirit',
	'born_in_chaos_v1:spirit_guide',
	'born_in_chaos_v1:skeleton_thrasher',
	'born_in_chaos_v1:skeleton_demoman',
	'dungeons_mobs:necromancer',
	'dungeons_mobs:sunken_skeleton',
	'irons_spellbooks:citadel_keeper',
	'irons_spellbooks:necromancer',
	'rottencreatures:skeleton_lackey',
	'minecraft:wither_skeleton',
	'minecraft:stray'
]


skeleton.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
			if (!event.source.player.tags.contains(`skeleton_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`骷髅击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`骷髅击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			event.entity.tell(`骷髅击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			event.entity.tell(`骷髅击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			event.entity.tell(`骷髅击杀数：${bounty_counter[player_username]}`)
		}
    }
	})
})

const spider = [
	'born_in_chaos_v1:wither_scuttler',
	'minecraft:spider',
	'minecraft:cave_spider',
]

spider.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`spider_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`蜘蛛击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`蜘蛛击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			event.entity.tell(`蜘蛛击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			event.entity.tell(`蜘蛛击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			event.entity.tell(`蜘蛛击杀数：${bounty_counter[player_username]}`)
		}
    }
	})
})
const zombie = [
	'minecraft:zombie',
	'born_in_chaos_v1:barrel_zombie',
	'born_in_chaos_v1:decaying_zombie',
	'born_in_chaos_v1:door_knight',
	'born_in_chaos_v1:zombie_clown',
	'born_in_chaos_v1:fallen_chaos_knight',
	'dungeons_mobs:frozen_zombie',
	'dungeons_mobs:jungle_zombie',
	'rottencreatures:burned',
	'rottencreatures:frostbitten',
	'rottencreatures:glacial_hunter',
	'rottencreatures:mummy',
	'rottencreatures:swampy',
	'rottencreatures:undead_miner',
	'rottencreatures:zombie_lackey',
	'undead_revamp2:bomber',
	'undead_revamp2:sucker',
	'undead_revamp2:the_moonflower',
	'undead_revamp2:thebeartamer',
	'undead_revamp2:thehorrors',
	'undead_revamp2:thehunter',
	'undead_revamp2:thesmoker',
	'undead_revamp2:thespectre',
	'undead_revamp2:thespitter',
	'undead_revamp2:theswarmer',
	'minecraft:husk'
]


zombie.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`zombie_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`僵尸击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`僵尸击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			event.entity.tell(`僵尸击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			event.entity.tell(`僵尸击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			event.entity.tell(`僵尸击杀数：${bounty_counter[player_username]}`)
		}
    }
	})
})

const enderman = [
	'born_in_chaos_v1:seared_spirit',
	'born_in_chaos_v1:pumpkin_spirit',
	'dungeons_mobs:blastling',
	'dungeons_mobs:snareling',
	'minecraft:enderman',
]
enderman.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`enderman_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`末影人击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`末影人击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			event.entity.tell(`末影人击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			event.entity.tell(`末影人击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			event.entity.tell(`末影人击杀数：${bounty_counter[player_username]}`)
		}
    }
	})
})

const pillager = [
	'dungeons_mobs:geomancer',
	'minecraft:pillager',
	'minecraft:illusioner',
	'minecraft:evoker',
	'minecraft:ravager',
	'minecraft:vindicator',
	'dungeons_mobs:iceologer',
	'dungeons_mobs:mage',
	'dungeons_mobs:mountaineer',
	'dungeons_mobs:royal_guard',
	'dungeons_mobs:windcaller',
	'irons_spellbooks:cryomancer',
	'irons_spellbooks:pyromancer',
	'irons_spellbooks:archevoker',
	'minecraft:witch',
	'takesapillage:archer',
	'takesapillage:skirmisher',
	'takesapillage:legioner',
]

pillager.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`pillager_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`掠夺者击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`掠夺者击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			event.entity.tell(`掠夺者击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			event.entity.tell(`掠夺者击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			event.entity.tell(`掠夺者击杀数：${bounty_counter[player_username]}`)
		}
    }
	})
})
const piglin = [
	'dungeons_mobs:zombified_fungus_thrower',
	'minecraft:piglin',
    'minecraft:piglin_brute',
	'minecraft:zombified_piglin',
	'minecraft:hoglin',
]
piglin.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`piglin_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`猪灵击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`猪灵击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
		let player_username = event.source.player.username;
		if (bounty_counter[player_username] == undefined) {
			bounty_counter[player_username] = 0
			event.entity.tell(`猪灵击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] <= 5) {
			bounty_counter[player_username] = 0
			event.entity.tell(`猪灵击杀数：${bounty_counter[player_username]}`)
		}
		if (bounty_counter[player_username] > 5) {
			bounty_counter[player_username]-5
			event.entity.tell(`猪灵击杀数：${bounty_counter[player_username]}`)
		}
    }
	})
})

const drowned = [
	'dungeons_mobs:wavewhisperer',
	'rottencreatures:immortal',
	'rottencreatures:zap',
	'minecraft:drowned'
]

drowned.forEach((entity) => {
	EntityEvents.death(`${entity}`,event => {
		if (event.source.player) {
			
            
			if (!event.source.player.tags.contains(`drowned_active_bounty`)) return;
            

			let player_username = event.source.player.username;
			if (bounty_counter[player_username] == undefined) {
				bounty_counter[player_username] = 1
				event.source.player.tell(`溺尸击杀数：${bounty_counter[player_username]}`)
				
			} else {
				bounty_counter[player_username]++;
				event.source.player.tell(`溺尸击杀数：${bounty_counter[player_username]}`)
			}
		}
		if (event.entity.player) {
            let player_username = event.source.player.username;
            if (bounty_counter[player_username] == undefined) {
                bounty_counter[player_username] = 0
                event.entity.tell(`溺尸击杀数：${bounty_counter[player_username]}`)
            }
            if (bounty_counter[player_username] <= 5) {
                bounty_counter[player_username] = 0
                event.entity.tell(`溺尸击杀数：${bounty_counter[player_username]}`)
            }
            if (bounty_counter[player_username] > 5) {
                bounty_counter[player_username]-5
                event.entity.tell(`溺尸击杀数：${bounty_counter[player_username]}`)
            }
        }

	})
})

//const mutant = [
//	'mutantmore:mutant_blaze',
//	'mutantmore:mutant_wither_skeleton',
//	'mutantmonsters:mutant_creeper',
//	'mutantmonsters:mutant_skeleton',
  //  'mutantmonsters:mutant_zombie',
	//'mutantmonsters:mutant_enderman',
//]


const bounty_level_one = [
	
	'skeleton',
    'spider',
    'zombie',
	'drowned',
]

const bounty_level_two = [
    'enderman',
    'piglin',
    'creeper',
    'pillager',
]

//const bounty_level_three = [
    //'mutant'
//]


const bounty_hunter_trigger = false
bounty_level_one.forEach((bounty_entity) => {
    ItemEvents.rightClicked(`kubejs:${bounty_entity}_bounty`, event => {
        const player_username = event.player.username
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${bounty_entity}_bounty 1`)
        event.player.tags.add(`${bounty_entity}_active_bounty`)
        if (event.player.persistentData.contains('kubejs_class:bounty_hunter')) {
            bounty_hunter_trigger = true
        }
        Utils.server.runCommandSilent(`/tell ${player_username} 计时五分钟开始。屠杀你路上的所有${bounty_entity}。`)
        event.server.scheduleInTicks(6000, event => {
            if (bounty_counter[player_username] < 25) {
                Utils.server.runCommandSilent(`/tell ${player_username} 失败没有奖励`)
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                bounty_counter[player_username] = 0
            }
            if (bounty_counter[player_username] >= 25 && bounty_counter[player_username] <= 49) {
                Utils.server.runCommandSilent(`/tell ${player_username} 25+ 击杀数`)
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_reward`)
                if (bounty_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] > 50 && bounty_counter[player_username] < 74) {
                Utils.server.runCommandSilent(`/tell ${player_username} 50+ 击杀数`)
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_reward`)
                if (bounty_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] >= 75) {
                Utils.server.runCommandSilent(`/tell ${player_username} 75+ 击杀数`)
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_reward`)
				Utils.server.runCommandSilent(`/tag ${player_username} add ${bounty_entity}_bounty_completed`)
				
                Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(bounty_counter[player_username]-75)*3}`)
                if (bounty_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_hunter_reward`)
                }
            }
            //Utils.server.tell(`/give ${player_username} numismaticoverhaul:bronze_coin ${bounty_counter[player_username]*creeper_bounty_multiplier}`)
            //Utils.server.runCommandSilent(`/tag ${player_username} remove bounty`)
            //if (!bounty_hunter_trigger == true) return
            //	Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_hunter_reward`)
            })
        })
    })

bounty_level_two.forEach((bounty_entity) => {
    ItemEvents.rightClicked(`kubejs:${bounty_entity}_bounty`, event => {
        const player_username = event.player.username
        Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${bounty_entity}_bounty 1`)
        event.player.tags.add(`${bounty_entity}_active_bounty`)
        if (event.player.persistentData.contains('kubejs_class:bounty_hunter')) {
            bounty_hunter_trigger = true
        }
        Utils.server.runCommandSilent(`/tell ${player_username} 计时5分钟开始。屠杀你路上的所有${bounty_entity}。`)
        event.server.scheduleInTicks(6000, event => {
            if (bounty_counter[player_username] < 15) {
                Utils.server.runCommandSilent(`/tell ${player_username} 失败没有奖励`)
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                bounty_counter[player_username] = 0
            }
            if (bounty_counter[player_username] >= 15 && bounty_counter[player_username] <= 24) {
                Utils.server.runCommandSilent(`/tell ${player_username} 15+ 击杀数`)
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_reward`)
                if (bounty_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] > 25 && bounty_counter[player_username] < 49) {
                Utils.server.runCommandSilent(`/tell ${player_username} 25+ 击杀数`)
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_reward`)
                if (bounty_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_hunter_reward`)
                }
            }
            if (bounty_counter[player_username] >= 50) {
                Utils.server.runCommandSilent(`/tell ${player_username} 50+ 击杀数`)
                bounty_counter[player_username] = 0
                Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
                Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_reward`)
				Utils.server.runCommandSilent(`/tag ${player_username} add ${bounty_entity}_bounty_completed`)

                Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(bounty_counter[player_username]-50)*5}`)
                if (bounty_hunter_trigger = true) {
                    Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_hunter_reward`)
                }
            }
            //Utils.server.tell(`/give ${player_username} numismaticoverhaul:bronze_coin ${bounty_counter[player_username]*creeper_bounty_multiplier}`)
            //Utils.server.runCommandSilent(`/tag ${player_username} remove bounty`)
            //if (!bounty_hunter_trigger == true) return
            //	Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_hunter_reward`)
            })
        })
    })

//bounty_level_three.forEach((bounty_entity) => {
  //  ItemEvents.rightClicked(`kubejs:${bounty_entity}_bounty`, event => {
    //    const player_username = event.player.username
      //  Utils.server.runCommandSilent(`/clear ${player_username} kubejs:${bounty_entity}_bounty 1`)
        //event.player.tags.add(`${bounty_entity}_active_bounty`)
        //if (event.player.persistentData.contains('kubejs_class:bounty_hunter')) {
//            bounty_hunter_trigger = true
  //      }
//        Utils.server.runCommandSilent(`/tell ${player_username} 5 minute timer begins now. Slaughter all ${bounty_entity}s in your path.`)
//        event.server.scheduleInTicks(6000, event => {
 //           if (bounty_counter[player_username] < 10) {
  //              Utils.server.tell(`No Reward for Failure`)
   //             Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
    //            bounty_counter[player_username] = 0
     //       }
      //      if (bounty_counter[player_username] >= 10 && bounty_counter[player_username] <= 14) {
       //         Utils.server.tell('10+ kills')
        //////        bounty_counter[player_username] = 0
      //          Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
        //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_reward`)
          //      if (bounty_hunter_trigger = true) {
            //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_hunter_reward`)
              //  }
            //}
//            if (bounty_counter[player_username] > 15 && bounty_counter[player_username] < 24) {
  //              Utils.server.tell('15+ kills')
    //            bounty_counter[player_username] = 0
      //          Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
        //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_reward`)
          //      if (bounty_hunter_trigger = true) {
            //        Utils.server.runCommandSilent(`/give ${player_username} kubejs:uncommon_bounty_hunter_reward`)
//                }
 //           }
  //          if (bounty_counter[player_username] >= 25) {
   //             Utils.server.tell('25+ kills')
    //            bounty_counter[player_username] = 0
     ////           Utils.server.runCommandSilent(`/tag ${player_username} remove ${bounty_entity}_active_bounty`)
       //         Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_reward`)
	//			Utils.server.runCommandSilent(`/tag ${player_username} add ${bounty_entity}_bounty_completed`)
     //           Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(bounty_counter[player_username]-25)*10}`)
      //          if (bounty_hunter_trigger = true) {
       //             Utils.server.runCommandSilent(`/give ${player_username} kubejs:rare_bounty_hunter_reward`)
         //       }
          //  }
            //Utils.server.tell(`/give ${player_username} numismaticoverhaul:bronze_coin ${bounty_counter[player_username]*creeper_bounty_multiplier}`)
            //Utils.server.runCommandSilent(`/tag ${player_username} remove bounty`)
            //if (!bounty_hunter_trigger == true) return
            //	Utils.server.runCommandSilent(`/give ${player_username} kubejs:common_bounty_hunter_reward`)
            //})
        //})
    //})





	const hvt = [
		'mutantmonsters:mutant_creeper',
		'mutantmonsters:mutant_skeleton',
		'mutantmonsters:mutant_zombie',
		'mutantmonsters:mutant_enderman',
		'born_in_chaos_v1:nightmare_stalker',
		'born_in_chaos_v1:skeleton_thrasher',
		'born_in_chaos_v1:supreme_bonescaller',
		'cataclysm:deepling_angler',
		'cataclysm:deepling_brute',
		'skinandbonesremastered:skin_walker',
		'skinandbonesremastered:antelered_wendigo',
		'dungeons_mobs:drowned_necromancer',
		'irons_spellbooks:citadel_keeper',
		'undead_unleashed:frenzied_knight',
		'irons_spellbooks:archevoker'
	]	
	
let hvt_counter = new Map()
let hvt_current = new Map()
ItemEvents.rightClicked('kubejs:high_value_target', event => {
	if (event.player.persistentData.HVT_counter > 0) {
//待译
		event.player.tell('你只能拥有一张激活的高价悬赏令。')
		event.player.paint({
			hvt: {
				w: '$screenW', 
				h: '$screenH',
				x: 15,
				y: -23,
				alignX: 'left',
				alignY: 'center',
				draw: 'ingame',
				color: 'white',
				type: 'text',
				centered: false,
				text: `${hvt_current[event.player.username]}`,
				shadow: true,
				scale: 1,
			},
			hvt_title: {
				w: '$screenW', 
				h: '$screenH',
				x: -300,
				y: -35,
				alignX: 'center',
				alignY: 'center',
				draw: 'ingame',
				color: 'darkRed',
				type: 'text',
				centered: true,
				text: `高价悬赏目标`,
				shadow: true,
				scale: 1.1,
			},
		})
	} else {
		event.player.persistentData.HVT_counter+=1
		let player_username = event.player.username;
		let randomIndex = Math.floor(Math.random() * hvt.length);
		let randomEntry = hvt[randomIndex];

		let entryParts = randomEntry.split(":")[1];
		let formattedEntry = entryParts
		.replace(/_/g, ' ')
		.replace(/\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1));
		let hvt_complete = event.player.persistentData[`${randomEntry}_hvt`]
		event.entity.tags.add(`${randomEntry}_bounty`)
		Utils.server.runCommandSilent(`/tell ${player_username} 你必须击杀${hvt_complete} ${formattedEntry}`)
		hvt_current[player_username] = `${formattedEntry}`
		event.item.count--
		event.player.paint({
			hvt: {
				w: '$screenW', 
				h: '$screenH',
				x: 15,
				y: -23,
				alignX: 'left',
				alignY: 'center',
				draw: 'ingame',
				color: 'white',
				type: 'text',
				centered: false,
				text: `${formattedEntry}`,
				shadow: true,
				scale: 1,
			},
			hvt_title: {
				w: '$screenW', 
				h: '$screenH',
				x: -300,
				y: -35,
				alignX: 'center',
				alignY: 'center',
				draw: 'ingame',
				color: 'darkRed',
				type: 'text',
				centered: true,
				text: `高价悬赏目标`,
				shadow: true,
				scale: 1.1,
			},
		})
	}
})


EntityEvents.death(event => {
	if (!event.source.player) return

	let player_username = event.source.player.username
	let entity_id = event.entity.type
	let entity_name = event.entity.displayName.getString()

	if (!event.level.isNight()) return
	if (!event.source.player.tags.contains(`${entity_id}_bounty`)) return
	let hvt_complete = event.source.player.persistentData.getInt(`${entity_id}_hvt`)

	if (hvt_counter[`${player_username}_${entity_name}`] == undefined) {
		hvt_counter[`${player_username}_${entity_name}`] = 1
	} else {
		hvt_counter[`${player_username}_${entity_name}`]++
	}

	if (hvt_counter[`${player_username}_${entity_name}`] != hvt_complete) return

	let entity_id_name = `${entity_id}_hvt`

	event.source.player.persistentData[entity_id_name] += 1
	event.source.player.persistentData.HVT_counter -= 1

	hvt_counter[`${player_username}_${entity_name}`] = 0
	event.server.tell(event.entity.displayName.getString() + "悬赏完成")
	event.source.player.tags.remove(`${entity_id}_bounty`)
	if (!event.source.player.persistentData.contains(`kubejs_class:bounty_hunter`)) {
		Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(hvt_complete*2)*3}`)
		event.source.player.tell(`高价悬赏目标奖励：${(hvt_complete*2)*3} 青铜币`)
	} else {
		Utils.server.runCommandSilent(`/give ${player_username} numismaticoverhaul:bronze_coin ${(hvt_complete*2)*9}`)
		event.source.player.persistentData.souls += 50
		event.source.player.paint({souls_word: {text: `灵魂：${event.source.player.persistentData.souls}`}})
		event.source.player.tell(`邪恶强盗的奖励：${(hvt_complete*2)*9} 青铜币和50 灵魂`)
	}
})