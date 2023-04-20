const { readFile, writeFile } = require("node:fs/promises");
const { USERS_INFO_PATH } = require("../../constant/fileRoute.constant");
const registerShema = require("./schema.register");

const reqBodyValidation = (reqBody, userObj) => {
  const keys = Object.keys(reqBody);
  if (
    !keys?.includes(registerShema.NAME) ||
    !keys.includes(registerShema.PASSWORD) ||
    keys.length > 2
  )
    return false;
  else if (userObj[reqBody[registerShema.NAME]]) return false;
  else return true;
};

const registerMiddleware = async (req, res, controller) => {
  try {
    const users = await readFile(appRoot + USERS_INFO_PATH, "utf-8");
    const userObj = JSON.parse(users);
    const reqBody = JSON.parse(req.body);
    // validate if user is exist or not
    if (reqBodyValidation(reqBody, userObj)) {
      userObj[reqBody[registerShema.NAME]] = reqBody[registerShema.PASSWORD];
      // add user into the database
      await writeFile(appRoot + USERS_INFO_PATH, JSON.stringify(userObj), {
        encoding: "utf-8",
      });
      controller(req, res);
    } else {
      res.writeHead(400, "Bad Request").end("Bad Request");
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, "Internal Server Error").end("Internal Server Error");
  }
};

module.exports = registerMiddleware;
