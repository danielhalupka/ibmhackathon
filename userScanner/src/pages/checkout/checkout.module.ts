import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckoutPage } from './checkout';

import { QRCodeModule } from 'angular2-qrcode';
import { OnlineChecker } from '../../app/services/online.checker.service';
import { OnlineIndicatorModule } from '../../app/components/online.indicator/online.indicator.module';
@NgModule({
    declarations: [
        CheckoutPage,
    ],
    imports: [
        QRCodeModule,
        IonicPageModule.forChild(CheckoutPage),
        OnlineIndicatorModule
    ],
    providers: [
        OnlineChecker
    ]
})
export class CheckoutPageModule { }
