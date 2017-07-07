'use strict'



class Action
{
	/**
	 * Parent class for any action Jarvis can perform.
	 */
	constructor(message, config)
	{
		this.name = this.constructor.name
		this.config = config
		this.message = message ? message.trim() : null
	}
	
	/**
	 * Perform this action.
	 */
	run()
	{
		throw 'Not yet implemented'
	}
}

module.exports = Action
