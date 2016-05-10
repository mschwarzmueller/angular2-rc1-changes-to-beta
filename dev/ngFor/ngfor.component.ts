import { Component } from "@angular/core";

@Component({
    selector: 'my-ngfor',
    template: `
        <ul>
            <li *ngFor="let item of items">Item: {{item}}</li>
        </ul>
    `
})
export class NgForComponent {
    items = [1,2,3,4,5,6,7,8,9,10];
}