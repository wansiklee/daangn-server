import express from "express";
import global from "./global";
import user from "./user";
import product from "./product";
import routes from "../routes";

const router = express.Router();

router.use(routes.home, global);
router.use(routes.users, user);
router.use(routes.products, product);

export default router;
