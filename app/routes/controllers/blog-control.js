// This gets to a directory by traveling two directories up to the app directory back down to models then to pick out blog-post
var post = require("../../app/models/blog-post");

function bPost(req, res) {
	new post({
		title: req.body.title,
		post: req.body.post
	}).save(function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect("/index")
		}
	});
}