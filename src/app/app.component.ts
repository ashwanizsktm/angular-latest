import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.scss']
})

export class AppComponent {
    constructor() {}
    sendData: string = '';
    title = "Angular 16 cli";
    
    ngOnInit() {
    }
}