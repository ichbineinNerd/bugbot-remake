exports.run = async (bot, message, args) => {
  
  var bugApprovalChannel = bot.channels.get("541764537981075458" || "541753704475394059");
  var channel = bot.channels.get("542113439926190081");

  bugApprovalChannel.fetchMessage(args[0]).then((msg) => {
    let report = msg.content;
    msg.delete();
    channel.send(report);
  });
  message.delete();
  
}
module.exports.help = {name: "archive"};