'use strict'

class Util
{
	static isNumber(value)
	{
		return !Number.isNaN(Number.parseInt(value))
	}
}

module.exports = Util
