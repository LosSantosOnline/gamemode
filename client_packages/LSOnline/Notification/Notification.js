"use strict";

const browser = require("/LSOnline/Util/Browser");

let notification = false;

function showNotification(title, content) {
    browser.open("package://LSOnline/Browsers/Notification/index.html");
    browser.inject(`showNotification("${title}", "${content}");`);
    notification = true;
    mp.game.audio.playSoundFrontend(-1, "CHALLENGE_UNLOCKED", "HUD_AWARDS", true);
}

function destroyBrowser()
{
    browser.close();
    notification = false;
}

function hideNotification() {
    browser.inject(`hideNotification();`);
    setTimeout(destroyBrowser, 1500);
}

function notify(title, content, timeout = 5000) {
    if (!notification) {
        showNotification(title, content);
        setTimeout(hideNotification, timeout);
    }
}

exports.notify = notify;

mp.events.add({
    'actionDone': (title, content, timeout = 5000) => {
        notify(title, content, timeout);
    }
});