const Discord = require("discord.js");
module.exports = {
  name: 'serverlist',
  description: 'See How Many Servers The Bot Is In.',
  run: async (client, message, args) => {
  if(message.guild.id !== "964473061913030696") return message.reply(':x: You Cant Use This Command In This Server!');
if(message.author.id !== '922419431508938773') return message.reply(`:x: Only Developers Can Use This Command!`)
    client.guilds.cache.forEach(async (guild) => {
      let randomChannel = guild.channels.cache.find(
    (channel) =>
      channel.type === "GUILD_TEXT" &&
      channel.permissionsFor(guild.me).has("SEND_MESSAGES")
  ).id; 
      let invite = await guild.invites.create(randomChannel);
let icon = guild.iconURL()
const serverlist = new Discord.MessageEmbed()
.setTitle(`Servers that ${client.user.tag} is In`)
.setThumbnail(icon)
.addField('Server Name', `${guild.name}`)
.addField('Members', `${guild.memberCount}`)
.addField('Server ID', `${guild.id}`)
  .addField('Invite Link', `${invite}`)
.setColor("RANDOM")
message.reply({embeds: [serverlist]})
})
  }
}