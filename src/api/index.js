import express from "express";
import products from "./product";
import auth from "./auth";
import users from "./user";

const api = express.Router();

api.use("/products", products);
api.use("/auth", auth);
api.use("/users", users);

export default api;
