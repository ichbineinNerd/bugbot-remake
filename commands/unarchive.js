exports.run = async (bot, message, args) => {
  
  var bugApprovalChannel = bot.channels.get("541764537981075458" || "541753704475394059");
  var channel = bot.channels.get("542113439926190081");

  channel.fetchMessage(args[0]).then((msg) => {
    let report = msg.content;
    msg.delete();
    bugApprovalChannel.send(report);
  });
  message.delete();
}
module.exports.help = {name: "unarchive"};