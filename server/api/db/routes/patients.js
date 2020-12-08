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

// Update specific patient by id
router.post('/patients/:patient_id.json', $attempt(async (req, res) => {
  let changes = JSON.parse(req.body);
  if ('patient_id' in changes) {
    delete changes.patient_id;
  }
  let fields = Object.keys(changes);
  let values = Object.values(changes);
  if ('physician_id' in changes) {
    if (changes.physician_id == '0') {
      values[fields.indexOf('physician_id')] = null;
    }
  }
  let args = [];
  let query;
  if (req.params.patient_id == 'create') {
    query = `INSERT INTO patients (${fields.map(o => "\`" + req.$param(o).slice(0, -1).substr(1) + '\`').join(', ')})
    VALUES (${values.map(o => '?').join(', ')})`;
    args = values;
  } else {
    query = `UPDATE patients SET ${fields.map(o => "" + req.$param(o).slice(0, -1).substr(1) + " = ?").join(',')} WHERE patient_id = ?`;
    args = values;
    args.push(Number(req.params.patient_id));
  }
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, args)).results,
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

// Get specific patient by id
router.get('/patients/:patient_id/records.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM records WHERE patient_id = ${req.$param('patient_id')}`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))
