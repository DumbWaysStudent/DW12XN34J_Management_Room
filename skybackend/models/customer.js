'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    identity_number: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {});
  customer.associate = function(models) {
    // associations can be defined here
    customer.belongsToMany(models.room, {
      through: models.order,
      as:"rooms",
      foreignKey:"customer_id"
    })
  };
  return customer;
};