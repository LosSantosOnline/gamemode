"use strict";
var instance;
/**
 * Class to handle an Overlay browser.
 * It meant to be singleton. (dunno if good solution)
 * @class Notification
 */
class Overlay {
  /**
   * Create an overlay
   * @param {string} url - Path to file
   * @memberof Overlay
   */
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this.browser = mp.browsers.new(
      "package://LSOnline/Browsers/dist/overlay/index.html"
    );
    this.timeout = 3500;
  }

  /**
   * Passes the data to Notification component and notifies the player.
   * @param {string} title
   * @param {string} content
   * @param {string} [type="info"]
   * @memberof Overlay
   */
  notify(title, content, type = "info") {
    mp.game.audio.playSoundFrontend(
      -1,
      "CHALLENGE_UNLOCKED",
      "HUD_AWARDS",
      true
    );
    browser.inject(`notify(${title}, ${content}, ${type}, ${this.timeout}`);
  }
}

exports = new Overlay();
