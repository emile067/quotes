import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let today : Date = new Date();
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(value - todayWithNoTime);
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / 86400;
    return dateCounter;
  }
}
