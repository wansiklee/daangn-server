import mongoose from "mongoose";
import User from "../db/models/User";

const getMeById = async (req, res, next) => {
  const {
    user: { _id }
  } = req;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(400);
    return;
  }
  try {
    const user = await User.findById(_id);
    if (!user) {
      res.status(404);
      return;
    }
    req.user = user;
    return next();
  } catch (e) {
    res.status(500);
  }
};

export default getMeById;
