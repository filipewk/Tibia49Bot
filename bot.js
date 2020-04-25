'use strict'

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;
const commands = require('./src/index');

client.once('ready', () => {
    client.user.setActivity('!comandos', { type: 'WATCHING' });
    console.log('Logado');
});


client.on('message', async message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return;

    if (command === 'rashid')
        message.channel.send(commands.rashidInfo.rashidInfo());

    if (command === 'share')
        message.channel.send(commands.sharedExp.sharedExp(args));

    if (command === 'char') {
        const character = args.join('+')
        message.channel.send(await commands.embedCharacter.embedCharacter(character));
    }
    if (command === 'imbue')
        message.channel.send(commands.imbuements.imbuements())
});

client.login(config.token);