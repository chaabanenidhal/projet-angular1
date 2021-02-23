import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
 @Input() nom :String="";
 @Output() message= new EventEmitter<number>();
 
 note:number=0;
buttonStatus : boolean=false
 
 
 
 
  /* @Input() ordre:String="";
@Input() villeNaissance:String="";
*/
  constructor() { }

  ngOnInit(): void {
   
  }
  send(){
    this.message.emit(this.note);
    this.buttonStatus =true;
  }
}
