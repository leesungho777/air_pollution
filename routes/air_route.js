const express           = require('express');
const router            = express.Router();

//localhost:8080/air
router.get('/', function(req, res) {
    res.status(200).json({data: "Air Router"})
});

router.get('/test', function(req, res) {
    res.status(200).json({data: "Air Router/test"})
});

router.get('/test/abc', function(req, res) {
    res.status(200).json({data: "Air Router/test/abc"})
});


module.exports = router;