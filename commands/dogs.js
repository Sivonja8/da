const Discord = require('discord.js');
const snekfetch = require('snekfetch');

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

  // perms checking
  if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
    message.channel.send(`${language["dogs"].noEmbedPermission}`);
    return;
  }

  snekfetch.get('http://random.dog/woof.json').then(body => {

  // embed
  const embed = new Discord.RichEmbed()
  .setImage(body.body.url)
  .setColor(color)
  .setFooter(`${language["dogs"].cuteMessage}`, message.author.avatarURL)
  message.channel.send(embed);
});
};

module.exports.help = {
  name: 'dogs'
}
