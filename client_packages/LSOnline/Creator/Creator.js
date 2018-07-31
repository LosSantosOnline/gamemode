const { updateDiscord } = require('/LSOnline/Util/Misc')
const Browser = require('/LSOnline/Util/Browser')

exports.init = (url) => {
  updateDiscord(mp.players.local.getVariable('nickname'), '@ luzne-rp.XD')
  mp.game.streaming.requestIpl('Motel')
  mp.players.local.position = new mp.Vector3(152.14584350585938, -1001.4180297851562, -98.99999237060547)
  mp.players.local.setHeading(180)
  mp.players.local.freezePosition(true)
  mp.players.local.dimension = Math.floor(Math.random() * 999999) + 9999
  mp.players.local.clearTasksImmediately()
  mp.players.local.model = mp.game.joaat('mp_m_freemode_01')

  Browser.prepareScreen()
  Browser.open(url)
}

exports.getVariations = () => {
  let drawables = []
  let textures = []
  for (let i = 0; i <= 11; i++) {
    drawables.push(mp.players.local.getNumberOfDrawableVariations(i) - 1)
    const temp = []

    for (let j = 0; j <= drawables[i]; j++) {
      temp.push(mp.players.local.getNumberOfTextureVariations(i, j) - 1)
    }
    textures.push(temp)
  }
  drawables = JSON.stringify(drawables)
  textures = JSON.stringify(textures)

  Browser.inject(`setVariations(${drawables}, ${textures})`)
}
