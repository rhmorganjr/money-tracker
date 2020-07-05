const MoneyTracker = require('./MoneyTracker');
const MonthlyDetails = require('./MonthlyDetails');

// create associations
MoneyTracker.hasMany(MonthlyDetails, {
  foreignKey: 'id'
});

MonthlyDetails.belongsTo(MoneyTracker, {
  foreignKey: 'money_tracker_id',
});


module.exports = { MoneyTracker, MonthlyDetails };