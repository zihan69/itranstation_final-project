const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const { User, Inventory, Item } = require("./models");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running with database 🚀");
});

// Sync Database
sequelize
  .sync({ alter: true })
  .then(() => console.log("✅ Database synced successfully"))
  .catch((err) => console.error("❌ Database sync failed:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
