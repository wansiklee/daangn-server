import express from "express";
import routes from "../../routes";
import {
  upload,
  productDetail,
  editProduct,
  deleteProduct,
  search
} from "./product.ctrl";

const product = express.Router();

product.get(routes.upload, upload);
product.get(routes.productDetail, productDetail);
product.get(routes.editProduct, editProduct);
product.get(routes.deleteProduct, deleteProduct);
product.get(routes.search, search);

export default product;
