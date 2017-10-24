import { Injectable } from '@angular/core';

@Injectable()
export class OrdersModel {

    orders = [{
        date: "2016-01-24 14:21:55.000",
        _id: "59ee31420866371398919702",
        barcodes: [{
            payload: "1234567890123",
            qty: '3',
            price: '100',
            product_name: 'Kapusta'
        }, {
            payload: "1234567890123",
            qty: '3',
            price: '100',
            product_name: 'Kapusta'
        }, {
            payload: "1234567890123",
            qty: '3',
            price: '100',
            product_name: 'Kapusta'
        }]
    }, {
        date: "2016-01-24 14:21:55.000",
        _id: "59ee31420866371398919702",
        barcodes: [{
            payload: "1234567890123",
            qty: '3',
            price: '100',
            product_name: 'Fejsbuk'
        }, {
            payload: "1234567890123",
            qty: '3',
            price: '100',
            product_name: 'Kapusta'
        }, {
            payload: "1234567890123",
            qty: '3',
            price: '100',
            product_name: 'Kapusta'
        }]
    }, {
        date: "2016-01-24 14:21:55.000",
        _id: "59ee31420866371398919702"
    }];
    viewing: Number = 0;

    constructor() {

    }

}