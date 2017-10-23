import { Injectable } from '@angular/core';

import { Network } from '@ionic-native/network';

@Injectable()
export class OnlineChecker {

    isOnline: boolean = false;
    connectSubscription: any = {};
    disconnectSubscription: any = {};

    constructor(private network: Network) {
        let self = this;
        if(self.network.type !== 'none'){
            self.isOnline = true;
        }
        self.connectSubscription = self.network.onConnect().subscribe(() => {
            setTimeout(() => {
                self.isOnline = true;
            }, 3000);
        });

        self.disconnectSubscription = self.network.onDisconnect().subscribe(() => {
            self.isOnline = false;
        });
    }
    
}