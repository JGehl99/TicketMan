const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

//Creates Client
const client = new Discord.Client();

//Creates collection
client.commands = new Discord.Collection();

// fs.readdirSync will return an array of file names in the directory
// filter only retrieves files that are .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Performs a require command for every file in the list
// Fills collection with name, and command
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Logs the bot in
client.login(config.token).then(f =>{
	console.log("Bot is Logged In!");
});

//Bot is Ready
client.on("ready",()=>{
	console.log("Bot is Ready!");
});

client.on('guildMemberAdd', (guildMember) => {

	guildMember.guild.channels.get("640401182568873984").send("Welcome to the server, <@" + guildMember.id + ">!");
	guildMember.addRole(guildMember.guild.roles.find(role => role.name === 'Users')).then(f =>{
		console.log(guildMember.displayName + " has been added to Users.")});
}); 


//On Message
client.on("message",message=>{
	if(message.content.startsWith(config.prefix) && !message.author.bot){

		// Remove prefix and store command and shift 'commandName' out of args
		const args = message.content.slice(config.prefix.length).split(/ +/);
		
		const commandName = args.shift().toLowerCase();

		console.log(args);

		// If the command doesn't exist, return null
		//TODO: Add wrong command message
		if (!client.commands.has(commandName)){
			message.reply("Command !" + commandName + " not found!");
			return;
		}
		
		//Sets command to the command 
		const command = client.commands.get(commandName);
		console.log(command);

		//Display usage if command.usage is empty, and if there were no arguments entered
		if (command.usage.length != 0 && args.length == 0){
			message.reply("Usage: ```" + config.prefix + commandName + " " + command.usage + "```");
			return;
		}

		//If the message author has the permission OR if no permissions are required
		if (message.member.roles.find(r => r.name === command.roles) || !command.roles.length){
			console.log(config.prefix + command.name + " has been executed!");
			command.execute(client, message, config, command);
		} else{
			message.reply("You do not have permission to use that command!");
			return;
		}
	} else{
		return;
	}
});
