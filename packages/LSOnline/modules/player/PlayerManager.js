"use strict";

const brutallyWoundedTime = 20000;
const playerData = require('../player/playerData');

const reviveFromBrutallyWounded = (player, fromMedic = false) => {
    clearBrutallyWoundedTimers(player);
    clearDescription(player);

    spawnPlayer(player);
    fromMedic ? setHealth(player, 30) : setHealth(player, 20);
};

exports.reviveFromBrutallyWounded = reviveFromBrutallyWounded;

const setBrutallyWounded = (player, reason, killer) => {
    if (player.brutallyWoundedTimer) {
        clearBrutallyWoundedTimers(player);
    }

    player.brutallyWounded = true;
    player.brutallyWoundedTimer = setTimeout(reviveFromBrutallyWounded, brutallyWoundedTime, player);

    player.setVariable('description', playerData.getDeathReason(reason));
    mp.players.broadcastInRange(player.position, 25, `!{#dca2f4} * ${player.name} traci przytomność.`);
};

exports.setBrutallyWounded = setBrutallyWounded;

const clearBrutallyWoundedTimers = (player) => {
    player.brutallyWounded = false;
    player.brutallyWoundedTimer = null;
    clearTimeout(player.brutallyWoundedTimer);
};

exports.clearBrutallyWoundedTimers = clearBrutallyWoundedTimers;

const setHealth = (player, health) => {
    player.health = health;
};

exports.setHealth = setHealth;

const killPlayer = (player) => {
    player.health = 0;
};

exports.killPlayer = killPlayer;

const spawnPlayer = (player) => {
    player.spawn(player.position);
};

exports.spawnPlayer = spawnPlayer;

const clearDescription = (player) => {
    player.setVariable('description', null);
};

exports.clearDescription = clearDescription;
