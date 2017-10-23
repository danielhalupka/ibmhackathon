import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { OnlyPage } from '../pages/onlyPage/onlyPage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    MyApp,
    OnlyPage
  ],
  imports: [
    NgxBarcodeModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OnlyPage
  ],
  providers: [
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
