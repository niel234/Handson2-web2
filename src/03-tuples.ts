/**
 * Tuple adalah array dengan:
 * 1. Jumlah elemen yang tetap.
 * 2. Tipe data yang sudah ditentukan untuk setiap posisi elemen.
 */

// Deklarasi tuple
let person: [string, number, boolean] = ["Jotin", 30, true];

// Tuple untuk koordinat
let coordinates: [number, number] = [10.5, 20.1];

// Tuple dengan elemen opsional
let optionalTuple: [string, number?] = ["Hello"];
optionalTuple = ["Hello", 20];

// Destructuring tuple
let [name, age, isEmployed] = person;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Employed:", isEmployed);

// Tuple di dalam array
let employees: [string, number][] = [
  ["John", 30],
  ["Jane", 25],
  ["Bob", 35],
];

employees.forEach(([name, age]) => {
  console.log(`${name} is ${age} years old`);
});

export {};
            
