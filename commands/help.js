const Discord = require("discord.js");
const config = require("../config.json");

//TODO
// - Print roles that can use commands when specific command is referenced

module.exports = {
    name: "help",
    description: "Lists all commands with description and usage",
    usage: "",
    roles: "",
    example: "!help createroom",
    execute(client, message, config, command){
        //console.log(message);
        //console.log(client);

        //console.log(message.content);
        const args = message.content.slice(config.prefix).split(/ +/);
        args.shift();
        console.log(args)
        console.log(client.commands);

        //If only !help is called, list all commands available
        if (args.length == 0){
            var list = "List of commands: \n";
            client.commands.forEach(element => {
                list += "`" + config.prefix + element.name + " " + element.usage + "`\n";
            });
            message.channel.send(list);
            return;
        }
        
        //If the inputted command is not found in the list of commands
        if (!client.commands.has(args[0])){
            message.reply("Command !" + args[0] + " not found!");
            return;
        }

        //gets specific commad based on argument
        const cmd = client.commands.get(args[0]);

        console.log(cmd);

        //If usage is empty, don't print it
        if (cmd.usage != 0){
            message.channel.send("Command: `" + config.prefix + cmd.name + "`\nDescription: `" + cmd.description + "`\nUsage: `" + config.prefix + cmd.name + " " + cmd.usage + "`\nExample: `" + cmd.example + "`");
        } else {
            message.channel.send("Command: `" + config.prefix + cmd.name + "`\nDescription: `" + cmd.description  + "`\nExample: `" + cmd.example + "`");
        }

    }
}