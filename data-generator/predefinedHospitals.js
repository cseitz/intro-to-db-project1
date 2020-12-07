let fakerator = require('fakerator')();

global.predefinedHospitals = [];


let tables = [
  [
    '',
    '',
    '',
    ''
  ]
];

global.rand = function(tbl, count=false) {
  if (count == false) {
    return tbl[Math.floor(Math.random() * tbl.length)];
  } else {
    return [...tbl].sort(() => 0.5 - Math.random()).slice(0, count);
  }
}

let randomHospitalType = function() {
  let cityName = fakerator.address.city();
  let hospitalString = [rand([
    cityName,
    cityName,
    cityName + ' General',
    cityName + ' General',
    cityName + ' City',
    cityName + ' City',
    cityName + ' Community',
    cityName + ' Community',
    cityName + ' Regional',
    cityName + ' Regional',
    cityName + ' County',
    cityName + ' County',
    fakerator.names.name() + "'s Memorial",
  ]), ...tables.map(o => {
    return rand(o);
  }), rand([
    'Hospital',
    'Hospital',
    'Hospital',
    'Veterans Hospital',
    "Children's Hospital",
    'Medical Center',
    'Medical Center',
    //'Rehabilitation Center',
    'Theraphy Center',

  ])].join(' ').trim()
  .split('  ').join(' ')
  .split('  ').join(' ')
  .split('  ').join(' ');
  return {
    cityName,
    hospitalString,
  }
}

for (let i = 0; i < 20; i++) {
  let { cityName, hospitalString } = randomHospitalType();
  predefinedHospitals.push([
    hospitalString,
    `${fakerator.address.buildingNumber()} ${fakerator.address.streetName()}, ${cityName}, ${fakerator.address.postCode().split('-')[0]}`
  ])
}

console.table(predefinedHospitals)
/*require('fs').writeFileSync(__dirname + '/stuff.txt', predefinedHospitals.map(o => o.join('                   ')).join(`
`))*/
