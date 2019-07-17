const Discord = require('discord.js');
const fs = require('fs');
let prefixes = JSON.parse(fs.readFileSync("./Storage/prefixes.json", "utf8"));

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

  let argresult = args.join(" ");

  // if no args

  if(!args[0]) {

    let noArgumentsMessage = language["say"].noArguments;
    const noArguments = noArgumentsMessage.replace("${prefix}", prefixes[message.guild.id].prefixes);

    message.channel.send(`${noArguments}`);
    return;

  };

  message.channel.send(`${argresult}`);
};

module.exports.help = {
  name: 'say'
}
