import Joi from "@hapi/joi";
import User from "../../../db/models/User";

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

  if (result.error) {
    res.status(400).json({ msg: result.error });
    return;
  }

  // Passed Signup form
  const { username, email, password } = result.value;

  try {
    // Check username or email existancy
    const existancy = await User.findExistancy({ username, email });
    if (existancy) {
      const exist = existancy.username === username ? "닉네임" : "이메일";
      res.status(409).json({ msg: `이미 등록된 ${exist} 입니다.` });
      return;
    }

    // Create New User
    const user = new User({
      username,
      email
    });
    await user.setPassword(password);
    await user.save();

    res.json({ data: user.serialize(), msg: "가입되었습니다!" });
  } catch (e) {
    console.log(e);
  }
};

export const login = (req, res) => res.send("로그인");

export const logout = (req, res) => res.send("로그아웃");
