class Command {
  /**
   *Creates an instance of Command.
   * @param {object} [options]
   * @param {string} [options.name] - The name of the command.
   * @param {string} [options.tooltip] - Info text when args is missing
   * @param {array} [options.perms=[]] - Perms
   * @param {boolean} [options.muted="false"] - Should be command not avaible when muted? -> example: bw
   * @memberof Command
   */
  constructor (file, options = {}) {
    this.name = options.name;
    this.tooltip = options.tooltip;
    this.aliases = options.aliases || [];
    this.perms = options.perms || [];
    this.restriction = options.false || false;
    this.args = options.args || [];
    this.hasSubcommands = options.hasSubcommands || false;
    this.file = file;
  }

  async run () {
    throw new Error("Run method wasn't provided!");
  };
}
module.exports = Command;
