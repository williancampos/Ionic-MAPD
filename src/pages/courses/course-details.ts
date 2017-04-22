import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'course-details',
  templateUrl: 'course-details.html'
})
export class CourseDetails {

  courses: FirebaseListObservable<any>;
  course: any;
  sortCommentsFunction = function(a, b) { return b.timestamp - a.timestamp};

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private angularFire: AngularFire) {
      this.course = this.navParams.get('course');
      if (this.course.comments == undefined) {
        this.course.comments = [];
      }
      this.courses = angularFire.database.list('/programs/MAPD/courses');
    }

    addComment() {
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
                data: data.comment,
                timestamp: new Date().getTime()
              };
              this.course.comments.push(comment);
              
              this.courses.update(this.course.$key, {comments: this.course.comments});
            }
          }
        ]
      }).present();
    }

  showDate(dateInMillis) {
    return new Date(dateInMillis);
  }
}
