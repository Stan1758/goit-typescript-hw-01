//* JS
// function showMessage(message) {
//   console.log(message);
// }
// function calc(num1, num2) {
//   return num1 + num2;
// }
// function customError() {
//   throw new Error("Error");
// }

//* TS

//* Ця функція нічого не повертає (тип void)
function showMessage(message: string): void {
  console.log(message);
}

//* Тип повернення number
function calc(num1: number, num2: number) {
  return num1 + num2;
}

//* Функція повертає помилку (тип never)
function customError(): never {
  throw new Error("Error");
}
