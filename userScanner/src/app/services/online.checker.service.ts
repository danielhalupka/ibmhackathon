import { Injectable } from '@angular/core';

import { Network } from '@ionic-native/network';
import { OnInit } from '@angular/core';

@Injectable()
export class OnlineChecker {

    isOnline: boolean = false;
    connectSubscription: any = {};

    constructor(private network: Network) {
        this.connectSubscription = this.network.onConnect().subscribe(() => {
            alert('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    alert('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
    }

    getIsOnline(){
        return this.isOnline;
    }

}