module.exports = {
    name: 'serverdown',
    description: 'Zegt dat er server problemen zijn.',
    aliases: ['probleem', 'hostingdown'],
    permissions: ['MANAGE_MESSAGES'],
    execute(message, args, cmd, client, Discord) {


        let bericht = 'F9 - Easy Admin \n, - vMenu'

        const embed = new discord.MessageEmbed()
        .setColor('9700ff')
        .setAuthor('Key Binds AZERTY | Klein Amerika')
        .setDescription(bericht);

        message.channel.send(embed)
        message.delete()
    }
}