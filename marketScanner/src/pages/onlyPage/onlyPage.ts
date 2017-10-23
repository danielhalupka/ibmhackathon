import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-only',
  templateUrl: 'onlyPage.html'
})
export class OnlyPage {

  barcodes = [];
  
  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }

  readQRCode() {
    this.scanner.scan({
      formats: 'QR_CODE',
      prompt: 'Point to qr code.'
    }).then((qrData) => {
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
      } else {
        alert("QR code can't be deserialized!");
      }
    }, (err) => {
      alert(err);
    });
  }

}