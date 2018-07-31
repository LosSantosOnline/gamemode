'use strict'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/pl' // switch to your locale -> http://element.eleme.io/#/en-US/component/i18n
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'

library.add(faMale, faFemale)

Vue.use(ElementUI, { locale })

const vm = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

window.vm = vm
window.setVariations = (drawables, textures) => {
  vm.$store.state.maxDrawables = drawables
  vm.$store.state.maxTextures = textures
}
