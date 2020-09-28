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
    new Quotes(1, 'Hamsoace', 'Marilyn Monroe', 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best', new Date(2020, 9, 12)),
    new Quotes(2, 'John Doe', 'Dr. Suess', 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.', new Date(2020, 8, 10)),
    new Quotes(3, 'Brandon Githinji', 'Mark Caine', 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.', new Date(2020, 8, 11)),
    new Quotes(4, 'Hamsoace', 'Hellen Keller', 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us', new Date(2020, 10, 12)),
    new Quotes(5, 'Kendy Rono', 'Mahatma Gandhi', 'lorem ipsum', new Date(2020, 10, 12)),
    new Quotes(6, 'Dorcas Muthaya', 'Mahatma Gandhi', 'lorem ipsum', new Date(2020, 10, 12))
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
