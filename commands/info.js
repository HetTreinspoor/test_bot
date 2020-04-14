const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var user = message.mentions.users.first() || message.author;

    var userjoined = message.member.joinedAt;

    var embed = new discord.MessageEmbed()
        .setAuthor(user.username + '#' + user.discriminator, user.displayAvatarURL)
        .setDescription(`${user}`)
        .setColor(`RANDOM`)
        .addField("ID:", `${user.id}`)
        .addField("Created:", user.createdAt)
        //.addField("Joined at:", userjoined)
        .addField('Status:', user.presence.status, true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
        .setTimestamp()
        .setImage("https://media.discordapp.net/attachments/692792359393427558/692792394034446396/colorbar.gif")

    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
    name: "info"
}
