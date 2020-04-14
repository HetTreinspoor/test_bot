const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

    var botName = bot.user.username;

    var botEmbed = new discord.MessageEmbed()
        .setDescription(`${botName} information`)
        .setColor("#1a53ff")
        .setThumbnail(botIcon)
        .addField("Bot name", bot.user.username)
        .addField("Made on", bot.user.createdAt);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botname"
}