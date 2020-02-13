import express from "express";
import routes from "../routes";

import { userDetail, editProfile, changePassword } from "../controllers/user";

const router = express.Router();

router.get(routes.userDetail, userDetail);
router.get(routes.editProfile, editProfile);
router.get(routes.changePassword, changePassword);

export default router;
