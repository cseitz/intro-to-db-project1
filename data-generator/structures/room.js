
let equipments = [
  'Ventilator',
  'Ventilator',
  'Ventilator',
  'Ventilator',
  'Ventilator',
  'Ventilator',
  'Television',
  'Television',
  'Television',
  'Television',
  'Window',
  'Window',
  'Window',
  'Window',
  'Quarantine',
  '',
  '',
];

const sortAlphaNum = (a, b) => a.localeCompare(b, 'en', { numeric: true })

class Room extends BaseStructure {
  data = [];
  departments = [];
  employees = [];


  constructor(hospital, id, dept) {
    super();
    this.id = id;
    let equips = rand(equipments, Math.random() * equipments.length * 0.5);
    this.data = [
      id,
      dept ? dept.id : hospital.departments[0].id,
      hospital.id,
      NULL,
      (Math.random() >= 0.95 ? ["Surgical", "Sanitized"] : ["Bed", ...(equips.filter((o, indx) => o.length && equips.indexOf(o) == indx))]).sort(sortAlphaNum).join(','),
      1,
    ];
    //this.id = ++index.room;


    this.import(ROOMS);
  }


}

module.exports = Room;
