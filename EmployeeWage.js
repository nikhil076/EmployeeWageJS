const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;
var empDailyWageMap = new Map();
var empDailyHourMap = new Map();

function getWorkingHours(empCheck)
{
	switch(empCheck)
	{
		case IS_PART_TIME :
			return PART_TIME_HOURS;
		case IS_FULL_TIME :
			return FULL_TIME_HOURS;
		default :
			return 0;
	}
}

function calculateDailyWage(empHrs)
{
	return empHrs * WAGE_PER_HOURS;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array;
while(totalEmpHrs<=MAX_HRS_IN_MONTH  && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
	totalWorkingDays++;
	let empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	totalEmpHrs+= empHrs;
	empDailyWageArray.push(calculateDailyWage(empHrs));
	empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
	empDailyHourMap.set(totalWorkingDays,empHrs);
}
//To get total employee wage using map
console.log(empDailyWageMap);
console.log("Employee wage map total "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));


console.log(empDailyWageArray);
let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Employee Wage is :"+empWage+" Total Hours :"+totalEmpHrs+" total Working days : "+totalWorkingDays);

/**
 * UC7 : Array Helper Functions
 */

let totalEmpWage = 0;
function sum(dailyWage)
{
	return totalEmpWage += dailyWage;
}

//Calculating total wage using array forEach traversal 
empDailyWageArray.forEach(sum);
console.log("UC7(a) Total Days :"+totalWorkingDays + "  Total Hours :" +totalEmpHrs + "  Employee Wage :" + totalEmpWage);

function totalWages(totalWages,dailyWage)
{
	return totalWages + dailyWage;
}

console.log("UC7(a) Employee wage with reduce :" +empDailyWageArray.reduce(totalWages,0));

// Show the day along with Daily Wage using Array Map Helper Function
let dailyCount = 0;
function mapDailyWithWage(dailyWage)
{
	dailyCount++;
	return "( Day "+dailyCount + " = " + dailyWage+")";
}

let mapDailyWithWageArray = empDailyWageArray.map(mapDailyWithWage);
console.log("UC7(b) : Daily Wage Map :"+mapDailyWithWageArray);

//Display Days when Full time Wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArray = mapDailyWithWageArray.filter(fullTimeWage);
console.log("UC7(c) : Daily Wage Filter when Fulltime Wage Earned : " + fullDayWageArray);

//find first occurrence when fullTimeWage was earned using find func

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7(d) : First time Fulltime Wage earned on Day: " 
+ mapDailyWithWageArray.find(findFullTimeWage));

//check if Each Element of Fulltime Wage is Truely holding Full time wage

function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7(e) : Check all element have full Time Wage : " 
+ fullDayWageArray.every(isAllFulltimeWage));

// Check if there is any Part Time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7(f) : Check if Any PartTime Wage : " 
+ mapDailyWithWageArray.some(isAnyPartTimeWage));

// Find the number of days the Employee Worked

function totalDaysWorked(numOfDays, dailyWage) {
    if(dailyWage > 0) 
        return numOfDays+1;
    return numOfDays;
}

console.log("UC7(g) : Number of Days Employee Worked : " 
+ empDailyWageArray.reduce(totalDaysWorked, 0));


// To add part time , full time , no working days of employee in the maps
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHourMap.forEach((values,key) => {
	if(values == 8) fullWorkingDays.push(key);
	else if(values == 4) partWorkingDays.push(key);
	else nonWorkingDays.push(key);
});
console.log(`Full working days: ${fullWorkingDays}`);
console.log(`Part working days: ${partWorkingDays}`);
console.log(`Non working days: ${nonWorkingDays}`);

/**
 * creating object
 */
 {
    let employeeHrs = 0;
    let employeeWorkingDays = 0;
    let employeeDailyHoursAndWageArray = new Array();
    while (employeeHrs <= MAX_HRS_IN_MONTH && employeeWorkingDays < NUM_OF_WORKING_DAYS) {
        employeeWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let employeeWorkingHours = getWorkingHours(empCheck);
        employeeHrs += employeeWorkingDays;
        employeeDailyHoursAndWageArray.push(
            {
                dayCount : employeeWorkingDays,
                dailyHours : employeeWorkingHours,
                dailyWages : calculateDailyWage(employeeWorkingHours),
                toString() {
                    return "\nDay " + this.dayCount + " => Working Hours is: "
                    + this.dailyHours + " , Wage earned = " + this.dailyWages
                },
            }
        );
    }
    console.log("Showing daily hours worked and wage earned: " + employeeDailyHoursAndWageArray);

	//UC 11 Using Arrow Functions
	let totalHours = employeeDailyHoursAndWageArray
					.filter(obj => obj.dailyHours > 0)
					.reduce((totalHours, obj) => totalHours += obj.dailyHours, 0);
	let totalWage = employeeDailyHoursAndWageArray
					.filter(obj => obj.dailyWages > 0)
					.reduce((totalWage,obj) => totalWage += obj.dailyWages,0);
	console.log("\nUC 11.a Calculate total hours and wage using arrow functions");
	console.log("Total Hours: " + totalHours + "   Total Wage: " + totalWage);

	//UC 11.b Show the full working days using foreach

	let fullWorkingDays = employeeDailyHoursAndWageArray.filter(obj => obj.dailyHours == 8).forEach(obj => process.stdout.write(obj.toString()));
	console.log("\nUC 11.b Show the full working days"+fullWorkingDays);

	//UC 11.c Show Part working days using Map by reducing to String Array
	let partWorkingDays = employeeDailyHoursAndWageArray
						.filter(obj => obj.dailyHours == 4)
						.map(obj => obj.toString());
	console.log("UC_11.c Show part time working days");

	//UC 11.d Show No working days using Map by reducing to String Array
	let noWorkingDays = employeeDailyHoursAndWageArray
						.filter(obj => obj.dailyHours == 0)
						.map(obj => obj.toString());
	console.log("UC_11.d Show no working days");
	console.log(noWorkingDays);
}

