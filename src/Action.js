'use strict'



class Action
{
	/**
	 * Parent class for any action Jarvis can perform.
	 */
	constructor(parsedMessage, config)
	{
		this.name = this.constructor.name
		this.config = config
		
		if(parsedMessage)
		{
			this.command = parsedMessage.command
			this.message = parsedMessage.message ? parsedMessage.message.trim() : null
		}
	}
	
	/**
	 * Perform this action.
	 */
	async run()
	{
		throw 'Not yet implemented'
	}
}

module.exports = Action
