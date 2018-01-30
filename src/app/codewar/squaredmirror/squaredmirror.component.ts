// 透過相依注入來加入需要的功能
import { Component } from '@angular/core';

// metadata 綁定component與selector template css
@Component({
  selector: 'app-squaredmirror',
  // 顯示的html模板
  templateUrl: './squaredmirror.component.html',
  // 模板所用的css
  styleUrls: ['./squaredmirror.component.scss']
})
export class SquaredmirrorComponent {
  testData: string = String('abcd\nefgh\nijkl\nmnop');
  vertResult: string;
  horResult: string;
  vertMirror(strng: string) {
    // your code
    const inputArray: string[] = strng.split('\n');
    let returnString = '';
    for (const i of inputArray) {
      const reverArray: string[] = i.split('').reverse();
      for (const x of reverArray) {
        returnString += x;
      }
      returnString += '\n';
    }
    return returnString;
  }
  horMirror(strng: string) {
    // your code
    const inputArray: string[] = strng.split('\n').reverse();
    let returnString = '';
    for (const i of inputArray) {
      returnString += i + '\n';
    }
    return returnString;
  }
  oper(fct: Function, s: string) {
    if (fct === this.vertMirror) {
      this.vertResult = 'vertMirror: ' + this.vertMirror(s);
    }
    if (fct === this.horMirror) {
      this.horResult = 'horMirror: ' + this.horMirror(s);
    }
  }
  doTest() {
    this.oper(this.vertMirror, this.testData);
    this.oper(this.horMirror, this.testData);
  }
}
