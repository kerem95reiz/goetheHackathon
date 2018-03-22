import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GrammerComponent } from './grammer/grammer.component';
import { WordsComponent } from './words/words.component';
import { AvailTandPartComponent } from './avail-tand-part/avail-tand-part.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    GrammerComponent,
    WordsComponent,
    AvailTandPartComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
