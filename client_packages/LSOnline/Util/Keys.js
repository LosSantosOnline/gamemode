"use strict";

const KEY_E = 0x45;
const KEY_Z = 0x5A;
const KEY_NUMPAD5 = 0x65;
const KEY_NUMPAD8 = 0x68;
const vehicle = mp.players.local.vehicle;

mp.keys.bind(KEY_NUMPAD5, false, () => {
    if (!mp.gui.cursor.visible) {
        mp.events.callRemote('numpad5Key');
    }
});

mp.keys.bind(KEY_NUMPAD8, false, () => {
    if (!mp.gui.cursor.visible) {
        mp.events.callRemote('numpad8Key');
    }
});

mp.keys.bind(KEY_Z, false, () => {
    if (!mp.gui.cursor.visible) {
        mp.events.callRemote('zKey');
    }
});

mp.keys.bind(KEY_E, false, () => {
    if (!mp.gui.cursor.visible) {
        mp.events.callRemote('eKey');
    }
});
