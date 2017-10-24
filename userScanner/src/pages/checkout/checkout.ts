import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurrentCart } from '../../app/services/current.cart.service';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public currentCart: CurrentCart, public storage: Storage) {

  }

  stringify(value) {
    return JSON.stringify(value);
  }

  cancel() {
    this.navCtrl.pop();
  }

  finishCheckout() {
    this.storage.get('orders').then((val) => {
      let newOrder = {
        barcodes: this.currentCart.products,
        date: new Date()
      };


      val.push(newOrder);
      this.storage.set('orders', val);
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    });
  }

}
