const loginController = require("./controller.login");
const loginMiddleware = require("./middleware.login");

const loginHandler = (req, res) => {
  if (req.method === "POST") {
    loginMiddleware(req, res, loginController);
  } else {
    res.writeHead(404, "Not found").end("Not found");
  }
};

module.exports = loginHandler;
