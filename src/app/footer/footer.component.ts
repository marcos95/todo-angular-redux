import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { SetFilterAction } from '../../redux/filter/filter.actions';
import { Observable } from 'rxjs/Observable';
import { getVisibleTodos } from '../../redux/todo/todo.selectors';
import 'rxjs/add/operator/map';
import { ClearCompletedAction } from '../../redux/todo/todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  todoItemsLength$: Observable<number>;
  todoCompletedItemsLength$: Observable<number>;
  filter$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.todoItemsLength$ = this.store.select(getVisibleTodos).map(todos => todos.length);
    this.todoCompletedItemsLength$ = this.store.select('todos').map(todos => todos.filter(todo => todo.completed).length);
    this.filter$ = this.store.select('filter');

    console.log(this.filter$);
  }

  doFilter(filter: string) {
    const action = new SetFilterAction(filter);
    this.store.dispatch(action);
  }

  clearCompleted() {
    const action = new ClearCompletedAction();
    this.store.dispatch(action);
  }

}
