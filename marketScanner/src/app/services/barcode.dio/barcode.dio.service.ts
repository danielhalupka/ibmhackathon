import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BarcodeDIO {
    baseUrl: String = "https://scan2shop.mybluemix.net/"

    constructor(private http: Http) {
    }

    sendBarcodes(barcodes) {
        return this.http.post(this.baseUrl + "market/addOrder", barcodes)
            .map(res => res.json());
    }

}