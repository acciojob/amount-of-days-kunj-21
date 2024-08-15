function daysOfAYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return 366; // Leap year
      } else {
        return 365; // Not a leap year
      }
    } else {
      return 366; // Leap year
    }
  } else {
    return 365; // Not a leap year
  }
}

// Examples
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366
