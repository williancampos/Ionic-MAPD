import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { CourseDetails } from '../courses/course-details';

@Component({
  selector: 'list-courses',
  templateUrl: 'list-courses.html'
})
export class ListCourses {

  courses: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    private angularFire: AngularFire
    ) {
      this.courses = angularFire.database.list('/programs/MAPD/courses');
  }

  showDetails(course) {
    this.navCtrl.push(CourseDetails, {course: course});
  }
}
