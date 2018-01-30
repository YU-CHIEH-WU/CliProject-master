import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.scss']
})
export class AveragesComponent implements OnInit {
  count: number;
  resultArray: number[];
  random: string;
  result: string;
  constructor() { }

  ngOnInit() {
    this.count = 5;
    this.resultArray = [];
  }
  doTest() {
    this.result = '';
    this.resultArray = [];
    if (this.count <= 1) {
      this.resultArray = [];
    } else {
      let i = 0;
      let randomNum = 0.0;
      const randomArray = [];
      while (i <= this.count) {
        randomNum = Math.floor(((Math.random() * 201 - 100)));
        randomArray.push(randomNum);
        i++;
      }
      for (let x = 0; x < randomArray.length; x++) {
        if (randomArray[x - 1] !== undefined) {
          this.resultArray.push((randomArray[x - 1] + randomArray[x]) / 2);
        }
      }
      this.random = randomArray.toString();
      this.result = this.resultArray.toString();
    }
  }
}
