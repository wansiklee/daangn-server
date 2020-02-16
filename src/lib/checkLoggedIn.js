const checkLoggedIn = (req, res, next) => {
  if (!req.user) {
    res.status(401);
    return;
  }
  return next();
};

export default checkLoggedIn;
