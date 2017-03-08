const restify = require('restify'),
	port = process.env.PORT || 3000,
	registerNoteRoutes = require('./routes/noteRoutes');

const server = restify.createServer({
	name: 'Notes API'
});

registerNoteRoutes(server, require('./controller/noteController'));

server.listen(port, () => {
	console.info('Server is running on port ' + port);
});