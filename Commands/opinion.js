exports.run = async (client, message, args) => {
const opinion = args.join();
if(!opinion) return message.reply('**You Need To Provide A Opinion To Make Meme!**')
if(opinion) {
const Discord = require('discord.js')
const opinionMeme = new Discord.MessageEmbed()
.setImage(`http://api.popcat.xyz/opinion?image=https://i.kym-cdn.com/photos/images/newsfeed/001/394/351/33a.jpg&text=${opinion}`)
.setColor("#03fc4e")
message.reply({embeds:[opinionMeme]})
   }
}
exports.name = "opinion"
//https://LeanBot.rohandacoder.repl.co
//https://i.kym-cdn.com/photos/images/newsfeed/001/394/351/33a.jpg