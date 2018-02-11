var express = require('express');

app = express();
port = process.env.PORT || 3000;

app.get('/exampleEndpoint', function(req, res, next) {
    res.send("I ARE ENDPURNT");
});


app.listen(port);