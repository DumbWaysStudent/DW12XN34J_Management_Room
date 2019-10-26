'use strict';
module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define('room', {
    name: DataTypes.STRING,
    createdBy: DataTypes.INTEGER
  }, {});
  room.associate = function(models) {
    // associations can be defined here
    room.belongsTo(models.user,{
      foreignKey:'createdBy'
    })
  };
  return room;
};