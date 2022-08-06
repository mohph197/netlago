const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const Event = require('./models/event');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((value) => {
		console.log('Database connected successfully!');
		app.listen(port, host, () =>
			console.log(`Server is running on: http://${host}:${port}`)
		);
	})
	.catch((error) => console.log(`ERROR_CONNECTING_DATABASE:${error}`));

app.get('/event/:id', (req, res) => {
	let eventId = req.params.id;
	Event.findById(eventId).then((event) => {
		res.send(event);
	});
});
