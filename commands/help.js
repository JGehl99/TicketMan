module.exports = {
    name: "help",
    description: "Lists all commands with description and usage",
    usage: "",
    roles: "",
    example:"!help createroom",
    execute(message, config){
        message.channel.send("Help!");
    }
}