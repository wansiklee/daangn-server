import mongoose from "mongoose";
import Product from "../db/models/Product";

const checkObjectId = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    return;
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.status(404);
      return;
    }
    req.body = product;
    return next();
  } catch (e) {
    res.status(500);
  }
};

export default checkObjectId;
