const overlay = require('./LSOnline/util/overlay');

mp.events.add({
  actionDone: (title, content, timeout = 3500) => {
    overlay.notify(title, content, 'info', timeout);
  }
});
