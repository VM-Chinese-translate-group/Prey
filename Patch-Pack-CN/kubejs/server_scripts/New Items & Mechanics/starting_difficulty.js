PlayerEvents.loggedIn((event) => {
    if (event.server.persistentData.first_load == false) return
    event.server.persistentData.putBoolean('first_load', false)
    let d = event.level.getDifficulty().toString()
    let difficulty = d.toLowerCase()
    event.server.persistentData.putString('difficulty', `${difficulty}`)
    let player = event.player
    let player_username = player.username
    event.server.scheduleInTicks(200, event => {
        Utils.server.tell('5分钟和平阶段已开始。')
        Utils.server.runCommand('/mode Stage0 noreload')
        Utils.server.runCommand('/difficulty peaceful')
        event.server.persistentData.putInt('lev_death', 0)
        event.server.persistentData.putInt('golem_counter', 0)
        event.server.persistentData.putInt('guardian_counter', 0)
        event.server.persistentData.putInt('harbinger_counter',0)
        event.server.persistentData.putInt('ignis_counter', 0)
        event.server.persistentData.putInt('summoner_counter', 0)
        event.server.persistentData.putInt('server_stage', 1)
        player.persistentData.putFloat('arcane_affinity', 0.01)
        player.persistentData.putInt('HVT_counter', 0)

    })
    event.server.scheduleInTicks(6000, event => {
        Utils.server.runCommand('/mode Stage1 noreload')
        Utils.server.runCommand(`/difficulty ${difficulty}`)
        Utils.server.tell('5分钟和平阶段已结束。做好准备。')
        })
})


PlayerEvents.loggedIn((event) => {
    if (event.player.persistentData.contains('player_first_login')) return
    event.player.persistentData.putBoolean('player_first_login', true)
    let player = event.player
    let player_username = player.username
    event.server.scheduleInTicks(200, event => {
        Utils.server.runCommandSilent('/playertabs setNumberOfTabs 4')
        Utils.server.runCommandSilent('/playertabs setTabName 0 Gear')
        Utils.server.runCommandSilent('/playertabs setTabName 1 Food')
        Utils.server.runCommandSilent('/playertabs setTabName 2 Blocks')
        Utils.server.runCommandSilent('/playertabs setTabName 3 Misc')
        Utils.server.runCommandSilent(`/parcool limitation enable ${player_username}`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility BreakfallReady false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Roll false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility CatLeap false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility VerticalWallRun false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility HorizontalWallRun false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility ClimbUp false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility ClingToCliff false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility WallSlide false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility WallJump false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Crawl false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Slide false`)
        Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Tap false`)
        player.persistentData.putInt('subclass_counter', 1)
        player.persistentData.putInt('hvt_complete', 0)
    })
})

