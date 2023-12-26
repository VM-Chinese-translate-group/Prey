let first_trigger = 0
let second_trigger = 0
let third_trigger = 0
let invuln_trigger = 0
let phase_detector = 0
let ender_golem_counter = 0

EntityEvents.hurt('minecraft:ender_dragon', event => {
   //Utils.server.tell(`First Trigger == `+first_trigger)
   //Utils.server.tell(`Invuln Trigger == `+invuln_trigger)

   if (event.entity.health <= event.entity.maxHealth * 0.75) {
      if (first_trigger != 1) {
         first_trigger += 1
         invuln_trigger += 1
         Utils.server.runCommand(`/execute in minecraft:the_end run summon dungeons_mobs:endersent 0 70 -25 {Tags:["phase_one"]}`)/// add the spawn coords here
      }}
})

EntityEvents.hurt('minecraft:ender_dragon', event => {
   //Utils.server.tell(`Second Trigger == `+second_trigger)
  // Utils.server.tell(`Invuln Trigger == `+invuln_trigger)
    if (event.entity.health <= event.entity.maxHealth * 0.50) {
      if (second_trigger != 1) {
      second_trigger += 1
      invuln_trigger += 1
      Utils.server.runCommand(`/execute in minecraft:the_end run summon cataclysm:ender_golem -20 70 0 {Tags:["phase_two"]}`)/// add the spawn coords here
      Utils.server.runCommand(`/execute in minecraft:the_end run summon cataclysm:ender_golem 0 70 -20 {Tags:["phase_two"]}`)/// add the spawn coords here
      }}
})
EntityEvents.hurt('minecraft:ender_dragon', event => {
   //Utils.server.tell(`third Trigger == `+third_trigger)
   //Utils.server.tell(`Invuln Trigger == `+invuln_trigger)
    if (event.entity.health <= event.entity.maxHealth * 0.25) {
      if (third_trigger != 1) {
         third_trigger += 1
         invuln_trigger += 1
         Utils.server.runCommand(`/execute in minecraft:the_end run summon cataclysm:ender_guardian -20 70 0 {Tags:["phase_three"]}`)/// add the spawn coords here
      }}
}
   
      
   // if (event.entity.health <= (event.entity.maxHealth * 0.5)) {
   //     if (second_trigger = false) return
  //      second_trigger = true
  //      invuln_trigger = true
  //      phase_detector++;
 //       Utils.server.runCommandSilent()/// Spawn whatever entities here
 //   }
//    if (event.entity.health <= (event.entity.maxHealth * 0.25)) {
  //      if (third_trigger = false) return
 //       third_trigger = true
     //   invuln_trigger = true
    //    phase_detector++
   //     Utils.server.runCommandSilent()/// Spawn whatever entities here
   // }
//})

///EntityEvents.death('born_in_chaos_v1:sir_pumpkinhead', event => {
  ///  if (!invuln_trigger) return
   /// invuln_trigger = false
   /// Utils.server.tell('龙的护盾已被击落')
////})

   )
EntityEvents.hurt('minecraft:ender_dragon', event => {
   if (invuln_trigger != 0) {
      Utils.server.tell('龙受到另一些实体生命力提供的护盾')
      event.cancel()
      
   }


})


EntityEvents.hurt('minecraft:ender_dragon', event => {
   if (event.source.player.mainHandItem == 'minecraft:stick') {
      event.entity.health = event.entity.maxHealth
      first_trigger = 0
      second_trigger = 0
      third_trigger = 0
      invuln_trigger = 0
      phase_detector = 0
   }
   
})


EntityEvents.death('dungeons_mobs:endersent', event => {
   if (!event.entity.tags.contains('phase_one')) return
   invuln_trigger -= 1
   Utils.server.tell('龙的护盾已被击落')
   
})

EntityEvents.death('cataclysm:ender_golem', event => {
   if (!event.entity.tags.contains('phase_two')) return
   ender_golem_counter+= 1
   if (ender_golem_counter != 2) return
   invuln_trigger -= 1
   Utils.server.tell('龙的护盾已被击落')
   
})

EntityEvents.death('cataclysm:ender_guardian', event => {
   if (!event.entity.tags.contains('phase_three')) return
   invuln_trigger -= 1
   Utils.server.tell('龙的护盾已被击落')
   
})