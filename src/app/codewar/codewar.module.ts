import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CodewarRouting } from './codewar-routing.module';

// private shared service
import { ListComponent } from './list/list.component';
import { CodewarComponent } from './codewar.component';
import { XocompareComponent } from './xocompare/xocompare.component';
import { SquaredmirrorComponent } from './squaredmirror/squaredmirror.component';
import { PincodeComponent } from './pincode/pincode.component';
import { LongestComponent } from './longest/longest.component';
import { AveragesComponent } from './averages/averages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CodewarRouting
  ],
  declarations: [
    CodewarComponent,
    XocompareComponent,
    SquaredmirrorComponent,
    PincodeComponent,
    LongestComponent,
    AveragesComponent,
    ListComponent]
})
export class CodewarModule { }
