// This is going to be entry point for the server
import express from 'express'; //modern way it is same as const express = require('express')
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
const PORT = 4000;

// mongoose connection settings
mongoose.Promise = global.Promise; //this will say we are going to wait for the result
mongoose.connect('mongodb://localhost/CRMdb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Body parser setups
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routing middlewares
routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
