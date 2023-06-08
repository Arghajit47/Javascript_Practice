var newDate = new Date()            //It's a snapshot of that date & time
newDate

//  Getting parts of dates

var newDate = new Date()
newDate.getDate()
newDate.getMonth()          // Starts with 0 as January
newDate.getDay()
newDate.getHours()          // 24 Hours Format
newDate.getTime()           // Number of milliseconds from 1970, 1st jan

var today = (newDate.getMonth()+1) + "/" + newDate.getDate() + "/" + newDate.getFullYear()

var newDate = new Date()
var todayTime = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds() + ":" + newDate.getMilliseconds()

//  Setting new Dates

var newDate = new Date()
newDate.setFullYear(1999)
newDate.setMonth(10)
newDate.setDate(19)

newDate.setHours(0, 10, 17)
newDate.setTime()               // manipulating the getTime

