import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OnlineChecker } from './services/online.checker.service';
import { OnlineIndicator } from './components/online.indicator/online.indicator';
import { Network } from '@ionic-native/network';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CheckPricePage } from '../pages/check-price/check-price';
import { SingleProductPage } from '../pages/single-product/single-product';
import { SingleOrderPage } from '../pages/single-order/single-order';
import { CartPage } from '../pages/cart/cart';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { RegisterLoginPage } from '../pages/register-login/register-login';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'https://scan2shop.mybluemix.net', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnlineIndicator,
    CheckoutPage,
    CheckPricePage,
    SingleProductPage,
    SingleOrderPage,
    CartPage,
    OrderHistoryPage,
    RegisterLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CheckoutPage,
    MyApp,
    HomePage,
    CheckPricePage,
    SingleProductPage,
    SingleOrderPage,
    CartPage,
    OrderHistoryPage,
    RegisterLoginPage
  ],
  providers: [
    BarcodeScanner,
    OnlineChecker,
    StatusBar,
    Network,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
