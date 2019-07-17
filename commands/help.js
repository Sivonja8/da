const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args, color, langUsing) => {

  fs.readFileSync("./Storage/prefixes.json", "utf8");

  setTimeout(() => {
    let prefixes = JSON.parse(fs.readFileSync("./Storage/prefixes.json", "utf8"));

    switch(args[0]) {
      case "8ball":
        const ballHelp = new Discord.RichEmbed()
          .setAuthor("8ball command", client.user.avatarURL)
          .setDescription("question the mighty 8Ball!")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}8ball <question>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: ballHelp});
            return;
          };

        message.channel.send({embed: ballHelp});
        break;

      case "adsprotection":
        const adsprotectionHelp = new Discord.RichEmbed()
          .setAuthor("adsprotection command", client.user.avatarURL)
          .setDescription("activates ads protection")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}adsprotection <on/off>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: adsprotHelp});
            return;
          };

        message.channel.send({embed: adsprotHelp})
        break;

      case "avatar":
        const avatarHelp = new Discord.RichEmbed()
          .setAuthor("avatar command", client.user.avatarURL)
          .setDescription("displays the mentioned user's avatar")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}avatar [<@user>]`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: avatarHelp});
            return;
          };

        message.channel.send({embed: avatarHelp})

        break;
      case "ban":
        const banHelp = new Discord.RichEmbed()
          .setAuthor("ban command", client.user.avatarURL)
          .setDescription("ban the mentioned user")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}ban <@user>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: banHelp});
            return;
          };

        message.channel.send({embed: banHelp})
        break;
      case "cats":
        const catsHelp = new Discord.RichEmbed()
        .setAuthor("cats command", client.user.avatarURL)
        .setDescription("cats!!")
        .addField("Usage", `${prefixes[message.guild.id].prefixes}cat`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
        .setColor(color)

        if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
          message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
          message.author.send({embed: catsHelp});
          return;
        };

        message.channel.send({embed: catsHelp});
        break;
      case "dogs":
        const dogsHelp = new Discord.RichEmbed()
        .setAuthor("dogs command", client.user.avatarURL)
        .setDescription("dogs!!")
        .addField("Usage", `${prefixes[message.guild.id].prefixes}dogs`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
        .setColor(color)

        if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
          message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
          message.author.send({embed: dogsHelp});
          return;
        };

        message.channel.send({embed: dogsHelp});
        break;
      case "help":
        const helpHelp = new Discord.RichEmbed()
        .setAuthor("help command", client.user.avatarURL)
        .setDescription("shows up a list of commands")
        .addField("Usage", `${prefixes[message.guild.id].prefixes}help [<command>]`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
        .setColor(color)

        if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
          message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
          message.author.send({embed: helpEmbed});
          return;
        };

        message.channel.send({embed: helpHelp});
        break;
      case "kick":
        const kickHelp = new Discord.RichEmbed()
          .setAuthor("kick command", client.user.avatarURL)
          .setDescription("kick the mentioned user")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}kick <@user>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: kickHelp});
            return;
          };

        message.channel.send({embed: kickHelp});
        break;
      case "lockdown":
        const lockdownHelp = new Discord.RichEmbed()
          .setAuthor("lockdown command", client.user.avatarURL)
          .setDescription(`lock the channel for a specified amount of time (to unlock do ${prefixes[message.guild.id].prefixes}lockdown unlock)`)
          .addField("Usage", `${prefixes[message.guild.id].prefixes}lockdown <time in minutes>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: lockdownHelp});
            return;
          };

        message.channel.send({embed: lockdownHelp});
        break;
      case "server":
        const serverHelp = new Discord.RichEmbed()
          .setAuthor("server command", client.user.avatarURL)
          .setDescription("displays informations about our server")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}server`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: mcserverHelp});
            return;
          };

        message.channel.send({embed: mcserverHelp});
        break;
      case "meme":
        const memeHelp = new Discord.RichEmbed()
          .setAuthor("meme command", client.user.avatarURL)
          .setDescription("random meme!")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}meme`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: memeHelp});
            return;
          };

        message.channel.send({embed: memeHelp});
        break;
      case "ping":
        const pingHelp = new Discord.RichEmbed()
          .setAuthor("ping command", client.user.avatarURL)
          .setDescription("pong!")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}ping`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: pingHelp});
            return;
          };

        message.channel.send({embed: pingHelp});
        break;
      case "purge":
        const purgeHelp = new Discord.RichEmbed()
          .setAuthor("purge command", client.user.avatarURL)
          .setDescription("deletes a specified amount of messages")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}purge <amount of messages>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: purgeHelp});
            return;
          };

        message.channel.send({embed: purgeHelp});
          break;
        case "say":
          const sayHelp = new Discord.RichEmbed()
            .setAuthor("say command", client.user.avatarURL)
            .setDescription("make the bot say anything you want!")
            .addField("Usage", `${prefixes[message.guild.id].prefixes}say <words>`)
            .setThumbnail(client.user.avatarURL)
            .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
            .setColor(color)

            if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
              message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
              message.author.send({embed: sayHelp});
              return;
            };

          message.channel.send({embed: sayHelp});
          break;
      case "serverinfo":
        const serverinfoHelp = new Discord.RichEmbed()
          .setAuthor("serverinfo command", client.user.avatarURL)
          .setDescription("displays informations about the guild")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}serverinfo`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: serverinfoHelp});
            return;
          };

        message.channel.send({embed: serverinfoHelp});
        break;
      case "setprefix":
        const setPrefixHelp = new Discord.RichEmbed()
          .setAuthor("setprefix command", client.user.avatarURL)
          .setDescription("set a new guild prefix")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}setprefix <new prefix>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: setPrefixHelp});
            return;
          };

        message.channel.send({embed: setPrefixHelp});
        break;
      case "setwelcome":
        const setwelcomeHelp = new Discord.RichEmbed()
          .setAuthor("setwelcome command", client.user.avatarURL)
          .setDescription("enables welcome messages (detailed setup)")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}setwelcome`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: setwelcomeHelp});
            return;
          };

        message.channel.send({embed: setwelcomeHelp});
        break;
      case "tempmute":
        const tempmuteHelp = new Discord.RichEmbed()
          .setAuthor("tempmute command", client.user.avatarURL)
          .setDescription("mutes the mentioned user for a specified amount of time")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}tempmute <@mention> <time in minutes>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: tempmuteHelp});
            return;
          };

        message.channel.send({embed: tempmuteHelp});
        break;
      case "unmute":
        const unmuteHelp = new Discord.RichEmbed()
          .setAuthor("unmute command", client.user.avatarURL)
          .setDescription("unmutes the mentioned user")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}unmute <@mention>`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: unmuteHelp});
            return;
          };

        message.channel.send({embed: unmuteHelp});
        break;
      case "userinfo":
        const userinfoHelp = new Discord.RichEmbed()
          .setAuthor("userinfo command", client.user.avatarURL)
          .setDescription("displays informations about the mentioned user")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}userinfo [<@user>]`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: userinfoHelp});
            return;
          };

        message.channel.send({embed: userinfoHelp});
        break;
      case "website":
        const websiteHelp = new Discord.RichEmbed()
          .setAuthor("website command", client.user.avatarURL)
          .setDescription("this server's website")
          .addField("Usage", `${prefixes[message.guild.id].prefixes}website`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

          if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
            message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
            message.author.send({embed: websiteHelp });
            return;
          };

        message.channel.send({embed: websiteHelp});
        break;

      default:
        const helpEmbed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
          .setDescription("Hey, I'm [**__Hyper__**](https://www.mc-market.org/resources/7377/)! A bot that can do a lot of things!\nLike give you informations about how many humans do you have in your discord server, or how many players a minecraft server has online!")
          .addField("\🔨 Moderation commands", `__${prefixes[message.guild.id].prefixes}ban @mention__ - ban the mentioned user\n__${prefixes[message.guild.id].prefixes}kick @mention__ - kick the mentioned user\n__${prefixes[message.guild.id].prefixes}unmute @mention__ - unmutes the mentioned user\n__${prefixes[message.guild.id].prefixes}tempmute @mention <time in minutes>__ - mutes the mentioned user for a specified amount of time\n__${prefixes[message.guild.id].prefixes}purge <amount of messages>__ - deletes a specified amount of messages`)
          .addField("\:gear: Administration commands", `__${prefixes[message.guild.id].prefixes}lockdown <time in minutes>__ - lock the channel for a specified amount of time (to unlock do __${prefixes[message.guild.id].prefixes}lockdown unlock__)\n__${prefixes[message.guild.id].prefixes}setprefix <new prefix>__ - set a new guild prefix\n__${prefixes[message.guild.id].prefixes}adsprot <on/off>__ - activates ads protection\n__${prefixes[message.guild.id].prefixes}setwelcome__ - enables welcome messages (detailed setup)`, true)
          .addField("\📃 Informative commands", `__${prefixes[message.guild.id].prefixes}avatar @mention__ - displays the mentioned user's avatar\n__${prefixes[message.guild.id].prefixes}ping__ - pong!\n__${prefixes[message.guild.id].prefixes}mcserver <ip or DNS>__ - displays informations about the specified minecraft server\n__${prefixes[message.guild.id].prefixes}userinfo @mention__ - displays informations about the mentioned user\n__${prefixes[message.guild.id].prefixes}serverinfo__ - displays informations about the guild\n__${prefixes[message.guild.id].prefixes}website__ - this server's website`, true)
          .addField("\:red_car: Fun commands", `__${prefixes[message.guild.id].prefixes}cats__ - cats!!\n__${prefixes[message.guild.id].prefixes}dogs__ - dogs!!\n__${prefixes[message.guild.id].prefixes}8ball <question>__ - question the mighty 8Ball!\n__${prefixes[message.guild.id].prefixes}meme__ - random meme!\n__${prefixes[message.guild.id].prefixes}embed !<title> !<description>__ - generate an embed\n__${prefixes[message.guild.id].prefixes}say <words>__ -make the bot say anything you want!`, true)
          .setTimestamp()
          .setFooter(`This guild's prefix is ${prefixes[message.guild.id].prefixes} || Developed by ♦ kMagic ♦#6276`, client.user.avatarURL)
          .setColor(color)

        if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
          message.channel.send(`:white_check_mark: **| Check your DMs. :ok_hand:**`);
          message.author.send({embed: helpEmbed});
          return;
        };

        message.channel.send({embed: helpEmbed});
        break;
    }
  }, 1000);
}

module.exports.help = {
    name: "help"
}
