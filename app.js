//Ticket 1
let employees = ['John', 'Sarah', 'Eric'];

console.log(employees);

//Add a new employee to the end of the array.

employees.push("James");
console.log(employees);

//Remove last employee from array 
employees.pop();
console.log(employees);

//Add new employee to beginning of array
employees.unshift("James");
console.log(employees);

//Remove first employee from the array
employees.shift();
console.log(employees);

//Find index of Sarah 
console.log("index of Sarah is: " + employees.indexOf('Sarah'));



//Ticket 2 

// Filter out salaries below $50000 from array
function  lowSalary(arr){
    return arr <= 50000;
}

let salaries = [35000, 45000, 55000, 70000, 90000];
 console.log(salaries.filter(lowSalary));

 ///Create new array with the square of each salary
function squareSalary(arr){
    return arr*arr;
}
let squareSalaries = [20000, 30000, 40000, 50000];
console.log(squareSalaries.map(squareSalary));

//Find the fist salary that is greater than $60000
let firstSalaries = [45000, 55000, 70000, 90000];
console.log(firstSalaries.find(element => element > 60000));

//Calculate the total sum of all sales made 
let sales = [100, 200, 150, 300, 400];

let sumSales = sales.reduce((sum, currentIndex)=> sum + currentIndex, 0);
console.log(sumSales);

//Loop through the list of departments and log each one to the console.
let departments = ['HR', 'Finance', 'Engineering', 'Marketing'];
departments.forEach(element => console.log(element));

//Ticket 3: Advanced Array Manipulation

//Create a new array that contains the first three items from the original inventory list.
let inventory = ['Laptop', 'Phone', 'Keyboard', 'Monitor', 'Mouse'];

console.log(inventory.slice(0,3));

//Remove two items starting from index 2 in the inventory 
inventory.splice(2,2);
console.log(inventory);

//Add new equipment to the inventory starting at index 3.
let inventory2 = ['Laptop', 'Phone', 'Keyboard', 'Monitor'];
inventory2.splice(3,0,"Tablet");
console.log(inventory2);

//Merge two arrays of office equipment into one.
let officeEquipment1 = ['Printer', 'Scanner', 'Desk'];
let officeEquipment2 = ['Chair', 'Lamp', 'Notebook'];

let officeEquipment3 = officeEquipment1.concat(officeEquipment2);
console.log(officeEquipment3);

//Sort the list of sales amount in descending order
let sales2 = [500, 1000, 750, 2000, 1250];

console.log(sales2.sort((a, b) => b - a));
//Ticket 4: Working with Objects

//Create object that represents employee with properties
let employee = {
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    salary: 80000
};

//Update the position of the employee object.

employee.position = "Developer";
console.log(employee.position);

//Add new property hireDate to the employee object
employee.hireDate = "09/20/2024";

console.log(employee.hireDate);

//Delete the salary property from the employee object.
delete employee.salary;

console.log(employee);

//Loop through the properties of the employee object and log each key-value pair to the console.

employee.salary = 80000;

for(let key in employee){
    console.log(key + " " + employee[key]);
}

//Ticket 5: 
 
//Create an array of objects representing projects with properties: projectName, deadline, and status

let projects = [
    { projectName: 'Project A', deadline: '2024-02-01', status: 'in progress' },
    { projectName: 'Project B', deadline: '2024-01-15', status: 'not started' },
    { projectName: 'Project C', deadline: '2024-03-01', status: 'in progress' }
];

console.log(projects.map(project => project.projectName));

//Filter the array to only include projects that are 'in progress'.

console.log(projects.filter(project => project.status === "in progress"));

//Sort the projects by their deadline in ascending order.

console.log(projects.sort((project1, project2) => new Date(project1.deadline) - new Date(project2.deadline)));
