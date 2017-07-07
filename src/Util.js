'use strict'

let fs = require('fs')

let resPath = __dirname + '/../res/'

class Util
{
	static isNumber(value)
	{
		return !Number.isNaN(Number.parseInt(value))
	}
	
	static loadResourceJson(name)
	{
		let fileName = resPath.concat(name, '.json')
		
		let obj = null
		if(fs.existsSync(fileName))
			obj = JSON.parse(fs.readFileSync(fileName, 'utf8'))
		
		return obj
	}
}

module.exports = Util
