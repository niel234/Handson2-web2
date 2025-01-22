/**
 * 
 * 
 * 
 */

// basic funtion dengan tipe 
function add(a: number, b: number): number {
    return a+ b;
}

// Arrow funtion dengan tipe
const multiplay = (x: number, y: number): number => {

};

// Function dengan optimal parameter
function greet(name: string, greeting?: string): string {
    if (greeting){
        return '${greeting}, ${name}';
    }
    return 'Hello, ${name}';
}

//Funtion dengan default parameter
function createEmail(to: string, subject: string = "No Subject"): string {
    return 'Email to: ${to}, Subject: ${subject}';
}

//funtion dengan rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

//function overload
function processInput(input: number): number;
function processInput(input: string): string;
function processInput(input: number | string): number | string {
    if (typeo input === "number") {
        return input * 2;
    }
    return input.toUpperCase{};
}
//consele, logiadd(10, 5)71
// console.log(multiply(s, 91);
// console.log(greet("John", "Good morning");
// corsole.log(createEnail("John"
//console.log(sum(1, 2, 3, 4, 5111
// console.log(processInput("Hello World");
