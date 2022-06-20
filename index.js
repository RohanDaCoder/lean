const express = require('express');
const app = express();
app.listen(1000);
app.get('/', (req, res) => {
 res.send('Hi')
  return;
});

const chalk = require('chalk');
const { prefix } = require('./config.js');
const child = require("child_process");
const thum = require('thum.io');


const Discord = require("discord.js");
const { MessageEmbed, Intents } = require('discord.js');

const client = new Discord.Client(global.client = {
    ws : {
        properties: {
            $browser: "Discord iOS",
        }
    },
    intents:  [
      'GUILDS',
      'GUILD_MESSAGES',
      'GUILD_MEMBERS',
      'DIRECT_MESSAGES'
    ]
});

client.prefix = prefix;
client.discord = require('discord.js');
const JSONdb = require('simple-json-db');
client.db = new JSONdb('./db/db.json');
const users = new JSONdb('./db/users.json');

const fs = require("fs");

module.exports = client;

client.on("ready", async () => {
	console.log(chalk.blue(`\n[Client] Logged On As ${client.user.tag} \n`))
client.user.setActivity(`L!help | In Development`, {
  type: 'WATCHING'
});
});
      

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.description = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));
for(file of commands) {
  const commandName = file.split(".")[0];
console.log(chalk.red(`[Commands] Loaded ${commandName}`))
  const command = require(`./Commands/${commandName}`)
  let description = command.description;
  if(!description) description = "No Description";
  client.description.set(commandName, description);
  client.commands.set(commandName, command)
  if(command.aliases) {
    command.aliases.forEach(alias => {
      client.aliases.set(alias, command)
    })
  }
}
  
client.on("messageCreate", async message => {
if(message.author.bot) return;

if(message.author.id === "817746614764306473") {
  message.reply(`:x: You Are Blacklisted From Using Me!`);
  return;
}

  if(message.channel.id === "982528758470836284") {
    message.delete();
    return;
  };


  if (message.content === '<@963001755262656574>') {
  let mentionHelpEmbed = new Discord.MessageEmbed()
  .setDescription('**[Invite](https://dsc.gg/leanbot)** \nMy Prefix: ' + client.prefix.toUpperCase() + `\n For Commands Enter **${client.prefix.toUpperCase()}help**`)
  .setColor('RANDOM')
  await message.reply({
    embeds: [
      mentionHelpEmbed
      ]
  });
  return;
}
if(message.content.toLowerCase().startsWith(prefix)) {
const args = await message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();
const command = await client.commands.get(commandName);
if(!command) {
const noCommandEmbed = new Discord.MessageEmbed()
  .setColor('RED')
  .setDescription(`:x: That Command Doesn't Exist!`)
await message.reply({embeds:[noCommandEmbed]})
} else {
  await message.channel.sendTyping();
await command.run(client, message, args);
 
 await users.set(message.author.id, message.author.tag);
//snipes the user and the user's id :ehehe:

const logChannel = await client.channels.cache.get('982528758470836284');
  const logEmbed = new Discord.MessageEmbed()
  .setTitle(`Command Usage`)
.addFields({
  name: 'User',
  value: message.author.tag
})
  .addFields({
    name: 'Server',
    value: message.guild.name
  })
  .addFields({
    name: 'Channel',
    value: message.channel.name
  })
    .addFields({
      name: 'Command',
      value: commandName
    })
  .setTimestamp()
  .setThumbnail(message.author.displayAvatarURL({
    dynamic: true
  }))
  .setColor('RANDOM')
  await logChannel.send({
    embeds: [
      logEmbed
    ]
  })
}
  
}
});
    
client.login(process.env.TOKEN);


process.on("unhandledRejection", (reason, p) => {
 console.log(" [antiCrash] :: Unhandled Rejection/Catch");
 console.log(reason, p);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
 console.log(" [antiCrash] :: Uncaught Exception/Catch (MONITOR)");
 console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
 console.log("[Anti Crash] :: Bot Crashed");
 console.log(type, promise, reason);
}); 
//by Xanny

