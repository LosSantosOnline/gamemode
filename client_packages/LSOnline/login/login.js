'use strict';

const camera = require('./LSOnline/util/camera');
const browser = require('./LSOnline/util/browser');
const Overlay = require('./LSOnline/util/Overlay');

function preparePanel (url) {
  browser.prepareScreen(1000);
  camera.createCamera(3223, 5349, 14, 0, 0, 218, 20);
  browser.open(url);
}

function changePanel (url) {
  browser.close();
  setTimeout(function () {
    browser.prepareScreen();
    browser.open(url);
  }, 1000);
}

function showCharacter (characters) {
  setTimeout(function () {
    browser.inject(`showCharacters('${characters}',3000)`);
  }, 4000);
}

function destroyPanel () {
  camera.destroyCamera();
  browser.close();
}

mp.events.add({
  loginPanelAppeared: url => {
    preparePanel(url);
  },
  loginButtonClicked: (login, password) => {
    mp.events.callRemote('authorizePlayer', login, password);
  },
  remindAccount: () => {
    Overlay.notify(
      'Nie posiadasz konta?',
      'Wejdź na lsonline.pl i załóż je już teraz',
      'info',
      5000
    );
  },
  userAuthorized: async characters => {
    changePanel('package://LSOnline/browser/dist/characterSelect/index.html');
    showCharacter(characters);
  },
  characterSelected: characterId => {
    destroyPanel();
    mp.players.local.setInvincible(true);
    mp.events.callRemote('loginPlayer', characterId);
  }
});
