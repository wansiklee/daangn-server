import Joi from "@hapi/joi";
import User from "../../db/models/User";

/***********************
  POST /api/auth/signup
************************/
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

    // configure jwt to httpOnly cookie
    const token = await user.generateToken();
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7d
      httpOnly: true
    });

    res.json({ data: user.serialize(), msg: "가입되었습니다!" });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

/***********************
  POST /api/auth/login
************************/
export const login = async (req, res) => {
  const { body } = req;

  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  });

  const result = schema.validate(body);

  if (result.error) {
    res.status(400).json({ msg: result.error });
    return;
  }

  const { email, password } = result.value;

  try {
    // find user
    const user = await User.findByEmail(email);
    if (!user) {
      res.status(403);
      return;
    }

    // Validate Password
    const isValid = user.checkPassword(password);
    if (!isValid) {
      res.status(403);
      return;
    }

    const token = await user.generateToken();
    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });

    res.json({ data: user.serialize(), msg: "로그인 되었습니다!" });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

/**********************
  GET /api/auth/check
***********************/
export const check = async (req, res) => {
  const { user } = req;

  if (!user) {
    res.status(401);
    return;
  }

  res.json({ user });
};

/***********************
  POST /api/auth/logout
************************/
export const logout = async (req, res) => {
  res.clearCookie("jwt"); // Delete jwt
  res.status(204); // No content
};
