exports.run = (bot, message, args) => {
  var bugApprovalChannel = bot.channels.get("541764537981075458" || "541753704475394059");
  var bugHunterRole = message.guild.roles.find(role => role.name === "Bug Hunter");
  
  if(message.member.roles.has(bugHunterRole.id)) {
    var messageToAttach = args[0];
    var attachLink = args.slice(1).join(" ");
    
    if(!messageToAttach | !attachLink) return message.channel.send("Usage: `!attach <report ID> <link>`");

  setTimeout(() => {
    message.delete();
}, 500)
    
    bugApprovalChannel.fetchMessage(messageToAttach).then((msg) => msg.edit(msg.content + `\n:link: **${message.author.tag}**: ${attachLink}`));
  } else {
    message.channel.send("Only bug hunters have access to this type of commands.");
  }
}
module.exports.help = {name: "attach"};