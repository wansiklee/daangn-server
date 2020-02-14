import jwt from "jsonwebtoken";
import User from "../db/models/User";

const jwtMiddleware = async (req, res, next) => {
  const token = req.cookies["jwt"];
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      _id: decoded._id,
      username: decoded.username
    };

    // Reissuance jwt if token's exp less than 3days
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3) {
      const user = await User.findById(decoded._id);
      const token = user.generateToken();
      res.cookie("jwt", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      });
    }
    return next();
  } catch (e) {
    console.log(e);
    return next();
  }
};

export default jwtMiddleware;
