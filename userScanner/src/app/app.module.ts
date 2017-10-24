import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CurrentCart } from './services/current.cart.service';
import { Network } from '@ionic-native/network';
import { OnlineIndicatorModule } from './components/online.indicator/online.indicator.module';

import { OnlineChecker } from './services/online.checker.service';
import { SingleProductModel } from './services/single.product.model';
import { SocketInitiator } from './services/socketinitiator';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CheckoutPageModule } from '../pages/checkout/checkout.module';
import { CartPageModule } from '../pages/cart/cart.module';
import { CheckPriceModule } from '../pages/check.price/check.price.module';
import { SingleProductPageModule } from '../pages/single-product/single-product.module';
import { OrderHistoryPageModule } from '../pages/order-history/order-history.module';
import { IonicStorageModule } from '@ionic/storage';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { NgxBarcodeModule } from 'ngx-barcode';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'https://scan2shop.mybluemix.net', options: {} };
//const config: SocketIoConfig = { url: 'http://10.62.193.234:3000', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    CheckoutPageModule,
    SocketIoModule.forRoot(config),
    QRCodeModule,
    NgxBarcodeModule,
    CartPageModule,
    OnlineIndicatorModule,
    CheckPriceModule,
    SingleProductPageModule,
    OrderHistoryPageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    CurrentCart,
    BarcodeScanner,
    OnlineChecker,
    StatusBar,
    SingleProductModel,
    Network,
    SocketInitiator,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
