import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-forms',
  templateUrl: './quotes-forms.component.html',
  styleUrls: ['./quotes-forms.component.css']
})
export class QuotesFormsComponent implements OnInit {

  newQuotes = new Quotes(0, "", "", "", new Date());
  @Output() addQuotes = new EventEmitter<Quotes>();
  submitQuotes(){
    this.addQuotes.emit(this.newQuotes);
    this.newQuotes = new Quotes(0, "", "", "", new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
