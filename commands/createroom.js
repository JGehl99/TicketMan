const Discord = require("discord.js");

module.exports = {
    name: "createroom",
    description: "Creates a temporary role and text channel and adds message author and user to the role",
    usage: "<user>",
    roles: "TECH",
    example: "!createroom Gameproguy",
    execute(client, message, config, command){

        //Command to get user id from mention (to make role for staff and user)
        //message.mentions.users.first().id
        //
        //TODO
        //
        // Create a role and add user to it
        // Change all instances of 'message' using the new id method above
        //
        //



        console.log(message);
        message.channel.send("Create Room!");
        message.guild.createChannel(message,{
            type: "text",
            parent: "641755544549326848",
            permissionOverwrites: [
                {
                    //Users
                    id: "641330577517314048",
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    //Staff
                    id: "641330637000933397",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    //Helper
                    //id: 
                }
            ]
        }).then(()=>{
            console.log;
        })
        .catch(console.error);
    }
}