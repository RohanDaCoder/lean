const { Discord, MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  try {
const dateEmbed = new Discord.MessageEmbed()
.setTitle("Time")
.setDescription('Time In Your Country:')
.setTimeStamp()
await message.reply({embeds:[dateEmbed]})
message.delete(10000)
  }
  catch(err) {
message.reply('Error')
  }
}
exports.name = "date"