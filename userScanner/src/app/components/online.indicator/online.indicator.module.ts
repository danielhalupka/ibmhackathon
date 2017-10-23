import { NgModule } from '@angular/core';
import { OnlineIndicator } from './online.indicator';
import { OnlineChecker } from '../../services/online.checker.service';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        OnlineIndicator
    ],
    imports: [
        CommonModule
    ],
    providers: [
        OnlineChecker
    ],
    exports: [
        OnlineIndicator
    ]
})
export class OnlineIndicatorModule { }
