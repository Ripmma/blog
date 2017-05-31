// Requires mongoose instance
var mongoose = require("mongoose");

// Creates a model
var blogPost = new mongoose.Schema({
	title: String,
	post: String,
	date: {
		month: String,
		day: String,
		year: String
	},
	user: String,
	comments: [
		{
		comment: String,
		user: String
		}
	]
});

// Exports the model
module.exports = mongoose.model("post", blogPost);