// Requires express instances
var express = require("express"),
	session = require("express-session"),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	hbs = require("hbs"),
	passport = require("passport"),
	routes = require("./app/routes/routes"),
	bcrypt = require("bcrypt-nodejs"),
	path = require("path"),
	app = express();

// Routes towards a the client file that contains the css and javascript files
app.use("/static", express.static(path.join(__dirname, "app/client")));

//Sets view engine template to handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));

app.use(session({  
	secret: 'itsAsecret',
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

mongoose.connect("mongodb://localhost/user");

app.listen(8080);
console.log("Running!");