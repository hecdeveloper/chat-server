const { Router } = require("express");

//controller
const { createUser, login, renewToken } = require("../controllers/auth");


const router = Router();

//new users
router.post("/new", createUser)

//login
router.post('/', login)


//renew token
router.post('/renew', renewToken)

module.exports = router;
