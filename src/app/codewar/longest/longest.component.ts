import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-longest',
  templateUrl: './longest.component.html',
  styleUrls: ['./longest.component.scss']
})
export class LongestComponent implements OnInit {
  string1: string;
  string2: string;
  result: string;
  constructor() { }

  ngOnInit() {
  }

  doTest() {
    this.result = '';
    const testString = this.string1 + this.string2;
    const stringArray = testString.split('').sort();
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i - 1] !== stringArray[i]) {
        this.result += stringArray[i];
      }
    }
  }

}
