import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('QuoteBook', ' what goes around comes around ', 'Emile'),
    new Quote('QuoteBook', ' what goes around comes around ', 'Emile'),
  ];
  // tslint:disable-next-line:typedef
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  // tslint:disable-next-line:typedef
  quoteDelete(index){
    this.quotes.splice(index, 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
