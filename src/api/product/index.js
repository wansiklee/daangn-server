import express from "express";
import {
  list,
  upload,
  productDetail,
  editProduct,
  deleteProduct,
  search
} from "./product.ctrl";

const product = express.Router();

product.get("/", list);
product.get("/", upload);
product.get("/:id", productDetail);
product.get("/:id", editProduct);
product.get("/:id", deleteProduct);
product.get("/search", search);

export default product;
