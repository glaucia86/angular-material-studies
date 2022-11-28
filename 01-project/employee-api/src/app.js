/**
 * file: src/app.js
 * description: file responsible for starting the application's server
 * date: 11/28/2022
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const express = require('express');
const cors = require('cors');

const app = express();

// ==> API's Routes
const index = require('./routes/index');
// const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use('/api/v1/', employeeRoute);
// app.use('/api/v1/');

module.exports = app;
