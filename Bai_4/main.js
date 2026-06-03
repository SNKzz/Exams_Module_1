let table_employee_body = document.getElementById("table_employees_tbody");
let array_employees = [];
let queri_add_employee = "";

let employee_1 = new Employee(
  "Truong Van C",
  "11-11-1997",
  "Quang Nam",
  "2000$",
  "Staff",
);

let employee_2 = new Employee(
  "Truong Van A",
  "11-11-1998",
  "Ho Chi Minh",
  "2000$",
  "Staff",
);
let employee_3 = new Employee(
  "Truong Van B",
  "11-11-1999",
  "Ha Noi",
  "2000$",
  "Staff",
);
let employee_4 = new Employee(
  "Nguyen Van A",
  "11-11-2000",
  "Hue",
  "2000$",
  "Staff",
);
let employee_5 = new Employee(
  "Le Thi B",
  "11-11-2001",
  "Da Nang",
  "2000$",
  "Staff",
);
let employee_6 = new Employee(
  "Doan Chi Binh",
  "11-11-2007",
  "Hai Phong",
  "2000$",
  "Staff",
);

let employee_7 = new Employee(
  "Cao Van Binh",
  "11-11-2007",
  "Hai Phong",
  "2000$",
  "Staff",
);

array_employees.push(employee_1);
array_employees.push(employee_2);
array_employees.push(employee_3);
array_employees.push(employee_4);
array_employees.push(employee_5);
array_employees.push(employee_6);
array_employees.push(employee_7);

function get_names_to_sort(array_employees) {
  let array_names_employees = [];
  for (let i = 0; i < array_employees.length; i++) {
    let name_employee = array_employees[i].get_name();
    array_names_employees.push(name_employee);
  }

  array_names_employees.sort(function (a, b) {
    let name_a = a.split(" ").pop().toLowerCase();
    let name_b = b.split(" ").pop().toLowerCase();
    if (name_a != name_b) {
      return name_a.localeCompare(name_b);
    }

    return a.localeCompare(b);
  });

  return array_names_employees;
}

function sort_array_belong_to_name(array_employees) {
  let ordered_array = [];
  let array_names_employees = get_names_to_sort(array_employees);
  for (let i = 0; i < array_names_employees.length; i++) {
    let name_ordered = array_names_employees[i];
    for (let k = 0; k < array_employees.length; k++) {
      let name_checked = array_employees[k].get_name();
      if (name_ordered == name_checked) {
        ordered_array.push(array_employees[k]);
      }
    }
  }

  return ordered_array;
}

function loading_data_into_table(array_employees) {
  let color = "";
  array_employees = sort_array_belong_to_name(array_employees);

  for (let i = 0; i < array_employees.length; i++) {
    if (i % 2 == 0) {
      color = "rgb(208, 240, 229)";
    } else {
      color = "white";
    }
    queri_add_employee += `<tr style="background-color:${color}">
     <td>${i + 1}</td>
     <td>${array_employees[i].get_name()}</td>
     <td>${array_employees[i].get_dob()}</td>
     <td>${array_employees[i].get_address()}</td>
     <td>${array_employees[i].get_salary()}</td>
     <td>${array_employees[i].get_role()}</td>
     </tr>`;
  }
  table_employee_body.innerHTML = queri_add_employee;
}

loading_data_into_table(array_employees);
