import { Component, OnInit, computed, effect, signal } from '@angular/core';
@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

    // signals
    // reading value // 
    name = signal<string>('Johm');

    // assigning initial values
    firstName = signal<string>('Ashwani');
    lastName = signal<string>('kumar');

    // computed
    fullName = computed(() => this.firstName() + ' ' + this.lastName());

    // setting signal values
    changeFirstName(fname: string) {
        this.firstName.set(fname)
    }

    // setting signal value
    changeLastName(lname: string) {
        this.lastName.set(lname);
    }

    // updating signals
    value = signal<number>(5);
    increment() {
        this.value.update(v => v + 1);
    }

    decrement() {
        this.value.update(v => v - 1);
    }

    // mutate signals.
    userData = signal({
        name: 'Ashwani',
        class: 'tenth'
    });

    mutateUser() {
        this.userData.mutate(user => {
            user.name = 'John';
            user.class = "eleventh";
        });
    }

    // effects:- basically we use effect to have a side effect to the existing work. let's set at above we are 
    // actually mutating the data and at the same time we want the edited data to be saved on the server/localstorage.

    sideEffect = effect(() => {
        console.log('user name chnaged to' + ' ' + this.userData().name);
        localStorage.setItem('name', this.userData().name);
    })




    constructor() {
    }
    ngOnInit(): void {
    }
}