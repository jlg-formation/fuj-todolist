import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoListService } from './todo-list.service';
import { TodoListRestService } from './todo-list-rest.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [{ provide: TodoListService, useClass: TodoListRestService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
