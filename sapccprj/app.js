const express = require('express');
const bodyParser = require('body-parser');
const po = require('./routes/purchaseorder.route'); // Imports routes for the products
const app = express();
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://testuser:sap1234@localhost:27017/testDB';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/po', po);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});