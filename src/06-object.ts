// object type annotation
let user: { name: string; age: number; email: string } = {
    name: "John",
    age: 30,
    email: "john@example.com",
};

// Interface untuk object
interface Employed {
    id: number;
    name: string;
    departement: string;
    readonly salary: number; // readonly property
    contoct?: string; // optional property
}

//Implementasi interface
interface Employee {
    id: 1;
    name: "Jane Doe";
    department: "IT";
    salary: 5000,
    contact: "Phone-number";
  }
  
  interface Company {
    name: string;
    address: {
      street: string;
      city: string;
      country: string;
      employees: Employee[];
    };
  }
  
  let employee: Employee = {
    id: 1,
    name: "Jane Doe",
    department: "IT",
    salary: 5000,
    contact: "phone-number",
  };
  
  // Nested objects
  interface Company {
    name: string;
    address: string: {
        street: string;
        city: string;
        country: string;
    };
    employee: employee[];
  }
  let company: Company = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Tech City",
      country: "Techland",
    },
      employees: [employee],  // Fixed: employee reference and missing curly braces
    
  };
  console.log("user : ", user);
  console.log("Employee : ", employee);
  console.log("Company : ", company);
  
  export {};
  
