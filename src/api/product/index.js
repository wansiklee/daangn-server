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

const product = express.Router();

product.get("/", list);
product.post("/", checkLoggedIn, upload);
product.get("/search", search);
product.get("/:id", checkObjectId, productDetail);
product.patch("/:id", checkObjectId, checkLoggedIn, editProduct);
product.delete("/:id", checkObjectId, checkLoggedIn, deleteProduct);

export default product;
