import commando = require('discord.js-commando')

module.exports = class HelloCommand extends commando.Command {
    // client must be a commando.CommandoClient
    constructor(client: commando.CommandoClient) {
        super(client, {
            name: 'hello',
            description: 'Hi!',
            memberName: 'hello',
            group: 'fun'
        })
    }

    async run(message, args) {
        return message.reply('hi!');
    }
}