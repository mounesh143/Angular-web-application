import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterSearch'
})
export class SearchPipe implements PipeTransform {

  transform(events: any, search:any): any {
  
    if(search === undefined){
    return events;
    }
    else{
      return events.filter(
        function(x){
        
          return x.name.toLowerCase().includes(search.toLowerCase());
         
        }
      )
    }
  }

}
