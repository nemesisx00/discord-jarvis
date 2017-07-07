'use strict'

let sprintf = require('sprintf-js').sprintf
let Action = load('Action')
let Util = load('Util')

let defaultHelp = '\nJarvis\n\n\tUsage: %s help [ACTION]\n\nList of possible actions:\n\n'
let wordRegex = /([a-z]*)\s?.*/i
let codeFormat = '```%s```'

class Help extends Action
{
	constructor(message, config)
	{
		super(message, config)
		
		this.res = Util.loadResourceJson('help')
	}
	
	run()
	{
		let output = null
		
		if(!this.message)
		{
			output = sprintf(defaultHelp, this.config.commandPrefix)
			for(let key of Object.keys(this.res))
			{
				output += '	' + key + '\n'
			}
		}
		else
		{
			let matches = wordRegex.exec(this.message)
			if(matches && matches[1] && this.res[matches[1].toLowerCase()])
				output = sprintf(this.res[matches[1].toLowerCase()], this.config.commandPrefix)
		}
		
		if(output)
			output = sprintf(codeFormat, output)
		
		return output
	}
}

module.exports = Help
