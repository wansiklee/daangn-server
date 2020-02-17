import express from "express";
import {
  list,
  upload,
  productDetail,
  editProduct,
  deleteProduct,
  search
} from "./product.ctrl";
import getProductById from "../../lib/getProductById";
import checkLoggedIn from "../../lib/checkLoggedIn";
import checkOwnProduct from "../../lib/checkOwnProduct";

const product = express.Router();

product.get("/", list);
product.post("/", checkLoggedIn, upload);
product.get("/search", search);
product.get("/:id", getProductById, checkLoggedIn, productDetail);
product.patch(
  "/:id",
  getProductById,
  checkLoggedIn,
  checkOwnProduct,
  editProduct
);
product.delete(
  "/:id",
  getProductById,
  checkLoggedIn,
  checkOwnProduct,
  deleteProduct
);

export default product;
