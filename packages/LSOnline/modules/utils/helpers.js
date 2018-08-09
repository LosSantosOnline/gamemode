"use strict";

const upperString = string => string.toLowerCase().replace(/(^| )(\w)/g, s => s.toUpperCase());

exports.upperString = upperString;

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

exports.randomInt = randomInt;

const searchPlayerByIdOrName = searchPlayer => {
  let thisPlayer = null;
  let playerId = parseInt(searchPlayer);
  if (playerId) {
    thisPlayer = mp.players.at(playerId);
  } else if (!thisPlayer) {
    mp.players.forEach((_player) => {
      if (_player.name.toLowerCase().match(searchPlayer.toLowerCase())) {
        thisPlayer = _player;
      }
    });
  };
  return thisPlayer;
};

exports.searchPlayerByIdOrName = searchPlayerByIdOrName;
