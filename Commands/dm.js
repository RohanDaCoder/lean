exports.run = (client, message, args) =>{
const user = message.content.split(" ")
const member = message.mentions.members.first() || client.users.fetch(args[0])
const e = message.content.slice(26).trim();
if(!member) return message.channel.send('Provide a user!')
if(!e) return message.channel.send('What do you want to send to them?')
message.delete()
  
member.send(e)
} 
exports.name = "dm"