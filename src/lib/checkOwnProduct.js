const checkOwnProduct = (req, res, next) => {
  const { user, body } = req;
  if (String(body.user) !== user._id) {
    res.status(403);
    return;
  }
  return next();
};

export default checkOwnProduct;
