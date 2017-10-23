import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurrentCart } from '../../app/services/current.cart.service';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentCart: CurrentCart) {
    
  }

  stringify(value){
    return JSON.stringify(value);
  }

  cancel(){
    this.navCtrl.push('CartPage');
  }

  finishCheckout(){
    alert("finish checkout , add to mongo");
  }
  
}
