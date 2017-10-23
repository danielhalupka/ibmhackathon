import { Component } from '@angular/core';
import { OnlineChecker } from '../../services/online.checker.service';


@Component({
  selector: 'online-indicator',
  templateUrl: 'online.indicator.html'
})
export class OnlineIndicator {

  constructor(public checker :OnlineChecker) {

  }


}
