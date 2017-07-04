var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({'status': 'success', 'data': 'index'});
});

module.exports = router;
