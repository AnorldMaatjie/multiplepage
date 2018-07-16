import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {InformlabPage} from '../pages/informlab/informlab';
import{AboutPage} from '../pages/about/about';
import{LabsPage} from '../pages/labs/labs';
import{ProgrammesPage} from '../pages/programmes/programmes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformlabPage,
    AboutPage,
    LabsPage,
    ProgrammesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InformlabPage,
    AboutPage,
    LabsPage,
    ProgrammesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
