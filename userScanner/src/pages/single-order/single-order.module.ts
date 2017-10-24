import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleOrderPage } from './single-order';

import { FormsModule } from '@angular/forms';
import { OnlineChecker } from '../../app/services/online.checker.service';
import { OnlineIndicatorModule } from '../../app/components/online.indicator/online.indicator.module';
import { OrdersModel } from '../../app/services/orders.model';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    SingleOrderPage
  ],
  imports: [
    NgxBarcodeModule,
    FormsModule,
    IonicPageModule.forChild(SingleOrderPage),
    OnlineIndicatorModule
  ],
  providers:[
    OrdersModel,
    OnlineChecker
  ]
})
export class SingleOrderPageModule {}
