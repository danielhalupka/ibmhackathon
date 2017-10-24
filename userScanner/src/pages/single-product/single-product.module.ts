import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleProductPage } from './single-product';

import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';
import { OnlineChecker } from '../../app/services/online.checker.service';
import { OnlineIndicatorModule } from '../../app/components/online.indicator/online.indicator.module';

@NgModule({
  declarations: [
    SingleProductPage,
  ],
  imports: [

    NgxBarcodeModule,
    FormsModule,
    IonicPageModule.forChild(SingleProductPage),
    OnlineIndicatorModule
  ],
  providers: [
    OnlineChecker
  ]
})
export class SingleProductPageModule { }
