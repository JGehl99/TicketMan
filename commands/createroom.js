const Discord = require("discord.js");

module.exports = {
    name: "createroom",
    description: "Creates a temporary role and text channel and adds message author and user to the role",
    usage: "<user>",
    roles: "TECH",
    example: "!createroom Gameproguy",
    execute(client, message, config, command){
        console.log(message);
        message.channel.send("Create Room!");
        message.guild.createChannel(message,{type: "text", parent: "641755544549326848"}).then(()=>{
            console.log;
        })
        .catch(console.error);
    }
}