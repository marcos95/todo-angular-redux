import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { TodoAddAction } from '../../redux/todo/todo.actions';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  textField: FormControl;

  constructor(private store: Store<AppState>) {
    this.textField = new FormControl('', Validators.required);
  }

  ngOnInit() {
  }

  saveTodo() {
    if (this.textField.valid) {
      const action = new TodoAddAction({
        id: Math.random().toString(),
        title: this.textField.value,
        completed: false,
        date: new Date()
      });

      this.store.dispatch(action);
      this.textField.setValue('');
    }
  }

}
