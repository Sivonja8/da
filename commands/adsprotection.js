const Discord = require('discord.js');
const fs = require('fs');
let prefixes = JSON.parse(fs.readFileSync("./Storage/prefixes.json", "utf8"));

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

  // perms checking

  if(!message.member.hasPermission('MANAGE_GUILD')) {
    message.channel.send(`${language["adsprotection"].noPermission}`);
    return;
  };

  // reading json file

  const thing = JSON.parse(fs.readFileSync("./Storage/ads.json", 'utf8'));

  // if args is on

  if(args[0] === "on") {

    // if already on
    if(thing[message.guild.id]) {
      let alreadyOnMessage = language["adsprotection"].alreadyOn;
      const alreadyOn = alreadyOnMessage.replace("${prefix}", prefixes[message.guild.id].prefixes);

      message.channel.send(`${alreadyOn}`);
      return;
    }

    // if not already on
    thing[message.guild.id] = "on";
    fs.writeFile("./Storage/ads.json", JSON.stringify(thing, null, 2), (err) => {
      if (err) throw err;
    })
    message.channel.send(`${language["adsprotection"].turnedOn}`);

      // if args = off
    } else if(args[0] === "off") {

      // if already off
      if(!thing[message.guild.id]) {
        let alreadyOffMessage = language["adsprotection"].alreadyOff;
        const alreadyOff = alreadyOffMessage.replace("${prefix}", prefixes[message.guild.id].prefixes);

        message.channel.send(`${alreadyOff}`);
        return;
      }

      //if not already off
      message.channel.send(`${language["adsprotection"].turnedOff}`);
      delete thing[message.guild.id];
      fs.writeFile("./Storage/ads.json", JSON.stringify(thing, null, 2), (err) => {
        if (err) throw err;
      })

    } else if(args[0] !== "off" || args[0] !== "on") {
      let incorrectUsageMessage = language["adsprotection"].incorrectUsage;
      const incorrectUsage = incorrectUsageMessage.replace("${prefix}", prefixes[message.guild.id].prefixes);

      message.channel.send(`${incorrectUsage}`);
      return;
    }
};

module.exports.help = {
  name: 'adsprotection'
}
