const randomSpawns = [
  new mp.Vector3(1839.6, 3672.93, 34.28),
  new mp.Vector3(-247.76, 6331.23, 32.43),
  new mp.Vector3(-449.67, -340.83, 34.50)
];

const moment = require('moment');
const Character = require('../characters/character');
const { pushHelpMessage } = require('../player/playerService');
const { spawnCharacterOnPosition } = require('../characters/characterService');

mp.events.add({
  spawnCharacter: (player, character) => {
    player.character = new Character(character);
    player.character.updateLastLoginDate();

    pushHelpMessage(player, `Ostatnie logowanie na serwer odbyło się ${moment().fromNow(player.character.info.lastLogin)}.`);

    player.name = character.name;
    player.data.money = character.money;

    spawnCharacterOnPosition(player, character);
  }
});
