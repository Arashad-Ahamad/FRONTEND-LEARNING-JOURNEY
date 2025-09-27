// -------------------------
// new Date()
// -------------------------

// Example 1: Creates a new Date object with current date & time (Local by default)
// Local time by default follows your system's timezone
const a = new Date()
console.log(a)

// Example 2: Current date & time in UTC (Converted)
// .toUTCString()
// Converts the local date & time into "UTC format" and returns a string
// Means: whatever time your system shows locally, it will be converted and shown in Universal Time Coordinated (UTC)
const b = new Date()
console.log(b.toUTCString())

// -------------------------
// Date.now()
// -------------------------

// Example 3: Current timestamp in milliseconds since Unix Epoch (1 Jan 1970, 00:00:00 UTC)
// This always gives UTC based timestamp in milliseconds (Unix time in milliseconds)
console.log(Date.now())

// Example 4: Converts milliseconds from Date.now() to seconds
// Date.now() gives milliseconds, we converted it into seconds
console.log(Math.floor(Date.now() / 1000))

// Example 5: Creates a new Date object using current timestamp → shows local date & time
// Date.now() returns UTC timestamp (milliseconds)
// Passing it into new Date(timestamp) converts it into local date & time object
const c = new Date(Date.now())
console.log(c)

// -------------------------
// .getTime()
// -------------------------

// Example 6: Get only the timestamp (milliseconds since Unix Epoch)
// Explanation:
// new Date() creates a date object that stores your system's "current date & time".
// .getTime() always returns a number.
// That number is the total milliseconds passed since "1 Jan 1970, 00:00:00 UTC".
// That's why it is called a "UTC based timestamp".
// It always works in UTC, local timezone does not affect it.
const d = new Date()
const millis = d.getTime()
console.log(millis) // UTC milliseconds since 1 Jan 1970

// Example 7: Difference between showing Date object vs getTime()
// new Date() → shows local date & time (based on system/browser timezone)
// .getTime() → converts the same date into milliseconds (UTC based timestamp)
const now = new Date()
console.log(now) // Local date & time (depends on system/browser timezone)
console.log(now.getTime()) // UTC based timestamp in milliseconds since 1 Jan 1970
// Returns a single number (epoch time)
// This number is universal across all timezones

// -------------------------
// Time Conversion Basics
// -------------------------
// 1 second = 1000 milliseconds
// 1 minute = 60 seconds
// 1 hour   = 60 minutes
// 1 day    = 24 hours
// 1 year   = 365 days

// Example 8: Seconds → Milliseconds
const seconds = 5
const ms = seconds * 1000
console.log(ms)

// Example 9: Milliseconds → Seconds
const milliseconds = 5000
const sec = milliseconds / 1000
console.log(sec)

// Example 10: Convert 1 Year into Seconds
// Formula: 365 days × 24 hours × 60 minutes × 60 seconds
const secondsInYear = 365 * 24 * 60 * 60
console.log(`1 Year = ${secondsInYear} seconds`)

// Example 11: Convert 1 Year into Milliseconds
// Formula: 365 days × 24 hours × 60 minutes × 60 seconds × 1000
const millisInYear = 365 * 24 * 60 * 60 * 1000
console.log(`1 Year = ${millisInYear} milliseconds`)

// -------------------------
// Question 1: Convert Current Epoch Time into Years
// -------------------------

// Current epoch time in milliseconds (since 1 Jan 1970 UTC)
const currentEpochMs = Date.now()

// Milliseconds in 1 year (365 days)
const oneYearMs = 365 * 24 * 60 * 60 * 1000

// Convert milliseconds → years
// Calculates how many years have passed since Jan 1, 1970 (approx, leap years not counted)
const yearsSinceEpoch = currentEpochMs / oneYearMs
console.log('Current Epoch Time (ms):', currentEpochMs)
console.log('Years since Jan 1, 1970:', yearsSinceEpoch)

// -------------------------
// Question 2: Milliseconds since 1970
// -------------------------
// Date.now() always returns total milliseconds since 1 Jan 1970 UTC
let totalMillisecondsSince1970 = Date.now()
console.log('Milliseconds since 1970:', totalMillisecondsSince1970)

// -------------------------
// Question 3: Seconds since 1970
// -------------------------
// 1 second = 1000 milliseconds
// Divide totalMilliseconds by 1000 to get seconds
let totalSecondsSince1970 = Math.floor(Date.now() / 1000)
console.log('Seconds since 1970:', totalSecondsSince1970)

// -------------------------
// Question 4: Minutes since 1970
// -------------------------
// 1 minute = 60 seconds = 60 × 1000 milliseconds
// Divide totalMilliseconds by (1000 × 60) to get minutes
let totalMinutesSince1970 = Math.floor(Date.now() / (1000 * 60))
console.log('Minutes since 1970:', totalMinutesSince1970)

// -------------------------
// Question 5: Hours since 1970
// -------------------------
// 1 hour = 60 minutes = 60 × 60 × 1000 milliseconds
// Divide totalMilliseconds by (1000 × 60 × 60) to get hours
let totalHoursSince1970 = Math.floor(Date.now() / (1000 * 60 * 60))
console.log('Hours since 1970:', totalHoursSince1970)

// -------------------------
// Question 6: Days since 1970
// -------------------------
// 1 day = 24 hours = 24 × 60 × 60 × 1000 milliseconds
// Divide totalMilliseconds by (1000 × 60 × 60 × 24) to get days
let totalDaysSince1970 = Math.floor(Date.now() / (1000 * 60 * 60 * 24))
console.log('Days since 1970:', totalDaysSince1970)

// -------------------------
// Question 7: Years since 1970 (approx, leap years ignored)
// -------------------------
// 1 year = 365 days = 365 × 24 × 60 × 60 × 1000 milliseconds
// Divide totalMilliseconds by (1000 × 60 × 60 × 24 × 365) to get years
let totalYearsSince1970 = Math.floor(Date.now() / (1000 * 60 * 60 * 24 * 365))
console.log('Years since 1970:', totalYearsSince1970)

// -------------------------
// new Date()
// -------------------------

// Creates a new Date object with current date & time
// By default, it shows Local time according to your system's timezone

// Example 12: Current date & time
const e = new Date()
console.log(e)

// Example 13: Specific date from string
const f = new Date('2025-01-20')
const g = new Date('2 May, 2025 10:30:00')
console.log(f)
console.log(g)

// Example 14: Using year, month, day, hours, minutes, seconds
// Note: Month is 0-based (Jan = 0, Dec = 11)

// Year, Month, Day, Hour, Minute, Second
const h = new Date(2025, 5, 1, 8, 30, 50)
console.log(h)

// Year, Month, Day
const i = new Date(2024, 0, 12)
console.log(i)

// Year, Month, Day, Hour, Minute
const j = new Date(2023, 11, 3, 6, 30)
console.log(j)

// Year, Month, Day, Hour, Minute, Second, Milliseconds
const k = new Date(2022, 3, 25, 1, 40, 10, 3000)
console.log(k)

// -------------------------
// Example 15: Epoch Time (ms since 1 Jan 1970 UTC)
// -------------------------

// Epoch start (0 ms = 1 Jan 1970, 00:00:00 UTC)
const date1 = new Date(0)
console.log(date1)

// 1 second after epoch
const date2 = new Date(1000)
console.log(date2)

// 1 minute after epoch
const date3 = new Date(60 * 1000)
console.log(date3)

// 1 day after epoch
const date4 = new Date(24 * 60 * 60 * 1000)
console.log(date4)

// Negative milliseconds → before epoch
const date5 = new Date(-86400000)
console.log(date5)

// -----------------------------
// Date Get Methods (Local Time)
// -----------------------------

// Example 16: getFullYear() → returns the year (local)
const yearDate = new Date()
const currentYear = yearDate.getFullYear()
console.log('Current Year (Local):', currentYear)

// Example 17: getMonth() → returns month index (0–11) (local)
const monthDate = new Date()
const currentMonthIndex = monthDate.getMonth()
console.log('Month Index (Local):', currentMonthIndex)

// Human readable month (1–12)
console.log('Month (1–12):', currentMonthIndex + 1)

// Example 18: getDate() → returns the day of the month (1–31) (local)
const dateDate = new Date()
const currentDayOfMonth = dateDate.getDate()
console.log('Day of Month (Local):', currentDayOfMonth)

// Example 19: getDay() → returns the day of the week (0=Sunday, 6=Saturday) (local)
const dayDate = new Date()
const currentDayOfWeek = dayDate.getDay()
console.log('Day of Week (Local):', currentDayOfWeek)

// Example 20: getHours() → returns hours (0–23) (local)
const hoursDate = new Date()
const currentHour = hoursDate.getHours()
console.log('Hours (Local):', currentHour)

// Example 21: getMinutes() → returns minutes (0–59) (local)
const minutesDate = new Date()
const currentMinute = minutesDate.getMinutes()
console.log('Minutes (Local):', currentMinute)

// Example 22: getSeconds() → returns seconds (0–59) (local)
const secondsDate = new Date()
const currentSecond = secondsDate.getSeconds()
console.log('Seconds (Local):', currentSecond)

// Example 23: getMilliseconds() → returns milliseconds (0–999) (local)
const millisecondsDate = new Date()
const currentMillisecond = millisecondsDate.getMilliseconds()
console.log('Milliseconds (Local):', currentMillisecond)

// -----------------------------
// Example 24: getTime() → returns timestamp (ms since Jan 1, 1970 UTC)
// -----------------------------
// Returns the total milliseconds elapsed since January 1, 1970 00:00:00 UTC.
// This value is always based on UTC, unaffected by the local timezone.
const timestampDate = new Date()
const currentTimestamp = timestampDate.getTime()
console.log('Timestamp (ms, UTC-based):', currentTimestamp)

// -----------------------------
// Set Methods (Local Time)
// -----------------------------
// Example 25:
// Set → Used to update/change parts of a Date object
const myDate = new Date()
myDate.setFullYear(2030)
myDate.setMonth(11)
myDate.setDate(25)
myDate.setHours(10)
myDate.setMinutes(40)
myDate.setSeconds(50)

console.log('Updated Date:', myDate)

// Example 26: setFullYear(year, month, day) → (Local Time)
const fullYearDate = new Date()
fullYearDate.setFullYear(2028, 5, 15)
console.log('Updated Date (setFullYear):', fullYearDate)

// Example 27: setMonth(month, day) → (Local Time)
const l1 = new Date()
l1.setMonth(3, 6)
console.log('Updated Date (setMonth):', l1)

// Example 28: setDate(day) → (Local Time)
const l2 = new Date()
l2.setDate(25)
console.log('Updated Date (setDate):', l2)

// Example 29:  setHours(hour, min, sec, ms) → (Local Time)
const l3 = new Date()
l3.setHours(15, 30, 45)
console.log('Updated Date (setHours):', l3)

// Example 30: setMinutes(min, sec, ms) → (Local Time)
const l4 = new Date()
l4.setMinutes(30, 48, 300)
console.log('Updated Date (setMinutes):', l4)

// Example 31: setSeconds(sec, ms) → (Local Time)
const l5 = new Date()
l5.setSeconds(50, 500)
console.log('Updated Date (setSeconds):', l5)

// Example 32: setMilliseconds(ms) → (Local Time)
const l6 = new Date()
l6.setMilliseconds(800)
console.log('Updated Date (setMilliseconds):', l6)

// Example 33: setTime(milliseconds)
let l7 = new Date()
l7.setTime(0)
console.log(l7)

// 10 seconds after epoch
l7.setTime(10 * 1000)
console.log(l7)

// 5 minutes after epoch
l7.setTime(5 * 60 * 1000)
console.log(l7)

// 2 hours after epoch
l7.setTime(2 * 60 * 60 * 1000)
console.log(l7)

// -----------------------------
// Date formatting methods
// -----------------------------
// Example 34: toDateString() → (Local Time)
const m1 = new Date()
const m2 = m1.toDateString()
console.log(m2)

// Example 35: toTimeString() → (Local Time)
const m3 = new Date()
const m4 = m3.toTimeString()
console.log(m4)

// Example 36: toString() → (Local Time)
const n = new Date()
console.log(n.toString())

// Example 37: toISOString() → UTC
const m5 = new Date()
const m6 = m5.toISOString()
console.log(m6)

// Example 38: toJSON() → UTC
const now5 = new Date()

console.log('toString():', now5.toString()) // PC system ka local time
console.log('toUTCString():', now5.toUTCString()) // UTC format
console.log('toJSON():', now5.toJSON()) // ISO format (always UTC)

// Example 39: toUTCString() → UTC
const m7 = new Date()
const m8 = m7.toUTCString()
console.log(m8)

// -----------------------------
// Example 40: Current Local ↔ UTC Conversion
// -----------------------------

// Create a new Date object (current date & time, local by default)
const m9 = new Date()

// Local → UTC
// .toUTCString() converts the local date/time to UTC and returns a string
console.log('UTC time:', m9.toUTCString())

// UTC → Local
// .toString() shows the date/time in local timezone
console.log('Local time:', m9.toString())

// -----------------------------
// Local Formatting (Local Time)
// -----------------------------
//  Example 41: toLocaleDateString() →  (Local Time)
const p1 = new Date()
console.log(p1.toLocaleDateString())

//  Example 42: toLocaleTimeString() → (Local Time)
const p2 = new Date()
console.log(p2.toLocaleTimeString())

//  Example 43: toLocaleString() → (Local Time)
const p3 = new Date()
console.log(p3.toLocaleString())

// -----------------------------
// Understanding Timezones in JavaScript (Date & Time Methods)
// -----------------------------
//  Example 44:
let now3 = new Date()

console.log('Local Time:', now3.toString()) // system's local time
console.log('UTC Time:', now3.toUTCString()) // UTC format
console.log('Locale String:', now3.toLocaleString('en-IN')) // India locale format

//  Example 45:
const now4 = new Date()

console.log('Local Time:', now4.toString())
// System's local time zone (IST if you are in India)

console.log('UTC Time:', now4.toUTCString())
// Converted to UTC (Universal Time)

console.log('Locale String (en-IN):', now4.toLocaleString('en-IN'))
// Format: Indian English (DD/MM/YYYY), time zone still system local (IST)

console.log('Locale String (en-US):', now4.toLocaleString('en-US'))
//  Format: US English (MM/DD/YYYY), time zone still system local (IST)

//  Example 46:
const x1 = new Date()
console.log(`India (IST): ${x1.toLocaleString('en-IN')}`)
console.log(`US Format but still IST: ${x1.toLocaleString('en-US')}`)
console.log(
  `Force New York Time: ${x1.toLocaleString('en-US', {
    timeZone: 'America/New_York',
  })} `
)

// Example 47: Options Object
const currentDate = new Date()

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
}

console.log(currentDate.toLocaleString('en-US', options))
console.log(currentDate.toLocaleString('hi-IN', options))

//  Example 48: Options Object
const x2 = new Date()
let options2 = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
  timeZone: 'America/New_York',
}

console.log(x2.toLocaleString('en-US', options2))

// -----------------------------
// Compare Dates
// -----------------------------
//  Example 49:
const d1 = new Date('2025-09-02')
const d2 = new Date('2025-09-01')
console.log(d1 < d2)
console.log(d1 > d2)

//  Example 50: Compare with Current Date
const today = new Date()
const examDate = new Date('2025-12-01')
if (examDate > today) {
  console.log('The exam is in the future')
} else {
  console.log('The exam date has passed')
}
// -----------------------------
// Math with Dates
// -----------------------------
//  Example 51: Calculate Date Difference (Number of Days Between Dates)
const start = new Date('2025-01-01')
const end = new Date('2025-09-02')
const diffTime = end - start // milliseconds
console.log(diffTime)

const diffDays = diffTime / (1000 * 60 * 60 * 24) // ms → days
console.log(`Difference between the two dates: ${diffDays} days`)

//  Example 52:  Convert a Current Date to Milliseconds
const r1 = new Date()
console.log(r1.getTime())

//  Example 53: Find the Difference Between Two Dates
const r2 = new Date('2025-09-01')
const r3 = new Date('2025-09-10')
const diff2 = r3.getTime() - r2.getTime()
console.log(diff2) // difference in milliseconds

// Convert Milliseconds to Days, Hours, Minutes, Seconds
const days2 = diff2 / (1000 * 60 * 60 * 24)
console.log(days2)

//  Example 54: Calculate Age
const birthDate = new Date('2002-01-25')
const today2 = new Date()
const difference = today2.getTime() - birthDate.getTime()
console.log(difference)
const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365))
console.log(age)

// -----------------------------
// Example 55: Countdown
// -----------------------------
const now2 = new Date()
const eventDate = new Date('2025-12-31')

const dff = eventDate - now2
const days = Math.floor(dff / (1000 * 60 * 60 * 24))
console.log(`There are ${days} days left until New Year`)

// ------------------
// static methods
// -----------------
// Example 56:  Date.parse()
console.log(Date.parse('2000-02-04'))
console.log(Date.parse('2000-02-04T12:00:00Z'))
console.log(Date.parse('Feb 4, 2000'))
console.log(Date.parse('04-02-2000'))

// Example 57:  Date.parse()
const ts = Date.parse('2000-02-04')
const d8 = new Date(ts)
console.log(d8.toString())

// Example 58:  Date.UTC()
// UTC milliseconds return karega
const ms8 = Date.UTC(2000, 1, 4)
console.log('Milliseconds:', ms8)

// Milliseconds → Date
const d9 = new Date(ms8)

console.log('UTC Date:', d9.toUTCString())
console.log('Local Date:', d9.toString())
