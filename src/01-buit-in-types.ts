let age: number = 25;
let name: string = "John Doe";
let is_active: boolean = true;
let not_found: null = null;
let not_defined: undefined = undefined;
let anything: any = "Grace Eunice";
anything = 30;

// Type inference (Typescript akan menebak tipe data secara otomatis)
let salary = 5000 // Typescript akan menganggap variabili ini sebagai number
let message = "Hello "; // menganggap ini sebagai string

function long_message(): void{
    console.log("ini adalah fungsi void");
}

console.log("Age: ", age);
console.log("Name: ", name);
console.log("Is Active: ", is_active);

export {};
