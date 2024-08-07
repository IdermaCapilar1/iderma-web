import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const { PORT } = process.env;
import routes from './src/routes/index.js';

dotenv.config();

const app = express();
const server = createServer(app);

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.get('/', (_req, res) => res.status(200).send('Server running'));

// connectToDatabase()
// 	.then(() => {
// 		server.listen(PORT, () => {
// 			console.log(`Server running on port ${PORT}`);
// 		});
// 	})
// 	.catch((error) => {
// 		console.error('Error connecting to database', error);
// 	});
