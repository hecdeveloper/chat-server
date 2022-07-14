const { response } = require("express");

//createuser
const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "new",
  });
};

//login
const login = (req, res) => {
  res.json({
    ok: true,
    msg: "login",
  });
};

//renw token
const renewToken = (req, res) => {
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
