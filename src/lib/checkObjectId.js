import mongoose from "mongoose";

const checkObjectId = (req, res, next) => {
  const {
    params: { id }
  } = req;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    return;
  }
  return next();
};

export default checkObjectId;
