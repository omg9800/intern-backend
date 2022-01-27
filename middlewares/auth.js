const jwt = require("jsonwebtoken");

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;

    decodedData = jwt.decode(token);

    req.userId = decodedData?.sub;
    console.log(decodedData?.sub);

    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
