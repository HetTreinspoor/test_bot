const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (args[3] == null) {

        var useMessage = new discord.MessageEmbed()
            .setTitle("Announcement")
            .setColor("#fc0303")
            .setDescription(`${message.author} make an announcement with:\n.Announce \nTitel\nChannel \nColor\n rainbow yes or no\nDescription.`)

        return message.channel.send(useMessage)

    }

    args[5] = args.splice(5, args.length).join(" ");

    var options = {
        titel: args[0],
        channel: args[1],
        color: args[2],
        raibow: args[3],
        thumbnail: args[4],
        description: args[5]

    }

    var announcer = message.author;

    var announceMessage = new discord.MessageEmbed()
        .setTitle(options.titel)
        .setColor(options.color)
        .setDescription(options.description);

    var announeChannel = message.guild.channels.cache.find(c => c.name == options.channel);

    if (args[3] == "yes") {
        announceMessage.setImage("https://media.discordapp.net/attachments/692792359393427558/692792394034446396/colorbar.gif")
    }

    var servericon = message.guild.iconURL

    if (args[4] == "1") {
        announceMessage.setThumbnail(servericon)

    }

    if (args[4] == "2") {
        announceMessage.setThumbnail('https://imgur.com/oPWvB6e.gif')
    }

    if (!announeChannel) return message.channel.send("Channel couldn't be find.")

    announeChannel.send(announceMessage);

}

module.exports.help = {
    name: "announcement"
}
