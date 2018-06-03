"use strict";

function preparePanel(url) {
    misc.prepareToCef(1);
    misc.createCam(3223, 5349, 14, 0, 0, 218, 20);
    misc.openCef(url);
}

mp.events.add(
    {
        "loginPanelAppeared": (url) => {
            preparePanel(url);
        },
    });