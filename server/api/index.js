let router = require('express')();
module.exports = router;


router.use((req, res, next) => {
  if (req.method == 'POST') {
    let data = Buffer.alloc(0);
    req.on('data', (chunk) => {
      data = Buffer.concat([data, chunk]);
    });
    req.on('end', () => {
      req.body = data;
      next();
    })
  } else {
    next();
  }
})

router.use('/db', require('./db'));
router.get('/', (req, res) => {
  res.send('eey')
})
