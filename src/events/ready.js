const Event = require('../structure/event.js');
const Discord = require('discord.js');

module.exports = new Event('ready', client => {
    console.clear()
    console.log(`EvilMC v${client.version}\nc0d9d by DesConnet`);
    client.user.setPresence({ activities: [{ name: `Crashing Minecraft Servers | EvilMC`, type: Discord.ActivityType.Competing }]})
})