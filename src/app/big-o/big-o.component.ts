import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-big-o',
  templateUrl: './big-o.component.html',
  styleUrls: ['./big-o.component.css']
})
export class BigOComponent implements OnInit {
  total: any;
  total2: any;
  total3: any;
  speed: any;
  speed2: any;
  speed3: any;
  number: any;
  num: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.num = this.number;
    let time1 = performance.now();
    this.total = this.addUpTo(this.num);
    let time2 = performance.now();
    this.speed = (time2 - time1) / 1000;

    time1 = performance.now();
    this.total2 = this.addUpToo(this.num);
    time2 = performance.now();
    this.speed2 = (time2 - time1) / 1000;

    time1 = performance.now();
    this.total3 = this.printAllPairs(this.num);
    time2 = performance.now();
    this.speed3 = (time2 - time1) / 1000;
  }

  addUpTo(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  }

  addUpToo(num) {
    return num * (num + 1) / 2;
  }

  printAllPairs(num) {
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        return [i, j];
      }
    }
  }

}
