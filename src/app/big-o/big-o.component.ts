import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-o',
  templateUrl: './big-o.component.html',
  styleUrls: ['./big-o.component.css']
})
export class BigOComponent implements OnInit {
  total: any;
  total2: any;
  speed: any;
  speed2: any;

  constructor() { }

  ngOnInit() {
    let time1 = performance.now();
    this.total = this.addUpTo(6);
    let time2 = performance.now();
    this.speed = (time2 - time1) / 1000;

    time1 = performance.now();
    this.total2 = this.addUpToo(6);
    time2 = performance.now();
    this.speed2 = (time2 - time1) / 1000;
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

}
