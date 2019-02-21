exports.run = async (bot, message, args) => {
  var submitMessage = args.slice(0).join(" ");
  var splitSymbol = " | ";
  var submitMessageFinal = submitMessage.split(splitSymbol).filter(function(i) {return i;}).join("\n");
  
  var bugApprovalChannel = bot.channels.get("541764537981075458" || "541753704475394059");
  
  if(!submitMessage) return message.channel.send("Cannot send empty bug report!");
  
  setTimeout(() => {
    message.delete();
}, 500)
  
  var sentSubmitMessage = await message.channel.send(submitMessageFinal + "\n\nThe report above needs to be approved.");
  bugApprovalChannel.fetchMessage(sentSubmitMessage.id).then((msg) => msg.edit(msg.content + `\nReport ID: **${sentSubmitMessage.id}**`));
}
module.exports.help = {name: "submit"};