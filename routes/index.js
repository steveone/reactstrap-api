var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.status('500').send(JSON.stringify({'error':'You did not specify a valid path'}));
});

module.exports = router;
