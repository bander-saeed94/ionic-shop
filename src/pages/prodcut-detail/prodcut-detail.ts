import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdcutDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-prodcut-detail',
  templateUrl: 'prodcut-detail.html',
})
export class ProdcutDetailPage {

  private prodcutDetail = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.prodcutDetail = this.navParams.get("prodcutDetail");
    console.log(this.prodcutDetail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdcutDetailPage');
  }
  // closePage(){
  //   this.navCtrl.pop();
  // }
}
