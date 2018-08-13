'use strict';

mp.keys.bind(0x68, false, () => {
  if (!mp.gui.cursor.visible) {
    mp.events.callRemote('keyNumpad8');
  }
});
