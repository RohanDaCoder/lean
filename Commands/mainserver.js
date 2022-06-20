module.exports = {
  name: 'mainserver',
  run: async (client, message, args) => {
if(args[0] !== 'RenderDragonSucks') return message.reply(':x: Please Enter The Correct Pin For The Main Server Link.');
    message.delete();
    message.channel.send(`<@${message.author.id}> Check Your DMs`)
    const Discord = require('discord.js');
let EEmbed = new Discord.MessageEmbed()
    .setDescription('[Main Server](https://discord.gg/6j7BsxyEmp)')
    .setFooter({
      text: 'You Got The Pin Correctly!'
    })
    .setColor('GREEN');
await message.author.send({
  embeds: [
    EEmbed
  ]
})
  }
}