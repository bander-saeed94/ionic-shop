import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdctsProvider} from '../../providers/prodcts/prodcts'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private bestSellerProdcuts = [];

  constructor(
    private prodctsProvider:ProdctsProvider,
    public navCtrl: NavController) {
  }
  ionViewDidLoad(){
    this.prodctsProvider.getProdcuts().subscribe(
      (allProdcuts: any[])=>{
        this.bestSellerProdcuts = allProdcuts.filter((product)=>{
          return product.bestSeller == true;
        })
      }
    )
  }
 
}
