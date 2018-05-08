import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from '../redux/app.reducer';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodosComponent,
    NewTodoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
