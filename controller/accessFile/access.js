var formidable = require("formidable");
var fs = require("fs");

module.exports = function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    try {
      if (
        fs.existsSync(
          "./public/uploads/" + req.query.id == "./public/uploads/"
            ? false
            : "./public/uploads/" + req.query.id + "/"
        )
      ) {
        const fs = require("fs");
        const dir = "./directory";

        fs.readdir("./public/uploads/" + req.query.id + "/", (err, files) => {
          res.send(files)
        });
      } else {
        console.log("no such id and relative data exists");
      }
    } catch (err) {
      console.log(err);
    }
  });
};
