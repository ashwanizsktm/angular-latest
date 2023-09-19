import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TodosInterface } from '../todos.interface';
import { TodoService } from '../todo.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    providers: [TodoService],

    changeDetection: ChangeDetectionStrategy.OnPush
    // comment the above line to see how change detetection makes angular so slow in performance.
    // what the above line is doing is it actually takes away this component form angular change detection 
    // lifecycle.
})

export class TodoComponent {
    @Input({ required: true }) todo!: TodosInterface;

    filter$: Observable<string>
    constructor(private todoSrv: TodoService) {
        this.filter$ = this.todoSrv.filter$;
    }

    checkRender(): boolean {
        console.log('checkRender')
        return true;
    }
    /*
        angular change detection is synchronous in nature so it goes from top to bottom line by line.
        angular does this check twice in the development mode. it is important to remember that the second 
        check is happening later and while and if in the meantime values changed then we get an error saying that
        ExpressionChangedAfterIthasBeenCheckedError: expression has changed after it was checked
    
        in parent component if the input changes the function checkRender will get called so to avoid this fn call
        we'll use changedetection strategy.
         */

    changeText(): void {
        this.todo.activity = 'changed from inside';
    }

    changeFilter() {
        this.todoSrv.filter$.next('Active');
    }
    // the question is Observable is an object then how to is getting changed. it's getting changed bcz we are just subscribing 
    // the filter value in the template using async pipe & here we are changing the value using next.

}