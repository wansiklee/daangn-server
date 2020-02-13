import express from "express";
import global from "./global";
import user from "./user";
import routes from "../routes";

const router = express.Router();

router.use(routes.home, global);
router.use(routes.users, user);

export default router;
