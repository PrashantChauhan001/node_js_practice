const asyncHandlerFunc = (func) => (req, res, next) => {
  const returnFunc = func(req, res, next);
  return Promise.resolve(returnFunc).catch(next);
};

module.exports = { asyncHandlerFunc };
