import { Component, OnInit, Input } from '@angular/core';
import { ClickStopPropagationDirective } from '../shared/directive/click-stop-propagation.directive';
import { MaterializeService } from '../service/shared/materialize/materialize.service';

@Component({
  selector: 'app-codewar',
  templateUrl: './codewar.component.html',
  styleUrls: ['./codewar.component.scss']
})
export class CodewarComponent implements OnInit {
  kataList = [];
  constructor(private _materialize: MaterializeService) { }
  ngOnInit() {
    this._materialize.collapsible('.kata-list');
  }
}
