
// Create JSON for each employee with the following details
// (first name, department, designation, salary, raise eligible)
//
//     Sam, Tech, Manager, 40000, true
//     Mary, Finance, Trainee, 18500, true
//     Bill, HR, Executive, 21200, false

// Create JSON for the company with the following details (companyName, website, employees)
//     Tech Stars, www.techstars.site, array of Employees
// A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
//     Anna, Tech, Executive, 25600, false
// Given the JSON for the company, calculate the total salary for all company employees.
// It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
// Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
//     Working from home: ['Anna', 'Sam']
//
// In your JavaScript, label each problem using a comment (i.e., // Problem 1). Be sure your JavaScript solution to each problem outputs a final answer into the console -- that's how we'll grade this portion of the assignment.
//
// Push everything to GitHub, and submit a link to the HTML page that holds the JavaScript.

/**
 * Problem 1.
 * Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
 * Sam, Tech, Manager, 40000, true
 * Mary, Finance, Trainee, 18500, true
 * Bill, HR, Executive, 21200, false
 *
 * Print JSON(s) to console.
 **/




/**
 * Problem 2.
 *
 * Create JSON for the company with the following details (companyName, website, employees)
 * Tech Stars, www.techstars.site, array of Employees
 *
 * Print JSON to console.
 **/

let company = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  "employees": [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true,
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true,
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false,
    }
  ]
}

console.log(company);
console.log(company.employees);


/**
 * Problem 3.
 *
 * A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of:
 * Anna, Tech, Executive, 25600, false
 *
 * Write function to add a new employee
 *
 * Print updated JSON to console.
 **/

// Function to add a new employee -- it's built to be changeable (see the function call below)
function addEmployee(company, firstName, department, designation, salary, raiseEligible) {
  let employee = {
    "firstName": firstName,
    "department": department,
    "designation": designation,
    "salary": salary,
    "raiseEligible": raiseEligible
  }

  company['employees'].push(employee); // the push() method adds a value to an object/array.

}

addEmployee(company, "Anna", "Tech", "Executive", 25600, false);
console.log("Problem 3:")
console.log(company);

/**
 * Problem 4.
 *
 * Given the JSON for the company, calculate the total salary for all company employees.
 *
 * Print total salary to console.
 **/

 var salary0 = company.employees['0'].salary;
 var salary1 = company.employees['1'].salary;
 var salary2 = company.employees['2'].salary;
 var salary3 = company.employees['3'].salary;
 var emp0 = company.employees['0'].firstName;
 var emp1 = company.employees['1'].firstName;
 var emp2 = company.employees['2'].firstName;
 var emp3 = company.employees['3'].firstName;
 var allSalaries = salary0 + salary1 + salary2 + salary3

 // console.log(emp0 + "'s salary: " + salary0);
 // console.log(emp1 + "'s salary: " + salary1);
 // console.log(emp2 + "'s salary: " + salary2);
 // console.log(emp3 + "'s salary: " + salary3);
 console.log("Problem 4:")
 console.log("Total Salaries: $" + allSalaries);

 /**
 * Problem 5.
 *
 * It's raise time. If an employee is raise eligible, increase their salary by 10%.
 * Given the JSON of the company and its employees, write a function to update the salary
 * for each employee who is raised eligible, then set their eligibility to false.
 *
 * Print names of employees who got a raise to console, list original and new salary.
 **/

  console.log("Problem 5:")

function updateSalary10 (a) {
  company.employees[a].salary = company.employees[a].salary * 1.1;
  // console.log("test" + a);
  // console.log(company.employees[a].salary)
}


for (i=0; i < 4; i++) {
  if (company.employees[i].raiseEligible===true) {
    console.log(company.employees[i].firstName + "'s original salary: $" + company.employees[i].salary);
    updateSalary10 (i);
    console.log(company.employees[i].firstName  + "'s new salary: $" + company.employees[i].salary);
    company.employees[i].raiseEligible=false;
  }else{
    console.log(company.employees[i].firstName + " did not receive a raise: $" + company.employees[i].salary);
  }
}


// if (company.employees['0'].raiseEligible===true) {
//   console.log(emp0 + "'s original salary: $" + company.employees['0'].salary);
//   updateSalary10 (0);
//   console.log(emp0 + "'s new salary: $" + company.employees['0'].salary);
//   company.employees['0'].raiseEligible=false;
// }else{
//   console.log(emp0 + " did not receive a raise: $" + salary0);
// }


// if (company.employees['1'].raiseEligible===true) {
//   console.log(emp1 + "'s original salary:" + company.employees['1'].salary);
//   updateSalary10 (1);
//   console.log(emp1 + "'s new salary:" + company.employees['1'].salary);
//   company.employees['1'].raiseEligible=false;
// }else{
//   console.log(emp1 + " did not receive a raise:" + salary1);
// }
//
// if (company.employees['2'].raiseEligible===true) {
//   console.log(emp2 + "'s original salary:" + company.employees['2'].salary);
//   updateSalary10 (2);
//   console.log(emp2 + "'s new salary:" + company.employees['2'].salary);
//   company.employees['2'].raiseEligible=false;
// }else{
//   console.log(emp2 + " did not receive a raise:" + salary2);
// }
//
// if (company.employees['3'].raiseEligible===true) {
//   console.log(emp3 + "'s original salary:" + company.employees['3'].salary);
//   updateSalary10 (3);
//   console.log(emp3 + "'s new salary:" + company.employees['3'].salary);
//   company.employees['3'].raiseEligible=false;
// }else{
//   console.log(emp3 + " did not receive a raise:" + salary3);
// }

/**
 * Problem 6.
 *
 * Some employees have decided to work from home. The following array indicates who is working from home.
 * Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true or false
 *
 * Working from home: ['Anna', 'Sam']
 *
 * Print updated JSON to console.
 */

 console.log('Problem 6:')

 for (i=0; i < 4; i++) {
   company.employees[i].wfh = false;
   company.employees[0].wfh = true;
   company.employees[3].wfh = true;
   console.log(company.employees[i].firstName + " Work from home:" + company.employees[i].wfh)
 }
