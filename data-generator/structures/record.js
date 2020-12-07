
let fakerator = require('fakerator')();

let personTitles = (() => {
  let meds = medications.filter(o => o.length);
  let conds = conditions.filter(o => o.length);
  return [
    ['Prescribed Medication', 'Perscribed ' + rand(meds)],
    ['Unpescribed Medication', 'Unperscribed ' + rand(meds)],
    ['Diagnosed Condition', 'Diagnosed with ' + rand(conds)],
  ];
});

let hospitalTitles = (() => { return [
  ['Checked In', 'Checked into Hospital Room ' + Math.floor(Math.random() * 300)],
  ['Checked Out', "Checked out of Hospital"],
  ['Scheduled Appointment', "Scheduled Appointment for " + rand(rand(HOSPITALS.data)[3].split(','))],
  ['Rescheduled Appointment', "Recheduled Appointment for " + rand(rand(HOSPITALS.data)[3].split(','))],
  ['Attended Appointment', "Attended Appointment for " + rand(rand(HOSPITALS.data)[3].split(','))],
]; });

class Record extends BaseStructure {
  data = [];


  constructor(patient) {
    super();
    this.id = ++index.record;
    let isPerson = Math.random() > 0.5;
    let entity = (isPerson ? `Dr. ${fakerator.names.firstName()} ${fakerator.names.lastName()}` : rand(HOSPITALS.data)[1]);
    let title = isPerson ? rand(personTitles()) : rand(hospitalTitles());
    let desc = title[1];
    title = title[0];

    this.data = [
      this.id,
      patient.id,
      DEFAULT,
      entity,
      title,
      desc,
      DEFAULT,
      NULL,
    ];


    this.import(RECORDS);
  }


}

module.exports = Record;
