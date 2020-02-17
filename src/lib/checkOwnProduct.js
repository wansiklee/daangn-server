const checkOwnProduct = (req, res, next) => {
  const { user, data } = req;
  if (String(data.user._id) !== user._id) {
    res.status(403);
    return;
  }
  return next();
};

export default checkOwnProduct;
