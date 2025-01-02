const express = require('express');
const chalk = require("chalk");
const app = express();
const moment = require('moment')
const probot = require("probot-tax");
const prefix = "?" //prefix botak
var { inviteTracker } = require("discord-inviter")
const axios = require("axios")
const Discord = require('discord.js')
//express
app.use('/ping', (req, res) => {
  res.send(new Date());
});
app.listen(3000, () => {
  console.log(chalk.blue.bold('Support Ra3d Studio.'))  
});
const db = require("pro.db")
//main v13 source
const { Client, Intents, MessageEmbed, User, MessageActionRow, MessageButton, Collection } = require('discord.js');
const client = new Client({
  intents : 98045,
  allowedMentions: { repliedUser: true },
});
const { REST } = require('@discordjs/rest');
const {  MessageSelectMenu } = require('discord.js');
const { Routes } = require('discord-api-types/v9');
//handler
module.exports = client;
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
require("./handler")(client);
//bot info
client.on('ready', () => {
    console.log(`Name Bot : ${client.user.username}`);
  console.log(`prefix Bot : ${prefix}`);
	console.log(`Tag : ${client.user.tag}`);
	console.log(`${client.guilds.cache.size} Servers`); 
	console.log(`${client.users.cache.size} Users`); console.log(`${client.channels.cache.size} Channels`);
      console.log(`[ ${client.guilds.cache.map(g => g.name).join(', \n ')} ]`);
}).setMaxListeners(0);
//status bot
client.on('ready', async() => {
    client.user.setStatus(`dnd`)
    let status = [` Servers : ${client.guilds.cache.size}`,`Users : ${client.users.cache.size}`,`/help`];
  setInterval(()=>{
    client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})

//error fixer
 process.on("unhandledRejection", error => {
  return console.log(error)
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
 process.on("unhandledRejection", error => {
  return 
}); 
//main vars 
const owners = ["901844184175099955"] //owner bot
var slogo = ""
var sname = ""
var sbanner = ""
var teamrole = ""
var sline = ""
var feedbackroom = ""
var ordercategory = ""
var netflixrole = ""
var instarole = "<@&>"
var nitrorole = "<@&> <@&>"
var visarole = "<@&>"
var botrole = "<@&>"
var ucrole = "<@&>"
var voterole = "<@&>"
var boostrole = "<@&>"
var spotifyrole = "<@&>"
var shahidrole = "<@&>"
var creditrole = "<@&>"
var tiktokrole  = "<@&>"
var autochannel1 = ""
var autochannel2 = ""
var autochannel3 = ""
var autochannel4 = ""
var autochannel5 = ""
var autochannel6 = ""
var autochannel7 = ""
var autochannel8 = ""
var autochannel9 = ""
var autochannel10 = ""
var autochannel11 = ""
var autochannel12 = ""
var taxx = "" 
var welcomeroom = ""
var teamoffer = ""
var offerroom = ""
var offerrole = ""
const invitess = ""
//
//
client.on("guildMemberAdd", (member) => {
   const welcomeEmbed =  new Discord.MessageEmbed()
   .setColor("PURPLE")
   .setDescription(`
 > Hey : <@!${member.id}> 


> Welcome To **__${sname}__**


> You Can Order Anything By Opening Ticket  


> Member Id : **${member.id}**


> 𝖤𝗇𝗃𝗈𝗒 𝗒𝗈𝗎𝗋 𝗍𝗂𝗆𝖾 💖`)  
   .setImage(sline)
   .setTimestamp()
   member.guild.channels.cache.get(welcomeroom).send({ embeds: [welcomeEmbed]}); 

})
//Slash Command Source (For All Guilds)
client.on("ready" , () => {
const commands = [{
  name : "ping",
  description : "ping bot connection",
},{
  name : "profile",
  description : "view profile",
  options : [{
    name : "user",
    description : "user to view profile",
    type : 6,
    required : false,

  }]
},{
  name : "user",
  description : "user info",
  options : [{
    name : "user",
    description : "user to mention" ,
    type : 6,
    required : false,
  }]
},{
  name : "avatar",
  description : "to view avatar someone",
  options :[{
    name : "user",
    description : "user to view his avt",
    type : 6,
    required : false,
  }]
}
,
{
  name : "avatar-server",
  description : "to view server avatar"
},{
  name : "banner",
  description : "banner of user",
  options : [{
    name : "user",
    description : "user to mention",
    type : 6,
    required : false,
  }]
},{
  name : "tax",
  description : "to get probot tax",
  options : [{
    name : "price",
    description : "price to calculate tax",
    type : 4,
    required : true,
  }]
},{
  name : "invites",
  description : "to view member invites",
  options : [{
    name : "user",
    description : "mention user to view inv",
    type : 6,
    required : false,
  }]
},{
  name : "allbans",
  description : "To View Banned Member Count",
},{
 name : "top-inv",
description : "To View Top Invites Members"
},{
  name : "help",
  description : "help menu",
},{
  name : "ban",
  description : "to ban user",
  options : [{
    name : "user",
    description : "user to mention",
    type : 6,
    required : true,
  },{
    name : "reason",
    description : "reason for ban",
    type : 3,
    required : true,
  }]
},{
  name : "unban",
  description : "to unban a member",
  options : [{
    name : "member-id",
    description : "id of member to unban him",
    type : 3,
    required : true,
  }]
},{
  name : "kick",
  description : "To Kick Member",
  options : [{
    name : "user",
    description : "mention user to kick",
    type : 6,
    required : true,
  }]
},{
  name : "v-kick",
  description : "kick member from voice",
  options : [{
   name : "user",
   description : "mention user",
   type : 6,
   required : true,
  }]
},{
  name : "show",
  description : "to show a hidden room"
},{
  name : "hide",
  description : "to hide a showed room"
},{
  name : "lock",
  description : "to lock an opened room"
},{
 name : "unlock",
 description : "to open a locked room"
},{
  name : "add-emoji",
  description : "to add emoji in server",
  options : [{
    name : "emojis",
    description : "emoji to add in server",
    type : 3,
    required : true,
  }]
},{
  name : "hideall",
  description : "hide all rooms",
},{
  name : "showall",
  description : "show all rooms",
},{
  name : "unbanall",
  description : "to unban all members"
},{
  name : "lockall",
  description : "to lock all rooms",
},{
  name : "unlockall",
  description : "to unlock all rooms",
},{
  name : "closeapply",
  description : "to close apply team",
},{
  name : "openapply",
  description : "to open apply team",
},{
  name : "srules",
  description : "to view server rules",
},{
  name : "upgrade",
  description : "to upgrade a seller",
  options : [{
    name : "seller",
    description : "seller to upgrade",
    type : 6,
    required : true,
  },{
    name : "rolename",
    description : "role upgraded name",
    type : 3,
    required : true,
  }]
},{
    name : "finish",
  description : "fire a seller from team",
  options : [{
    name : "seller",
    description : "seller to finish",
    type : 6,
    required : true,
  },{
    name : "reason",
    description : "reason to finish",
    type : 3,
    required : true,
  }]
},{
  name : "h-logo",
  description : "help designer in logo"
},{
  name : "h-designs",
  description : "help designer in designs"
},{
  name : "h-bot",
  description : "help developer in bot"
},{
  name : "fb",
  description : "let client write feedback",
  options : [{
    name : "client",
    description : "client to write feedback",
    type : 6,
    required : true
  }]
},{
  name : "claim",
  description : "to claim a ticket"
},{
  name : "welcomeseller",
  description : "to welcome a new seller",
  options : [{
    name : "seller",
    description : "seller to welcome",
    type : 6,
    required : true,
  }]
}]
    const rest = new REST({ version: '9' }).setToken(process.env.token);
    
    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands },
            );
            console.log("Done Run ApplicationCommands");
        } catch (error) {
            console.error(error);
        }
    })();
}) /// لظهور الكود كامل ادخل البروجكت ريبل ات
