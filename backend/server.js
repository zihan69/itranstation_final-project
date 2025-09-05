const express = require("express");
const sequelize = require("./config/db");
const User = require("./models/User");
const Inventory = require("./models/Inventory");
const Item = require("./models/Item");

const userRoutes = require("./routes/userRoutes"); // ✅ নতুন যোগ করা

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRoutes); 

// Server start
app.listen(5000, async () => {
  console.log("Server running on port 5000");
  try {
    await sequelize.sync();
    console.log("✅ Database synced successfully");
  } catch (error) {
    console.error("❌ Database sync failed:", error);
  }
});
