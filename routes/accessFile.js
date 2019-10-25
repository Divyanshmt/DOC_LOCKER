var express = require('express');
var router = express.Router();
var fs = require('fs');
var access = require('../controller/accessFile/access.js')

router.get('/', access);

module.exports = router;
