import { Component, OnInit } from '@angular/core';
export interface CustomerDetails {
    name: string;
    age: number;
    address: string;
}
@Component({
    selector: 'customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customer.component.scss']
})

export class CustomersComponent implements OnInit {


    customerDetails: CustomerDetails[] = [
        { name: 'kate', age: 27, address: 'US' },
        { name: 'Jane', age: 32, address: 'Australia' },
        { name: 'Rakesh', age: 21, address: 'India' }
    ]

    ngOnInit(): void {
    }

    trackCustomerDetailsFn(index:number, item:CustomerDetails): string{
            return item.name;
    }
}