'use strict'

require('../init.js')

let test = require('tape-catch')
let sprintf = require('sprintf-js').sprintf
let Emojify = load('Actions/Emojify')

test('Testing Emojify', t => {
	let instance = new Emojify()
	
	t.ok(instance, 'Instantiation')
	t.equal(instance.name, 'Emojify', 'Name set correctly')
	t.end()
})

test('Testing Emojify.format', t => {
	let input = '  a 1 !\'      '
	let expected = ':regional_indicator_a:   :one:   !\''
	let outputFormat = 'Input \'%s\' formatted to \'%s\''
	
	let instance = new Emojify()
	t.equal(instance.format(input), expected, sprintf(outputFormat, input, expected))
	t.end()
})
