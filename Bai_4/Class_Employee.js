class Employee {
  constructor(name, dob, address, salary, role) {
    this.name = name;
    this.dob = dob;
    this.address = address;
    this.salary = salary;
    this.role = role;
  }

  get_name() {
    return this.name;
  }
  get_dob() {
    return this.dob;
  }
  get_address() {
    return this.address;
  }
  get_salary() {
    return this.salary;
  }

  get_role() {
    return this.role;
  }
}
