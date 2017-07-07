'use strict'

require('./init.js')

let Discord = require('discord.js')
let Config = load('Config')
let CommandParser = load('CommandParser')

const config = new Config()
let cp = new CommandParser(config)

let client = new Discord.Client()


client.on('ready', () => {
	console.log('Discord client ready!')
})

client.on('message', message => {
	if(message)
	{
		let output = cp.handle(message)
		if(output)
		{
			//TODO: Update this to use edit if/when Discord implements permissions allowing a user to edit other users' messages
			//message.edit(output)
			
			message.reply(output)
			message.delete()
		}
	}
})

client.login(config.token)
