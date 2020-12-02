let router = require('express')();
module.exports = router;


router.use('/db', require('./db'));
router.get('/', (req, res) => {
  res.send('eey')
})
