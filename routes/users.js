var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({'status': 'success', 'data': 'users'});
});

module.exports = router;
