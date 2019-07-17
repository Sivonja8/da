const Discord = require('discord.js');

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

  const argresult = args.join(' ');
  if(!argresult) return;
  if(isNaN(argresult)) {
    message.channel.send(`${language["purge"].invalidNumber}`);
    return;
  }
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(`${language["purge"].noPermission}`);
      return;
    }
    let messagecount = parseInt(args.join(" "));
    message.channel.bulkDelete(messagecount)
    .then(() => {
      setTimeout(() => {
        let purgedMessage = language["purge"].purged;
        const purged = purgedMessage.replace("${messages}", messagecount);

        message.channel.send(`${purged}`)
        .then(m => {
          setTimeout(() => {
            m.delete()
          }, 5000);
        });
      }, 2000);
    });
};

module.exports.help = {
  name: 'purge'
}
