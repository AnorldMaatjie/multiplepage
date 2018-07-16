import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import arryName   from '../../app/arryName';
import { InformlabPage } from '../informlab/informlab';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  login(username,password){

    arryName[0]=username;
    arryName[1]=password;
    this.navCtrl.push(InformlabPage);
  }
}
