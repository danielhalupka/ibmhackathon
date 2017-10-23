import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutPage } from './checkout';

import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
    declarations: [
        CheckoutPage,
    ],
    imports: [
        QRCodeModule,
        IonicPageModule.forChild(CheckoutPage),
    ],
})
export class CheckoutPageModule { }
