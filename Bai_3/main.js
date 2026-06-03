let input_month = +prompt("Input a random month: ");
let input_year = +prompt("Input a random year: ");

function check_valid_input(input_month, input_year) {
  if (
    Number(input_month) === input_month &&
    input_month >= 1 &&
    input_month <= 12 &&
    Number(input_year) === input_year
  ) {
    return true;
  }
  return false;
}

function check_leap_year(input_year) {
  if (
    (input_year % 4 == 0 && input_year % 100 != 0) ||
    (input_year % 100 == 0 && input_year % 400 == 0)
  ) {
    return true;
  }
  return false;
}

function check_quantity_days(input_month) {
  switch (input_month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      alert("31");
      break;
    default:
      alert("30");
      break;
  }
}

function check_day_in_month(input_month, input_year) {
  if (check_leap_year(input_year) == true) {
    if (input_month == 2) {
      alert("29");
    } else {
      check_quantity_days(input_month);
    }
  } else {
    if (input_month == 2) {
      alert("28");
    } else {
      check_quantity_days(input_month);
    }
  }
}

if (check_valid_input(input_month, input_year) == true) {
  check_day_in_month(input_month, input_year);
} else {
  alert("Invalid input !!!");
}
