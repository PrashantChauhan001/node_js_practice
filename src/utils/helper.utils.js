const bodyParser = async (req, res, reqHandler) => {
  const { header, method, url } = req;
  let bodyJson = [];
  req
    .on("error", (err) => {
      console.log(err);
      res.end("internal server error");
    })
    .on("data", (chunk) => {
      // console.log(chunk, "chunk");
      bodyJson.push(chunk);
    })
    .on("end", () => {
      // console.log(bodyJson, "body");
      req.body = Buffer.concat(bodyJson).toString();
      reqHandler(req, res);
    });
};

module.exports = { bodyParser };
