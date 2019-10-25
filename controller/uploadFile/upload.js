var formidable = require("formidable");
var fs = require("fs");

module.exports = function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    try {
      if (
        fs.existsSync(
          "./public/uploads/" + fields.id == "./public/uploads/"
            ? false
            : "./public/uploads/" + fields.id
        )
      ) {
        var oldpath = files.filetoupload.path;
        var newpath =
          "./public/uploads/" + fields.id + "/" + files.filetoupload.name;
        fs.rename(oldpath, newpath, function(err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      } else {
        console.log("No file exists");
      }
    } catch (err) {
      console.log(err); // removed (insert as module)
    }
  });
};
