import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

@Component({
    selector: 'my-router',
    template: `
        <a [routerLink]="['route1']">Route 1 (no subroutes)</a> |
        <a [routerLink]="['route2']">Route 2 (has subroutes)</a> |
        <a [routerLink]="['route3', 1]">Route 3 (has parameter)</a>
        <br>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class RouterComponent {
    
}