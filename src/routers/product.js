import express from "express";
import routes from "./routes";

import {
  upload,
  productDetail,
  editProduct,
  deleteProduct
} from "../controllers/product";

const productRouter = express.Router();

productRouter.get(routes.upload, upload);
productRouter.get(routes.productDetail, productDetail);
productRouter.get(routes.editProduct, editProduct);
productRouter.get(routes.deleteProduct, deleteProduct);

export default productRouter;
