import { Injectable } from '@angular/core';
import { OnlineChecker } from './online.checker.service';
import { Socket } from 'ng-socket-io';

@Injectable()
export class CurrentCart {

    barcodes: any[] = [4009900412087];
    products: any[] = [
        {
            payload:4009900412087,
            product_name:'N/A',
            price:0.67,
            qty:1
        }
    ];
    constructor(private onlineChecker: OnlineChecker, private socket:Socket) {
        
    }

    addProduct(barcode,qty){
        let isPresent = false;
        let isPresentIdx = null;
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].payload==barcode){
                this.products[i].qty+=1;
                isPresent = true;
                isPresentIdx = i;
            }
        }
        if(isPresent && this.products[isPresentIdx].product_name == 'N/A'){
            this.socket.emit('get product info',barcode,function(productInfo){
                this.products[isPresentIdx].price=productInfo.price;
                this.products[isPresentIdx].product_name = productInfo.product_name;
                
            });
        }
        if(!isPresent && this.onlineChecker.isOnline){
            this.socket.emit('get product info',barcode,function(productInfo){
                this.products.push({
                    payload:productInfo.payload,
                    qty:qty,
                    price:productInfo.price,
                    product_name:productInfo.product_name
                });
            });
            
        }else if(!isPresent && !this.onlineChecker.isOnline){
            this.products.push({
                payload:barcode,
                qty:qty,
                price:'N/A',
                product_name:'N/A'
            });
        }
    }
    
}