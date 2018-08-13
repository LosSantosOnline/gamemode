'use strict';

mp.keys.bind(0x65, false, () => {
  if (!mp.gui.cursor.visible) {
    mp.events.callRemote('keyNumpad5');
  }
});
