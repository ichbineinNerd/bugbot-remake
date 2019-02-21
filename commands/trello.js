exports.run = (bot, message, args) => {
  var bugApprovalChannel = bot.channels.get("541764537981075458" || "541753704475394059");
  var bugHunterRole = message.guild.roles.find(role => role.name === "Bug Hunter");
  
  if(message.member.roles.has(bugHunterRole.id)) {
    var messageToNote = args[0];
    var noteReason = args.slice(1).join(" ");
    
    if(!messageToNote | !noteReason) return message.channel.send("Usage: `!approve <report ID> <reason/system settings>`");
    
  setTimeout(() => {
    message.delete();
}, 500)
    
    bugApprovalChannel.fetchMessage(messageToNote).then((msg) => msg.edit(msg.content + `\n<:trello:541762145977761813> **${message.author.tag}**: ${noteReason}`));
  } else {
    message.channel.send("Only bug hunters have access to this type of commands.");
  }
  
}
module.exports.help = {name: "trello"};