global.DEFAULT = 'DEFAULT',
global.NULL = 'NULL',

global.HOSPITALS = {
  table: 'hospitals',
  keys: [
    'hospital_id',
    'name',
    'address',
    'capabilities',
  ],
  data: [],

};

global.DEPARTMENTS = {
  table: 'departments',
  keys: [
    'department_id',
    'hospital_id',
    'name',
    'capabilities',
  ],
  data: [],

};

global.PATIENTS = {
  table: 'patients',
  keys: [
    'patient_id',
    'physician_id',
    'room_id',
    'first_name',
    'last_name',
    'address',
    'medication',
    'conditions',
    'insurance',
    'status',
  ],
  data: [],

};

global.RECORDS = {
  table: 'records',
  keys: [
    'record_id',
    'patient_id',
    'timestamp',
    'entity',
    'title',
    'description',
    'info',
    'attachments',

  ],
  data: [],

};

global.ROOMS = {
  table: 'rooms',
  keys: [
    'room_id',
    'department_id',
    'hospital_id',
    'nurse_id',
    'equipment',
    'available',

  ],
  data: [],

};

global.EMPLOYEES = {
  table: 'employees',
  keys: [
    'employee_id',
    'first_name',
    'last_name',
    'address',
    'salary',
    'hourly',
    'info',

  ],
  data: [],

};

global.PHYSICIANS = {
  table: 'physicians',
  keys: [
    'physician_id',
    'employee_id',
    'department_id',
    'education',
    'available',
    'status',
    'info',

  ],
  data: [],

};

global.NURSES = {
  table: 'nurses',
  keys: [
    'nurse_id',
    'employee_id',
    'department_id',
    'available',
    'status',
    'info',

  ],
  data: [],

};
