import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListCourses } from '../courses/list-courses';
import { ListProfessors } from '../professors/list-professors';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {

  private rootPage;
  private homePage;
  private coursesPage;
  private professorsPage;

  constructor() {
      this.rootPage = HomePage;
      this.homePage = HomePage;
      this.coursesPage = ListCourses;
      this.professorsPage = ListProfessors;
  }

  openPage(p) {
    this.rootPage = p;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
  }

}
