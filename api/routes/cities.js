var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile('cities.txt','utf-8', function(err, data) {
        res.writeHead(200);
         res.write(data);
         res.send(); 
    });
});

module.exports = router;