const Discord = require('discord.js')
exports.run = (client, message, args) => {
if (!message.member.permissions.has("ADMINISTRATOR")) {
 message.reply('**You Dont Have Permission To Use This!**')
}

const content = args.join(" ");
if(!content) return message.reply('**You Need To Provide A Message!**')
const channel = message.guild.channels.cache.find(c => c.id === message.channel.id);
const announceEmbed = new Discord.MessageEmbed()
.setTitle('**Announcement**')
.setDescription(`${content}`)
.setTimestamp()
.setAuthor(`By ${message.author.tag}`)
.setColor("RANDOM")
message.channel.send({ embeds: [announceEmbed] }); 
}
exports.name = "announce"