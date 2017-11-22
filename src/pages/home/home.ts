import { Component } from '@angular/core';
import { NavController  , ModalController} from 'ionic-angular';
import { ProdctsProvider } from '../../providers/prodcts/prodcts'
import { ProdcutDetailPage } from '../prodcut-detail/prodcut-detail'
import { FilterModelPage }  from '../filter-model/filter-model'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProdcuts = [];

  private femaleSelected = true;
  private maleSelected = true;

  constructor(
    private modalController:ModalController,
    // private viewController:ViewController,
    private prodctsProvider: ProdctsProvider,
    public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.prodctsProvider.getProdcuts().subscribe(
      (data: any[]) => {
        this.allProdcuts = data;
      }
    )
  }
  goToProdcutDetail(prodcut){
    this.navCtrl.push(ProdcutDetailPage , {
      prodcutDetail: prodcut
    })
  }
  openFilterModel(){
    let filterState = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    }
    let openSettings = this.modalController.create(FilterModelPage,filterState);
    openSettings.onDidDismiss( (data)=>{
      this.femaleSelected = data.femaleSelected;
      this.maleSelected = data.maleSelected;
      this.prodctsProvider.getProdcuts().subscribe( (allProdcuts: any[])=>{
        if(this.femaleSelected && this.maleSelected){
          this.allProdcuts = allProdcuts;
          return;
        }
        else if(!this.femaleSelected && !this.maleSelected){
          this.allProdcuts = [];
          return
        }
        else if(this.femaleSelected &&  !this.maleSelected){
          this.allProdcuts = allProdcuts.filter( (prodcut)=>{
            return prodcut.gender != "male"
          });
        }
        else{
          this.allProdcuts = allProdcuts.filter( (prodcut)=>{
            return prodcut.gender != "female"
          });
        }
      })
    });
    openSettings.present();
  }
}
