const { Router } = require("express");
const { check } = require("express-validator");

//controller
const { createUser, login, renewToken } = require("../controllers/auth");

const router = Router();

//new users
router.post("/new", createUser);

//login
router.post(
  "/",
  [
    check("email", "Email is required").isEmail(),
    check("password", "password is required").not().isEmpty(),
  ],
  login
);

//renew token
router.post("/renew", renewToken);

module.exports = router;
