function mysql_real_escape_string (str) {
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
};

let calculateParams = function({ select, where }) {
  let limit = false;
  if (where.limit != undefined) {
    limit = Number(where.limit);
    delete where.limit;
  }
  let selectString = select ? select : '*';
  let args = [];
  let whereString = where && Object.values(where).length > 0 ? 'WHERE ' + Object.keys(where).filter(o => o).map(o => {
    if (where[o].substr(0, 5) == 'like:') {
      args.push(where[o].substr(5));
      return mysql_real_escape_string(o) + ' LIKE ?';
    } else {
      args.push(where[o]);
      return mysql_real_escape_string(o) + ' = ?';
    }
  }).join(' AND ') : '';
  let params = [
    `SELECT ${selectString} FROM hospitals ${whereString} ${limit != undefined ? 'LIMIT ' + limit : ''}`.trim(),
    args.map(o => isNaN(Number(o)) ? o : Number(o))
  ];
  return params;
}


exports.hospitals = {
  async get({ select, where }) {
    let params = calculateParams({ select, where });
    let { results, fields } = await db.query(...params);
    return { success: true, response: {
      results,
      //fields
    } };
  },
  employees: {
    async get({ select, where }) {
      //await db.query('SELECT * FROM employees WHERE (SELECT hospital_id FROM departments WHERE department_id=employee.department_id)')
    },
  },
}
