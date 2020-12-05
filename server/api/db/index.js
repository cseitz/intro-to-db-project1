let express = require('express');
let router = express();
module.exports = router;

function mysqlEscape (str) {
    if (typeof str != 'string')
        return str;

    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
        }
    });
}

const $filtering = ((req) => {
  let str = [];
  if (req.query.limit) {
    str.push(`LIMIT ${mysqlEscape(req.query.limit)}`)
    if (req.query.page) {
      let n = Number(req.query.page) * Number(req.query.limit);
      str.push(`OFFSET ${n}`)
    }
  }
  if (req.query.offset) {
    str.push(`OFFSET ${mysqlEscape(req.query.offset)}`)
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

router.use((req, res, next) => {
  req.$param = function(name) {
    return db.connection.escape(req.params[name] ?? req.query[name]);
  };
  next();
})

let normalizeQuery = function(str) {
  return str.split('\n').join(' ').split('\t').join('').trim()
  .split('  ').join(' ')
  .split('  ').join(' ')
  .split('  ').join(' ');
}

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
