

import * as express from 'express';
import {Application} from "express";


const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

// app.route('').get();

const port = 9000;


const httpServer = app.listen(port || process.env, () => {
    console.log("HTTP REST API Server running at http://localhost:" + port);
});



