let express = require('express');
let router = express();
module.exports = router;

// Get all physicians in the database
router.get('/physicians.json', $attempt(async (req, res) => {
  let query = `SELECT physicians.*, employees.first_name, employees.last_name, employees.address FROM physicians
    LEFT JOIN employees ON physicians.employee_id = employees.employee_id`;
  let args = [];
  if (req.query.search) {
    query = `${query} WHERE (
      employees.first_name LIKE ?
        OR
      employees.last_name LIKE ?
        OR
      employees.employee_id LIKE ?
        OR
      CONCAT( employees.first_name,  ' ', employees.last_name ) LIKE ?
        OR
      CONCAT( employees.last_name,  ' ', employees.first_name ) LIKE ?
        OR
      CONCAT( employees.last_name,  ', ', employees.first_name ) LIKE ?
    )`;
    for (let i = 0; i < 6; i++) {
      args.push(req.query.search);
    }
  }
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, args)).results,
    query,
  }
}))

// Get specific physician by id
router.get('/physicians/:physician_id.json', $attempt(async (req, res) => {
  let query = `SELECT physicians.*, employees.first_name, employees.last_name, employees.address FROM physicians
    LEFT JOIN employees ON physicians.employee_id = employees.employee_id
    WHERE physicians.physician_id = ?`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, [
      req.params.physician_id,
    ])).results.shift(),
    query,
  }
}))
