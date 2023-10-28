const mongoose = require("mongoose");

function connectToMongo(url, cb) {
  mongoose
    .connect(url)
    .then(cb)
    .catch((err) => console.log(err));
}

module.exports = connectToMongo;
