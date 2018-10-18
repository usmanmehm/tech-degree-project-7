const express = require('express');
const path = require('path');
const data = require('./data.json');

const app = express();

let port = process.env.PORT || 3000; // in case another app wants to use a different port

//view engine set up
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/static', express.static('public')); //setting up static route

const routes = require('./routes/index'); //directing to route files which have all routing details
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about');

app.use('/', routes); // for the different routes, these are the route files to access
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

//Creating the error object 
app.use( (req, res, next) => {
    const err = new Error('The page you are looking for does not exist!');
    err.status = 404;
    next(err);
})

//Error handler
app.use( (err, req, res, next) => {
    res.status(err.status);
    res.render('error', {err});
})

//The port that will be used by the app
app.listen(port, console.log('The app is currently running on port:', port));