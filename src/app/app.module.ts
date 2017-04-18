import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewCommentsPage } from '../pages/comment/view-comments';

export const firebaseConfig = {
  apiKey: "AIzaSyA-W5K3qSlsWzd83CRKK-kUoWCLjquKAV4",
  authDomain: "mapd-afe09.firebaseapp.com",
  databaseURL: "https://mapd-afe09.firebaseio.com",
  projectId: "mapd-afe09",
  storageBucket: "mapd-afe09.appspot.com",
  messagingSenderId: "1019556841533"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewCommentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewCommentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
