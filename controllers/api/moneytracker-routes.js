const router = require('express').Router();
const { MoneyTracker, MonthlyDetails } = require('../../models');

// get all users
router.get('/', (req, res) => {
  MoneyTracker.findAll({
    order: [['created_at', 'DESC']],
    attributes: [
      'id',
      'year',
      'month',
      'status',
      'created_at'
    ],
    include: [
      // include the Comment model here:
      {
        model: MonthlyDetails,
        attributes: ['id', 'money_tracker_id', 'category', 'entry', 'amount', 'created_at']
      }
    ]
   })
   .then(dbTrackerData => res.json(dbTrackerData))
   .catch(err => {
     console.log(err);
     res.status(500).json(err);
   });

});

router.get('/:id', (req, res) => {
  MoneyTracker.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'year',
        'month',
        'status',
        'created_at'
      ],
      include: [
        // include the Comment model here:
        {
          model: MonthlyDetails,
          attributes: ['id', 'money_tracker_id', 'category', 'entry', 'amount', 'created_at']
        }
      ]
    })
    .then(dbTrackerData => {
      if (!dbTrackerData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  MoneyTracker.create({
    year: req.body.year,
    month: req.body.month,
    status: req.body.status
  })
    .then(dbTrackerData => res.json(dbTrackerData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;