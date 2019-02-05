var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(filters);
});

module.exports = router;

const filters =
[
  "saved",
  "pending",
  "active",
  "paused",
  "expired",
  "declined",
  "terminated"
]
