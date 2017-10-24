import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Socket } from 'ng-socket-io';
import { SingleProductModel } from '../../app/services/single.product.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-check-price',
  templateUrl: 'check.price.html',
})
export class CheckPricePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner, public socket: Socket, public singleProductModel: SingleProductModel) {
    this.constructListeners();
  }

  constructListeners() {
    this.getProductFromBarcode().subscribe(product => {
      this.singleProductModel.product = product;
      if(product === null){
        alert('No information about this product!');      
      }else{
        this.navCtrl.push('SingleProductPage');      
      }
    });
  }

  getProductFromBarcode() {
    let observable = new Observable(observer => {
      this.socket.on('single product', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  readBarcodeForPrice() {
    this.scanner.scan({
      formats: 'DATA_MATRIX, UPC_E, UPC_A, EAN_8, EAN_13, CODE_128, CODE_39, CODE_93, CODABAR, ITF, RSS14, RSS_EXPANDED, PDF417, AZTEC, MSI',
      prompt: 'Point to barcode.'
    }).then((barcode) => {
      this.socket.emit('get product data from barcode', barcode.text);
    }, (err) => {
      alert(err);
    });
  }

}
