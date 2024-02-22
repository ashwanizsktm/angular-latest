import { Component, OnInit } from '@angular/core';
import { TodosInterface } from './todos.interface';

@Component({
    selector: 'todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
    ngOnInit(): void {
    }

    todosData: TodosInterface[] = [
        { id: 1, activity: 'Study' },
        { id: 2, activity: 'Gym' },
        { id: 3, activity: 'club' }
    ]

    // angular does the second check for development not in production which is fine but, there is one weired thing let's see that

    changeText(event: Event): void {
        const target = event.target as HTMLInputElement
        console.log("change text", target.value);
    }

    // if we add anything in input box then as many times as we enter the text inside the todo component with checkRender fn will
    // get called.This is super weired. so to fix that we'll write the change detection stretegy in todo component.

    clickEvent() {
        console.log("simple clicking of the button");
    }
    /*
    even on the simple click the checkRender function is getting called from the todo component. this change detection
    actually makes the performance slow which results in taking long time to resond any events and finally increasing
    FID(first input delay)"web vitals ==> lighthouse reports"  which ideally should happen within 100ms.
   */
    // angular will rerender the child when we change the input(input data from parent);
    changeTodosArrayData() {
        // this.todosData[0].activity = 'cycling';
        // console.log(this.todosData); 
        /*
            in console we see the todosData has been changed but in the view
            it's not rendering it's happening bcz angular are comparing all inputs which are array of objects
            like in javascript by reference i.e the above code is not changing the reference. 
            the line  this.todosData[0].activity = 'cycling' refencing the same objects inside memory
        */
        // to solve this problem we have to 
        this.todosData[0] = { ...this.todosData[0], activity: 'cycling' };
        console.log(this.todosData);
    }
}