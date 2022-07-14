const { response } = require("express");

//createuser
const createUser = async (req, res = response) => {
  res.json({
    ok: true,
    msg: "new",
  });
};

//login
const login = async (req, res) => {
  res.json({
    ok: true,
    msg: "login",
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
