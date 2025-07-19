// Basic Method
function calculateWeeklySalary(employee) {
    var payment = employee.hourlyRate * employee.hoursWorked;
    if (employee.workType === "full-time" && employee.hoursWorked > 24) {
        var overTimeHours = employee.hoursWorked - 24;
        payment += overTimeHours * employee.hourlyRate * 0.5;
    }
    return payment;
}
var John = {
    workType: "full-time",
    hourlyRate: 5,
    hoursWorked: 16,
};
var Maryann = {
    workType: "part-time",
    hourlyRate: 3,
    hoursWorked: 7,
};
console.log(calculateWeeklySalary(John));
console.log(calculateWeeklySalary(Maryann));
