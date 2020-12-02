let router = require('express')();
module.exports = router;

router.use('/api', require('./api'));
