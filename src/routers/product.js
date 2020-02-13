import express from "express";
import routes from "../routes";

import {
  upload,
  productDetail,
  editProduct,
  deleteProduct
} from "../controllers/product";

const router = express.Router();

router.get(routes.upload, upload);
router.get(routes.productDetail, productDetail);
router.get(routes.editProduct, editProduct);
router.get(routes.deleteProduct, deleteProduct);

export default router;
