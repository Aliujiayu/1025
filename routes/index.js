var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',"*");
	var temp='';
	switch(req.body.name){
		case "1":
			temp=[1,2,3]
			break;
		case "2":
			temp=[4,5,6]
			break;
	}
	res.send([temp]);
});
// router.get('/', function(req, res, next) {
// 	fs.readFile("ljy.txt","utf-8",function(err,data){
// 		var num=parseInt(data.split("：")[1])+1;
// 		fs.writeFile("ljy.txt","index的访问量："+num,function(err){
// 			// res.render('index', { title: num });
// 			res.send({title:"index:"+num})
// 		})
// 	})
// });


module.exports = router;