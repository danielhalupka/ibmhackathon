import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormsModule } from '@angular/forms';
import { NgxBarcodeModule } from 'ngx-barcode';
import { OnlineChecker } from '../../app/services/online.checker.service';
import { OnlineIndicatorModule } from '../../app/components/online.indicator/online.indicator.module';

@NgModule({
    declarations: [
        CartPage
    ],
    imports: [
        NgxBarcodeModule,
        FormsModule,
        IonicPageModule.forChild(CartPage),
        OnlineIndicatorModule
    ],
    providers: [
        BarcodeScanner,
        OnlineChecker
    ]
})
export class CartPageModule { }
