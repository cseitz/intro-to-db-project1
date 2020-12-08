let express = require('express');
let router = express();
module.exports = router;

// Get all nurses in the database
router.get('/nurses.json', $attempt(async (req, res) => {
  let query = `SELECT nurses.*, employees.first_name, employees.last_name, employees.address FROM nurses
    LEFT JOIN employees ON nurses.employee_id = employees.employee_id`;
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

// Get specific nurse by id
router.get('/nurses/:nurse_id.json', $attempt(async (req, res) => {
  let query = `SELECT nurses.*, employees.first_name, employees.last_name, employees.address FROM nurses
    LEFT JOIN employees ON nurses.employee_id = employees.employee_id
    WHERE nurses.nurse_id = ?`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, [
      req.params.nurse_id,
    ])).results.shift(),
    query,
  }
}))
