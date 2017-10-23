import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CurrentCart } from '../../app/services/current.cart.service';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentCart: CurrentCart) {
    
  }


}
