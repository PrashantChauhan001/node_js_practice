const registerController = require("./controller.register");
const registerMiddleware = require("./middleware.register");

const registerHandler = (req, res) => {
  if (req.method === "POST") {
    registerMiddleware(req, res, registerController);
  } else {
    res.writeHead(404, "Not found").end("Not found");
  }
};

module.exports = registerHandler;
