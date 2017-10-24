import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersModel } from '../../app/services/orders.model';

@IonicPage()
@Component({
  selector: 'page-single-order',
  templateUrl: 'single-order.html',
})
export class SingleOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersModel: OrdersModel) {
  }

}
