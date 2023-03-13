import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values', pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}
