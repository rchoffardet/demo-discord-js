const Discord = require("discord.js");
const Bot = require("./Bot/Bot");
const config = require("../config.json");
const Runner = require("./Bot/Runner");

const client = new Discord.Client();
const bot = new Bot();

bot.configure(
    client, 
    console, 
    new Runner(
        {}, 
        console
    )
);

client.login(config.token);

