const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anand:anandraj@cluster0.pstb3.mongodb.net/WebDevAssignment?retryWrites=true&w=majority');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


app.get('/hello', (req, res) => {
    res.send('Hello World!!');
});

require('./services/movies-service')(app);

require('./services/tweeter-service')(app);

require('./services/profile-service')(app);

require('./movies/service')(app);

app.listen(4000);
