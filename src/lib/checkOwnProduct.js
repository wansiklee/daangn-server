const checkOwnProduct = (req, res, next) => {
  const { user, data } = req;
  if (String(data.user) !== user._id) {
    res.status(403);
    return;
  }
  return next();
};

export default checkOwnProduct;
