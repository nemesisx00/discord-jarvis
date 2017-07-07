'use strict'

require('../init.js')

let test = require('tape-catch')
let Config = load('Config')
let CommandParser = load('CommandParser')

let config = new Config()

test('Testing CommandParser.handle', t => {
	let instance = new CommandParser(config)
	
	let msg = { content: '/jarvis emojify Hey everybody' }
	let expected = ':regional_indicator_h::regional_indicator_e::regional_indicator_y:   :regional_indicator_e::regional_indicator_v::regional_indicator_e::regional_indicator_r::regional_indicator_y::regional_indicator_b::regional_indicator_o::regional_indicator_d::regional_indicator_y:'
	let result = instance.handle(msg)
	
	t.equal(result, expected, 'Handled emojify')
	
	msg = { content: 'This really shouldn\'t parse properly' }
	expected = null
	result = instance.parseCommand(msg)
	
	t.equal(result, expected, 'Handled unknown action')
	t.end()
})

test('Testing CommandParser.parseCommand', t => {
	let instance = new CommandParser(config)
	
	let msg = { content: '/jarvis emojify Hey everybody' }
	let expected = { command: 'emojify', message: 'Hey everybody' }
	let result = instance.parseCommand(msg)
	
	t.deepEqual(result, expected, 'Parsed correctly')
	
	msg = { content: 'This really shouldn\'t parse properly' }
	expected = null
	result = instance.parseCommand(msg)
	
	t.deepEqual(result, expected, 'Failed correctly')
	t.end()
})
