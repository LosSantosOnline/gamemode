"use strict";

const browser = require("/LSOnline/Util/Browser");
const camera = require("/LSOnline/Util/Camera");
const Overlay = require("/LSOnline/Util/Overlay");
function preparePanel(url) {
  browser.prepareScreen(1000);
  camera.createCamera(3223, 5349, 14, 0, 0, 218, 20);
  browser.open(url);
}

function destroyPanel() {
  camera.destroyCamera();
  browser.close();
}

mp.events.add({
  loginPanelAppeared: url => {
    preparePanel(url);
    setTimeout(() => {
      Overlay.notify(
        "Nie posiadasz konta?",
        "Wejdź na lsonline.pl i załóż je już teraz",
        "info",
        5000
      );
    }, 5000);
  },
  loginButtonClicked: password => {
    mp.players.local.setInvincible(true);
    mp.events.callRemote("loginPlayer", password);
  }
});
