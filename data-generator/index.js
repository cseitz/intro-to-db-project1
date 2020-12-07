let humanNames = require('human-names');
let lastNames = require('common-last-names');
require('./tables.js')
require('./structures')




let $insert = function(config={}, data, cb) {
  let n = 0;
  data = data.map(o => {
    //let vals = [++n, ...Object.values(o)];
    let vals = Object.values(o);
    let str = `(${JSON.stringify(vals).slice(0, -1).substr(1)})`;
    return str.split(`"${DEFAULT}"`).join(DEFAULT)
    .split(`"${NULL}"`).join(NULL)
  }).join(`,
    `);
  cb(`INSERT INTO ${config.table}(${config.keys.map(o => "" + o + "").join(', ')}) VALUES
    ${
  data
};`);
};


/*$insert(DEPARTMENTS, [
  [1, 'Hospital Urgent Care', 'Primary,Urgent'],
], console.log)

$insert(PATIENTS, [
  [NULL, NULL, humanNames.allRandom(), lastNames.random(), 'some address', NULL, NULL, DEFAULT, DEFAULT],
], console.log)*/


for (let i = 0; i < 10; i++) {
  new Hospital();
}

console.time('patients');
let numPatients = Math.floor((Math.random() * 1500) + 500);
for (let i = 0; i < numPatients; i++) {
  let patient = new Patient();
  if (Math.random() >= 0.5) {
    for (let n = 0; n < ((Math.random() * 2)); n++) {
      patient.generateMedicalRecord();
    }
  }
}
console.log('Generated ' + numPatients, 'Patients')
console.timeEnd('patients')


let exported = [];

for (let x of [
  HOSPITALS,
  DEPARTMENTS,
  ROOMS,
  PATIENTS,
  RECORDS,
  EMPLOYEES,
  PHYSICIANS,
  NURSES,
]) {
  $insert(x, x.data, (data) => {
    exported.push(data);
  })
}

require('fs').writeFileSync(__dirname + '/insert.sql', exported.join(`

`))

require('fs').writeFileSync(__dirname + '/indexes.json', JSON.stringify(index));
