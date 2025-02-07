const User = require("./User");
const Park = require("./Park");

User.hasMany(Park, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Park.belongsTo(User, {
  foreignKey: "user_id",
});


module.exports = { User, Park };
