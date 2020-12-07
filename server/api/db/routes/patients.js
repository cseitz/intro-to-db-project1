let express = require('express');
let router = express();
module.exports = router;

// Get all patients in the database
router.get('/patients.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM patients`;
  let args = [];
  if (req.query.search) {
    query = `${query} WHERE (
      first_name LIKE ?
        OR
      last_name LIKE ?
        OR
      patient_id LIKE ?
        OR
      CONCAT( first_name,  ' ', last_name ) LIKE ?
        OR
      CONCAT( last_name,  ' ', first_name ) LIKE ?
        OR
      CONCAT( last_name,  ', ', first_name ) LIKE ?
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

// Get specific patient by id
router.get('/patients/:patient_id.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM patients WHERE patient_id = ${req.$param('patient_id')}`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results.shift(),
    query,
  }
}))


// Get specific patient's physician
router.get('/patients/:patient_id/physician.json', $attempt(async (req, res) => {
  let patient = (await db.query(`SELECT * FROM patients WHERE patient_id = ${req.$param('patient_id')}`)).results.shift();
  let query = `
  SELECT physicians.*, employees.first_name, employees.last_name FROM physicians
    LEFT JOIN employees ON physicians.employee_id = employees.employee_id
  WHERE physician_id = ?`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, [
      Number(patient.physician_id)
    ])).results.shift(),
    query,
  }
}))
