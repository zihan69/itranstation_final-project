const User = require("./User");
const Inventory = require("./Inventory");
const Item = require("./Item");

// Relations
User.hasMany(Inventory, { onDelete: "CASCADE" });
Inventory.belongsTo(User);

Inventory.hasMany(Item, { onDelete: "CASCADE" });
Item.belongsTo(Inventory);

module.exports = { User, Inventory, Item };
