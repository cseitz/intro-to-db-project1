let express = require('express');
let router = express();
module.exports = router;

router.use(require('./hospitals.js'))
router.use(require('./patients.js'))
router.use(require('./physicians.js'))
