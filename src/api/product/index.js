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
product.post("/", upload);
product.get("/search", search);
product.get("/:id", productDetail);
product.patch("/:id", editProduct);
product.delete("/:id", deleteProduct);

export default product;
