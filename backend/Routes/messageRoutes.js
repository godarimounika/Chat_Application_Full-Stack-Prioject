// const express = require("express")
// const{
//     allMessages,sendMessage
// } = require("../Controllers/messageController");


// const{protect} = require("../middleware/authMiddleware");


// const router = express.Router();

// router.route("/:chatId").get(protect,allMessages);
// router.route("/").get(protect,sendMessage);


// module.exports = router;
const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../Controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;