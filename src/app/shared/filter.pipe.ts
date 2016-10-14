import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

 transform(value: any[],arg?:any) {
    return value.filter(item => item.Title.startsWith(arg));
  }

}
