'use strict'

let Emojify = load('Actions/Emojify')
let Help = load('Actions/Help')
let Snark = load('Actions/Snark')

let commandRegex = /(.*?)\s([a-z]+)(?:\s(.*))?/i

class CommandParser
{
	constructor(config)
	{
		this.config = config
	}
	
	/**
	 * Handle a message and run the associated action if it exists.
	 * @param Message The message being handled
	 * @
	 */
	handle(message)
	{
		let output = null
		
		let action = null
		let obj = this.parseCommand(message)
		if(obj)
		{
			switch(obj.command.toLowerCase())
			{
				case 'help':
					action = new Help(obj.message, this.config)
					break
				case 'emojify':
					action = new Emojify(obj.message)
					break
				default:
					action = new Snark()
					break
			}
			
			output = action.run()
		}
		
		return output
	}
	
	/**
	 * Parse a message to determine which action to take.
	 * @param Message The message being parsed.
	 * @return 
	 */
	parseCommand(message)
	{
		let out = null
		let matches = commandRegex.exec(message.content.trim())
		if(matches && matches.length > 0 && matches[1] == this.config.commandPrefix)
		{
			out = {
				command: matches[2],
				message: matches[3]
			}
		}
		
		return out
	}
}

module.exports = CommandParser
