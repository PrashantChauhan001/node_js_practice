const registerController = (req, res) => {
  console.log(req.body);
  res.end("register successful");
};

module.exports = registerController;
