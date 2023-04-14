const registerController = require("./controller.register");

const registerHandler = (req, res) => {
  if (req.method === "POST") {
    registerController(req, res);
  } else {
    res.writeHead(404, "Not found");
    res.end("Not found");
  }
};

module.exports = registerHandler;
