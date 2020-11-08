import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('QuoteBook', ' ', 'Emile'),
    new Quote('QuoteBook', ' ', 'Emile'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
