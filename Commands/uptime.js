const Discord = require('discord.js')
const prettyms = require('pretty-ms')
exports.run = async (client, message, args) => {
const uptimeEmbed = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**:robot:Bot's Uptime: ${prettyms(client.uptime)}**`)
.setTimestamp()
await message.reply({embeds:[uptimeEmbed]})
}
exports.name = "uptime"