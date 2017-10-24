import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderHistoryPage } from './order-history';

import { FormsModule } from '@angular/forms';
import { OnlineChecker } from '../../app/services/online.checker.service';
import { OnlineIndicatorModule } from '../../app/components/online.indicator/online.indicator.module';
import { OrdersModel } from '../../app/services/orders.model';

@NgModule({
  declarations: [
    OrderHistoryPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(OrderHistoryPage),
    OnlineIndicatorModule
  ],
  providers: [
    OnlineChecker,
    OrdersModel
  ]
})
export class OrderHistoryPageModule {}
