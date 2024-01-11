// const express = require("express");
// const router = express.Router();
// const userSchema = require("../modals/userSchema");
// const jwt = require("jsonwebtoken");
// const {registerUser, userLogin} = require("../Controllers/userController");
// const { body, validationResult } = require('express-validator');
// const {fetchAllUsersController} = require("../Controllers/userController");
// const { protect } = require("../middleware/authMiddleware");
// router.post("/registerUser" , 
// body("Email","Email field should be the email").isEmail(),
// body("Password","Password length should be 5 or more").isLength({ min : 5})
// ,registerUser );

// router.post("/login" , userLogin   )
// router.get("/fetchUsers",protect,fetchAllUsersController)


// module.exports = router;

// const express = require("express");
// const {
//   allMessages,
//   sendMessage,
// } = require("../controllers/messageControllers");
// const { protect } = require("../middleware/authMiddleware");

// const router = express.Router();

// router.route("/:chatId").get(protect, allMessages);
// router.route("/").post(protect, sendMessage);

// module.exports = router;
const express = require("express");
const {
  userLogin,
  registerUser,
  fetchAllUsersController,
} = require("../Controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const Router = express.Router();

Router.post("/login", userLogin);
Router.post("/registerUser", registerUser);
Router.get("/fetchUsers",protect,fetchAllUsersController);

module.exports = Router;