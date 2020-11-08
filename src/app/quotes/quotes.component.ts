import { Component, OnInit } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  constructor() { this.maxCalc(); }

  quotes: Quote[] = [
    // tslint:disable-next-line:max-line-length
    new Quote('QuoteBook', ' Everyone thinks of changing the world, but no one thinks of changing himself. ', 'Unkown author', 6, new Date()),
    new Quote('QuoteBook', 'Be the change that you wish to see in the world.', 'Unkown author', 3, new Date()),
  ];
  maxVotes: number;


  // tslint:disable-next-line:typedef
  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  // tslint:disable-next-line:typedef
  maxCalc(){
    // tslint:disable-next-line:typedef
    this.maxVotes = Math.max.apply(Math, this.quotes.map(function(o) { return o.vote; }));
  }
  // tslint:disable-next-line:typedef
  quoteDelete(index){
    this.quotes.splice(index, 1);
    this.maxCalc();
  }
  // tslint:disable-next-line:typedef
  addNewQuote(quote){
    this.quotes.push(quote);
    this.maxCalc();
  }
  // tslint:disable-next-line:typedef
  upVote(index){
    this.quotes[index].vote++;
    this.maxCalc();
  }
  // tslint:disable-next-line:typedef
  downVote(index){
    this.quotes[index].vote--;
    this.maxCalc();
  }

  ngOnInit(): void {
  }

}
