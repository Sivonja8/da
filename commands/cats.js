const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

  // perms checking
  if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
    message.channel.send(`${language["cats"].noEmbedPermission}`);
    return;
  }

  snekfetch.get('http://aws.random.cat/meow').then(body => {

  // embed
  const embed = new Discord.RichEmbed()
  .setImage(body.body.file)
  .setColor(color)
  .setFooter(`${language["cats"].cuteMessage}`, message.author.avatarURL)
  message.channel.send(embed);
});
};

module.exports.help = {
  name: 'cats'
}
