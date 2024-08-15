//your JS code here. If required.
function dayOfAYear(year) {
    // Check if it's a leap year
    if(year % 4 == 0) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}
dayOfYear(2022)
dayOfAYear(2024)	
dayOfAYear(1900)	
dayOfAYear(2000)