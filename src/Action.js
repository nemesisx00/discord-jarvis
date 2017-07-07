'use strict'



class Action
{
	/**
	 * Parent class for any action Jarvis can perform.
	 */
	constructor(message)
	{
		this.name = this.constructor.name
		this.message = message
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
