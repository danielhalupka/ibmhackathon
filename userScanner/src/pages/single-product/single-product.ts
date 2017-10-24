import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SingleProductModel } from '../../app/services/single.product.model';

@IonicPage()
@Component({
  selector: 'page-single-product',
  templateUrl: 'single-product.html',
})
export class SingleProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public singleProductModel: SingleProductModel) {
  }

}
