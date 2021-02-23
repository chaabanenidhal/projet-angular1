import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() ordre:String="";
@Input() villeNaissance:String="";

  constructor() { }

  ngOnInit(): void {
  }

}
