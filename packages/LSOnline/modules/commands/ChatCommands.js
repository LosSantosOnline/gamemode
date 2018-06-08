mp.events.addCommand("me", (player, message) => {
    mp.players.broadcastInRange(player.pos, 15, `* ${player.name}: ${message}`);
});

mp.events.addCommand("glob", (player, message) => {
   mp.players.broadcast(`(( ${player.name}: ${message} ))`);
});