import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersModel } from '../../app/services/orders.model';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-order-history',
  templateUrl: 'order-history.html',
})
export class OrderHistoryPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersModel: OrdersModel, public storage: Storage) {

  }

  ngOnInit() {
    this.storage.get('orders').then((val) => {
      this.ordersModel.orders = val;
    });
  }

  viewOrder(index) {
    this.ordersModel.viewing = index;
    this.navCtrl.push('SingleOrderPage');
  }
}
