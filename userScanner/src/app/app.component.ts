import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CheckPricePage } from '../pages/check-price/check-price';
import { SingleProductPage } from '../pages/single-product/single-product';
import { SingleOrderPage } from '../pages/single-order/single-order';
import { CartPage } from '../pages/cart/cart';
import { OrderHistoryPage } from '../pages/order-history/order-history';
import { RegisterLoginPage } from '../pages/register-login/register-login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Checkout', component: CheckoutPage},
      { title: 'Check-Price', component: CheckPricePage},
      { title: 'Single-Product', component: SingleProductPage},
      { title: 'Single-Order', component: SingleOrderPage},
      { title: 'Cart', component: CartPage},
      { title: 'Order-histor', component: OrderHistoryPage},
      { title: 'Register-Login', component: RegisterLoginPage}
    
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
