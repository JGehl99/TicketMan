const Discord = require("discord.js");


module.exports = {
    name: "createroom",
    description: "Creates a temporary role and private text channel and adds message author and user to the role",
    usage: "<user>",
    roles: "Staff",
    example: "!createroom Gameproguy",
    execute(client, message, config, command){
        message.channel.send("Create Room!");
    }
}