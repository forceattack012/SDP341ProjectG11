var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/page1',function(req,res){
    console.log(req.body);
    if(req.body.email == "u-.chatchawan_st@tni.ac.th" && req.body.password == "kuy" ){
        var data = {};
        data.credential = req.body;
        data.sex = "mail";
        res.render('success',{ email : req.body.email});
    }
    else
    {   res.render('error',{});    }
    res.send("Page1");
})
module.exports = router;
