const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (args[3] == null) {

        var useMessage = new discord.MessageEmbed()
            .setTitle("Announcement")
            .setColor("#fc0303")
            .setDescription(`${message.author} make an announcement with:\n.Announce \nTitel\nChannel \nColor\nDescription.`)

        return message.channel.send(useMessage)

    }

    args[3] = args.splice(3, args.length).join(" ");

    var options = {
        titel: args[0],
        channel: args[1],
        color: args[2],
        description: args[3]

    }

    var announcer = message.author;

    var announceMessage = new discord.MessageEmbed()
        .setTitle(options.titel)
        .setColor(options.color)
        .setDescription(options.description);

    var announeChannel = message.guild.channels.cache.find(c => c.name == options.channel);

    if (!announeChannel) return message.channel.send("Channel couldn't be find.")

    announeChannel.send(announceMessage);

}

module.exports.help = {
    name: "announce"
}
