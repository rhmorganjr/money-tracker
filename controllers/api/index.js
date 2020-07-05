// import models
const MoneyTracker = require('./MoneyTracker');
const MonthlyDetails = require('./MonthlyDetails');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  MoneyTrackers,
  MonthlyDetails
};
