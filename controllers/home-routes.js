const router = require('express').Router();
const sequelize = require('../config/connection');
const { MoneyTracker, MonthlyDetails } = require('../models');

router.get('/', (req, res) => {
  MoneyTracker.findAll({
    attributes: [
      'id',
      'year',
      'month',
      'status',
      'created_at'
    ],
    include: [
      {
        model: MonthlyDetails,
        attributes: ['id', 'money_tracker_id', 'category', 'entry', 'amount', 'created_at']
      }]
  })
    .then(dbMoneyData => {
      // pass post objects into the homepage template
      //const entries = dbMoneyData.map(entry => entry.get({ plain: true }));
      //res.render('homepage', { entries });
      res.render(dbMoneyData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;