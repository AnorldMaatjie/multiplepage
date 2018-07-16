import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arryName from '../../app/arryName';
import {AboutPage} from '../about/about';
import{LabsPage} from '../labs/labs';
import{ProgrammesPage} from '../programmes/programmes';
/**
 * Generated class for the InformlabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informlab',
  templateUrl: 'informlab.html',
})
export class InformlabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformlabPage');
  }

  username=arryName[0];
  password=arryName[1];


  About(username,password){

    this.navCtrl.push(AboutPage);
  }

  Labs(username,password){

    this.navCtrl.push(LabsPage);
  }

  Program(){

    this.navCtrl.push(ProgrammesPage);
  }


}


