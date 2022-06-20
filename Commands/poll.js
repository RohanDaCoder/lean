const Discord = require('discord.js')
exports.run = (client, message, args) => {
if(!message.member.permissions.has('MANAGE_SERVER')) return message.reply('**You Dont Have Permission To Create A Poll!**')
  
let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" ");
 if (!sentence) return message.reply("Correct Usage `Example`: `L!poll test`")
 message.delete(2000);
 
const pollEmbed = new Discord.MessageEmbed()
.setTitle('**Poll**')
.setDescription(`**${message.author.username}** Asks: **${sentence}**`)
.setColor('RANDOM')
message.channel.send({embeds:[pollEmbed]})
 .then(msg => {
   msg.react("<:like:987919740892762192>")
   msg.react("<:dislike:987919829300310026>")
 })
.catch(() => {
message.reply('**Api Error!**')
    })
 }
exports.name = "poll"