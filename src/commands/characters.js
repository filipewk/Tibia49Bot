'use strict'

const Discord = require('discord.js');
const axios = require('axios');
const URL = 'https://api.tibiadata.com/v2/characters/';

async function getCharacter(name) {
        const url = `${URL}${name}.json`;
        const response = await axios.get(url);
        const result = response.data;
        return await result;
}

async function embedCharacter(name) {
    try {
        const list = await getCharacter(name)
        const character = list.characters.data

        if (list.characters.error)
            return `Character ${name} does not exist.`

        const dateTime = new Date(character.last_login[0].date);
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
        };
        const dateNow = dateTime.toLocaleString('default', options);
        const embed = new Discord.MessageEmbed()
            .setColor('#EFFF00')
            .setTitle(character.name)
            .addFields(
                { name: 'Title', value: character.title },
                { name: 'Sex', value: character.sex },
                { name: 'Vocation', value: character.vocation },
                { name: 'Level', value: character.level, },
                { name: 'Achievement Points', value: character.achievement_points },
                { name: 'World', value: character.world },
                { name: 'Residence', value: character.residence },
                { name: 'Last Login', value: dateNow + ' CET' },
                { name: 'Account Status', value: character.account_status },
            );
        return embed

    } catch {
        return 'Exemplo: !char On Rails'
    }
}

exports.embedCharacter = embedCharacter;