'use strict'

require('../init.js')

let test = require('tape-catch')
let Util = load('Util')

test('Testing Util.isNumber', t => {
	t.ok(Util.isNumber(1), 'Integer 1 is a number')
	t.ok(Util.isNumber('1'), 'String \'1\' is a number')
	t.notOk(Util.isNumber('a'), 'String \'a\' is not a number')
	t.notOk(Util.isNumber({}), 'Object is not a number')
	t.notOk(Util.isNumber(null), 'Null is not a number')
	t.end()
})

test('Testing Util.loadResourceJson', t => {
	t.ok(Util.loadResourceJson('help'), 'Loaded properly')
	t.end()
})
