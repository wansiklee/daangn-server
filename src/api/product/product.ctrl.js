import Joi from "@hapi/joi";
import Product from "../../db/models/Product";
import User from "../../db/models/User";

/***********************
  GET /api/products
************************/
export const list = async (req, res) => {
  const {
    query: { page, category }
  } = req;

  const intPage = parseInt(page || "1", 10);
  if (intPage < 1) {
    res.status(400);
    return;
  }

  const query = {
    ...(category ? { category: category } : {})
  };

  try {
    const products = await Product.find(query)
      .sort({ _id: -1 })
      .limit(12)
      .skip((intPage - 1) * 12)
      .lean()
      .exec();

    const productsNum = await Product.countDocuments(query).exec();
    res.set("Last-Page", Math.ceil(productsNum / 12));

    res.json({
      data: products.map(product => ({
        title:
          product.title.length < 12
            ? product.title
            : `${product.title.slice(0, 12)}...`,
        image: product.image,
        price: product.price,
        likes: product.likes,
        comments: product.comments
      }))
    });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

/***********************
  POST /api/products
************************/
export const upload = async (req, res) => {
  const { body } = req;

  const schema = Joi.object({
    image: Joi.string(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.number().required()
  });

  const result = schema.validate(body);

  if (result.error) {
    res.status(400).json({ msg: "모든 항목을 채워주세요" });
    return;
  }

  const { image, title, description, price, category } = result.value;

  const product = new Product({
    image,
    title,
    description,
    price,
    category,
    user: req.user
  });

  try {
    const user = await User.findById(req.user._id);
    await user.products.push(product._id);
    await user.save();
    await product.save();
    res.json({ product });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

/***********************
  GET /api/products/:id
************************/
export const productDetail = async (req, res) => {
  const { data } = req;
  res.json({ data });
};

/***********************
  PATCH /api/products/:id
************************/
export const editProduct = async (req, res) => {
  const {
    params: { id },
    body
  } = req;

  const schema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    price: Joi.number(),
    category: Joi.number()
  });

  const result = schema.validate(body);

  if (result.error) {
    res.status(400).json({ msg: result.error });
    return;
  }

  try {
    const product = await Product.findByIdAndUpdate(id, body, {
      new: true
    }).exec();
    if (!product) {
      res.status(404); // Not Found
      return;
    }
    res.json({ data: product });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

/***********************
  DELETE /api/products/:id
************************/
export const deleteProduct = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    await Product.findByIdAndRemove(id).exec();
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

/***************************
  GET /api/products/search
****************************/
export const search = async (req, res) => {
  const {
    query: { term, page, category }
  } = req;

  const intPage = parseInt(page || "1", 10);
  if (intPage < 1) {
    res.status(400);
    return;
  }

  const query = {
    ...(category ? { category: category } : {})
  };

  try {
    const products = await Product.find({
      ...query,
      title: { $regex: term, $options: "i" }
    })
      .sort({ _id: -1 })
      .limit(12)
      .skip((intPage - 1) * 12)
      .exec();

    const productsNum = await Product.countDocuments(query).exec();
    res.set("Last-Page", Math.ceil(productsNum / 12));

    if (!products) {
      res.json({ msg: "검색 결과가 없습니다." });
      return;
    }
    res.json({
      data: products.map(product => ({
        title:
          product.title.length < 12
            ? product.title
            : `${product.title.slice(0, 12)}...`,
        price: product.price,
        likes: product.likes,
        comments: product.comments
      }))
    });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
