let input_number = +prompt("Input a number > 0: ");

function check_valid_input(input_number) {
  if (Number(input_number) === input_number && input_number > 0) {
    return true;
  }
  return false;
}

function check_perfect_number(input_number) {
  let array_divisor = [];
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(input_number); i++) {
    if (input_number % i == 0) {
      array_divisor.push(i);
      if (input_number / i < input_number) {
        array_divisor.push(input_number / i);
      }
    }
  }

  for (let i = 0; i < array_divisor.length; i++) {
    sum += array_divisor[i];
  }

  if (sum == input_number) {
    alert("TRUE");
  } else {
    alert("FALSE");
  }
}

if (check_valid_input(input_number) == true) {
  check_perfect_number(input_number);
} else {
  alert("Wrong input!!");
}
