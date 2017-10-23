import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { OnlyPage } from '../pages/onlyPage/onlyPage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxBarcodeModule } from 'ngx-barcode';
import { MarketOrdersModel } from './services/barcode.dio/market.orders.model';
import { SocketInitiator } from './services/socketinitiator';
import { HttpModule } from '@angular/http'; 
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'https://scan2shop.mybluemix.net', options: {} };

@NgModule({
  declarations: [
    MyApp,
    OnlyPage
  ],
  imports: [
    HttpModule,
    NgxBarcodeModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OnlyPage
  ],
  providers: [
    MarketOrdersModel,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    SocketInitiator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
