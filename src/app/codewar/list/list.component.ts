import { Component, OnInit } from '@angular/core';
import { MaterializeService } from '../../service/shared/materialize/materialize.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  kataList = [];
  constructor(private _materialize: MaterializeService) { }
  ngOnInit() {
    this._materialize.collapsible('.kata-list');
  }

}
