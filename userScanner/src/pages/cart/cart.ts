import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CurrentCart } from '../../app/services/current.cart.service';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {


  actualBarcode: String = "";
  howManyActive: boolean = false;
  howManyNumber: Number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner, public currentCart : CurrentCart) {
    this.currentCart.reloadProductData();
  }

  startAddProduct() {
    this.scanner.scan({
      formats: 'DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, CODE_93, CODABAR, ITF, RSS14, RSS_EXPANDED, PDF417, AZTEC, MSI',
      prompt: 'Point to barcode.'
    }).then((barcode) => {
      var parsed = JSON.parse(barcode.text);
      if (parsed) {
        this.actualBarcode = parsed;
        this.howManyActive = true;
      } else {
        this.actualBarcode = "";
        this.howManyNumber = 1;
        alert("Barcode can't be deserialized!");
      }
    }, (err) => {
      alert(err);
    });

  }

  deleteProduct(barcode){
    for(let i = 0;i<this.currentCart.products.length;i++){
      if(this.currentCart.products[i].payload==barcode){
         this.currentCart.products.splice(i,1);
      }
    }
  }

  finishAdding() {
    if (this.howManyNumber === 1) {
      this.currentCart.barcodes.push(this.actualBarcode);
    } else {
      this.currentCart.barcodes
      this.currentCart.barcodes.push({
        v: this.actualBarcode,
        m: this.howManyNumber
      });
    }
    this.currentCart.addProduct(this.actualBarcode,this.howManyNumber);
    this.howManyActive = false;
    this.howManyNumber = 1;
  }

  clearAll(){
    this.currentCart.barcodes = [];
    this.currentCart.products = [];
    this.howManyActive = false;
    this.howManyNumber = 1;
  }

  finishOrder(){
    if(this.currentCart.barcodes.length === 0){
      alert('No products in cart');
    }else{
      this.navCtrl.push('CheckoutPage');    
    }
  }


}
