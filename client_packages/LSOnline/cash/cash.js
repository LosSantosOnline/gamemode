const DrawText = require('/LSOnline/cash/drawText');
const font = 4;

exports = class {
  static drawMoney (player, key, value) {
    if (isNaN(value)) throw new Error("drawMoney: value need to be int");
    DrawText.drawText('cashHUD', `$${value}`, 'MONEY_HUD', {
      font,
      color: [133, 187, 101, 185],
      scale: [0.75, 0.75],
      outline: true,
      centre: true
    });
    if (value !== player.cash && player.cash) {
      let diff = 0;
      value > player.cash ? diff = `+ $${value - player.cash}` : diff = `- $${player.cash - value}`;
      DrawText.drawText('cashHUDDiff', diff, 'MONEY_HUD_DIFF', {
        font,
        color: value > player.cash ? [133, 187, 101, 185] : [240, 76, 79, 185],
        scale: [0.75, 0.75],
        outline: true,
        centre: true

      }, 3000);
    }
  }
};
// XP#lSw0gbB1N
