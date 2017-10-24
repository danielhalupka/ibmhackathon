import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersModel } from '../../app/services/orders.model';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-single-order',
  templateUrl: 'single-order.html',
})
export class SingleOrderPage implements OnInit{
  idx:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ordersModel: OrdersModel,public storage:Storage) {
    this.idx = this.navParams.get('idx');
    
  }

  ngOnInit(){
    this.storage.get('orders').then((val) => {
      if (!val) {
        this.ordersModel.orders = [];
        this.storage.set('orders', []);
      } else { 
        this.ordersModel.orders = val;
      }
    });
  }

}
