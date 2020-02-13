import express from "express";
import routes from "../../routes";
import products from "./product";
import auth from "./auth";

const api = express.Router();

api.use(routes.products, products);
api.use(routes.auth, auth);

export default api;
