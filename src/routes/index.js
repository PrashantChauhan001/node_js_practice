const loginHandler = require("../modules/login/index.login");
const registerHandler = require("../modules/register/index.register");
const userHandler = require("../modules/user/index.user");

const routeHandler = (req, res) => {
  switch ("/" + req.url.split("/")[1]) {
    case "/login":
      loginHandler(req, res);
      break;
    case "/register":
      registerHandler(req, res);
      break;
    case "/user":
      userHandler(req, res);
      break;
    case "/":
      res.end("Hellow world");
      break;

    default:
      res.end("Page not found");
      break;
  }
};

module.exports = routeHandler;
