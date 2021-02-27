// Dependencies
let Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    execute(client, message){
        if (message.guild) {
            message.channel.send('Check your DMs!');
            message.delete();
            let embed = new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })')
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            .setTitle('Help')
            .setColor('7289da')
            .setDescription(`Message destiné aux membres du staff ou aux modérateur\n`)
            .addField(`${prefix}start-giveaway [salon] [temps] [nombre de gagnants] [prix]`, "La durée doit être un nombre correct.\nLe prix peut être n'importe quoi.")
            .addField('Example:', `${prefix}start-giveaway #🎁・ɢɪᴠᴇᴀᴡᴀʏ 10h 1 Nitro \nCrée un giveaway de 10 heures dans le salon "#🎁・ɢɪᴠᴇᴀᴡᴀʏ" avec "Nitro" comme prix et avec un seule gagnant .`)
            .setFooter('Développé par ẕєγʀ0х#5279', client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
            message.author.send(embed);
        }
    }
}
