
let fakerator = require('fakerator')();
let humanNames = require('human-names');
let lastNames = require('common-last-names');

class Employee extends BaseStructure {
  data = [];

  constructor(hospital, data={}) {
    super();
    this.id = ++index.employee;
    this.data = [
      this.id,
      humanNames.allRandom(),
      lastNames.random(),
      `${fakerator.address.street()}, ${fakerator.address.city()}, ${fakerator.address.postCode().split('-')[0]}`,
      data.salary ?? 0.0,
      data.hourly ?? 0.0,
      DEFAULT,
    ];

    this.import(EMPLOYEES);
  }


}

class Physician extends BaseStructure {
  data = [];

  constructor(dept) {
    super();
    let hospital = dept.hospital;
    this.id = ++index.physician;
    this.employee = new Employee();
    let universityDegree = 'Doctorate in bla bla bla';
    this.data = [
      this.id,
      this.employee.id,
      dept ? dept.id : hospital.departments[0].id,
      universityDegree,
      Math.random() > 0.5 ? 1 : 0,
      DEFAULT,
      DEFAULT,
    ];

    this.import(PHYSICIANS);
  }

}

class Nurse extends BaseStructure {
  data = [];

  constructor(dept) {
    super();
    let hospital = dept.hospital;
    this.id = ++index.nurse;
    this.employee = new Employee();
    this.data = [
      this.id,
      this.employee.id,
      dept ? dept.id : hospital.departments[0].id,
      Math.random() > 0.5 ? 1 : 0,
      DEFAULT,
      DEFAULT,
    ];

    this.import(NURSES);
  }

}

module.exports = {
  Employee,
  Physician,
  Nurse,
};
