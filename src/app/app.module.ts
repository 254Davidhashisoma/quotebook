import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesFormsComponent } from './quotes-forms/quotes-forms.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { VoteHighlightDirective } from './vote-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormsComponent,
    QuotesDetailComponent,
    DateCountPipe,
    VoteHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
