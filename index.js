import express from 'express';
import { logger } from './src/services/logger';

const app = express();

const state = {
	count: 0,
};
app.listen(5001, () => console.log('api running on 5001'));

app.get('/', (req, res) => {
	logger.log('endpoint / called');
	state.count += 1;
	res.json({ state });
});

app.get('/p2', (req, res) => {
	logger.log('endpoint /p2 called');
	state.count += 2;
	res.json({ state });
});
