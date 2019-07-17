const Discord = require('discord.js');

module.exports.run = async (client, message, args, color, langUsing) => {
  // replace example.com with your website's URL in the language file

  let language = require(`../messages/messages_${langUsing}.json`);

  message.channel.send(`${language["website"].website}`);
};

module.exports.help = {
  name: 'website'
}
