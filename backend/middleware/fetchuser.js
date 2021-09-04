var jwt = require("jsonwebtoken");
const JWT_SECRET = "Webtoc$ken";

const fetchuser = (req, res, next) => {
  //TODO  Get the user fromthe jwt token and add id tp req object
  const token = req.header("auth-token");

  if (!token) {
    res.staus(401).send({ error: `Please authenticate using a valid token` });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
  } catch (error) {
    res.staus(401).send({ error: `Please authenticate using a valid token` });
  }

  next();
};
module.exports = fetchuser;
