// Convert Age to Days
// Create a function that takes the age and return the age in days.

// Examples
// calcAge(65) ➞ 23725

// calcAge(0) ➞ 0

// calcAge(20) ➞ 7300
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

const convertYearToDays = (years) => years < 0 ? console.error('only positive integer inputs') :console.log(years * 365); 
        
convertYearToDays(20);