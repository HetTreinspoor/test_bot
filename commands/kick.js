const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!kickUser) return message.channel.send("User couldn't be find");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permissions");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't kick this user");

    var kick = new discord.MessageEmbed()
        .setColor("#fc0000")
        .setDescription("Kick")
        .addField("Kicked user:", kickUser)
        .addField("Kicked by:", message.author)
        .addField("reason", reason);

    var kickChannel = message.guild.channels.cache.find(c => c.name == "kicks");
    if (!kickChannel) return message.guild.send("can't find the channel.");



    message.guild.member(kickUser).kick(reason);

    kickChannel.send(kick);

}

module.exports.help = {
    name: "kick"
}