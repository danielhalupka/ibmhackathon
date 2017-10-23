import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';

@Injectable()
export class SocketInitiator {
    constructor(private socket:Socket) {
        this.socket.connect();
    }

}