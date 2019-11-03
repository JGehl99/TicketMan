const Discord = require('discord.js');
const config = require("./config.json");

//Creates Client
const client = new Discord.Client();

client.login(config.token).then(f =>{
	console.log("Logged In!");
});

client.on("ready",()=>{
	console.log("Ready!");
});

client.on("message",message=>{
	if (!message.author.bot && message.content.startsWith(config.prefix)){
		message.channel.send("Hello World!");
	}
});
