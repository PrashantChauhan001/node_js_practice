const loginController = (req, res) => {
  console.log(req.url);
  res.end("login post success");
};

module.exports = loginController;
