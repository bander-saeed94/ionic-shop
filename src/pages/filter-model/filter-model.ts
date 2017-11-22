import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-filter-model',
  templateUrl: 'filter-model.html',
})
export class FilterModelPage {

  private femaleSelected = true;
  private maleSelected = true;
  constructor(
    private viewController: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
      this.femaleSelected = this.navParams.get("femaleSelected");
      this.maleSelected = this.navParams.get("maleSelected");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModelPage');
  }

  closePage(){
    let filterState = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    }
    this.viewController.dismiss(filterState);
  }
}
