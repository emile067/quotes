import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote-actions',
  templateUrl: './quote-actions.component.html',
  styleUrls: ['./quote-actions.component.css']
})
export class QuoteActionsComponent implements OnInit {

  @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
