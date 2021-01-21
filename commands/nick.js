const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'nick',
    aliases: ['nick', 'setnickname'],
    description: 'Change [x] user\'\s nickname to [y]',
	execute(msg, args) {

        let nickuser = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) 


        let nick = args.slice(1).join(" ");             


        if(!nickuser) return msg.reply(invalidargs(msg));
    
        if (!nick) return msg.reply(invalidargs(msg));


        nickuser.setNickname(nick).catch(error => {
            console.log(error)
            msg.reply(errorembed(msg    ))
                    return
        }) 

        const nickembed = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully changed ${nickuser}'s nickname to \`${nick}\`, ${msg.author}.`)
        .setFooter(`${nick} is a pretty cringe nickname ngl`)
        .setTimestamp();
        msg.channel.send(nickembed) 
	},
};

