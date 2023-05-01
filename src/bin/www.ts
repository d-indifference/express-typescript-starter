import app from '../app';
import debug, { Debugger } from 'debug';
import * as http from 'http';
import { AddressInfo } from 'net';
import ErrnoException = NodeJS.ErrnoException;

const debugInstance: Debugger = debug('express-typescript-starter:server');

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val: string) => {
	const port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
};

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error: ErrnoException) => {
	if (error.syscall !== 'listen') {
		throw error;
	}

	const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(`${bind} requires elevated privileges`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(`${bind} is already in use`);
			process.exit(1);
			break;
		default:
			throw error;
	}
};

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
	const address = server.address();

	let bind: string;

	if (typeof address === 'string') {
		bind = `pipe ${address}`;
	} else {
		bind = `port ${(address as AddressInfo).port}`;
	}

	debugInstance(`Listening on ${bind}`);
};

app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
