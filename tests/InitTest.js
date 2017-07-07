'use strict'

require('../init.js')

let test = require('tape-catch')

test('Testing global.load', t => {
	let CommandParser = load('CommandParser')
	
	t.ok(CommandParser, 'Loaded something')
	t.equal(typeof CommandParser, 'function', 'CommandParser is an object')
	t.throws(() => {
		let fail = load('something/that/doesnt/exist')
	}, 'Loading non-existent class throws an exception')
	t.end()
})
