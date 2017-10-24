import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersModel } from '../../app/services/orders.model';

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersModel: OrdersModel) {

  }

  viewOrder(index){
    alert(index);
    this.ordersModel.viewing = index;
    this.navCtrl.push('SingleOrderPage');
  }
}
