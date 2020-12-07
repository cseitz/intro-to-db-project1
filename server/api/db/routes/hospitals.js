let express = require('express');
let router = express();
module.exports = router;

// Get all hospitals in the database
router.get('/hospitals.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM hospitals`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))

// Get specific hospital by id
router.get('/hospitals/:hospital_id.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM hospitals WHERE hospital_id = ${req.$param('hospital_id')}`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results.shift(),
    query,
  }
}))

// Get departments from a hospital
router.get('/hospitals/:hospital_id/departments.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM departments WHERE hospital_id = ${req.$param('hospital_id')}`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))

// Get nurses from a hospital
router.get('/hospitals/:hospital_id/nurses.json', $attempt(async (req, res) => {
  let query = `
  SELECT nurses.*, employees.first_name, employees.last_name FROM nurses
    LEFT JOIN employees ON nurses.employee_id = employees.employee_id
  WHERE department_id IN (
    SELECT department_id FROM departments WHERE hospital_id = ${req.$param('hospital_id')}
  )`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))

// Get physicians from a hospital
router.get('/hospitals/:hospital_id/physicians.json', $attempt(async (req, res) => {
  let query = `
  SELECT physicians.*, employees.first_name, employees.last_name FROM physicians
    LEFT JOIN employees ON physicians.employee_id = employees.employee_id
  WHERE department_id IN (
    SELECT department_id FROM departments WHERE hospital_id = ${req.$param('hospital_id')}
  )`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))

// Get employees from a hospital
router.get('/hospitals/:hospital_id/employees.json', $attempt(async (req, res) => {
  let query = `
  SELECT * FROM employees WHERE employee_id IN
  (
    SELECT employee_id FROM nurses WHERE department_id IN (
      SELECT department_id FROM departments WHERE hospital_id = ${req.$param('hospital_id')}
    )
      UNION
  	SELECT employee_id FROM physicians WHERE department_id IN (
      SELECT department_id FROM departments WHERE hospital_id = ${req.$param('hospital_id')}
    )
  )`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))

// Get specific nurse from hospital
router.get('/hospitals/:hospital_id/nurses/:nurse_id.json', $attempt(async (req, res) => {
  let query = `
  SELECT nurses.*, employees.first_name, employees.last_name FROM nurses
    LEFT JOIN employees ON nurses.employee_id = employees.employee_id
  WHERE nurse_id = ${req.$param('nurse_id')} AND department_id IN (
    SELECT department_id FROM departments WHERE hospital_id = ${req.$param('hospital_id')}
  )`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query)).results,
    query,
  }
}))
