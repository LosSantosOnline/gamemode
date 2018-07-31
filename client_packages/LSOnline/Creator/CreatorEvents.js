'use strict'

const Camera = require('/LSOnline/Util/Camera')
const creator = require('/LSOnline/Creator/Creator')

var cameras = {
  head: mp.cameras.new('Head', new mp.Vector3(152, -1002.2, -98.4), new mp.Vector3(0, 0, 0), 60),
  torso: mp.cameras.new('Torso', new mp.Vector3(152, -1002.6, -98.7), new mp.Vector3(0, 0, 0), 60),
  legs: mp.cameras.new('Legs', new mp.Vector3(152, -1002.6, -99.5), new mp.Vector3(0, 0, 0), 60)
}
var currentCamera

mp.events.add({
  creationPanelAppeared: (url) => {
    creator.init(url)
    creator.getVariations()

    cameras.start = Camera.createCamera(152.5, -1003.2, -99, 0, 0, 20, 60)
    currentCamera = cameras.start
    return true
  },
  updatePed: (data) => {
    data = JSON.parse(data)

    mp.players.local.setHeadBlendData(data.shapeFirstID, data.shapeSecondID, 0, data.shapeFirstID, data.shapeSecondID, 0, data.shapeMix, data.skinMix, 0, false)
    for (let i = 0; i <= 19; i++) {
      mp.players.local.setFaceFeature(i, parseFloat(data.features[i]))
      if (i >= 0 && i <= 11) {
        mp.players.local.setComponentVariation(i, parseInt(data.drawables[i]), parseInt(data.textures[i]), 0)
      }
      if (i >= 0 && i <= 12) {
        let opacity = 0
        data.overlays[i] !== 0 ? opacity = 1 : opacity = 0
        mp.players.local.setHeadOverlay(i, data.overlays[i], opacity, data.overlaysColor[0], data.overlaysColor[1])
      }
    }
    mp.players.local.setHairColor(data.hairColor[0], data.hairColor[1])
  },
  updateModel: (data) => {
    mp.players.local.model = mp.game.joaat(data)
    mp.players.local.setDefaultComponentVariation()

    creator.getVariations()
  },
  rotatePed: (data) => {
    mp.players.local.setHeading(data)
  },
  switchCamera: (data) => {
    if (currentCamera !== cameras[data]) {
      cameras[data].setActiveWithInterp(currentCamera.handle, 2000, 1, 1)
      currentCamera = cameras[data]
    }
  },
  saveOutfit: (data) => {
    mp.events.callRemote('saveOutfit', data)
  },
  test: (data) => {
    eval(data)
  }
})
