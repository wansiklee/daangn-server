import Joi from "@hapi/joi";
import User from "../../../models/User";

// Sign Up
export const signup = async (req, res) => {
  const { body } = req;

  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .max(15)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required(),
    repeatPassword: Joi.ref("password")
  });

  // reuslt = value || value, error
  const result = schema.validate(body);
  console.log(result);
  if (result.error) {
    res.status(400);
    req.body = result.error;
    return;
  }
};

export const login = (req, res) => res.send("로그인");

export const logout = (req, res) => res.send("로그아웃");
