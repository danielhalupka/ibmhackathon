import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MarketOrdersModel } from '../../app/services/barcode.dio/market.orders.model';

@Component({
  selector: 'page-only',
  templateUrl: 'onlyPage.html'
})
export class OnlyPage {

  barcodes = [];
  isReading = false;

  constructor(public navCtrl: NavController, public scanner: BarcodeScanner, public marketOrdersModel: MarketOrdersModel) {

  }

  readQRCode() {
    let withoutError = false;
    this.scanner.scan({
      formats: 'QR_CODE',
      prompt: 'Point to qr code.'
    }).then((qrData) => {
      this.isReading = true;
      this.barcodes = [];
      var parsed = JSON.parse(qrData.text);
      if (parsed) {
        for (let i = 0; i < parsed.length; i++) {
          if (isNaN(parsed[i])) {
            for (let j = 0; j < parsed[i].m; j++) {
              this.barcodes.push(parsed[i].v);
            }
          } else {
            this.barcodes.push(parsed[i]);
          }
        }
          this.marketOrdersModel.postNewOrder(this.barcodes);
      } else {
        alert("QR code can't be deserialized!");
      }
    }, (err) => {
      alert(err);
    });

    

  }

  goBack() {
    this.isReading = false;
    this.readQRCode();
  }

}