import mongoose from "mongoose";
import User from "../db/models/User";

const getUserById = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    return;
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404);
      return;
    }
    req.data = user;
    return next();
  } catch (e) {
    res.status(500);
  }
};

export default getUserById;
