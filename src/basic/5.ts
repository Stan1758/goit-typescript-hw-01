//* JS

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
// const isWeekend = (day) => {};

//* TS

// Повертає true (субота, неділя) решта - false
const isWeekend (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
