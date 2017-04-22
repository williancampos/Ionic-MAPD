import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'edit-program',
  templateUrl: 'edit-program.html'
})
export class EditProgramPage {

  programs: FirebaseListObservable<any>;
  program: any;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private angularFire: AngularFire) {
      this.programs = angularFire.database.list('/programs');
      this.program = navParams.get("program");
      console.log(this.program.requirements.length);
  }

  addRequirement() {
      this.program.requirements.push({data: null});
  }

  removeRequirement(i) {
      this.program.requirements.splice(i, 1);
  }

  cancel() {
      this.navCtrl.pop();
  }

  save() {
      this.programs.update(this.program.$key, this.program);
      this.navCtrl.pop();
  }

}
