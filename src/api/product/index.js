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

const product = express.Router();

product.get("/", list);
product.post("/", upload);
product.get("/search", search);
product.get("/:id", checkObjectId, productDetail);
product.patch("/:id", checkObjectId, editProduct);
product.delete("/:id", checkObjectId, deleteProduct);

export default product;
