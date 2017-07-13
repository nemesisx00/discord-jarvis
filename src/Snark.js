'use strict'

let sprintf = require('sprintf-js').sprintf
let Util = load('Util')

/**
 * An abnormal pseudo-action designed to provide Jarvis with some personality.
 */
class Snark
{
	constructor(channel)
	{
		this.channel = channel
		this.res = Util.loadResourceJson(this.constructor.name.toLowerCase())
	}
	
	run(state)
	{
		if(this.res && state)
		{
			if(state.failure)
			{
				this.sendFailureMessage()
			}
		}
	}
	
	getFailureMessage()
	{
		let index = Util.randomInteger() % this.res.failure.length
		return this.res.failure[index]
	}
	
	sendFailureMessage()
	{
		this.channel.send(this.getFailureMessage())
	}
}

module.exports = Snark
