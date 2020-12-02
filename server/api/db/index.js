let express = require('express');
let router = express();
module.exports = router;

const $filtering = ((req) => {
  let str = [];
  if (req.query.limit) {
    str.push(`LIMIT ${req.query.limit}`)
  }
  return str.join(' ');
});

const $attempt = ((cb) => {
  return (async (req, res, next) => {
    try {
      /*res.json({
        success: true,
        ...(await cb(req, res, next))
      });*/
      res.json((await cb(req, res, next)));
    } catch(e) {
      res.json({
        success: false,
        error: e.toString()
      })
    }
  })
});

router.get('/hospitals.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM hospitals`;
  return (await db.query(`${query} ${$filtering(req)}`)).results
}))

router.get(['/hospitals/:hospital_id.json'], $attempt(async (req, res) => {
  let query = `SELECT * FROM hospitals WHERE hospital_id = ${req.params.hospital_id}`;
  return (await db.query(`${query} ${$filtering(req)}`)).results.shift()
}))

router.get(['/hospitals/:hospital_id/departments.json'], $attempt(async (req, res) => {
  let query = `SELECT * FROM departments WHERE hospital_id = ${req.params.hospital_id}`;
  return (await db.query(`${query} ${$filtering(req)}`)).results
}))

router.get(['/hospitals/:hospital_id/nurses.json'], $attempt(async (req, res) => {
  let query = `SELECT * FROM nurses WHERE department_id IN (
    SELECT employee_id FROM departments WHERE hospital_id = ${req.params.hospital_id}
  ) `;
  return (await db.query(`${query} ${$filtering(req)}`)).results
}))
