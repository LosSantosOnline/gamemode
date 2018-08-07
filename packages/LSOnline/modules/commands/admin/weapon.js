
const Command = require('../../structures/Command.js');

class Weapon extends Command {
  constructor (...args) {
    super(...args, {
      name: 'bron',
      perms: true
    });
  }

  async run (player, command, args) { // eslint-disable-line no-unused-vars
    let [weapon, ammo] = args;
    const weaponHash = mp.joaat(weapon);
    if (!weapon) weapon = 'weapon_compactrifle';

    player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
    player.call('actionDone', [
      'Komendy administracyjne',
      'Dałeś testową broń twojej postaci. Pamiętaj o tym, że nie jest to przedmiot i aby korzystać z tej komendy do testów.'
    ]);
  }
}

module.exports = Weapon;
