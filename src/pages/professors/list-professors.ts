import { Component, Pipe } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProfessorSortPipe } from './professor-sort-pipe'

@Component({
  selector: 'list-professors',
  templateUrl: 'list-professors.html',
})
export class ListProfessors {

  professors;

  constructor(
    private angularFire: AngularFire
    ) {
      angularFire.database.list('/programs/MAPD/professors').subscribe((professors) => {this.professors = professors});
  }

  getProfessors(ev: any) {
    this.angularFire.database.list('/programs/MAPD/professors').subscribe((professors) => {
      this.professors = professors
      let val = ev.target.value;
      if (val && val.trim() != '') {
        this.professors = this.professors.filter((professor) => {
          return (professor.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    });
    
  }

}