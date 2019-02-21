exports.run = (bot, message, args) => {
  var bugApprovalChannel = bot.channels.get("541764537981075458" || "541753704475394059");
  var bugHunterRole = message.guild.roles.find(role => role.name === "Bug Hunter");
  
  if(message.member.roles.has(bugHunterRole.id)) {
    var messageToApprove = args[0];
    var approveReason = args.slice(1).join(" ");
    
    if(!messageToApprove | !approveReason) return message.channel.send("Usage: `!approve <report ID> <reason/system settings>`");

  setTimeout(() => {
    message.delete();
}, 500)
    
    bugApprovalChannel.fetchMessage(messageToApprove).then((msg) => msg.edit(msg.content + `\n<:canrepro:541760088826708008> **${message.author.tag}**: \`${approveReason}\``));
  } else {
    message.channel.send("Only bug hunters have access to this type of commands.");
  }
}
module.exports.help = {name: "approve"};