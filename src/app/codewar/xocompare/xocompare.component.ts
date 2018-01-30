// 透過相依注入來加入需要的功能
import { Component, AfterViewInit } from '@angular/core';
// metadata 綁定component與selector template css
@Component({
  selector: 'app-xocompare',
  // 顯示的html模板
  templateUrl: './xoCompare.component.html',
  // 模板所用的css
  styleUrls: ['./xoCompare.component.scss']
})

export class XocompareComponent {
  testDataArray: string[] = [];
  xo(str: string) {
    let count = 0;
    const splitArray = str.toLowerCase().split('');
    for (const i of splitArray) {
      if (i === 'x') {
        count++;
      } else
        if (i === 'o') {
          count--;
        }
    }
    return count === 0;
  }
  doTest() {
    this.testDataArray.push('ooxx result => ' + this.xo('ooxx'));
    this.testDataArray.push('xooxx result => ' + this.xo('xooxx'));
    this.testDataArray.push('ooxXm result => ' + this.xo('ooxXm'));
    this.testDataArray.push('zpzpzpp result => ' + this.xo('zpzpzpp'));
    this.testDataArray.push('zzoo result => ' + this.xo('zzoo'));
  }
}
