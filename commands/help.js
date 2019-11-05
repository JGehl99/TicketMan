const Discord = require("discord.js");
const config = require("../config.json");

module.exports = {
    name: "help",
    description: "Lists all commands with description and usage",
    usage: "",
    roles: "",
    example:"!help createroom",
    execute(client, message, config, command){
        //console.log(message);
        //console.log(client);


        if (message.content.length > 0){

            //console.log(message.content);
            const args = message.content.slice(config.prefix).split(/ +/);
            args.shift();
            //console.log(args)
            

            if (!client.commands.has(args[0])){
                message.reply("Command !" + args[0] + " not found!");
                return;
            }

            const cmd = client.commands.get(args[0]);

            
            console.log(cmd);
            message.channel.send("Command: " + cmd.name + "\nDescription: " + cmd.description + "\nUsage: " + cmd.usage + "\nExample: " + cmd.example);
        } else{
            message.channel.send("eep");
        }
    }
}