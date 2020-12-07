

global.index = {
  hospital: 0,
  department: 0,
  patient: 0,
  room: 0,
  employee: 0,
  physician: 0,
  nurse: 0,
  records: 0,
}

class BaseStructure {
  import(struct) {
    struct.data.push(this.data);
  }

  export() {

  }
}

global.BaseStructure = BaseStructure;

global.Hospital = require('./hospital.js');
global.Department = require('./department.js');
global.Room = require('./room.js');
global.Patient = require('./patient.js');
global.Record = require('./record.js');
Object.assign(global, require('./employee.js'));
