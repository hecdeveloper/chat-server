const { response } = require("express");
const User = require("../models/user");

//createuser
const createUser = async (req, res = response) => {
  try {
    const {email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
        return res.status(400).json({
            ok: false,
            msg: "Email already exist"
        })
    }
    //encryptpassword

    //save user in d
    const user = new User(req.body);
    await user.save();


    res.json({user});
  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: "check with the admin"
    })
  }
};

//login
const login = async (req, res) => {

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
