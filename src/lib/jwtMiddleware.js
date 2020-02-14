import jwt from "jsonwebtoken";
import User from "../db/models/User";

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies["jwt"];
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.param.user = {
      _id: decoded._id,
      username: decoded.username
    };
    return next();
  } catch (e) {
    console.log(e);
    return next();
  }
};

export default jwtMiddleware;
