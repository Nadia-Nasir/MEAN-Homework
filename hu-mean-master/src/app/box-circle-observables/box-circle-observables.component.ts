import { Component, OnInit } from '@angular/core';
import { ColorserviceService } from '../services/colorservice.service';

@Component({
  selector: 'ta-box-circle-observables',
  templateUrl: './box-circle-observables.component.html',
  styleUrls: ['./box-circle-observables.component.scss']
})
export class BoxCircleObservablesComponent implements OnInit {
  mycolorValue : string;
  
  constructor(private colorservice : ColorserviceService ) 
  { 
   

  }

  ngOnInit() {
    
    
  }
  onboxChange(){
    this.colorservice.$boxColorSubject.next(this.mycolorValue);
    
  }
  oncircleChange(){
   
    this.colorservice.$circleColorSubject.next(this.mycolorValue);
  }
}
