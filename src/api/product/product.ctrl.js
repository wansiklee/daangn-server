import Joi from "@hapi/joi";
import Product from "../../db/models/Product";

/***********************
  GET /api/products
************************/
export const list = async (req, res) => {
  const {
    query: { page }
  } = req;

  const intPage = parseInt(page || "1", 10);
  if (intPage < 1) {
    res.status(400);
    return;
  }
  try {
    const products = await Product.find()
      .sort({ _id: -1 })
      .limit(12)
      .skip((intPage - 1) * 12)
      .lean()
      .exec();

    const productsNum = await Product.countDocuments().exec();
    res.set("Last-Page", Math.ceil(productsNum / 12));

    res.json({
      data: products.map(product => ({
        name:
          product.name.length < 12
            ? product.name
            : `${product.name.slice(0, 12)}...`,
        location: product.location,
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
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.number().required(),
    location: Joi.string().required()
  });

  const result = schema.validate(body);

  if (result.error) {
    res.status(400).json({ msg: result.error });
    return;
  }

  const { name, description, price, category, location } = result.value;

  const product = new Product({
    name,
    description,
    price,
    category,
    location,
    user: req.user
  });

  try {
    await product.save();
    res.json({ data: product });
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
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number(),
    category: Joi.number(),
    location: Joi.string()
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
    query: { term, page }
  } = req;

  const intPage = parseInt(page || "1", 10);
  if (intPage < 1) {
    res.status(400);
    return;
  }

  try {
    const products = await Product.find({
      name: { $regex: term, $options: "i" }
    })
      .sort({ _id: -1 })
      .limit(12)
      .skip((intPage - 1) * 12)
      .exec();

    const productsNum = await Product.countDocuments().exec();
    res.set("Last-Page", Math.ceil(productsNum / 12));

    if (!products) {
      res.json({ msg: "검색 결과가 없습니다." });
      return;
    }
    res.json({
      data: products.map(product => ({
        name:
          product.name.length < 12
            ? product.name
            : `${product.name.slice(0, 12)}...`,
        location: product.location,
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
