const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var infor = new discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setDescription("This is the user's info!")
    .setColor("#34eb71")
    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    .addField("Created at", message.author.createdAt)
        
    message.channel.send(infor)
}



module.exports.help = {
    name: "who"
}