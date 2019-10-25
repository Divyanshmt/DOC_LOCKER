var express = require('express');
var router = express.Router();
var fs = require('fs');
var upload = require('../controller/uploadFile/upload.js')

router.post('/', upload);

module.exports = router;
