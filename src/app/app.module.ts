
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app.routing.module";
import { TodosComponent } from "./todos/todos.component";
import { TodoComponent } from "./todos/todo/todo.component";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent],
})

export class AppModule { }