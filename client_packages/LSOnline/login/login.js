'use strict';

const camera = require('./LSOnline/util/camera');
const globals = require('./LSOnline/util/globals');
const browser = require('./LSOnline/util/browser');
const Overlay = require('./LSOnline/util/overlay');

function preparePanel (url) {
  browser.prepareScreen(1000);
  camera.createCamera(837.5, -2145, 42.6, 0, 0, 60, 60);
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
    mp.players.local.position = new mp.Vector3(836.83, -2144.26, 42.00);
    mp.players.local.setHeading(93);
    mp.players.local.model = mp.game.joaat('player_one');
    mp.players.local.setPropIndex(0, 16, 0, true);

    mp.players.local.setComponentVariation(9, 6, 0, 0);

    // Only for test (debug) purposes. New login panel coming soon.
    // mp.events.callRemote('authorizePlayer', 'Mati', 'XP#lSw0gbB1N');
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
    destroyPanel();

    // Only for test (debug) purposes. New login panel coming soon.
    mp.events.callRemote('loginPlayer', 1);
    // changePanel("package://LSOnline/browser/dist/characterSelect/index.html");
    // showCharacter(characters);
  },
  characterSelected: characterId => {
    destroyPanel();
    mp.events.callRemote('loginPlayer', characterId);
  }
});
