const { readFile, writeFile } = require("node:fs/promises");
const { USERS_INFO_PATH } = require("../../constant/fileRoute.constant");
const loginSchema = require("./schema.login");

const reqBodyValidation = (reqBody, userObj) => {
  const keys = Object.keys(reqBody);
  if (
    !keys?.includes(loginSchema.NAME) ||
    !keys.includes(loginSchema.PASSWORD) ||
    keys.length > 2
  )
    return false;
  else if (
    !userObj[reqBody[loginSchema.NAME]] ||
    userObj[reqBody[loginSchema.NAME]] !== reqBody[loginSchema.PASSWORD]
  )
    return false;
  return true;
};

const loginMiddleware = async (req, res, controller) => {
  try {
    const users = await readFile(appRoot + USERS_INFO_PATH, "utf-8");
    const userObj = JSON.parse(users);
    const reqBody = JSON.parse(req.body);
    // validate if user is exist or not
    if (reqBodyValidation(reqBody, userObj)) {
      controller(req, res);
    } else {
      res.writeHead(400, "Bad Request").end("Bad Request");
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, "Internal Server Error").end("Internal Server Error");
  }
};

module.exports = loginMiddleware;
