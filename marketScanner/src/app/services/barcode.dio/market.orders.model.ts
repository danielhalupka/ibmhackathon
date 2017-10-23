import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MarketOrdersModel {

    marketOrders;

    constructor(private socket:Socket) {
        this.constructListeners();
    }

    postNewOrder(barcodes) {
        this.socket.emit('post new market order',barcodes);
    }

    constructListeners(){
        this.getMarketOrders().subscribe(marketOrders => {
              this.marketOrders = marketOrders;
        });
        this.socket.emit('get market orders');
    }

    getMarketOrders(){
        let observable = new Observable(observer => {
            this.socket.on('market orders', (data) => {
              observer.next(data);
            });
          });
          return observable;
    }

}