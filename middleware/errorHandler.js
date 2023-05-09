const { BAD_REQUEST, FORBIDDEN, NOT_FOUND, SERVER_ERROR, UNAUTHORIZED } =
  require("../constants.js").constants;

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const jsonObj = { message: err.message, stackTrace: err.stack };
  switch (statusCode) {
    case BAD_REQUEST:
      jsonObj.title = "Validatoin failed";
      res.json(jsonObj);
      break;

    case UNAUTHORIZED:
      jsonObj.title = "Unauthorized";
      res.json(jsonObj);
      break;

    case FORBIDDEN:
      jsonObj.title = "Forbidden";
      res.json(jsonObj);
      break;

    case NOT_FOUND:
      jsonObj.title = "Not found";
      res.json(jsonObj);
      break;

    case SERVER_ERROR:
      jsonObj.title = "Server Error";
      res.json(jsonObj);
      break;

    default:
      jsonObj.title = "Server Error";
      res.json(jsonObj);
      break;
  }
};

module.exports = { errorHandler };
