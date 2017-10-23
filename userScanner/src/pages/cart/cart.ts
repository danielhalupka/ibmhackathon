import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  barcodes: any[] = [];
  actualBarcode: String = "";
  howManyActive: boolean = false;
  howManyNumber: Number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner) {
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

  finishAdding() {
    if (this.howManyNumber === 1) {
      this.barcodes.push(this.actualBarcode);
    } else {
      this.barcodes.push({
        v: this.actualBarcode,
        m: this.howManyNumber
      });
    }
    alert(this.howManyNumber);
    this.howManyActive = false;
    this.howManyNumber = 1;
  }



}