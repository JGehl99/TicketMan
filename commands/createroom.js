module.exports = {
    name: "createroom",
    description: "Creates a temporary role and private text channel and adds message author and user to the role",
    usage: "<user>",
    roles: "Staff",
    example: "!createroom Gameproguy",
    execute(message, config){
        message.channel.send("Create Room!");
    }
}