import Joi from "@hapi/joi";
import User from "../../db/models/User";

/***********************
  GET /api/me
************************/
export const meDetail = (req, res) => {
  const { user } = req;
  res.json({ data: user.serialize() });
};

/***********************
  PATCH /api/me
************************/
export const editMe = async (req, res) => {
  const {
    user: { _id },
    body
  } = req;

  const schema = Joi.object({
    username: Joi.string()
      .min(3)
      .max(15),
    email: Joi.string().email()
  });

  const result = schema.validate(body);

  if (result.error) {
    res.status(400).json({ msg: result.error });
    return;
  }

  const { username, email } = result.value;

  try {
    const existancy = await User.findExistancy({ username, email });
    if (existancy) {
      const exist = existancy.username === username ? "닉네임" : "이메일";
      res.status(409).json({ msg: `이미 등록된 ${exist} 입니다.` });
      return;
    }

    const user = await User.findByIdAndUpdate(_id, body, {
      new: true
    }).exec();
    if (!user) {
      res.status(404);
    }

    res.json({ data: user.serialize() });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
