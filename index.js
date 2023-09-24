import express from 'express';
import { logger } from './src/services/logger/index.js';

const app = express();
const CONFIG = {
	port: 5001,
};

const state = {
	count: 0,
};

app.listen(CONFIG.port, () => {
	logger.info(`server started on port ${CONFIG.port}`);
});

app.get('/', (req, res) => {
	logger.info(`handler for /`);
	state.count += 1;
	res.json({ state });
});

app.get('/p2', (req, res) => {
	logger.info(`handler for /p2`);
	state.count += 2;
	res.json({ state });
});
