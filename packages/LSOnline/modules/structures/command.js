const { searchPlayerByIdOrName } = require('../utils/helpers');

class Command {
  /**
     *Creates an instance of Command.
     * @param {object} [options]
     * @param {string} [options.name] - The name of the command.
     * @param {string} [options.tooltip] - Info text when args is missing
     * @param {array} [options.perms=[]] - Perms
     * @param {boolean} [options.restriction="false"] - Should be command not avaible when muted? -> example: bw
     * @param {array} [options.args=[]] - Required arguments for command to work
     * @param {boolean} [options.hasSubcommands - Does command have subcommans? Example: /veh, /veh name
     * @memberof Command
     */
  constructor (file, options = {}) {
    this.name = options.name;
    this.aliases = options.aliases || [];
    this.perms = options.perms || [];
    this.restriction = options.restriction || false;
    this.args = options.args || [];
    this.hasSubcommands = options.hasSubcommands || false;
    this.tooltip = this.args.map(element => {
      return `[${element}]`;
    }).toString().replace(new RegExp('[,]*,+', 'g'), ' ') || '';
    this.file = file;
  }

  async run () {
    throw new Error("Run method wasn't provided!");
  };

  searchPlayerByIdOrName (player) {
    return searchPlayerByIdOrName(player);
  }
}

module.exports = Command;
