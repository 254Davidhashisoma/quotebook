import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  quotes = [
    new Quotes(1, 'John Doe', 'Mahatma Gandhi', 'lorem ipsum', new Date(2020, 9, 12)),
    new Quotes(2, 'John Doe', 'Mahatma Gandhi', 'lorem ipsum', new Date(2020, 8, 10)),
    new Quotes(3, 'John Doe', 'Mahatma Gandhi', 'lorem ipsum', new Date(2020, 8, 11)),
    new Quotes(4, 'John Doe', 'Mahatma Gandhi', 'lorem ipsum', new Date(2020, 10, 12))
  ]

  addNewQuote (quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength + 1;
    this.quotes.push(quotes)
  }

  deleteQuotes(isComplete, index){
    if (isComplete){
      let toDelete = confirm('Are you sure you want to delete ${this.quotes[index].publisher}')
      if(toDelete){
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(){
  }

}
