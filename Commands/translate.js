const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  const err = new Discord.MessageEmbed()
    .setTitle("ERROR")
    .setDescription(":x: API or BOT error, please try again!")
  const axios = require("axios")
  if (!message.guild) return;
  if (message.author.bot) return;
  try {
    let res = await axios.get(``);
    const translateWord = args.join(' ')[0]
    const translateEmbed = new Discord.MessageEmbed()
      .setTitle("Translate")
      .setDescription(`Translate: ${translateWord} \nResult: ${res.data.translated}`)
      .setColor("RANDOM")
    await message.reply({ embeds: [translateEmbed] })
  } catch {
    message.reply({ embeds: [err] })
      .catch((err) => {
        console.log(err)
      })
  }
}

exports.name = "translate"