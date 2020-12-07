require('../predefinedHospitals.js')

class Hospital extends BaseStructure {
  data = [];
  departments = [];
  employees = [];
  rooms = [];


  constructor() {
    super();
    this.id = ++index.hospital;
    this.data.push(this.id);
    this.data = [...this.data, ...predefinedHospitals[this.id - 1], ''];
    this.hospitalSize = Math.floor(Math.max(1, (calculateHospitalTier(this) * 1.5) - Math.floor(0.5 - Math.random())));

    let floorCount = Math.max(50, (this.hospitalSize / 2) * 125);
    /*if (this.hospitalSize >= 4) {
      floorCount = Math.floor(floorCount / 2);
    }
    floorCount = floorCount + Math.floor(Math.random() * 50);*/
    floorCount = Math.min(100, Math.floor((Math.min(8, (this.hospitalSize + 2)) / 7) * 100)); //Math.floor(Math.ceil(floorCount / 2) * 2) / 10;
    console.log(this.data[1], 'SIZE =', this.hospitalSize)
    console.log('   floor count: ', floorCount)

    departmentGenerator(this, true);
    departmentGenerator(this, false);

    for (let y = 0; y < this.hospitalSize; y++) { // each story
      for (let x = 0; x < floorCount; x++) {
        let x2 = ('0').repeat(2 - String(x).length) + String(x);
        let roomName = `${y}${x2}`
        //console.log(roomName);
        let randDept = rand(this.departments);
        if (Math.random() <= 0.5) {
          randDept = this.departments[0];
        }
        this.rooms.push(new Room(this, roomName, randDept))
      }
    }

    /*for (let i = 0; i < (Math.floor(Math.random() * 3) + 2); i++) {
      this.departments.push(new Department(this))
    }*/


    this.import(HOSPITALS);
  }


}

module.exports = Hospital;
