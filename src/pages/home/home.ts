import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ViewCommentsPage } from '../comment/view-comments';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    private angularFire: AngularFire,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController,
    ) {
      this.courses = angularFire.database.list('/courses');
  }

  showOptions(courseId) {
    this.actionSheetCtrl.create(
      {
        title: "Choose between one of the following actions",
        buttons: [
          {
            text: "Add comment",
            handler: () => this.addComment(courseId)
          }
        ]
      }
    ).present();
  }

  addCourse() {
    this.alertCtrl.create(
      {
        title: "Add a new course",
        subTitle: "Provide the details of the new course",
        inputs: [
          {
            name: "code",
            placeholder: "Enter the course code..."
          },
          {
            name: "term",
            placeholder: "Enter the course term..."
          },
          {
            name: "name",
            placeholder: "Enter the course name..."
          },
          {
            name: "description",
            placeholder: "Enter the course description..."
          }
        ],
        buttons: [
          {
            text: "Cancel"
          },
          {
            text: "Create",
            handler: data => {

              var course = {
                code: data.code,
                term: data.term,
                name: data.name,
                description: data.description,
              };
              this.courses.push(course);
            }
          }
        ]
      }

    ).present();
  }

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

  showComments(courseId, comments) {
    this.navCtrl.push(ViewCommentsPage, {courseId: courseId, comments: comments});
  }

}
