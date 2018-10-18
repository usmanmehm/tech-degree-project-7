const express = require('express');
const path = require('path');
const data = require('./data.json');

const app = express();

let port = process.env.PORT || 3000;

//view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static('public'));

const routes = require('./routes/index'); //directing to routes file which has all routing details
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

app.use('/', routes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

app.listen(port, console.log('The app is currently running on port:', port));