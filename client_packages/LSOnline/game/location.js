"use strict";

// Author of this resource: rootcause
var Natives = {
  IS_RADAR_HIDDEN: "0x2918f48a30d03841",
  IS_RADAR_ENABLED: "0xf4d0c6c7b9c7bd4a",
  SET_TEXT_OUTLINE: "0x39a6925dba332248"
};

// Misc
const misc = require("./LSOnline/util/misc");

// Settings for speedometer
const useSpeedo = true;
const updateInterval = 500; // milliseconds, lower value = more accurate, at the cost of performance

// Minimap, speedo config
let streetName = null;
let zoneName = null;
let isMetric = false;
let minimap = {};

setInterval(() => {
  if (mp.game.invoke(Natives.IS_RADAR_ENABLED) && !mp.game.invoke(Natives.IS_RADAR_HIDDEN)) {
    const position = mp.players.local.position;
    let getStreet = mp.game.pathfind.getStreetNameAtCoord(position.x, position.y, position.z, 0, 0);

    isMetric = mp.game.gameplay.getProfileSetting(227) === 1;
    minimap = misc.getMinimapAnchor();

    zoneName = mp.game.ui.getLabelText(mp.game.zone.getNameOfZone(position.x, position.y, position.z));
    streetName = mp.game.ui.getStreetNameFromHashKey(getStreet.streetName);
    if (getStreet.crossingRoad && getStreet.crossingRoad !== getStreet.streetName) streetName += ` / ${mp.game.ui.getStreetNameFromHashKey(getStreet.crossingRoad)}`;
  } else {
    streetName = null;
    zoneName = null;
  }
}, updateInterval);

mp.events.add(
  {
    "render": () => {
      if (streetName && zoneName) {
        misc.draw3dText(streetName, [minimap.rightX + 0.01, minimap.bottomY - 0.065], 4, [255, 255, 255, 255], 0.55);
        misc.draw3dText(zoneName, [minimap.rightX + 0.01, minimap.bottomY - 0.035], 4, [255, 255, 255, 255], 0.5);

        let vehicle = mp.players.local.vehicle;
        if (useSpeedo && vehicle) misc.draw3dText(`${(vehicle.getSpeed() * (isMetric ? 3.6 : 2.236936)).toFixed(0)} ${(isMetric) ? "KM/H" : "MPH"}`, [minimap.rightX - 0.003, minimap.bottomY - 0.0485], 4, [255, 255, 255, 255], 0.45, true);
      }
    }
  }
);
