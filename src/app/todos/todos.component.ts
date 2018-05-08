import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../redux/todo/todo.model';
import { getVisibleTodos } from '../../redux/todo/todo.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select(getVisibleTodos);
  }

  ngOnInit() {
  }

}
