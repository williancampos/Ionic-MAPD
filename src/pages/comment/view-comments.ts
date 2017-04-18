import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'view-comments',
  templateUrl: 'view-comments.html'
})
export class ViewCommentsPage {

  comments: [string];

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private angularFire: AngularFire
    ) {
      //this.comments = this.navParams.get('courseId');
      this.comments = this.navParams.get('comments');
  }


/*
  addComment(courseId) {
    this.alertCtrl.create(
      {
        title: "Add a new comment",
        inputs: [
          {
            name: "comment",
            placeholder: "Enter the comment..."
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Create",
            handler: data => {
              var comment = {
                data: data.comment
              };
              this.courses.update(courseId, {comments: [comment]});
            }
          }
        ]
      }).present();
  }
*/
}
