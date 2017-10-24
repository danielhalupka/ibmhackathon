import { Injectable } from '@angular/core';
import { OnlineChecker } from './online.checker.service';
import { Socket } from 'ng-socket-io';

@Injectable()
export class CurrentCart {

    barcodes: any[] = [4009900412087];
    products: any[] = [];
    constructor(private onlineChecker: OnlineChecker, private socket:Socket) {
        
    }



    reloadProductData(){
        var self = this;
        for(let i=0;i<this.products.length;i++){
            this.socket.emit('get product info',{barcode:this.products[i].payload,index:i},(productInfo,i) => {
                self.products[productInfo.index].price=productInfo.price;
                self.products[productInfo.index].product_name = productInfo.product_name;
            });
        }
    }

    addProduct(barcode,qty){
        let isPresent = false;
        let isPresentIdx = null;
        var self = this;
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].payload==barcode){
                this.products[i].qty+=qty;
                isPresent = true;
                isPresentIdx = i;
            }
        }
        if(isPresent && this.products[isPresentIdx].product_name == 'N/A'){
            this.socket.emit('get product info',{barcode:this.products[isPresentIdx].payload,index:isPresentIdx},(productInfo,i) => {
                if(typeof productInfo['product_name'] != 'undefined'){
                    self.products[productInfo.index].price=productInfo.price;
                    self.products[productInfo.index].product_name = productInfo.product_name;
                }
                
            });
        }
        if(!isPresent && this.onlineChecker.isOnline){
            this.socket.emit('get product info',{barcode:barcode,index:0},(productInfo,i) => {
                console.log(productInfo);
                if(typeof productInfo['payload'] !== 'undefined' && productInfo != null){
                    this.products.push({
                        payload:productInfo.payload,
                        qty:qty,
                        price:productInfo.price,
                        product_name:productInfo.product_name
                    });
                }else{
                    this.products.push({
                        payload:barcode,
                        qty:qty,
                        price:'N/A',
                        product_name:'N/A'
                    });
                }
                
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