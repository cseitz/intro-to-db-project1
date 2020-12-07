
let fakerator = require('fakerator')();
let humanNames = require('human-names');
let lastNames = require('common-last-names');

let medications = [
  'Vicodin',
  'Simvastatin',
  'Liniporil',
  'Liptor',
  'Azithromycin',
  'Amoxicillin',
  'Metformin',

];
global.medications = medications;

let conditions = [
  'Hypertension',
  'Major Depression',
  'High Cholesterol',
  'Coronary Artery Disease',
  'Type 2 Diabetes',
  'Type 1 Diabetes',
  'Substance Abuse Disorder',
  'Alcohol Use Disorder',
  'Chronic Obstructive Pulmonary Disease',
  'Psychotic Disorder',
  "Chron's Disease",
];
global.conditions = conditions;

for (let i = 0; i < medications.length / 3; i++) {
  medications.push('')
}
for (let i = 0; i < conditions.length / 3; i++) {
  conditions.push('')
}

class Patient extends BaseStructure {
  data = [];


  constructor() {
    super();
    this.id = ++index.patient;

    this.data = [
      this.id,
      NULL, // physician
      NULL, // room
      humanNames.allRandom(),
      lastNames.random(),
      `${fakerator.address.street()}, ${fakerator.address.city()}, ${fakerator.address.postCode().split('-')[0]}`,
      (Math.random() >= 0 ? rand(medications, Math.random() * medications.length * 0.5) : []).filter(o => o.length).join(','), // medication
      (Math.random() >= 0.25 ? rand(conditions, Math.random() * conditions.length * 0.25) : []).filter(o => o.length).join(','), // conditions
      DEFAULT, // insurance
      DEFAULT, // status
    ]


    this.import(PATIENTS);
  }

  generateMedicalRecord() {
    return new Record(this);
  }


}

module.exports = Patient;
