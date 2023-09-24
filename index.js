import express from 'express';

const app = express();

const state = {
	count: 0,
};
app.listen(5001, () => console.log('api running on 5001'));

app.get('/', (req, res) => {
	state.count += 1;
	res.json(state);
});
