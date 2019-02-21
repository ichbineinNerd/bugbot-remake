exports.run = (bot, message, args) => {
  var bugApprovalChannel = bot.channels.get("541764537981075458" || "541753704475394059");
  var bugHunterRole = message.guild.roles.find(role => role.name === "Bug Hunter");
  
  if(message.member.roles.has(bugHunterRole.id)) {
    var messageToDeny = args[0];
    var denyReason = args.slice(1).join(" ");
    
    if(!messageToDeny | !denyReason) return message.channel.send("Usage: `!deny <report ID> <reason/system settings>`");
    
  setTimeout(() => {
    message.delete();
}, 500)
    
    bugApprovalChannel.fetchMessage(messageToDeny).then((msg) => msg.edit(msg.content + `\n<:cannotrepro:541760088432443394> **${message.author.tag}**: \`${denyReason}\``));
  } else {
    message.channel.send("Only bug hunters have access to this type of commands.");
  }
}
module.exports.help = {name: "deny"};