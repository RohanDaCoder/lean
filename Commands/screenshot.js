const Discord = require("discord.js")
exports.run = async (client, message, args) => {
  try {
  const ssEmbed = new Discord.MessageEmbed()
  .setTitle(`Screenshot Of Website`)
.setColor('RANDOM')
.setImage(`https://image.thum.io/get/${args[0]}/`);

await message.reply({
  embeds: [
    ssEmbed
  ]
})
  } catch(err) {
    message.reply(`:x: There Was An Error While Fetching A Screenshot, Try Again`)
  }
}


exports.name = "screenshot"