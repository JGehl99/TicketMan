const Discord = require('discord.js');
const mysql = require('./sql.js');

module.exports = {
    name: "search",
    description: "Searches database for solution(s) to mentioned user's problems",
    usage: "<@mention>",
    roles: "TECH",
    example: "!search @Gameproguy#8802",
    execute(client, message, config, command){
        
        let username = message.mentions.users.first().username;

        

    }
}