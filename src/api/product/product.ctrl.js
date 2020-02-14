import Product from "../../db/models/Product";

export const list = (req, res) => res.send("상품 리스트");

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

export const productDetail = (req, res) => res.send("상품 상세");

export const editProduct = (req, res) => res.send("상품 수정");

export const deleteProduct = (req, res) => res.send("상품 삭제");

export const search = (req, res) => res.send("검색");
