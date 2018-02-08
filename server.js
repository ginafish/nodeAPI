var express = require('express');
var mysql = require('mysql');

app = express();
port = process.env.PORT || 3000;

var callsForSchema = {
    RecipeName: "name",
    IngredientName: "name",
    Quantity: "qty"
}

app.use(function(req, res, next){
	global.connection = mysql.createConnection({
        host: "localhost",
        user: "user",
        password: "pass",
        database: "db"
      });
	connection.connect();
	next();
});

app.get('/listRecipes', function(req, res, next) {
    var query = "SELECT * FROM Calls_For";
	global.connection.query(query, function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});


app.listen(port);