import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true,
  pure: true,
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value){
      return value
            .split(' ')
            .map(word => word[0].toUpperCase()+word.slice(1).toLowerCase())
            .join(' ');
    }
    return null;
  }

}
