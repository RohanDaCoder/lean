exports.run = async (client, message, args) => {
const { Snake } = require("discord-gamecord")
    new Snake({
      message: message,
      slash_command: false,
      embed: {
        title: 'Snake Game',
        color: '#5865F2',
        OverTitle: 'Game Over',
      },
      snake: { head: '🟢', body: '🟩', tail: '🟢' },
      emojis: {
        board: '⬛',
        food: '🍎',
        up: '⬆️', 
        down: '⬇️',
        right: '➡️',
        left: '⬅️',
      }
    }).startGame();
  }
exports.name = "snake"