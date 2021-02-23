import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  tab: Array<String> =['premeier','deuxieme','troisieme'];
  nord="nabel---------------";
  sud="gafsa----------------";
  capital="gabes------------";

  constructor() { }

  ngOnInit(): void {
  }

}
