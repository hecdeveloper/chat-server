const { response } = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { genJWT } = require("../helpers/jwt");
//createuser
const createUser = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({
        ok: false,
        msg: "Email already exist",
      });
    }
    const user = new User(req.body);
    //encryptpassword
    const salt = await bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(password, salt);

    //save user in db
    await user.save();

    //generate token
    const token = await genJWT(user.id);

    res.json({ ok: true, user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "check with the admin",
    });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //veryfy if email exist
    const userDB = await User.findOne({ email });
    if (!userDB) {
      return res.status(404).json({
        ok: false,
        msg: "Email not found",
      });
    }

    //veryfy if password is correct
    const validPassword = bcrypt.compareSync(password, userDB.password);
    if (!validPassword) {
      return res.status(404).json({
        ok: false,
        msg: "Password incorrect",
      });
    }

    //generate token
    const token = await genJWT(userDB.id);
    res.json({
      ok: true,
      user: userDB,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "incorrect",
    });
  }
};

//renew token
const renewToken = async (req, res) => {
    const uid = req.uid;
  //gen new JWT
  const token = await genJWT(uid);
  res.json({
    ok: true,
    msg: "renew",
    token,
  });
};

module.exports = {
  createUser,
  login,
  renewToken,
};
