// This is going to be entry point for the server
import express from 'express'; //modern way it is same as const express = require('express')

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
	res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
