var mongoose = require("mongoose");

var User = new mongoose.Schema({
	username: String,
	password: String,
	admit: Boolean,
	firstName: String,
	lastName: String,
	createAt: String
});

module.exports = mongoose.model("User", User);