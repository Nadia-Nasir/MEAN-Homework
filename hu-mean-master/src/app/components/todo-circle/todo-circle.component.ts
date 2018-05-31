import { Component, OnInit } from '@angular/core';
import { ColorserviceService } from '../../services/colorservice.service'

@Component({
  selector: 'ta-todo-circle',
  templateUrl: './todo-circle.component.html',
  styleUrls: ['./todo-circle.component.scss']
})
export class TodoCircleComponent implements OnInit {
  circleBgColor : string;
  constructor(private colorservice : ColorserviceService) { }
  
  ngOnInit() {
    this.colorservice.$circleElementColor.subscribe((value) => {
      this.circleBgColor = value;
    });
  }

}
