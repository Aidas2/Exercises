import { GlidePath } from './GlidePath.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-parser',
  templateUrl: './date-parser.component.html',
  styleUrls: ['./date-parser.component.scss']
})
export class DateParserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const gp = new GlidePath();
    const now = new Date().getTime();
    gp.dateCreated = now;
    console.log(new Date())
    console.log(now);
    console.log(gp);
  }

}
