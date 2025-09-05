// routes/itemRoutes.js
const express = require("express");
const Item = require("../models/Item");
const Inventory = require("../models/Inventory");

const router = express.Router();

// Add Item
router.post("/", async (req, res) => {
  try {
    const { name, quantity, inventoryId } = req.body;

    if (!name || !inventoryId) {
      return res.status(400).json({ message: "Name and Inventory ID are required" });
    }

    // Check if inventory exists
    const inventory = await Inventory.findByPk(inventoryId);
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }

    const item = await Item.create({ name, quantity, inventoryId });
    res.status(201).json({ message: "Item added successfully", item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get All Items in an Inventory
router.get("/:inventoryId", async (req, res) => {
  try {
    const { inventoryId } = req.params;

    const items = await Item.findAll({ where: { inventoryId } });
    res.json({ items });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update Item
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;

    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    item.name = name || item.name;
    item.quantity = quantity || item.quantity;
    await item.save();

    res.json({ message: "Item updated successfully", item });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete Item
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const item = await Item.findByPk(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    await item.destroy();
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
