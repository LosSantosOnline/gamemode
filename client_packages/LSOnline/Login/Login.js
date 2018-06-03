"use strict";

const browser = require("/LSOnline/Util/Browser");
const camera = require("/LSOnline/Util/Camera");

function preparePanel(url) {
    console.log(`preparing panel with url ${url}`);
    browser.prepareScreen();
    camera.createCam(3223, 5349, 14, 0, 0, 218, 20);
    browser.open(url);
    console.log(`panel prepared with url ${url}`);
}

function testFunction(testParam) {
    mp.gui.chat.push(testParam);
}

mp.events.add({
    'loginPanelAppeared': (url) => {
        console.log(`event trigerred`);
        preparePanel(url);
    },
    'testEvent': (testParam) => {
        console.log(`test param`);
        testFunction(testParam);
    }
});