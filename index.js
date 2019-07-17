/* ########################################################## */
/*                                                            */
/*        HYPER - A multifunctional Discord Bot with          */
/*              moderation, information, utility,             */
/*                fun, and minecraft commands!                */
/*                     Developed by: kMagic                   */
/*  This is my first MCM resource, I really hope you like it. */
/*   If you find any bugs, please consider to DM me on MCM    */
/*                    or DM me on Discord:                    */
/*                    TAG: ♦ kMagic ♦#6276                    */
/*                   ID: 204228790996434944                   */
/*                                                            */
/*       Also, if you need any help, DM me on MC-Market!      */
/*                                                            */
/*                          Enjoy!                            */
/*                                                            */
/* ########################################################## */



/* ########################################################## */
/*                                                            */
/*        REQUIREMENTS (do not modify anything in here)       */
/*                                                            */
/* ########################################################## */


const Discord = require('discord.js');
const fs = require('fs');
const moment = require('moment');


/* ########################################################## */
/*                                                            */
/*        VARIABLES (do not modify anything in here)          */
/*                                                            */
/* ########################################################## */


const client = new Discord.Client();
const config = require("./Storage/config.json");
const prefixgen = config.prefix;
const version = config.version;
const logging = config.logging;
const color = config.color;
const langUsed = config.lang;


/* ########################################################## */
/*                                                            */
/*      COMMAND REGISTERING (do not touch anything in here)   */
/*                                                            */
/* ########################################################## */



client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log(new Error("[Hyper] An error occurred! Please contact the developer on Discord or MC-Market and tell them this error code: 153215"));
    process.exit(1);
    return;
  }

  jsfile.forEach((f) =>{
    let props = require(`./commands/${f}`);
    console.log(`[Hyper] Loaded ${f}.`);
    client.commands.set(props.help.name, props);
  });
})


/* ########################################################## */
/*                                                            */
/*      LANGUAGE CHECKS (do not modify anything in here)      */
/*                                                            */
/* ########################################################## */


if (langUsed !== "en-US" && langUsed !== "RO") {
  console.log(new TypeError(`[Hyper] The 'lang' value must be EN_US or RO. If the problem persists, please contact the developer on MC-Market. Error code: 159275`));
  process.exit(1);
};

let langUsing = "en-US";
let language = require(`./messages/messages_${langUsing}.json`);

if (langUsed === "en-US") {
  langUsing = "en-US";
  language = require(`./messages/messages_${langUsing}.json`);
  console.log(`${language.langLoaded}`);
} else if (langUsed === "RO") {
  langUsing = "RO";
  language = require(`./messages/messages_${langUsing}.json`);
  console.log(`${language.langLoaded}`);
};


/* ########################################################## */
/*                                                            */
/*          CHECKS (do not modify anything in here)           */
/*                                                            */
/* ########################################################## */


if (process.version.slice(1).split('.')[0] < 8) {
  console.log(new Error(`[Hyper] You must have NodeJS 8 or higher installed on your PC.`));
  process.exit(1);
};

if (logging !== true && logging !== false) {
  console.log(new TypeError(`[Hyper] The 'logging' value must be true or false. If the problem persists, please contact the developer on MC-Market. Error code: 159254`));
  process.exit(1);
};

if (logging === true) {
  console.log(`[Hyper] Logging enabled! When someone will execute a command, I will log that in here.`);
};


/* ########################################################## */
/*                                                            */
/*      CLIENT LOGING (do not modify anything in here)        */
/*                                                            */
/* ########################################################## */


client.login("NTg5OTE1MzY1MDQ4NDUxMTAz.XS9qBw.IyhuNY8OM9XCSH94Q4kQdaADx60");


/* ########################################################## */
/*                                                            */
/*      CLIENT EVENTS (do not modify anything in here)        */
/*                                                            */
/* ########################################################## */

// error notifiers

client.on("error", (e) => {
  console.error(e);
});

client.on("warn", (e) => {
  console.warn(e);
});

process.on('unhandledRejection', error => {
  console.error(`Error: \n${error.stack}`);
});

// client ready event

client.on('ready', () => {

  // console logs

  console.log("\n\n\n\n\n \x1b[36m██░ ██▓██   ██▓ ██▓███  ▓█████  ██▀███      ▄▄▄▄    ▒█████  ▄▄▄█████▓\n\x1b[36m▓██░ ██▒▒██  ██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒   ▓█████▄ ▒██▒  ██▒▓  ██▒ ▓▒\n\x1b[36m▒██▀▀██░ ▒██ ██░▓██░ ██▓▒▒███   ▓██ ░▄█ ▒   ▒██▒ ▄██▒██░  ██▒▒ ▓██░ ▒░\n\x1b[36m░▓█ ░██  ░ ▐██▓░▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄     ▒██░█▀  ▒██   ██░░ ▓██▓ ░ \n\x1b[36m░▓█▒░██▓ ░ ██▒▓░▒██▒ ░  ░░▒████▒░██▓ ▒██▒   ░▓█  ▀█▓░ ████▓▒░  ▒██▒ ░ \n\x1b[36m ▒ ░░▒░▒  ██▒▒▒ ▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░   ░▒▓███▀▒░ ▒░▒░▒░   ▒ ░░   \n\x1b[36m ▒ ░▒░ ░▓██ ░▒░ ░▒ ░      ░ ░  ░  ░▒ ░\n\x1b[36m ▒░   ▒░▒   ░   ░ ▒ ▒░     ░    \n\x1b[36m ░  ░░ ░▒ ▒ ░░  ░░          ░     ░░   ░     ░    ░ ░ ░ ░ ▒    ░      \n\x1b[36m ░  ░  ░░ ░                 ░  ░   ░         ░          ░ ░           \n\x1b[36m        ░ ░                                       ░                   \x1b[0m")

  console.log(`\n \n \n \nSuccessfully connected into discord's gateway(v6)\nScanning for guilds...\n\x1b[36m[-]\x1b[0m ${client.guilds.map(n => n.name + ` (ID: \x1b[36m${n.id}\x1b[0m)`).join(`\x1b[36m\n[-]\x1b[0m `)}`);

  setTimeout(() => {
    console.log(`Scan completed!\n\nVersion: ${version}\nAll commands are loaded. We are ready to go!\nInvite link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8\nType ${prefixgen}help to get a list of commands to use!`);
  }, 1000);

  // activity

  client.user.setActivity(`Hyper BOT v${version} - ${prefixgen}help`, { type: 'LISTENING' });
});

setInterval(() => {
  console.log(`[Hyper] Bot's ping: ${Math.round(client.ping)}`);
}, 30000);

// on guild member join (setwelcome)

client.on('guildMemberAdd', (member) => {
  fs.readFile("./Storage/welcome.json", 'utf8' , (err, data) => {
    if (err) throw err;
    const thing = JSON.parse(data);

    if(thing[member.guild.id]) {
      const message = thing[member.guild.id].message;
      const channel = thing[member.guild.id].channel;

      if(message.includes(`{user}`)) {
        const msg = message.replace(`{user}`, `<@${member.id}>`);
        member.guild.channels.get(channel).send(msg);
    };
  }
 });
});

// on message edit (ads protection)

client.on('messageUpdate', (oldMessage, newMessage) => {

  if(newMessage.content.includes("https://") || newMessage.content.includes("http://") || newMessage.content.includes("discord.gg") || newMessage.content.includes("discord.me") || newMessage.content.includes("discord.io")) {

    // reading the file

    fs.readFile("./Storage/ads.json", 'utf8' , (err, data) => {
      // if err
      if (err) throw err;
      const db = JSON.parse(data);
      if(db[newMessage.guild.id]) {
        if(newMessage.member.hasPermission("MANAGE_GUILD")) return;
        newMessage.delete();
        newMessage.channel.send(`**Your message contained a link and it was deleted, <@${newMessage.author.id}>**`);
      }
    });
  }

});

// client message event

client.on("message", (message) => {

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let argresult = args.join(" ");

  // ads protection checks

  if(message.content.includes("https://") || message.content.includes("http://") || message.content.includes("discord.gg") || message.content.includes("discord.me") || message.content.includes("discord.io")) {

    // reading the file

    fs.readFile("./Storage/ads.json", 'utf8' , (err, data) => {
      // if err
      if (err) throw err;
      const db = JSON.parse(data);
      if(db[message.guild.id]) {
        if(message.member.hasPermission("MANAGE_GUILD")) return;
        message.delete();
        message.channel.send(`**Your message contained a link and it was deleted, <@${message.author.id}>**`);
      }
    });
  }

  // custom prefixes
  let prefixes = JSON.parse(fs.readFileSync("./Storage/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id] || prefixes[message.guild.id] === undefined) {
    prefixes[message.guild.id] = {
      prefixes: "h!"
    };
    fs.writeFile("./Storage/prefixes.json", JSON.stringify(prefixes, null, 2), (err) => {
      if (err) console.log(err)
    });
  };

  let prefix = prefixes[message.guild.id].prefixes;

  if(!message.content.startsWith(prefix)) return;

  // command hanler

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args,color,langUsing);

  // logging

  if(logging === true) {
    if(!argresult || argresult === "") {
      const LoggingNoArgs = `[\x1b[36m${moment().format("LLLL")}\x1b[0m] Command ${cmd} was executed by \x1b[36m${message.author.tag}\x1b[0m (ID: \x1b[36m${message.author.id}\x1b[0m)`;
      console.log(LoggingNoArgs);
    } else {
      const LoggingArgs = `[\x1b[36m${moment().format("LLLL")}\x1b[0m] Command ${cmd} ${argresult} was executed by \x1b[36m${message.author.tag}\x1b[0m (ID: \x1b[36m${message.author.id}\x1b[0m)`;
      console.log(LoggingArgs);
    };
  };

});
