module.exports = {
	globDirectory: 'docs/',
	globPatterns: [
		'**/*.{png,js,css,avif,html}'
	],
	swDest: 'docs/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};