let express = require('express');
let router = express();
module.exports = router;

// Get all physicians in the database
router.get('/physicians.json', $attempt(async (req, res) => {
  let query = `SELECT physicians.*, employees.first_name, employees.last_name FROM physicians
    LEFT JOIN employees ON physicians.employee_id = employees.employee_id`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))

// Get specific physician by id
router.get('/physicians/:physician_id.json', $attempt(async (req, res) => {
  let query = `SELECT physicians.*, employees.first_name, employees.last_name FROM physicians
    LEFT JOIN employees ON physicians.employee_id = employees.employee_id
    WHERE physicians.employee_id = ?`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, [
      req.params.physician_id,
    ])).results.shift(),
    query,
  }
}))
