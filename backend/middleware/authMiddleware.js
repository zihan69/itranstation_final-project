const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // 1. Header থেকে token নেওয়া
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided, authorization denied" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <token>

  try {
    // 2. Token verify করা
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. userId কে req object এ attach করা
    req.user = { id: decoded.userId };

    next(); // Next middleware এ যাবে
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
