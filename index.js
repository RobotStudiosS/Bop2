const Discord = require("discord.js");
const TOKEN = "NDU1MjkwMTE1ODI1MDc0MTc2.DgGqSw.qfjq6w-WqIAgWGExrFT6fuHqcnQ" 
const bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");

});

bot.on("message", function(message) {
    console.log(message.content)
    
    var embed = new Discord.RichEmbed()
        .setDescription("Hello, this is an awesome rich embed")
    if(message.content === "!embed")
        message.channel.sendEmbed(embed)
        break; 

});

bot.login(TOKEN);
