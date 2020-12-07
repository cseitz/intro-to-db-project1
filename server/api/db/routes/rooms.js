let express = require('express');
let router = express();
module.exports = router;

// Get rooms in a hospital
router.get('/hospitals/:hospital_id/rooms.json', $attempt(async (req, res) => {
  let query = `SELECT * FROM rooms WHERE hospital_id = ${req.$param('hospital_id')}`;
  let args = [];
  if (req.query.search) {
    query = `${query} AND (
      equipment LIKE ?
        OR
      room_id LIKE ?
    )`;
    for (let i = 0; i < 2; i++) {
      args.push(String(req.query.search));
    }
  }
  query = normalizeQuery(`${query} ${$filtering(req)}`);
  return {
    results: (await db.query(query, args)).results,
    query,
  }
}))
