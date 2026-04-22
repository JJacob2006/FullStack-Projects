const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let employees = [];

if (fs.existsSync("data.json")) {
    employees = JSON.parse(fs.readFileSync("data.json"));
}

function saveData() {
    fs.writeFileSync("data.json", JSON.stringify(employees, null, 2));
}

function menu() {
    console.log("\nEmployee Management System");
    console.log("1. Add Employee");
    console.log("2. List Employees");
    console.log("3. Update Employee");
    console.log("4. Delete Employee");
    console.log("5. Exit");

    rl.question("Select an option: ", handleMenu);
}

function handleMenu(option) {
    switch (option) {
        case "1":
            addEmployee();
            break;
        case "2":
            listEmployees();
            break;
        case "3":
            updateEmployee();
            break;
        case "4":
            deleteEmployee();
            break;
        case "5":
            console.log("Exiting...");
            rl.close();
            break;
        default:
            console.log("Invalid option");
            menu();
    }
}

function addEmployee() {
    rl.question("Employee Name: ", name => {
        if (!name.trim()) return menu();

        rl.question("Position: ", position => {
            if (!position.trim()) return menu();

            rl.question("Salary: ", salary => {
                if (isNaN(salary) || salary <= 0) {
                    console.log("Invalid salary");
                    return menu();
                }

                const emp = {
                    id: Date.now(),
                    name,
                    position,
                    salary: Number(salary)
                };

                employees.push(emp);
                saveData();

                console.log("Employee added successfully!");
                menu();
            });
        });
    });
}

function listEmployees() {
    console.log("\nEmployee List:");

    if (employees.length === 0) {
        console.log("No employees found");
    } else {
        employees.forEach(emp => {
            console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: $${emp.salary}`);
        });
    }

    console.log("Total employees:", employees.length);
    menu();
}

function updateEmployee() {
    rl.question("Enter ID to update: ", id => {
        const emp = employees.find(e => e.id == id);

        if (!emp) {
            console.log("Employee not found");
            return menu();
        }

        rl.question("New Name: ", name => {
            rl.question("New Position: ", position => {
                rl.question("New Salary: ", salary => {

                    if (name.trim()) emp.name = name;
                    if (position.trim()) emp.position = position;
                    if (!isNaN(salary) && salary > 0) emp.salary = Number(salary);

                    saveData();
                    console.log("Employee updated successfully!");
                    menu();
                });
            });
        });
    });
}

function deleteEmployee() {
    rl.question("Enter ID to delete: ", id => {
        const initialLength = employees.length;
        employees = employees.filter(e => e.id != id);

        if (employees.length === initialLength) {
            console.log("Employee not found");
        } else {
            saveData();
            console.log("Employee deleted successfully!");
        }

        menu();
    });
}

menu();