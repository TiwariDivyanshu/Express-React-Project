var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request')
router.get('/', function(req, res, next) {
    res.contentType('application/json');
    res.writeHead(200);
    var cityName = req.query.city;
    var API_key = "b86c9a92e031e3de31bd59ee13f7aeb8"
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric'+'&APPID='+API_key;
    request(url,{json:true},(err,wres,body)=>{
        res.write(JSON.stringify(body));
        res.send();
    });
    
});

module.exports = router;