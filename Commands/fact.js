
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
const err = new Discord.MessageEmbed()
  .setTitle("ERROR")
  .setDescription("x API or BOT error, please try again!")
const axios = require("axios")
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
  let res = await axios.get(`http://api.popcat.xyz/fact`);
  message.reply("**"+ res.data.fact + "**");
  } catch {
   message.reply({embeds: [err]})
    .catch((err) => {
      console.log(err)
  })
    }
 }

exports.name = "fact"