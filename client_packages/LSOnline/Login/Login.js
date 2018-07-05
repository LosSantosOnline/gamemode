"use strict";

const browser = require("/LSOnline/Util/Browser");
const camera = require("/LSOnline/Util/Camera");

function preparePanel(url) {
    browser.prepareScreen();
    camera.createCamera(3223, 5349, 14, 0, 0, 218, 20);
    browser.open(url);
}

function changePanel(url) {
    browser.close();
    setTimeout(function () {
        browser.prepareScreen();
        browser.open(url);
    }, 1000);
}

function destroyPanel() {
    camera.destroyCamera();
    browser.close();
}

mp.events.add({
    'loginPanelAppeared': (url) => {
        preparePanel(url);
    },
    'loginButtonClicked': (login, password) => {
        mp.events.callRemote("authorizePlayer", login, password);
    },
    'userAuthorized': () => {
        changePanel("package://LSOnline/Browsers/CharacterSelect/index.html");
    },
    'characterSelected': (characterId) => {
        destroyPanel();
        mp.players.local.setInvincible(true);
        mp.events.callRemote("loginPlayer");
    }
});