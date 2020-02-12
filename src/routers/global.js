import express from "express";
import routes from "./routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("홈"));
globalRouter.get(routes.signup, (req, res) => res.send("회원가입"));
globalRouter.get(routes.login, (req, res) => res.send("로그인"));
globalRouter.get(routes.search, (req, res) => res.send("검색"));

export default globalRouter;
