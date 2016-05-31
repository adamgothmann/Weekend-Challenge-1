
// array declared
var newEmployee = [];

// assigns inputs to variables
var info = function() {
  var firstName = document.getElementById("firstNameIn").value;
  var lastName = document.getElementById("lastNameIn").value;
  var empId = document.getElementById("empNumIn").value;
  var jobTitle = document.getElementById("jobTitleIn").value;
  var salary = document.getElementById("salaryIn").value;

//Object with info of each new employee
var empInfo = {
  "firstName": firstName,
  "lastName": lastName,
  "empId": empId,
  "jobTitle": jobTitle,
  "salary": salary
  };

//adds each new employee to NewEmployee array
newEmployee.push(empInfo);

//clears text from input fields
document.getElementById("firstNameIn").value = '';
document.getElementById("lastNameIn").value = '';
document.getElementById("empNumIn").value = '';
document.getElementById("jobTitleIn").value = '';
document.getElementById("salaryIn").value = '';

console.log(newEmployee);
empList();
salaryDisplay();
};

//displays input results to the DOM
var empList = function() {
  var list = '';
  for(var i = 0; i < newEmployee.length; i++) {
    list += '<p>' + "First name: "  + newEmployee[i].firstName + " | Last Name: " + newEmployee[i].lastName + " | Employee ID #: "+ newEmployee[i].empId + " | Job Title: "+ newEmployee[i].jobTitle + " | Salary: "+ newEmployee[i].salary + '</p>';
    document.getElementById("empDisplay").innerHTML = list;
  }
};

//calculates salary and displays monthy salary
function salaryDisplay() {
  var totalSalary = 0;
  for(var i = 0; i < newEmployee.length; i++) {
    totalSalary += Math.round(parseInt(newEmployee[i].salary)/12);
console.log(totalSalary);
  // var totalSalary = document.getElementById("salaryIn").value;
  // totalSalary += newEmployee.salary;
  document.getElementById("totalSalary").innerHTML = '<p>' + "Total salary: " + totalSalary + '</p>';
  }
}
