import express from "express";
import { signup, login, check, logout } from "./auth.ctrl";

const auth = express.Router();

auth.post("/signup", signup);
auth.post("/login", login);
auth.get("/check", check);
auth.post("/logout", logout);

export default auth;
