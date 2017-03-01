import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../articles/components/header/header.component';
import { ArticlesComponent } from '../articles/components/articles/articles.component';
import { ArticleComponent } from '../articles/components/article/article.component';
import { ArticlesService } from '../articles/services/articles.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    HeaderComponent,
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
