const jwt = require("jsonwebtoken");

const genJWT = (uid) => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("Error generating token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  genJWT,
};
