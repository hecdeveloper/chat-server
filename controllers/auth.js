const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const genJWT = require("../helpers/jwt");
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
    const user = new User(req.body);
    //encryptpassword
    const salt = await bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(password, salt);

    //save user in db
    await user.save();

    //generate token
    const token = await genJWT(user.id);


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
