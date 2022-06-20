const Discord = require("discord.js")
const extra = require('./../config.js')
exports.run = async (client, message, args) => {
const totalCmds = Number(client.commands.size) - 2;
const helpEmbed = new Discord.MessageEmbed()
.setTitle('Help')
.setColor("GREEN")
.setDescription(`Prefix: ${client.prefix.toUpperCase()} \n**[Invite](https://dsc.gg/leanbot)**
\nTotal Commands: ${totalCmds}
\n\n<:hmm:981109123133345833> Sudo - Impersonate Someone With Fake Webhook.
\n\n:robot: AI - Chat Bot Command. \n\n:loudspeaker: Announce - Announce A Message.\n\n:computer: Hack - Fun Command. Mention A User To Hack! \n\n:smiley: Quote - Get A Random Quote \n\n:rofl: Joke - Get A Random Joke
\n\n:stuck_out_tongue_winking_eye:Meme - Get A Random Meme \n\n:envelope: DM - DM A User As The Bot. \n\n:heavy_plus_sign: Invite - Get The Bot Invite Link \n\n:camera_with_flash: Screenshot - Get A Screenshot Of A Website \n\n:face_with_monocle: Translate - Translate All Possible Language Sentences In English \n\n:face_with_raised_eyebrow: Fact - Get A Random Fact \n\n:no_mouth: Avatar - Get A User's Avatar \n\n:page_facing_up: Poll - Creates A Poll \n\n:brain: Akinator - Akinator Command \n\n:snake: Snake - Snake Game! \n\n:hand_splayed: Rock Paper Scissors - Rock Paper Scissors!

\n\nThank You So Much For Using This Bot :heart:`)
await message.reply({embeds:[helpEmbed]});
	}
exports.name = "help"