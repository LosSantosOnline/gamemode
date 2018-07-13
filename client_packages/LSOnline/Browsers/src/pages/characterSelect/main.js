"use strict";

import Vue from "vue";
import App from "./App.vue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";

library.add(faUser);

const vm = new Vue({
    el: "#app",
    render: h => h(App)
});

window.showCharacters = vm.$children[0].showCharacters;
window.hideCharacters = vm.$children[0].hideCharacters;
window.vm = vm;
