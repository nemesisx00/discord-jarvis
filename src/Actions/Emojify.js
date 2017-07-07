'use strict'

let sprintf = require('sprintf-js').sprintf
let Action = load('Action')
let Util = load('Util')

let formats = {
	letter: ':regional_indicator_%s:',
	number: ':%s:',
	space: ' %s '
}

let letterRegex = /[a-z]/i
let spaceRegex = /\s/i
let numbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ]

class Emojify extends Action
{
	/**
	 * Class which will format a string to use emoji characters for the numbers and letters.
	 */
	constructor(message)
	{
		super(message)
	}
	
	/**
	 * Reformat the content in the Message.
	 */
	run()
	{
		let output = this.format(this.message)
		return output
	}
	
	/**
	 * 
	 */
	format(string)
	{
		let out = ''
		let characters = string.trim().split('')
		for(let char of characters)
		{
			out += this.formatCharacter(char)
		}
		
		return out
	}
	
	formatCharacter(char)
	{
		let out = ''
		
		if(Util.isNumber(char))
		{
			let num = Number.parseInt(char)
			out = sprintf(formats.number, numbers[num])
		}
		else if(letterRegex.exec(char))
			out = sprintf(formats.letter, char.toLowerCase())
		else if(spaceRegex.exec(char))
			out = sprintf(formats.space, char)
		else
			out = char
		
		return out
	}
}

module.exports = Emojify
