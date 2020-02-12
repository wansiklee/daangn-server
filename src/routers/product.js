import express from "express";
import routes from "./routes";

const productRouter = express.Router();

productRouter.get(routes.upload, (req, res) => res.send("상품 등록"));
productRouter.get(routes.productDetail, (req, res) => res.send("상품 상세"));
productRouter.get(routes.editProduct, (req, res) => res.send("상품 수정"));
productRouter.get(routes.deleteProduct, (req, res) => res.send("상품 삭제"));

export default productRouter;
