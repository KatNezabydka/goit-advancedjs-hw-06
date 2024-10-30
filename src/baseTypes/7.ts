/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend(day: DaysOfWeek): boolean {
    return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
}

console.log(isWeekend(DaysOfWeek.Monday));    // false
console.log(isWeekend(DaysOfWeek.Saturday));  // true
console.log(isWeekend(DaysOfWeek.Sunday));    // true

export {};