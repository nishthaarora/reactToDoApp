const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').Server(app);
const config = require('./server/config.js');

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const Webpackconfig = require('./webpack.config');

// Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// Express Routes
app.use('/', express.static('app'));
app.use('/assets', express.static('dist'))
require('./server/routes/apiRoutes.js')(app);
// app.get(`*`, function(req, res) {
//   res.sendFile('./app/index.html', { root: __dirname });
// });

// Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
const db = mongoose.connection;
db.on("error", function(error) {
   console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
   console.log("Mongoose connection successful.");
});


// connection to the port
http.listen(config.port, () => {
	console.log('server started on port: ', config.port);
});
