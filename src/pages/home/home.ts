import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, MenuController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { EditProgramPage } from '../edit-program/edit-program';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  program: FirebaseObjectObservable<any>;

  constructor(
    public navCtrl: NavController,
    private angularFire: AngularFire,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    menu: MenuController) {
      menu.enable(true);
      angularFire.database.object('/programs/MAPD').subscribe((program) => {this.program = program});
  }

  editProgram(program) {
    this.navCtrl.push(EditProgramPage, {program: program});
  }
}
