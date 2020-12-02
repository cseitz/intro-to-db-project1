let express = require('express');
let router = express();
module.exports = router;
let queries = require('./queries.js');


let authenticated = function(req, res, next) {
  if (true) {
    next();
  } else {
    res.status(401).json({
      success: false,
      error: 'Authentication Required',
    })
  }
}

let serveQueryold = function(queryFunc, config={}) {
  return (async (req, res) => {
    try {
      let queryParams = {
        ...req.query,
      }
      if (queryParams.query) {
        delete queryParams.query;
      }
      if (queryParams.id && config.id) {
        queryParams[config.id] = queryParams.id;
        delete queryParams.id;
      }
      let { success, response } = await queryFunc({
        select: req.query.select ?? '*',
        where: queryParams,
      });
      if (success) {
        // 200 OK
        res.status(200).json({
          success: true,
          ...response,
        })
      } else {
        // 420 METHOD FAILED
        res.status(420).json({
          success: false,
          error: response,
        })
      }
    } catch(err) {
      // 500 INTERNAL SERVER ERROR
      res.status(500).json({
        success: false,
        error: err.toString(),
      })
    }
  });
}

/*router.get(['/hospital.json', '/hospitals.json'], serveQuery(queries.hospitals.get, {
  id: 'hospital_id',
}))*/

//`SELECT * FROM comment INNER JOIN post ON comment.postlink=post.postlink;`

let executeQuery = (async (req, res, query_) => {
  try {
    let query__ = query_;
    if (typeof query_ == 'function') {
      query__ = query_(req);
    }
    let response = await db.query(`${query__} ${
      req.query.limit ? 'LIMIT ' + req.query.limit : ''
    }`);
    return {
      status: 200,
      json: {
        success: true,
        results: response.results,
      },
    }
  } catch(e) {
    return {
      status: 500,
      json: {
        success: false,
        error: e.toString()
      },
    }
  }
});
let QUERY = ((query_) => {
  return function(cb) {
    return (async (req, res, next) => {
      let resp = await executeQuery(req, res, query_);
      cb({ req, res, result: resp, });
    });
  }
});

/*router.get('/hospitals.json', async (req, res) => {
  let { status, json } = await executeQuery(req, res, `SELECT * FROM hospitals`);

})*/


let serveTable = function(path, queryString) {
  let routes = express.Router();
  routes.get(`${path}s.json`, QUERY(queryString) (async ({
    req, res, result
  }) => {
    res.status(result.status);
    res.json(result.json);
  }))
  routes.get(`${path}/:id.json`, QUERY(({ params }) => `${queryString} WHERE hospital_id = ${params.id}`) (async ({
    req, res, result
  }) => {
    res.status(result.status);
    res.json(result.json);
  });
  return routes;
}

let hospitals = serveTable('/hospital', 'SELECT * FROM hospitals');
hospitals.use(serveTable('/department', ''))
router.use(hospitals);

/*router.get('/hospitals.json', QUERY('SELECT * FROM hospitals') (async ({
  req, res, result
}) => {
  res.status(result.status);
  res.json(result.json);
}))

router.get('/hospital/:id.json', QUERY(({ params }) => `SELECT * FROM hospitals WHERE hospital_id = ${params.id}`) (async ({
  req, res, result
}) => {
  res.status(result.status);
  res.json(result.json);
}))*/
