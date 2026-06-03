let array = [];
let count = 0;
let sum = 0;
let result = 0;

for (let i = 0; i < 50; i++) {
  array.push(i);
}

for (let i = 0; i < array.length; i++) {
  if (array[i] % 3 == 0) {
    sum += array[i];
    count++;
  }
}

result = sum / count;
console.log(`Gia tri trung binh cong la: ${result}`);
