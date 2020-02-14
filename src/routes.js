// Auth
const AUTH = "/auth";
const SIGNUP = "/signup";
const LOGIN = "/login";
const LOGOUT = "/logout";
const CHECK = "/check";

// Products
const PRODUCTS = "/products";
const UPLOAD = "/";
const PRODUCT_DETAIL = "/:id";
const EDIT_PRODUCT = "/:id";
const DELETE_PRODUCT = "/:id";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

const routes = {
  api: API,
  auth: AUTH,
  signup: SIGNUP,
  login: LOGIN,
  logout: LOGOUT,
  check: CHECK,
  products: PRODUCTS,
  upload: UPLOAD,
  productDetail: PRODUCT_DETAIL,
  editProduct: EDIT_PRODUCT,
  deleteProduct: DELETE_PRODUCT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD
};

export default routes;
