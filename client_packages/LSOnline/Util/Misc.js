"use strict";

function prepareClientView()
{
    // Disable radio for player
    mp.game.audio.setRadioToStationIndex(255);
    
    // Disable vehicle rewards
    mp.game.player.disableVehicleRewards();

    // Hide HUD elements
    hideHudElements([1, 3]);

    // Disable nametags
    mp.nametags.enabled = false;

    // Update discord status
    mp.discord.update("RolePlay", "In-Game");
}
exports.prepareClientView = prepareClientView;

function hideHudElements(array) {
    for (let element of array) {
        mp.game.ui.hideHudComponentThisFrame(element);
    }
}
exports.hideHudElements = hideHudElements;

function disableControlActions(array) {
    for (let control of array) {
        mp.game.controls.disableControlAction(0, control, true);
    }
}
exports.disableControlActions = disableControlActions;

function draw3dText(text, drawXY, font, color, scale, alignRight = false) {
    mp.game.ui.setTextEntry("STRING");
    mp.game.ui.addTextComponentSubstringPlayerName(text);
    mp.game.ui.setTextFont(font);
    mp.game.ui.setTextScale(scale, scale);
    mp.game.ui.setTextColour(color[0], color[1], color[2], color[3]);
    mp.game.invoke(Natives.SET_TEXT_OUTLINE);

    if (alignRight) {
        mp.game.ui.setTextRightJustify(true);
        mp.game.ui.setTextWrap(0, drawXY[0]);
    }

    mp.game.ui.drawText(drawXY[0], drawXY[1]);
}
exports.draw3dText = draw3dText;

// Credits: https://github.com/glitchdetector/fivem-minimap-anchor
function getMinimapAnchor() {
    let sfX = 1.0 / 20.0;
    let sfY = 1.0 / 20.0;
    let safeZone = mp.game.graphics.getSafeZoneSize();
    let aspectRatio = mp.game.graphics.getScreenAspectRatio(false);
    let resolution = mp.game.graphics.getScreenActiveResolution(0, 0);
    let scaleX = 1.0 / resolution.x;
    let scaleY = 1.0 / resolution.y;

    let minimap = {
        width: scaleX * (resolution.x / (4 * aspectRatio)),
        height: scaleY * (resolution.y / 5.674),
        scaleX: scaleX,
        scaleY: scaleY,
        leftX: scaleX * (resolution.x * (sfX * (Math.abs(safeZone - 1.0) * 10))),
        bottomY: 1.0 - scaleY * (resolution.y * (sfY * (Math.abs(safeZone - 1.0) * 10))),
    };

    minimap.rightX = minimap.leftX + minimap.width;
    minimap.topY = minimap.bottomY - minimap.height;
    return minimap;
}
exports.getMinimapAnchor = getMinimapAnchor;