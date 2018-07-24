const Overlay = require('/LSOnline/Util/Overlay')

mp.events.add({
  actionDone: (title, content, timeout = 3500) => {
    Overlay.notify(title, content, 'info', timeout)
  }
})
