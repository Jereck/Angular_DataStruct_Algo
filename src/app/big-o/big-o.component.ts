import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-o',
  templateUrl: './big-o.component.html',
  styleUrls: ['./big-o.component.css']
})
export class BigOComponent implements OnInit {
  total: any;
  speed: any;

  constructor() { }

  ngOnInit() {
    const time1 = performance.now();
    this.total = this.addUpTo(6);
    const time2 = performance.now();
    this.speed = (time2 - time1) / 1000;
  }

  addUpTo(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  }

}
