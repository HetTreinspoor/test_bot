const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var serverIcon = message.guild.iconURL;

    var serverEmbed = new discord.MessageEmbed()
        .setDescription("server information")
        .setColor("#1a53ff")
        .setThumbnail(serverIcon)
        .addField("Bot name", bot.user.username)
        .addField("You are joined at", message.member.joinedAt)
        .addField("Total members", message.guild.memberCount);

    return message.channel.send(serverEmbed);


}

module.exports.help = {
    name: "serverinfo"
}