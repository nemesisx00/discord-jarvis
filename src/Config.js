'use strict'

let fs = require('fs')

let expectedFileName = 'config.json'

class Config
{
	constructor()
	{
		if(!fs.existsSync(expectedFileName))
			throw 'Configuration file not found'
		
		let obj = JSON.parse(fs.readFileSync(__dirname + '/../' + expectedFileName, 'utf8'))
		if(obj)
		{
			this.commandPrefix = obj.commandPrefix
			this.token = obj.token
		}
	}
}

module.exports = Config
