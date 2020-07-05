const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our MonthlyDetails model
class MonthlyDetails extends Model {}

MonthlyDetails.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL
    },
    money_tracker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'moneytracker',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'monthlydetails'
  }
);

module.exports = MonthlyDetails;