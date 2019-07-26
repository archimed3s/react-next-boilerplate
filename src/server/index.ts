import next from 'next';
import express from 'express';

const port = parseInt(process.env.PORT || '3000', 10),
	dev = process.env.NODE_ENV !== 'production',
	app = next({
		dir: './src/client',
		dev
	}),
	handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();

		server.get('/health', (_req, res) => res.sendStatus(200));

		server.get('/*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, () => {
			console.warn(
				`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`
			);
		});
	})
	.catch(e => {
		console.error(e.stack);
		process.exit(1);
	});
