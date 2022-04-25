const Discord = require('discord.js');
require(`dotenv`).config()

const TOKEN = "OTY3ODkwMjMzNzU4NzI0MTE3.YmW4Bg.DsI98pYXstXp-5PAvMTl5CFwmok";

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });



client.once(`ready`, ()=>{
    console.log(`Bocik jest online!`);
});

client.on(`messageCreate`, (message) =>{
    if(message.content == "/ping"){
        message.reply("pong!");
    }
    
});






client.login(TOKEN);