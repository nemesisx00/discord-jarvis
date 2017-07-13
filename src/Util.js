'use strict'

let fs = require('fs')

let resPath = __dirname + '/../res/'

let MinRange = 0
let MaxIterations = 10

function getRandomIntegerInclusive(min, max)
{
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1)) + min
}

class Util
{
	static getFirstWord(string)
	{
		let out = null
		if(typeof string === 'string')
		{
			out = string.split(' ')[0]
		}
		
		return out
	}
	
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
	
	/**
	 * Custom random integer function.
	 * @returns Returns an integer between 0 and Number.MAX_SAFE_INTEGER, inclusive.
	 */
	static randomInteger()
	{
		let out = null
		let max = getRandomIntegerInclusive(MinRange, MaxIterations)
		for(let i = 0; i < max; i++)
		{
			if(i % 2 === 0)
				out = getRandomIntegerInclusive(out, Number.MAX_SAFE_INTEGER)
			else
				out = getRandomIntegerInclusive(MinRange, out)
		}
		return out
	}
}

module.exports = Util
