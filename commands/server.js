const Discord = require('discord.js');
const mcserver = require('mc-hermes');

module.exports.run = async (client, message, args, color, langUsing) => {

  // replace mc.hypixel.net with your server's ip address or DNS in the language file

  let language = require(`../messages/messages_${langUsing}.json`);

  mcserver.pc({ server: language["server"].server })
    .then((data)=>{

      let EmbedTitleMessage = language["server"].embedTitle;
      const EmbedTitle = EmbedTitleMessage.replace("${server}", language["server"].server);

    	const embed = new Discord.RichEmbed()
    	.setAuthor(client.user.username, client.user.avatarURL)
    	.setTitle(`${EmbedTitle}`)
    	.addField(`${language["server"].version}`, data.version.name)
    	.addField(`${language["server"].players}`, `${data.players.online}/${data.players.max}`)
      .setImage(`https://mcapi.us/server/image?ip=${lanuage["server"].server}&theme=dark`)
    	.setColor(color)
    	.setTimestamp()

      if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
        message.channel.send(`${language["server"].noEmbedPermission}`);
        return;
      };

    	message.channel.send({embed: embed});
    });
};

module.exports.help = {
  name: 'server'
}
