var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET users listing. */
router.get('/', function(req, res, next) {
    fs.readFile('cities.json', function(err, data) {
        res.contentType('application/json')
        res.writeHead(200);
         res.write(data);
         res.send(); 
    });
});

module.exports = router;