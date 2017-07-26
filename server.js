var express = require('express');
var app = express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server started at' + port);

app.post('/api/login',function(req,res){
	var results=[{
	title: "web-app",
	instructor: "shaquib",
	level:"beginner",
	total_videos:25
	
},
{
	title: "java",
	instructor: "shoaib",
	level:"beginner",
	total_videos:35
	},
	{
	title: "android-developer",
	instructor: "talha",
	level:"beginner",
	total_videos:15
	
},
{
	title: "c",
	instructor: "waleed",
	level:"beginner",
	total_videos:45
	
}]
res.json(results);
})



	