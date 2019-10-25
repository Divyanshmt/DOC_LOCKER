var http = require("http");
var fs = require("fs");
var express = require("express");

var router = express.Router();

router.get("/", fun);

function fun(req,res) {
  var router = express.Router();
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    '<form action="uploadFile" method="post" enctype="multipart/form-data">'
  );
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('<input name="id" type="text">');
  res.write("</form>");
  return res.end();
}

module.exports = router;


/* after testing put this one only as landing
var express = require('express');
var router = express.Router();

 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
 */
