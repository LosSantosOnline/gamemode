"use strict";

import Vue from "vue";
import App from "./App.vue";

const vm = new Vue({
  el: "#app",
  render: h => h(App)
});

window.vm = vm;
