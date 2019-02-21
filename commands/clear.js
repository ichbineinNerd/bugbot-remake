module.exports.run = async (bot, message, args) => {
  
  if (isNaN(args[0])) return;
  if (args[0] > 100) return;
    
  message.channel.bulkDelete(args[0]).then(messages => message.channel.send(`👌 Obrisano **${messages.size}** poruka.`).then(msg => msg.delete(500)))
  
}
module.exports.help = {name: "clear"};