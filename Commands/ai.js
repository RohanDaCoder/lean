
exports.run = async (client, message, args) => {
const Discord = require('discord.js')
const aiMessage = await args.join(' ')
const errMSG = new Discord.MessageEmbed()
  .setTitle("ERROR")
  .setDescription(":x: API or BOT error, please try again!")
const axios = require("axios")
  try {
  let res = await axios.get(`http://api.brainshop.ai/get?bid=165755&key=ZGb2lzrZc9dChJ3l&uid=[${message.author.id}]&msg=[${aiMessage}]`);
 await message.reply(res.data.cnt);
  } catch(err) {
   await message.reply({embeds: [errMSG]})
      console.log(err)
    }
 }

exports.name = "ai"