const express = require("express");
// Models are middleware
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
// Router
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "Webtoc$ken";

//  * Route 1:Create a User using : POST "/api/auth/createuser". Doesn't require Auth

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({
      min: 3,
    }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password is too small(5 characters)").isLength({
      min: 5,
    }),
  ],

  async (req, res) => {
    let success = false;

    //* If there are errors return err(400)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: `${errors.array()} err 400 Bad request`,
        success,
      });
    }
    try {
      //*Check for no-dupe-value`
      let user = await User.findOne({
        email: req.body.email,
      });
      console.log(user);
      if (user) {
        return res.status(400).json({
          success,
          error: "no-dupe-emails",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({
        authtoken: authToken,
        success: success,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error ");
    }
  }
);

//! Route 2: Authenticate the user /api/auth/login

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be black").exists(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: `err 400 Bad request : ${errors.array()}`,
      });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({
        email,
      });
      if (!user) {
        const success = false;

        return res.status(400).json({
          error: `${success} Please login with correct credentials`,
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        const success = false;
        return res.status(400).json({
          error: `success:${success} Please login with correct credentials`,
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      const success = true;
      res.json({
        success: `${success}`,
        authtoken: authToken,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error ");
    }
  }
);

//! Route 2: Get logged user's Details /api/auth/getuser login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");

    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error ");
  }
});

module.exports = router;
