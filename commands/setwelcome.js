const Discord = require('discord.js');
const fs = require('fs');
let prefixes = JSON.parse(fs.readFileSync("./Storage/prefixes.json", "utf8"));

module.exports.run = async (client, message, args, color, langUsing) => {

  let language = require(`../messages/messages_${langUsing}.json`);

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${language["setwelcome"].noPermission}`);

  message.channel.send(`${language["setwelcome"].step1}`)
  .then(() => {
    message.channel.awaitMessages(response => response.author.id === message.author.id, {
      max: 1,
      time: 30000,
      errors: ['time'],
    })

    .then((collected) => {
      if(collected.first().content === "cancel") {
        message.channel.send(`${language["setwelcome"].canceled}`);
        return;
      }

      const wchan = message.guild.channels.find('name', collected.first().content);
      if(!wchan || wchan === undefined) {
        message.channel.send(`${language["setwelcome"].invalidChannel}`);
        return;
      }

      if(wchan.type === "voice" || wchan.type === "category") {
        message.channel.send(`${language["setwelcome"].invalidTextChannel}`);
        return;
      }

      if(!wchan.permissionsFor(message.guild.me).has('SEND_MESSAGES')) {
        message.channel.send(`${language["setwelcome"].noMessagePermission}`);
        return;
      }

      const thing = JSON.parse(fs.readFileSync("./Storage/welcome.json", 'utf8'));

        thing[message.guild.id] = {
          channel: message.guild.channels.find('name', collected.first().content).id
        };

        fs.writeFile("./Storage/welcome.json", JSON.stringify(thing, null, 2), (err) => {
          if (err) throw err;
        });

        setTimeout(() => {

          const chan = JSON.parse(fs.readFileSync("./Storage/welcome.json", 'utf8'));

          let step2Message = language["setwelcome"].step2;
          let step2 = step2Message.replace("${channel}", chan[message.guild.id].channel);

          message.channel.send(`${step2}`)
          .then(() => {
            message.channel.awaitMessages(response => response.author.id === message.author.id, {
              max: 1,
              time: 30000,
              errors: ['time'],
            })

            .then((collected) => {
              if(collected.first().content === "cancel") {
                message.channel.send(`${language["setwelcome"].canceled}`);
                return;
              }

            const thing = JSON.parse(fs.readFileSync("./Storage/welcome.json", 'utf8'));

            thing[message.guild.id].message = collected.first().content;

            let finishedMessage = language["setwelcome"].finished;
            let finishedC = finishedMessage.replace("${channel}", thing[message.guild.id].channel);
            let finished = finishedC.replace("${message}", thing[message.guild.id].message);

            message.channel.send(`${finished}`)

            fs.writeFile("./Storage/welcome.json", JSON.stringify(thing, null, 2), (err) => {
              if (err) throw err;
            });
          });
        })
        .catch(() => {
          message.channel.send(`${language["setwelcome"].canceled}`);
        });
      }, 1000);
    });
  })
  .catch(e => {
    console.log(e);
    message.channel.send("**:x: | Setup canceled.**");
  });
};

module.exports.help = {
    name: "setwelcome"
}
