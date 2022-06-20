const Discord = require("discord.js")
exports.run = (client, message, args) => {
  let inviteEmbed = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag}'s Invite Link'`)
    .setDescription("https://dsc.gg/LeanBot")
    .setColor("RANDOM")
  message.reply({ embeds: [inviteEmbed] })
}

exports.name = "invite"