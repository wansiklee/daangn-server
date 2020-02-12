// Global
const HOME = "/";
const SIGNUP = "/signup";
const LOGIN = "/login";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// Products
const PRODUCTS = "/products";
const UPLOAD = "/upload";
const PRODUCT_DETAIL = "/:id";
const EDIT_PRODUCT = "/:id/edit";
const DELETE_PRODUCT = "/:id/delete";

const routes = {
  home: HOME,
  signup: SIGNUP,
  login: LOGIN,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  products: PRODUCTS,
  upload: UPLOAD,
  productDetail: PRODUCT_DETAIL,
  editProduct: EDIT_PRODUCT,
  deleteProduct: DELETE_PRODUCT
};

export default routes;
