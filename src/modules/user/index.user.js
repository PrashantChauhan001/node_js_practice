const { userDeleteController } = require("./controller.user");
const { userDeleteMiddleware } = require("./middleware.user");

const userHandler = (req, res) => {
  if (req.method === "DELETE" && req.url.split("/")[2]) {
    userDeleteMiddleware(req, res, userDeleteController);
  } else {
    res.writeHead(404, "Not found").end("Not found");
  }
};

module.exports = userHandler;
