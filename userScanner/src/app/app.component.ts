import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CartPage } from '../pages/cart/cart';
import { CheckPricePage } from '../pages/check.price/check.price';
import { SocketInitiator } from './services/socketinitiator';
import { OnlineChecker } from '../app/services/online.checker.service';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { SingleOrderPage } from '../pages/single-order/single-order';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private socketInitiator: SocketInitiator,
    public onlineChecker: OnlineChecker) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Checkout', component: CheckoutPage },
      { title: 'Cart', component: CartPage },
      { title: 'Price Checker', component: CheckPricePage },
      { title: 'Order History', component: OrderHistoryPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if (page.title === 'Price Checker') {
      if (this.onlineChecker.isOnline) {
        this.nav.setRoot(page.component);
      } else {
        alert('This page requires internet connection!');
      }
    }else{
      this.nav.setRoot(page.component);
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
  }
}
