import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var now = new Date();
    var diff = Math.abs(now.getTime() - value.getTime());
    var diffDays = Math.ceil(​diff / (1000 * 3600 * 24));
    return diffDays;
  }
}
