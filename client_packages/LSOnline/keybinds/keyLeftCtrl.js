// Animations
const crouchingClipSetSwitchTime = 0.25;
const crouchingMovementClipSet = 'move_ped_crouched';
const crouchingStrafeClipSet = 'move_ped_crouched_strafing';

const { loadClipSet } = require('./LSOnline/util/misc');

// load clip sets
loadClipSet(crouchingMovementClipSet);
loadClipSet(crouchingStrafeClipSet);

mp.events.add({
  entityStreamIn: entity => {
    if (entity.type !== 'player') {
      return false;
    }

    // apply clip sets if streamed player is crouching
    if (typeof entity.getVariable('isCrouching') !== 'undefined') {
      entity.setMovementClipset(crouchingMovementClipSet, crouchingClipSetSwitchTime);
      entity.setStrafeClipset(crouchingStrafeClipSet);
    }
  },

  entityDataChange: (entity, key, value) => {
    if (entity.type !== 'player' || key !== 'isCrouching') {
      return false;
    }

    // apply/reset clip sets when isCrouched changes for a streamed player
    if (value) {
      entity.setMovementClipset(crouchingMovementClipSet, crouchingClipSetSwitchTime);
      entity.setStrafeClipset(crouchingStrafeClipSet);
    } else {
      entity.resetMovementClipset(crouchingClipSetSwitchTime);
      entity.resetStrafeClipset();
    }
  }
});

// CTRL key to toggle crouching
mp.keys.bind(0x11, false, () => {
  mp.events.callRemote('toggleCrouch');
});
