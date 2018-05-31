import { Component, OnInit } from '@angular/core';
import { ColorserviceService } from '../../services/colorservice.service';
@Component({
  selector: 'ta-todo-box',
  templateUrl: './todo-box.component.html',
  styleUrls: ['./todo-box.component.scss']
})
export class TodoBoxComponent implements OnInit {
  boxBgColor : string;
  constructor(private colorservice : ColorserviceService) { }

  ngOnInit() {
    this.colorservice.$boxElementColor
    .subscribe((value) => {
      this.boxBgColor = value;
    });
  }

}
