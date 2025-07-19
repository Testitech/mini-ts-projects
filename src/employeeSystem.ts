// Basic Method

type FullTimeJob = {
  jobType: "full-time";
  hourlyRate: number;
};

type PartTimeJob = {
  jobType: "part-time";
  hourlyRate: number;
};

type BothJobs = FullTimeJob | PartTimeJob;

function getWorkersRate(jobs: BothJobs) {
  if (jobs.jobType === "full-time") {
    return jobs.hourlyRate;
  } else {
    return jobs.hourlyRate;
  }
}

console.log(getWorkersRate);

// Advanced Method

type FullTimeEmployee = {
  workType: "full-time";
  hourlyRate: number;
  hoursWorked: number;
};

type PartTimeEmployee = {
  workType: "part-time";
  hourlyRate: number;
  hoursWorked: number;
};

type Employee = FullTimeEmployee | PartTimeEmployee;

function calculateWeeklySalary(employee: Employee): number {
  let payment = employee.hourlyRate * employee.hoursWorked;

  if (employee.workType === "full-time" && employee.hoursWorked > 24) {
    const overTimeHours = employee.hoursWorked - 24;
    payment += overTimeHours * employee.hourlyRate * 0.5;
  }

  return payment;
}

const John: FullTimeEmployee = {
  workType: "full-time",
  hourlyRate: 5,
  hoursWorked: 16,
};

const Maryann: PartTimeEmployee = {
  workType: "part-time",
  hourlyRate: 3,
  hoursWorked: 7,
};

console.log(calculateWeeklySalary(John));
console.log(calculateWeeklySalary(Maryann));
