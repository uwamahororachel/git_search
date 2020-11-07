import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creation'
})
export class CreationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
      
      }
      else
      {
        return 0 ;
      }
    }
  }
