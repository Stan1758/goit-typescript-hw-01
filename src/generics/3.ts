//* JS

// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }

//* TS
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
