// routes/inventoryRoutes.js
const express = require("express");
const Inventory = require("../models/Inventory");
const User = require("../models/User");

const router = express.Router();

// Create Inventory
router.post("/", async (req, res) => {
  try {
    const { name, userId } = req.body;

    if (!name || !userId) {
      return res.status(400).json({ message: "Name and User ID are required" });
    }

    // Check user exists
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const inventory = await Inventory.create({ name, userId });
    res.status(201).json({ message: "Inventory created successfully", inventory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Inventories by User
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const inventories = await Inventory.findAll({ where: { userId } });

    res.json({ inventories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
