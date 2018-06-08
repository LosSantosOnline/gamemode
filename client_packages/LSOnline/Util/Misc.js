"use strict";

// Prepare player client to game
function preparePlayerClient()
{
    // Disable radio for player
    mp.game.audio.setRadioToStationIndex(255);
    
    // Disable vehicle rewards
    mp.game.player.disableVehicleRewards();

    // Disable nametags
    mp.nametags.enabled = false;

    // Update discord status
    mp.discord.update("LSOnline.pl", "In-Game");
}
exports.preparePlayerClient = preparePlayerClient;