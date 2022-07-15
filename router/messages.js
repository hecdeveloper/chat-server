const { Router } = require("express");
const { validateJWT } = require("../middlewares/validate-jwt");
const router = Router();
const { getChat} = require("../controllers/messages");

router.get("/:from", validateJWT, getChat);

module.exports = router;
