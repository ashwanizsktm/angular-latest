import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class TodoService {
    filter$ = new BehaviorSubject('all');
}