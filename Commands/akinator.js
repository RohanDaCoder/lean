const akinator = require("discord.js-akinator");
const { Discord } = require('discord.js');
const extra = require('./../config.js')
exports.run = async (client, message, args) => {
  try {
const language = "en"; //The Language of the Game
const childMode = true; //Whether to use Akinator's Child Mode
const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
const useButtons = true; //Whether to use Discord's Buttons
const embedColor = "#1F1E33"; //The Color of the Message Embeds

    akinator(message, {
            language: language, //Defaults to "en"
            childMode: childMode, //Defaults to "false"
            gameType: gameType, //Defaults to "character"
            useButtons: useButtons, //Defaults to "false"
            embedColor: embedColor //Defaults to "RANDOM"
        });
  }
  catch(err) {
extra.devID.forEach(ide => {
if(message.author.id === `${ide}`) return message.reply(`:x: **There Was An Error While Running Command!** \n${err}`)
})

message.reply(':x: **There Was An Error While Running The Command!**')
console.log(err)
    }
 }
exports.name = "aki"