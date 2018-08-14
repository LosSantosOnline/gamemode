'use strict';

mp.keys.bind(0x11, false, () => {
  if (!mp.gui.cursor.visible) {
    mp.events.callRemote('keyLeftCtrl');
  }
});
