import express from "express";
import routes from "../../routes";
import { userDetail, editProfile, changePassword } from "./user.ctrl";

const user = express.Router();

user.get(routes.userDetail, userDetail);
user.get(routes.editProfile, editProfile);
user.get(routes.changePassword, changePassword);

export default user;
