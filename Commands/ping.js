const Discord = require('discord.js')
const prettyMs = require('pretty-ms')
exports.run = async (client, message, args) => {
const timeStamp = new Date().getTime();
    let loading = await message.reply("<a:loading:982533976671551508> Calculating Ping...");
    let botPing = loading.createdTimestamp - timeStamp;
    let apiPing = client.ws.ping;

let pingEmbed = new Discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle(`<a:loading:982533976671551508> Ping Information`)
      .addFields(
        { name: ":robot: Bot's Ping", value: `${botPing}ms`, inline: true },
        { name: ":satellite: API's latency", value: `${apiPing}ms`, inline: true },
        {
          name: ":desktop: Bot's uptime",
          value: `${prettyMs(client.uptime)}`,
          inline: true,
        }
      )
  .setFooter({
    text: 'Pong!'
  })
      .setAuthor({
        name: `${message.author.tag}`,
        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`,
      });
    await loading.edit({ content: null, embeds: [pingEmbed] });
  }
exports.name = "ping"