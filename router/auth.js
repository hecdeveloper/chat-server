const { Router } = require("express");
const { check } = require("express-validator");

//controller
const { createUser, login, renewToken } = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

//new users
router.post(
  "/new",
  [
    check("name", "name is required").not().isEmpty(),
    check("password", "password is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    validateFields,
  ],
  createUser
);

//login
router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
    validateFields,
  ],
  login
);

//renew token
router.get("/renew", renewToken);

module.exports = router;
