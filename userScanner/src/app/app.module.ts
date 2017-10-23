import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OnlineChecker } from './services/online.checker.service';
import { CurrentCart } from './services/current.cart.service';
import { OnlineIndicator } from './components/online.indicator/online.indicator';
import { Network } from '@ionic-native/network';

import { SocketInitiator } from './services/socketinitiator';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CheckoutPageModule } from '../pages/checkout/checkout.module';
import { CartPageModule } from '../pages/cart/cart.module';  
import { CheckPricePage } from '../pages/check-price/check-price';
import { SingleProductPage } from '../pages/single-product/single-product';
import { SingleOrderPage } from '../pages/single-order/single-order';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { RegisterLoginPage } from '../pages/register-login/register-login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angular2-qrcode';
import { NgxBarcodeModule } from 'ngx-barcode';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'https://scan2shop.mybluemix.net', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnlineIndicator,
    CheckPricePage,
    SingleProductPage,
    SingleOrderPage,
    OrderHistoryPage,
    RegisterLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    CheckoutPageModule,
    SocketIoModule.forRoot(config),
    QRCodeModule,
    NgxBarcodeModule,
    CartPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CheckPricePage,
    SingleProductPage,
    SingleOrderPage,
    OrderHistoryPage,
    RegisterLoginPage
  ],
  providers: [
    CurrentCart,
    BarcodeScanner,
    OnlineChecker,
    StatusBar,
    Network,
    SocketInitiator,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
