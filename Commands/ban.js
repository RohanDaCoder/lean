const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ban',
  run: async (client, message, args) => {
if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply(`:x: You Dont Have Permission To Use This Command!`);

let target = message.mentions.members.first();
let reason = args.join() || 'No Reason Specifyed.';

target.ban().catch((err) => {
  message.reply(`:x: Coulnt Ban ${target.user.tag}`);
  console.log(err);
});

const banEmbed = new MessageEmbed()
.setTitle('Ban')
.setDescription(`:white_check_mark: Successfully Banned ${target.user.tag}`)
.addField({
  name: 'Admin',
  value: `${message.author.tag}`
})
.addField({
  name: 'Reason',
  value: `${reason}`
})
.setThumbnail(target.user.displayAvatarURL({
  dynamic: true
}))
.setColor('GREEN');
await message.reply({
  embeds: [
    banEmbed
    ]
})
  }
};