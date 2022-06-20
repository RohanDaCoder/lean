const Discord = require("discord.js")
exports.run = (client, message, args) => {
const target =
message.mentions.members.first() || message.author;
    let avatarEmbed = new Discord.MessageEmbed()
    .setTitle(`Avatar`)
.setColor("RANDOM")
.setImage(target.displayAvatarURL({
  dynamic: true
}))
.setURL(target.displayAvatarURL({
  dynamic: true
}))
    message.reply({embeds:[avatarEmbed]})
}

exports.name = "avatar"