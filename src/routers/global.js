import express from "express";
import routes from "../routes";

import { signup, login, logout } from "../controllers/user";
import { home, search } from "../controllers/product";

const router = express.Router();

router.get(routes.home, home);
router.get(routes.signup, signup);
router.get(routes.login, login);
router.get(routes.logout, logout);
router.get(routes.search, search);

export default router;
