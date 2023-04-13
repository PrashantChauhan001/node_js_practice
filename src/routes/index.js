const loginHandler = require("../login/index.login");
const registerHandler = require("../register/index.register");

const handleRoutes = (req, res) => {
  switch (req.url) {
    case "/login":
      loginHandler(req, res);
      break;
    case "/register":
      registerHandler(req, res);
      break;
    case "/":
      res.end("Hellow world");
      break;

    default:
      res.end("Page not found");
      break;
  }
};

module.exports = handleRoutes;
