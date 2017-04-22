import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "sortByName"
})
export class ProfessorSortPipe implements PipeTransform {
  transform(array: Array<any>, args: string): Array<any> {
    array.sort((a: any, b: any) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });
    return array;
  }
}
