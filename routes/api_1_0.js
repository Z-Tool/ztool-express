/**
 * Created by Jack on 7/4/17.
 */
var express = require('express');
var request = require('request-promise');
var router = express.Router();

// index page
router.get('/', function(req, res, next) {
    res.json({'status': 'success', 'data': 'welcome to jarrekk!'});
});

router.get('/time', function(req, res, next) {
    const now = new Date();
    res.json({'status': 'success', 'data': now.toString() });
});

router.get('/info', function(req, res, next) {
    if (req.query.ip) {
        const IPINFODBKEY = req.app.locals.IPINFODBKEY;
        request('http://api.ipinfodb.com/v3/ip-city/?key=' + IPINFODBKEY + '&ip=' + req.query.ip + '&format=json').then(
            function (response) {
                console.log(response);
                // res.json = {'data': res }
                // res.json(response.data.toJSON);
                res.json(response);
            }
        ).catch(function (response) {
            console.log(res);
            res.json(response.toJSON);
            // res.json({'status': 'error', 'message': 'API error please contact website owner.' });
        });
    } else {
        res.json(400, {'status': 'error', 'message': 'not query localhost information' });
    }
});

module.exports = router;
