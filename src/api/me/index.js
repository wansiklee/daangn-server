import express from "express";
import { meDetail } from "./me.ctrl";
import checkLoggedIn from "../../lib/checkLoggedIn";
import getMe from "../../lib/getMe";

const me = express.Router();

me.get("/", checkLoggedIn, getMe, meDetail);

export default me;
