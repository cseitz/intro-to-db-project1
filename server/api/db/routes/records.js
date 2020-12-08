let express = require('express');
let router = express();
module.exports = router;


// Get a record by id
router.get('/records/:record_id.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM records WHERE record_id = ?`;
  let args = [req.params.record_id];
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, args)).results.shift(),
    query,
  }
}))


// Update specific record by id
router.post('/records/:record_id.json', $attempt(async (req, res) => {
  let changes = JSON.parse(req.body);
  if ('record_id' in changes) {
    delete changes.record_id;
  }
  let fields = Object.keys(changes);
  let values = Object.values(changes);
  let args = [];
  let query;
  if (req.params.record_id == 'create') {
    query = `INSERT INTO records (${fields.map(o => "\`" + req.$param(o).slice(0, -1).substr(1) + '\`').join(', ')})
    VALUES (${values.map(o => '?').join(', ')})`;
    args = values;
  } else {
    query = `UPDATE records SET ${fields.map(o => "" + req.$param(o).slice(0, -1).substr(1) + " = ?").join(',')} WHERE record_id = ?`;
    args = values;
    args.push(Number(req.params.record_id));
  }
  if (true) {
    console.log(query);
    return {
      results: [],
      query,
    }
  }
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, args)).results,
    query,
  }
}))


// Delete specific record by id
router.delete('/records/:record_id.json', $attempt(async (req, res) => {
  let query = `DELETE FROM records WHERE record_id = ? LIMIT 1`;
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, [req.params.record_id])).results,
    query,
  }
}))
