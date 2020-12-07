
let commonDepartmentTypes = [
  "General Care",
  "Emergency/Trauma",
  "Pharmacy",
];
let uncommonDepartmentTypes = [
  "Pediatrics",
  "Cardiology",
  "Minimally Invasive Surgery",
  "Urgent Care",
  "Rehabilitation",
  "Imaging/Radiology",
  "Women's Health",
  "Wound Care",
  "Senior Living",
  "Sleep Studies",
  "Behavioral Health",
  "Hospice",
  "Cancer Care",
  "Pain Management",
  "Physician Referral Service"
];

/*function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}*/

let calculateTier = function(hospital) {
  let splt = hospital.data[1].split(' ');
  //splt = [...splt];
  let name = Object.fromEntries(splt.map(o => [o, o]));
  let tier = 2;
  if ('City' in name) {
    tier++;
  }
  if ('Therapy' in name || 'Rehabilitation' in name) {
    tier *= 0.25;
  }
  if ('County' in name) {
    tier *= 0.25;
  }
  if ('Center' in name) {
    tier += 2;
  }
  if ('General' in name) {
    tier++;
  }
  tier = Math.floor(tier);
  return tier;
}
global.calculateHospitalTier = calculateTier;

global.departmentGenerator = function(hospital=false, common=false) {
  let tier = calculateTier(hospital);
  let deptList = [];
  if (common) {
    deptList = [commonDepartmentTypes[0], ...commonDepartmentTypes.slice(1, tier-1)];
    //console.log(hospital.data[1], ' => ', deptList);
  } else {
    let numDepts = Math.max(0, Math.floor((Math.random() * (tier-1)) / 1.25 + (tier - 1)));
    deptList = numDepts > 0 ? rand(uncommonDepartmentTypes, numDepts) : [];
    //console.log(hospital.data[1], `(${tier})`, ' => ', numDepts, deptList)
  }
  for (let x of deptList) {
    let tbl = hospital.data[3].split(',');
    tbl.push(x);
    hospital.data[3] = tbl.filter(o => o.length).join(',');
    new Department(hospital, `${hospital.data[1]} ${x}`, x)
  }
}


class Department extends BaseStructure {
  data = [];
  physicians = [];
  nurses = [];


  constructor(hospital, name, capabilities) {
    super();
    this.hospital = hospital;
    this.id = ++index.department;
    this.data.push(this.id);
    this.data.push(hospital.id);
    //this.data = [...this.data, ...predefinedHospitals[this.id - 1], 'blabla'];
    this.data.push(name);
    this.data.push(capabilities);

    hospital.departments.push(this);

    for (let i = 0; i < Math.random() * this.hospital.hospitalSize * 1; i++) {
      this.physicians.push(new Physician(this))
    }
    for (let i = 0; i < Math.random() * this.hospital.hospitalSize * 10; i++) {
      this.nurses.push(new Nurse(this))
    }

    this.import(DEPARTMENTS);
  }


}

module.exports = Department;
