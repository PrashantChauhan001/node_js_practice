const express = require("express");

const notFoundController = express.Router();

notFoundController.get("*", (req, res) =>
  res
    .writeHead(404)
    .end(
      "<div style='color:red;text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;'> <h1>Asset you are serching is not available</h1><a href='/'>Home page</a> </div>"
    )
);

module.exports = notFoundController;
