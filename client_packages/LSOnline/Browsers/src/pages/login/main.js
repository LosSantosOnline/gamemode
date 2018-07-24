"use strict";
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/pl"; // switch to your locale -> http://element.eleme.io/#/en-US/component/i18n
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI, { locale });

const vm = new Vue({
  el: "#app",
  render: h => h(App)
});

window.vm = vm;
