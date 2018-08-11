'use strict';

const globals = require("./LSOnline/util/globals");
const chatEvents = require("./LSOnline/chat/events");

mp.events.add('render', () => {
  if (globals.altTabbed) {
    if (mp.game.controls.isDisabledControlJustPressed(0, 25)) {
      setGameAltTabbed(false);
    }
  }
});

setInterval(() => {
  if (!globals.altTabbed) {
    if ((mp.keys.isDown(18) && mp.keys.isDown(9)) || mp.keys.isDown(91)) {
      setGameAltTabbed(true);
    }
  }
}, 100);

// Set alt-tab status ingame
const setGameAltTabbed = (value) => {
  globals.altTabbed = value;

  if (value) {
    chatEvents.toggleChat(false);
    mp.game.graphics.transitionToBlurred(1000);
  } else {
    chatEvents.toggleChat(true);
    mp.game.graphics.transitionFromBlurred(800);
  }
};
