const loginController = require("./controller.login");

const loginHandler = (req, res) => {
  if (req.method === "POST") {
    loginController(req, res);
  } else {
    res.writeHead(404, "Not found");
    res.end("Not found");
  }
};

module.exports = loginHandler;
