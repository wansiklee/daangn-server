import Product from "../../db/models/Product";

/***********************
  GET /api/products
************************/
export const list = async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.json({ data: products });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

/***********************
  POST /api/products
************************/
export const upload = async (req, res) => {
  const {
    body: { title, description, price }
  } = req;
  const product = new Product({
    title,
    description,
    price
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
  const {
    params: { id }
  } = req;

  try {
    const product = await Product.findById(id).exec();
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
  PATCH /api/products/:id
************************/
export const editProduct = async (req, res) => {
  const {
    params: { id },
    body
  } = req;
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
    query: { term }
  } = req;
  try {
    const products = await Product.find({
      title: { $regex: term, $options: "i" }
    }).exec();
    console.log(products);
    if (!products) {
      res.json({ msg: "검색 결과가 없습니다." });
      return;
    }
    res.json({ data: products });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};
