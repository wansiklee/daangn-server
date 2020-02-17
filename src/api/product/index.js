import express from "express";
import {
  list,
  upload,
  productDetail,
  editProduct,
  deleteProduct,
  search
} from "./product.ctrl";
import checkObjectId from "../../lib/checkObjectId";
import checkLoggedIn from "../../lib/checkLoggedIn";
import checkOwnProduct from "../../lib/checkOwnProduct";

const product = express.Router();

product.get("/", list);
product.post("/", checkLoggedIn, upload);
product.get("/search", search);
product.get("/:id", checkObjectId, checkLoggedIn, productDetail);
product.patch(
  "/:id",
  checkObjectId,
  checkLoggedIn,
  checkOwnProduct,
  editProduct
);
product.delete(
  "/:id",
  checkObjectId,
  checkLoggedIn,
  checkOwnProduct,
  deleteProduct
);

export default product;
