const Command = require('../../structures/Command');
const { findPlayerInText } = require('../../utils/helpers');

class ChatCommand extends Command {
  constructor (...args) {
    const [file, options] = args;
    super(file, {
      ...options,
      restriction: true
    });
  }
  run (player, fullText, append = false) {
    let text = fullText || "";
    text = text.trim();
    console.log(text);
    if (text.length === 0) return player.call('actionDone', ['Coś poszło nie tak..', 'Akcja nie może być pusta.']);

    const target = findPlayerInText(text);
    console.log("target" + target);

    if (!target) return player.call('actionDone', ['Coś poszło nie tak..', 'Podany gracz nie istnieje.']);
    if (typeof target === "object") text = text.replace(`{${target.id}}`, target.name);
    if (append && (text[text.length - 1] !== '.' || text[text.length - 1] !== '?' || text[text.length - 1] !== '!')) text += '.';
    text = text.charAt(0).toUpperCase() + text.slice(1);

    return text;
  }
}

module.exports = ChatCommand;
