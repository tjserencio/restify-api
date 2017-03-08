const restify = require('restify'),
	port = process.env.PORT || 3000,
	registerNoteRoutes = require('./routes/noteRoutes');

const server = restify.createServer({
	name: 'Notes API'
});

server.use(restify.CORS());//only enable this on dev time

registerNoteRoutes(server, require('./controller/noteController'));

server.listen(port, () => {
	console.info('Server is running on port ' + port);
});