const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protected route (login ছাড়া access হবে না)
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "This is a protected route",
    userId: req.user.id,
  });
});

module.exports = router;
