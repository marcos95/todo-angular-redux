import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../redux/todo/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { TodoRemoveAction, TodoToggleAction, TodoUpdateAction } from '../../redux/todo/todo.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  checkField: FormControl = new FormControl(false);
  textField: FormControl = new FormControl('', Validators.required);
  editing = false;

  constructor(private store: Store<AppState>) {
    this.listenCheckChanges();
  }

  ngOnInit() {
  }

  listenCheckChanges() {
    this.checkField.valueChanges.subscribe(this.toggleTodo.bind(this));
  }

  toggleTodo() {
    const action = new TodoToggleAction(this.todo.id);
    this.store.dispatch(action);
  }

  deleteTodo() {
    const action = new TodoRemoveAction(this.todo.id);
    this.store.dispatch(action);
  }

  updateText() {
    const action = new TodoUpdateAction(this.todo.id, this.textField.value);
    this.store.dispatch(action);
  }

  activeEditMode() {
    this.editing = true;
  }

}
