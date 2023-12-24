
ItemEvents.rightClicked('kubejs:breakfall', event => {
    let player = event.player
    let player_username = event.player.username
    if (player.tags.contains('breakfall')) return
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility BreakfallReady true`)
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Roll true`)
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Tap true`)
    player.tell('Skill Acquired: Breakfall')
    player.tags.add('breakfall')
    event.item.count -= 1
})

ItemEvents.rightClicked('kubejs:catleap', event => {//
    let player = event.player
    let player_username = event.player.username
    if (player.tags.contains('catleap')) return
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility CatLeap true`)
    player.tell('Skill Acquired: CatLeap')
    player.tags.add('catleap')
    event.item.count -= 1
})

ItemEvents.rightClicked('kubejs:vertical_wallrun', event => {
    let player = event.player
    let player_username = event.player.username
    if (player.tags.contains('vwallrun')) return
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility VerticalWallRun true`)
    player.tell('Skill Acquired: Vertical Wallrun')
    player.tags.add('vwallrun')
    event.item.count -= 1
})

ItemEvents.rightClicked('kubejs:horizontal_wallrun', event => {
    let player = event.player
    let player_username = event.player.username
    if (player.tags.contains('hwallrun')) return
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility HorizontalWallRun true`)
    player.tell('Skill Acquired: Horizontal Wallrun')
    player.tags.add('hwallrun')
    event.item.count -= 1
})

ItemEvents.rightClicked('kubejs:ledgegrab', event => {//
    let player = event.player
    let player_username = event.player.username
    if (player.tags.contains('ledge_grab')) return
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility ClimbUp true`)
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility ClingToCliff true`)
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility WallSlide true`)
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility WallJump true`)
    player.tell('Skill Acquired: Ledge Grab')
    player.tags.add('ledge_grab')
    event.item.count -= 1
})

ItemEvents.rightClicked('kubejs:crawl', event => { //
    let player = event.player
    let player_username = event.player.username
    if (player.tags.contains('crawl')) return
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Crawl true`)
    Utils.server.runCommandSilent(`/parcool limitation set ${player_username} possibility Slide true`)
    player.tell('Skill Acquired: Crawl')
    player.tags.add('crawl')
    event.item.count -= 1
})