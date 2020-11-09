import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var dateToday: any = new Date();
    setInterval(() => {
      dateToday = new Date();
    }, 100);
    var diffMs = (dateToday - value); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    // alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2009 =)");
    return diffMins;
  }
}
