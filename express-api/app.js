// require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const port = 3002;
const app = express();
const routes = require('./routes/routes')


//use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

app.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'}
        )

});


// start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`)
});

