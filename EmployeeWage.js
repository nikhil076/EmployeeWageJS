const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

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
}
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