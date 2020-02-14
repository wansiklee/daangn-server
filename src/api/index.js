import express from "express";
import routes from "../routes";
import products from "./product";
import auth from "./auth";
import users from "./user";

const api = express.Router();

api.use(routes.products, products);
api.use(routes.auth, auth);
api.use(routes.users, users);

export default api;
