const { response } = require("express");
const {validationResult} = require("express-validator");

//createuser
const createUser = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "new",
  });
};

//login
const login = async (req, res) => {
    const errores = validationResult(req);
    if(!errores.isEmpty()){ 
        return res.status(400).json({
            ok: false,
            errores: errores.mapped()
        })
    }
   const {email, password} = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password
  });
};

//renw token
const renewToken = async (req, res) => {
  res.json({
    ok: true,
    msg: "renew",
  })
};

module.exports = {
  createUser,
  login,
  renewToken
};
