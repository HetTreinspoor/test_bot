const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (args[3] == null) {

        var useMessage = new discord.MessageEmbed()
            .setTitle(`<a:vink:700325345127301161> Announcement`)
            .setColor("#fc0303")
            .setDescription(`${message.author} make an announcement with:\n<a:vink:700325345127301161>.Announcevink \n<a:vink:700325345127301161>Titel\n<a:vink:700325345127301161>Channel \n<a:vink:700325345127301161>Color\n<a:vink:700325345127301161>rainbow yes or no\n<a:vink:700325345127301161>thumbnail\n<a:vink:700325345127301161>Description.`)

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
    console.log(options.channel)

    var splitter = "//";

    var descriptions = options.description.split(splitter);

    var des1 = descriptions[0];
    var des2 = descriptions[1];
    var des3 = descriptions[2];
    var des4 = descriptions[3];
    var des5 = descriptions[4];
    
    var announcer = message.author;



    var announceMessage = new discord.MessageEmbed()
        .setTitle(options.titel)
        .setColor(options.color)

    var announeChannel = message.guild.channels.cache.find(c => c.name == options.channel);

    if (des5 == undefined) {
        announceMessage.setDescription(`<a:vink:700325345127301161>${des1}\n<a:vink:700325345127301161>${des2}\n<a:vink:700325345127301161>${des3}\n<a:vink:700325345127301161>${des4}`)

    }
    
    if (des4 == undefined) {
        announceMessage.setDescription(`<a:vink:700325345127301161>${des1}\n<a:vink:700325345127301161>${des2}\n<a:vink:700325345127301161>${des3}`)

    }

    if (des3 == undefined) {
        announceMessage.setDescription(`<a:vink:700325345127301161>${des1}\n<a:vink:700325345127301161>${des2}`)

    }
    
    if (des2 == undefined) {
        announceMessage.setDescription(`<a:vink:700325345127301161>${des1}`)

    }

    if (args[3] == "yes") {
        announceMessage.setImage("https://media.discordapp.net/attachments/692792359393427558/692792394034446396/colorbar.gif")
    }

    
    if (args[4] == "1") {
        announceMessage.setThumbnail(`https://imgur.com/IehCiiO.gif`)

    }

    if (args[4] == "2") {
        announceMessage.setThumbnail('https://imgur.com/oPWvB6e.gif')
    }

    if (!announeChannel) return message.channel.send("Channel couldn't be find.")

    announeChannel.send(announceMessage);

}

module.exports.help = {
    name: "announcevink"
}
