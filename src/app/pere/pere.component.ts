import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
 /* tab: Array<String> =['premeier','deuxieme','troisieme'];
  nord="nabel---------------";
  sud="gafsa----------------";
  capital="gabes------------";
*/
moyenne=0;
somme=0;
nbr=0;
enfant= ['ali','ahmed','youssef']
  constructor() { }

  ngOnInit(): void {
  }
computeAvg(note:number){
  this.somme+= note;
  this.nbr++;
  this.moyenne=this.somme/ this.nbr;
}
}
