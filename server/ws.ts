import * as express from 'express';
import * as mongoose from 'mongoose';
import { rest } from './rest';

const app = express.Router();
export const ws = app;

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use((req, res, next) => {
	console.log('ws call', req.url);
	next();
});

app.post('/add', (req, res) => {
	console.log('adding two integers', req.body);
	res.json({ result: +req.body.a + +req.body.b });
});

// MongoDB REST
const Task = mongoose.model('Task',
	new mongoose.Schema({
		text: { type: String, required: true },
		isUrgent: { type: Boolean, default: false },
	}, {
			strict: false, // allow other field to be saved in MongoDB.
		}));

const host = process.argv[2] || 'localhost';
const url = `mongodb://${host}/rest-db`;
const options = {
	useNewUrlParser: true,
	useCreateIndex: true,
};

const connectWithRetry = () => {
	mongoose.connect(url, options, err => {
		if (err) {
			console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
			setTimeout(connectWithRetry, 5000);
			return;
		}
		console.log('Successfully connected to MongoDB')
	});
};

setTimeout(connectWithRetry, 2000);

const resources = [{ model: Task, rest: 'task' }];

resources.forEach(resource => {
	app.use(`/${resource.rest}`, rest.resource(resource.model));
});
