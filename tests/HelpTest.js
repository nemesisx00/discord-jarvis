'use strict'

require('../init.js')

let test = require('tape-catch')
let Config = load('Config')
let Help = load('Actions/Help')

test('Testing Help.run', t => {
	let msg = 'emojify and stuff to be ignored'
	
	let conf = new Config()
	let help = new Help(msg, conf)
	let result = help.run()
	let notExpected = null
	
	t.notEqual(result, notExpected, 'Output is not null')
	t.end()
})
