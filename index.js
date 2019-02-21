const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 15;
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} učitan`);
        bot.commands.set(props.help.name, props);
    });

});

bot.on('ready', () => {
    console.log(`Ulogovan kao ${bot.user.tag}!`);
});

bot.on("message", msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;
	
	if (!msg.content.startsWith(config.prefix)) return;

    let msgArray = msg.content.split(" ");
    let cmd = msgArray[0].toLocaleLowerCase();
    let args = msgArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(config.prefix.length));
    
    if (commandfile) {
    commandfile.run(bot, msg, args);
    } else {
    return;
    }
});

  
  
bot.on('error', console.error);
const db = require('quick.db');
bot.on('guildMemberRemove', member => db.set(`roles_${member.id}`, member._roles));
bot.on('guildMemberAdd', async member => {
    let fetched = await db.fetch(`roles_${member.id}`);
    if (!fetched) return;
    member.roles.add(fetched);
});
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});


app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`)
    console.log("popio sam jedan bing !");
}, 60000);

bot.login(config.token).catch(console.error);



//db.set(`cases`, 0); 