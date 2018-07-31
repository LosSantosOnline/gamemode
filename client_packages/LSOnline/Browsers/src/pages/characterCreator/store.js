'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    models: {
      male: ['mp_m_freemode_01', 'ig_lamardavis', 's_m_m_lathandy_01'],
      female: ['mp_f_freemode_01', 'a_f_y_fitness_01', 'a_f_y_fitness_02']
    },
    character: {
      model: 'mp_m_freemode_01',
      gender: 'male',
      shapeSecondID: 0,
      shapeFirstID: 0,
      skinSecondID: 0,
      skinFirstID: 0,
      shapeMix: 0.5,
      skinMix: 0.5,
      features: new Array(19),
      overlays: new Array(19).fill(0),
      overlaysColor: new Array(12).fill(0),
      overlaysColor2: new Array(12).fill(0),
      hairColor: [0, 0],
      drawables: [],
      textures: []
    },
    maxDrawables: new Array(12).fill(0),
    maxTextures: new Array(12).fill(0)

  },
  mutations: {}
})
