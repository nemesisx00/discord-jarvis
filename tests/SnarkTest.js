'use strict'

require('../init.js')

let test = require('tape-catch')
let Snark = load('Snark')

test('Testing Snark.getFailureMessage()', t => {
	let snark = new Snark()
	
	let result = null
	for(let i = 0; i < 20; i++)
	{
		result = snark.getFailureMessage()
		t.ok(result, `Random failure message retrieved ${i}: "${result}"`)
	}
	t.end()
})
