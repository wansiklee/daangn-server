import express from "express";
import routes from "./routes";

const userRouter = express.Router();

userRouter.get(routes.userDetail, (req, res) => res.send("프로필"));
userRouter.get(routes.editProfile, (req, res) => res.send("프로필 수정"));
userRouter.get(routes.changePassword, (req, res) => res.send("비밀번호 변경"));

export default userRouter;
