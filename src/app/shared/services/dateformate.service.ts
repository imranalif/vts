import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateformateService {

  constructor() { }

  dateTime (displayOPT='datetime') {
    let dateObj = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + dateObj.getDate()).slice(-2);
    // current month
    let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    // current year
    let year = dateObj.getFullYear();
    // current hours
    let hours = ("0" + dateObj.getHours()).slice(-2);
    // current minutes
    let minutes = ("0" + dateObj.getMinutes()).slice(-2);
    // current seconds
    let seconds = ("0" + dateObj.getSeconds()).slice(-2);
    if(displayOPT == 'date') {
            // prints date in YYYY-MM-DD format
            //console.log(year + "-" + month + "-" + date);
            return year + "-" + month + "-" + date;
    } else if(displayOPT == 'datetime') {
            // prints date & time in YYYY-MM-DD HH:MM:SS format
            let datetime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
            //console.log(datetime);
            return datetime;
    } else if(displayOPT == 'time') {
            // prints time in HH:MM format
            //console.log(hours + ":" + minutes);
            return hours + ":" + minutes;
    } else {
            //console.log(dateObj);
            return dateObj;
    }
}
dateTimeDiff (paramTime) {
    const durationMillSec = new Date().getTime() - new Date(paramTime).getTime();
    return durationMillSec / 1000;
}
}
