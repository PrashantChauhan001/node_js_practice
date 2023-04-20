const { readFile, writeFile } = require("node:fs/promises");
const { USERS_INFO_PATH } = require("../../constant/fileRoute.constant");

const userDeleteMiddleware = async (req, res, controller) => {
  try {
    const users = await readFile(appRoot + USERS_INFO_PATH, "utf-8");
    const userObj = JSON.parse(users);
    // const reqBody = JSON.parse(req.body);
    // validate if user is exist or not
    const userName = req.url.split("/")[2];
    if (userObj[userName]) {
      delete userObj[userName];
      await writeFile(appRoot + USERS_INFO_PATH, JSON.stringify(userObj), {
        encoding: "utf-8",
      });
      controller(req, res);
    } else {
      res.writeHead(400, "Bad Request").end("User Not Found");
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, "Internal Server Error").end("Internal Server Error");
  }
};

module.exports = { userDeleteMiddleware };
