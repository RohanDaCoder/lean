exports.run = async (client, message, args) => {
const { RockPaperScissors } = require('djs-games')
const game = new RockPaperScissors({
  message: message,
})
game.start()
}
exports.name = "rockpaperscissors"