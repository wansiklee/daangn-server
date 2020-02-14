import express from "express";
import { userDetail, editProfile, changePassword } from "./user.ctrl";

const user = express.Router();

user.get("/:id", userDetail);
user.get("/:id", editProfile);
user.get("/:id", changePassword);

export default user;
