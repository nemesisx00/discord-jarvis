'use strict'

let path = require('path')

let fileExtension = '.js'
let regexFilename = /.*\.js$/i
let srcPath = path.join(__dirname, 'src')

/**
 * Custom require function for simplifying loading open-recipes modules.
 */
global.load = (name) => {
	let final = path.join(srcPath, name)
	if(!regexFilename.exec(final))
		final += fileExtension
	
	return require(path.normalize(final))
}
