const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our MoneyTracker model
class MoneyTracker extends Model {}

MoneyTracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
   }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'moneytracker'
  }
);

module.exports = MoneyTracker;