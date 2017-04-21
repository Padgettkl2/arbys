var budo = require('budo'); // assumes v5

var app = budo('./src/index.js', {
		stream: process.stdout,
    port: 8000,
    open: true
	})
	// your globs to watch for files
	.watch(['**/*.{html,css}', 'components/main.js'])
	// enable LiveReload server
	.live()
	// fire reload as soon as bundle begins updating
	.on('pending', function() {
		app.reload();
	})
	// also fire reload whenever non-bundle files change
	.on('watch', function(ev, file) {
		app.reload(file);
	});
