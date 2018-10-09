'use strict';
import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

library.add(faPowerOff);

const vm = new Vue({
  el: '#app',
  render: h => h(App)
});

window.vm = vm;
